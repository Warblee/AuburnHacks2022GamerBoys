from pydantic import BaseModel

class packet(BaseModel):
    stock: str
    amount: str
    start: str
    end: str 

class returnPacket(BaseModel):
    net: str
    minVal: str
    curVal: str