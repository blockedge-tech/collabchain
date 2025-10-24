from algopy import ARC4Contract, arc4
from algopy.arc4 import abimethod, DynamicBytes
from algopy.op import sha256, extract

class UserIDContract(ARC4Contract):
    @abimethod()
    def generate_user_id(self, Wallet: arc4.String, name: arc4.String, company: arc4.String, event: arc4.String) -> arc4.DynamicBytes:
        input_bytes = Wallet.bytes + name.bytes + company.bytes + event.bytes
        user_id = sha256(input_bytes)
        return arc4.DynamicBytes(user_id)

class companyID(ARC4Contract):
    @abimethod()
    def companyhashCode(self, wallet:arc4.String, companyname: arc4.String) -> arc4.DynamicBytes:
        input_bytes = wallet.bytes + companyname.bytes
        code = sha256(input_bytes)
        part1 = arc4.DynamicBytes.from_bytes(extract(code, 7, 5))
        part2 = arc4.DynamicBytes.from_bytes(extract(code, 16, 3))
        res = part1 + part2
        return arc4.DynamicBytes.from_bytes(res.bytes)

