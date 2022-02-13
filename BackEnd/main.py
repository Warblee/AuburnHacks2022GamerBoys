from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI #type: ignore
from pydantic import BaseModel#type: ignore
from models import returnPacket #type: ignore
from models import packet 
import FinanceTest
from fastapi import Request

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8000",
    "http://localhost:3000",
    "http://localhost:8000/back",
    "http://localhost:8000/front",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

rPacket = returnPacket(net = '', minVal = '', curVal = '')

sPacket = packet(stock = 'AAPL', amount = 1, start = '2010-01-01', end = '2010-02-01')

'''
Stock, Amt, Start, End
'''
def setRPacket():
    p = FinanceTest.doCalcs(sPacket.stock, sPacket.amount, sPacket.start, sPacket.end)
    rPacket.net = p[0]
    rPacket.minVal = p[1]
    rPacket.curVal = p[2]


@app.get("/back")
async def create_item(pack: packet):
    setRPacket()
    print(request)
    return packet

@app.post("/front")
async def  getBody(request: Request):
    content = await request.json()
    print(content)
