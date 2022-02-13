from typing import Optional

from fastapi import FastAPI #type: ignore
from pydantic import BaseModel#type: ignore
from models import returnPacket #type: ignore
from models import packet 
import FinanceTest

app = FastAPI()

rPacket = returnPacket(net = '', minVal = '', curVal = '')

sPacket = packet(stock = '', amount = 0, start = '', end = '')

'''
Stock, Amt, Start, End
'''
@app.get("http://localhost:8000/front")
async def create_item(pack: packet):
    return pack

@app.post("http://localhost:8000/back")
async def  setData():
    p = FinanceTest.doCalcs(sPacket.stock, sPacket.amount, sPacket.start, sPacket.end)
    rPacket.net = p[0]
    rPacket.minVal = p[1]
    rPacket.curVal = p[2]

    return rPacket

