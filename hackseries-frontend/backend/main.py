from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests, json, logging
from algokit_utils import AlgorandClient, AlgoAmount
from algokit_utils.transactions import PaymentParams
from algokit_utils.applications.app_client import AppClient, AppClientParams
from algokit_utils.applications.app_client import AppClient, AppClientParams, AppClientMethodCallParams
from algokit_utils.applications.app_spec.arc56 import Arc56Contract
from algosdk import encoding

# ===== Logging setup =====
logging.basicConfig(level=logging.INFO)

app = FastAPI()

# ===== CORS setup =====
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ========== CONFIGURATION ==========
PINATA_API_KEY = "d634ef773c2344e83826"
PINATA_SECRET_API_KEY = "78c8f8c08db66371fa73b66bb285257e9d7d8fd2150201138189495d655942d4"
MNEMONIC = "anchor denial brave employ cheap sand Olympic measure guitar husband balance surprise safe whale depend other occur tribe snake alert human void lottery absorb wife"
APP_ID = 748138156

# Init Algorand

# ===== Data model =====
class UploadRequest(BaseModel):
    student_name: str
    student_wallet: str
    organization: str
    event: str

# ===== Utility: Upload to Pinata =====
def upload_to_pinata(data):
    url = "https://api.pinata.cloud/pinning/pinJSONToIPFS"
    headers = {
        "pinata_api_key": PINATA_API_KEY,
        "pinata_secret_api_key": PINATA_SECRET_API_KEY,
        "Content-Type": "application/json"
    }
    try:
        res = requests.post(url, headers=headers, json=data)
        res.raise_for_status()
    except requests.RequestException as e:
        logging.error(f"Pinata upload failed: {e}")
        raise HTTPException(status_code=500, detail=f"Pinata upload failed: {e}")
    
    ipfs_hash = res.json().get("IpfsHash")
    if not ipfs_hash:
        logging.error(f"Pinata response missing IpfsHash: {res.text}")
        raise HTTPException(status_code=500, detail=f"Pinata response missing IpfsHash: {res.text}")
    
    logging.info(f"Pinata upload successful, CID: {ipfs_hash}")
    return ipfs_hash

@app.post("/generate")
def generate_certificate(payload: UploadRequest):
    algorand_client = AlgorandClient.testnet()
    sender_account = algorand_client.account.from_mnemonic(mnemonic=MNEMONIC)
    algorand_client.account.set_signer_from_account(sender_account)
    # ===== Validate wallet address =====
    if not encoding.is_valid_address(payload.student_wallet):
        raise HTTPException(status_code=400, detail="Invalid Algorand wallet address")
    logging.info(f"Validated wallet: {payload.student_wallet}")

    # ===== Step 1: Upload to Pinata =====
    data_to_upload = {
        "Student Name": payload.student_name,
        "Student Wallet": payload.student_wallet,
        "Organization": payload.organization,
        "Event": payload.event
    }
    cid = upload_to_pinata(data_to_upload)

    # ===== Step 2: Call smart contract =====
    try:
        logging.info("Loading smart contract spec...")
        with open("UserIDContract.arc56.json") as f:
            app_spec_json = f.read()

        # Instantiate AppClient immediately before call
        app_params = AppClientParams(
            app_spec=Arc56Contract.from_json(app_spec_json),
            algorand=algorand_client,
            app_id=APP_ID,
            default_sender=sender_account.address
        )
        app_client = AppClient(app_params)

        # Call the smart contract method
        method_params = AppClientMethodCallParams(
            method="generate_user_id",
            args=[
                payload.student_name,
                payload.student_wallet,
                payload.organization,
                payload.event
            ],
        )   
        result = app_client.send.call(params=method_params)
        hash_code = result.abi_return
        logging.info(f"Smart contract call successful, hashID: {hash_code}")
    except Exception as e:
        logging.error(f"Smart contract call failed: {e}")
        raise HTTPException(status_code=500, detail=f"Smart contract call failed: {e}")

    # ===== Step 3: Send Algorand payment =====
    note_dict = {"CID": cid, "hashID": hash_code}
    note_bytes = json.dumps(note_dict).encode()
    if len(note_bytes) > 1024:
        logging.error(f"Note size {len(note_bytes)} exceeds 1024 bytes")
        raise HTTPException(status_code=400, detail="Note size exceeds 1024 bytes")

    try:
        payment_params = PaymentParams(
            sender=sender_account.address,
            receiver=payload.student_wallet,
            amount=AlgoAmount(algo=1),
            note=note_bytes
            # No suggested_params here
        )
        logging.info(f"Sending 1 ALGO to {payload.student_wallet}...")
        payment_result = algorand_client.send.payment(payment_params)
        logging.info(f"Payment successful, tx_id: {payment_result.tx_id}")
    except Exception as e:
        logging.error(f"Algorand payment failed: {e}")
        raise HTTPException(status_code=500, detail=f"Algorand payment failed: {e}")

    return {
        "cid": cid,
        "hashID": hash_code,
        "transaction_id": payment_result.tx_id
    }
