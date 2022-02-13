from typing import Optional
from urllib import response
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI #type: ignore
from pydantic import BaseModel#type: ignore
from models import returnPacket #type: ignore
from models import packet 
import FinanceTest
from fastapi import Request
from fastapi import Response
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

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

sPacket = packet(stock = '', amount = 0, start = '', end = '')

'''
Stock, Amt, Start, End
'''


def setRPacket():
    p = FinanceTest.doCalcs(sPacket.stock, sPacket.amount, sPacket.start, sPacket.end)
    rPacket.net = str(p[0])
    rPacket.minVal = str(p[1])
    rPacket.curVal = str(p[2])


@app.get("/back")
async def create_item():
    
    json_compatible_item_data = jsonable_encoder(rPacket)
    print(json_compatible_item_data)
    return JSONResponse(content=json_compatible_item_data)

@app.post("/front")
async def  getBody(request: Request):
    content = await request.json()
    print(content)
    sPacket.stock = content.get('stock')
    sPacket.amount = content.get('amount')
    sPacket.start = content.get('start')
    sPacket.end = content.get('end')
    setRPacket()
    print(sPacket)
