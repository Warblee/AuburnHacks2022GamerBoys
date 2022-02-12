import plotly.graph_objs as go #type: ignore
import plotly.express as df
import yfinance as yf #type: ignore

data = yf.download('SAVE','2020-01-01','2020-02-01')
print(data)

fig = go.Figure()

fig.add_trace(go.line())

fig.add_trace(go.Candlestick(x=data.index,open = data['Open'], high=data['High'], low=data['Low'], close=data['Close'], name = 'market data'))

fig.show()