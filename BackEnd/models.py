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
    stock: str
    amount: int
    start: str
    end: str