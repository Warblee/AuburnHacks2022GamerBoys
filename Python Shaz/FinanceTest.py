import plotly.graph_objs as go #type: ignore
import plotly.express as px
import yfinance as yf #type: ignore


data = yf.download('SAVE','2020-01-01','2020-02-01')
print(data)

fig = go.Figure()

fig.add_trace(go.line())

fig.add_trace(go.Candlestick(x=data.index,open = data['Open'], high=data['High'], low=data['Low'], close=data['Close'], name = 'market data'))

fig.show()

# Area chart

area_chart = px.area(stocks_close.FB, title = 'FACEBOOK SHARE PRICE (2013-2020)')

area_chart.update_xaxes(title_text = 'Date')
area_chart.update_yaxes(title_text = 'FB Close Price', tickprefix = '$')
area_chart.update_layout(showlegend = False)

area_chart.show()