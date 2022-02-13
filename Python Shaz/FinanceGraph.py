import plotly.graph_objs as go #type: ignore
import yfinance as yf #type: ignore

#variables
stockCode = "GOOG"
stockAmount = 100
date1 = "2015-01-01"
date2 = "2015-02-01"
stock = yf.Ticker(stockCode)
data = stock.history(interval = "1d", start = date1,end = date2)
current = stock.history(interval = "5m", period = "1d")

#getting low in data interval
low = data["Low"][0]
for thing in data["Low"]:
    if (thing < low):
        low = thing
low = format(low, ".2f")

#getting current in data interval
high = current["High"][0]
for thing in current["High"]:
    if (thing > high):
        high = thing
high = format(high, '.2f')

netTotal = float(high) - float(low)

#print
print("Low for " + date1 + " to " + date2 +" is " + low)
print("High for today is " + high)
print("Total net gain/loss is " + str(netTotal))

#graph creation
figP = go.Figure()

figP.add_trace(go.Candlestick(x = data.index,
    open = data['Open'],
    high = data['High'], 
    low = data['Low'], 
    close = data['Close'], 
    name = 'past data'))

figP.to_image(format="jpeg")
figP.kaliedo.scope.default_format = "jpg"

figC = go.Figure()

figC.add_trace(go.Candlestick(x = current.index,
    open = current['Open'],
    high = current['High'],
    low = current['Low'],
    close = current['Close'],
    name = 'current data'))

figC.to_image(format="jpeg")
figC.kaliedo.scope.default_format = "jpg"
