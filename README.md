# Readme

---
<img width="2400" height="1350" alt="image" src="https://github.com/user-attachments/assets/4e2bfaf4-f8a6-4be3-a95f-ed42d8a78ef9" />

# CollabChain: Blockchain-Based Credential Verification Platform

## Abstract

CollabChain is a decentralized application (DApp) built on the Algorand blockchain that provides an immutable, transparent, and tamper-resistant mechanism for issuing and verifying digital credentials. The platform addresses the long-standing issue of forged certificates, unverifiable achievements, and the inefficiency of manual background verification by combining smart contracts, IPFS storage, and cryptographic proofs. CollabChain ensures that each credential is permanently linked to the recipient's wallet, creating a verifiable and auditable digital passport of academic or professional achievements.

---

## 1. Introduction

Credential fraud has become a critical concern for employers, universities, and certification authorities. Traditional verification methods rely on centralized databases, third-party validation services, or manually cross-referenced PDFs—all of which are vulnerable to forgery, alteration, or loss of authenticity over time.

CollabChain proposes a blockchain-based model that automates credential issuance and verification through smart contracts and decentralized storage. The system ensures that every credential is issued by a verified institution, stored in an immutable form, and verifiable in real time by any third party.

---

## 2. System Architecture

The platform architecture follows a layered model to ensure modularity, scalability, and security.

## Project Architecture – Tech Stack

| Layer | Technology Stack | Description |
| --- | --- | --- |
| **Frontend (Web3 DApp)** | React.js, Tailwind CSS | Handles wallet connection and credential interactions. |
| **Wallet Integration** | Pera Wallet SDK | Enables authentication, signatures, and Algorand wallet interaction. |
| **Blockchain Network** | Algorand Testnet | Stores credential metadata with immutability. |
| **Smart Contracts** | Python/ Algorand SDK(Pyteal) | Password Generation and Credential Issuing |
| **Backend / API Layer (Optional)** | Flask | For IPFS uploads and optional off-chain logic. |
| **Off-chain Storage** | IPFS (Pinata) | Stores any type of data; only IPFS hash goes on-chain. |
| **Development & Testing** | AlgoKit | Used for smart contract development and testing. |
| **Deployment** | Vercel for Frontend, Railway for Backend | Used for smart contract development and testing. |

---

## 3. Workflow: Real-World Implementation
### Home Page
<img width="1893" height="856" alt="image" src="https://github.com/user-attachments/assets/0fd3b47c-fa6f-495a-b5f3-02c8e4fe8f92" />

### How it Works
<img width="1893" height="830" alt="image" src="https://github.com/user-attachments/assets/0bc8ee56-ba36-4d53-acf3-f5b732136d7b" />

## Pera Wallet
<img width="1895" height="827" alt="image" src="https://github.com/user-attachments/assets/20353be6-bad7-4fd6-afe0-8041302b4789" />


### 3.1 Credential Issuance

**Actors:**

<img width="1894" height="826" alt="image" src="https://github.com/user-attachments/assets/13fe71e7-3000-47c8-b704-e60c191d3537" />

- **Organization (Issuer):** A verified institution or company registered on CollabChain that issues credentials to consumers.
- **Consumer (Recipient):** A user with a verified Algorand wallet address who receives and stores credentials in their digital passport.

**Process:**

1. The organization logs into the CollabChain DApp using its verified wallet credentials.
2. The organization uploads the following details:
    - Consumer wallet address
    - Credential details (title, description, duration)
    - Certificate document (PDF or image)
3. The DApp:
    - Uploads the certificate document to IPFS and retrieves a unique hash.
    - Sends the metadata and IPFS hash to the smart contract on Algorand.
    - Executes a transaction that directly connects the credential to the consumer's wallet.
4. The consumer can view all their credentials in their **digital passport** - a unified interface displaying all achievements linked to their wallet.

**Example On-chain Metadata:**

```json
{
  "issuer": "TechNova Labs",
  "consumer": "0xA4D5...",
  "title": "Blockchain Internship",
  "duration": "June 2025 - August 2025",
  "ipfs_link": "ipfs://QmA1b2C3...",
  "issue_date": "2025-08-10",
  "verified": true
}
```

The credential is directly connected to the consumer's wallet and acts as a verifiable digital credential that permanently resides in their digital passport.

---

### 3.2 Credential Sharing

<img width="1896" height="829" alt="image" src="https://github.com/user-attachments/assets/8864ce6b-d6b0-4c01-924a-3a34fe4d7666" />

Consumers can share their credentials from their digital passport via:

- A **public CollabChain profile link** (e.g., `collabchain.app/verify/0xA4D5.../credential12345`)
- A **QR code** linked directly to the credential's metadata.

This allows recruiters, universities, or third parties to instantly access verified credentials without intermediaries.

---

### 3.3 Credential Verification

<img width="1892" height="844" alt="image" src="https://github.com/user-attachments/assets/6fb3ceb7-39ea-4e68-8b75-cfb02e8b019b" />

When a verifier accesses the shared credential:

1. The CollabChain DApp queries the Algorand blockchain through the AlgoNode API.
2. The smart contract retrieves the metadata associated with the credential.
3. The verification logic ensures:
    - The issuer's wallet address is whitelisted and verified.
    - The credential hash matches the original file stored in IPFS.
    - The credential ownership is retained by the claimed consumer.
    - The credential has not been modified or revoked.

Upon validation, the verifier receives a confirmation with the credential's details, timestamp, and on-chain hash.

---

### 3.4 Fraud Prevention and Integrity Checks

