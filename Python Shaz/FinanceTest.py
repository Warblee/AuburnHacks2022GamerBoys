
import plotly.graph_objs as go #type: ignore
import yfinance as yf #type: ignore

stockCode = "GOOG"
stockAmount = 100
date1 = "2015-01-01"
date2 = "2015-02-01"
todayPrice = 0
netTotal = 0
stock = yf.Ticker(stockCode)
data = stock.history(interval = "1d", start = date1,end = date2)

print(data)

low = data["Low"][0]
for thing in data["Low"]:
    if (thing < low):
        low = thing
print("")
low = format(low, ".2f")
print(low)