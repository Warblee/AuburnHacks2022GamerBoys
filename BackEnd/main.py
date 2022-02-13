from typing import Optional

from fastapi import FastAPI #type: ignore
from pydantic import BaseModel#type: ignore
from models import returnPacket #type: ignore
from models import packet 
import FinanceTest

app = FastAPI()

rPacket = returnPacket()
rPacket.net = ' '
rPacket.minVal = ' '
rPacket.curVal = ' '

sPacket = packet()
sPacket.stock = 0
sPacket.amount = 0
sPacket.start = ''
sPacket.end = ''

'''
Stock, Amt, Start, End
'''
@app.get("http://localhost:8000/add")
async def create_item(pack: packet):
    return pack

@app.post("http://localhost:3000/add")
async def  setData():
    p = FinanceTest.doCalcs(sPacket.stock, sPacket.amount, sPacket.start, sPacket.end)
    rPacket.net = p[0]
    rPacket.minVal = p[1]
    rPacket.curVal = p[2]

    return rPacket