If a fraudulent certificate (e.g., manipulated PDF) is submitted for verification:

- The platform computes the file hash locally.
- It compares the computed hash with the IPFS hash recorded on-chain.
- Any mismatch immediately results in an "Invalid or Unverified Credential" alert.

**Integrity Mechanisms:**

- IPFS guarantees content immutability.
- Smart contracts enforce ownership and authenticity.
- Issuer whitelist ensures only verified entities can issue credentials.
- On-chain timestamps provide an auditable history of issuance.

---

## 4. Cybersecurity Threats and Mitigation Strategies

| Threat Type | Description | Mitigation Strategy |
| --- | --- | --- |
| **Credential Forgery** | Creation of fake or modified certificates | IPFS hashing ensures authenticity; any altered document produces a different hash and fails verification. |
| **Unauthorized Issuance** | Unverified entities attempting to issue credentials | Only whitelisted issuers with verified wallets can execute credential minting transactions. |
| **Phishing and Wallet Spoofing** | Users tricked into connecting to fake DApps or wallets | CollabChain enforces HTTPS, domain verification, and secure wallet signature requests. |
| **Metadata Tampering** | Attempts to modify stored credential data | Metadata is written immutably on Algorand; all transactions are cryptographically signed. |
| **Data Privacy Risks** | Exposure of sensitive user information | Only cryptographic hashes and metadata are stored on-chain; files remain decentralized on IPFS without personal identifiers. |

---

## 5. Technical Advantages

| Feature | Traditional Systems | CollabChain |
| --- | --- | --- |
| Data Integrity | Susceptible to tampering | Immutable blockchain ledger |
| Verification Time | Manual, time-consuming | Automated, real-time |
| Issuer Trust Model | Centralized | Decentralized and verified |
| Document Storage | Local or cloud | Decentralized IPFS |
| Scalability | Limited | Distributed infrastructure |
| Transparency | Low | Full on-chain auditability |
| Credential Access | Multiple platforms | Unified digital passport |

---

## 6. Future Enhancements

1. **AI-based Research Validation:** Integrate natural language models to assess originality and plagiarism in academic submissions.
2. **University and Organization Dashboards:** Enable large-scale issuance and management of credentials with role-based access control.
3. **Zero-Knowledge Proofs (ZKPs):** Allow private verification of credentials without exposing underlying data.
4. **Cross-Chain Interoperability:** Extend verification support to additional blockchains (e.g., Polygon, Solana) for wider adoption.

---

## 7. Conclusion

CollabChain provides a sustainable and verifiable solution to one of the most critical issues in academic and professional ecosystems — credential authenticity. By leveraging the Algorand blockchain, IPFS, and smart contract automation, the platform eliminates the need for intermediaries and manual validation processes. Each credential becomes a transparent, permanent, and independently verifiable proof of achievement, stored in a consumer's digital passport, enabling a secure digital identity ecosystem for education and employment.

---
## 8. Smart Contract Applications

**Application Name:** companyID  
Testnet Link: https://lora.algokit.io/testnet/application/748387915

**Application Name:** UserIDContract  
Testnet Link: https://lora.algokit.io/testnet/application/748138156

---

## 9. Live Project – CollabChain

Click here to view the live project:  
[Click Here](https://collabchain1.vercel.app/)

CollabChain is a Web3-based system on Algorand that provides:

- Credential issuance by organizations
- Consumer digital passport for viewing all credentials
- IPFS document storage  
- On-chain verification  
- Pera Wallet integration

---

## 10. Installation & Setup Guide

If you want to run CollabChain locally, follow the steps below.

---

### 1. Get the Project Code

You can obtain the project source code using any of the following methods:

**Option A — Fork the GitHub Repository**

1. Click **Fork** on the top-right of the repository.
2. Clone your fork locally.

**Option B — Download ZIP**
If forking does not work, select **Code → Download ZIP** and extract it.

**Option C — Google Drive Backup**
If both methods fail, use our drive backup:
[Click Here to Access Source Code (Google Drive)](https://drive.google.com/drive/folders/1fwxrNNDSWjsKVq-d4OGncUDgupH5yALd?usp=sharing)

---

### 2. Open the Project in VS Code or Workspaces

Once the project is downloaded, open it in **VS Code** or **Github Workspaces**.

---

### 3. Workspace Terminal Setup

When the workspace loads, you should see **three terminals**:

1. **Root Terminal**
2. **Smart Contract Terminal**
3. **Frontend Terminal**

---

### 4. Run the Frontend

In the **Frontend Terminal**, execute:

```
npm run dev
```

---

### 5. Start the Backend API

Create a **new terminal** inside the frontend folder and run:

```
cd backend
uvicorn main:app --reload
```

---

### 6. Access the Application

After both frontend and backend are running, you can access the application at:

**Local Development:**
```
http://localhost:5173
```

**Live Deployment:**
The project is deployed and accessible at: [https://collabchain1.vercel.app/](https://collabchain1.vercel.app/)

**Note:**
  Use "B2wozQ==" For Company Verification Password.
---



## 11. References

1. Silvio Micali, *Algorand: The Efficient and Democratic Ledger*, MIT CSAIL, 2017.
2. InterPlanetary File System (IPFS), *Protocol Labs Documentation*, 2024.
3. Vitalik Buterin et al., *SoulBound Tokens: Building Social Identity in Web3*, 2022.
4. Algorand Developer Portal, *Smart Contracts in TEAL and PyTeal*, 2025.
5. NIST, *Blockchain for Secure Credential Management*, 2023.
