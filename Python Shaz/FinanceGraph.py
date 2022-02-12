import plotly.graph_objs as go #type: ignore
import yfinance as yf #type: ignore

data = yf.download(tickers='GOOG', period = '5d', interval = '5m', rounding= True)
print(data)

fig = go.Figure()

fig.add_trace(go.Candlestick())

fig.add_trace(go.Candlestick(x=data.index,open = data['Open'], high=data['High'], low=data['Low'], close=data['Close'], name = 'market data'))

fig.update_layout(title = 'Google share price', yaxis_title = 'Stock Price (USD)')

fig.update_xaxes(
    rangeslider_visible=True,
        rangeselector=dict(
        buttons=list([
        dict(count=15, label='15m', step="minute", stepmode="backward"),
        dict(count=45, label='45m', step="minute", stepmode="backward"),
        dict(count=1, label='1h', step="hour", stepmode="backward"),
        dict(count=6, label='6h', step="hour", stepmode="backward"),
        dict(step="all")
        ])
    )
)

fig.show()
