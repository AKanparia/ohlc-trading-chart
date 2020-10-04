# OHLC Dashboard

An open-high-low-close chart (also OHLC) is a type of chart typically used to illustrate movements in the price of a financial instrument over time. Each vertical line on the chart shows the price range (the highest and lowest prices) over one unit of time, e.g., one day or one hour. Tick marks project from each side of the line indicating the opening price (e.g., for a daily bar chart this would be the starting price for that day) on the left, and the closing price for that time period on the right. The bars may be shown in different hues depending on whether prices rose or fell in that period. [wiki](https://en.wikipedia.org/wiki/Open-high-low-close_chart)

## App Details

Application provides user with dashboard screens, to view the historical data and also a live feed of the stock value.

Hosted on Heroku : [Take me there!](http://ohlc-chart-assignment.herokuapp.com/)

### Screenshot

![Application screenshot](./assets/Screenshot.JPG?raw=true)

### Features:

- App uses [Lightweight Chart](https://www.tradingview.com/lightweight-charts/) by [TradingView](https://www.tradingview.com/)
- A **responsive chart** view with capability to **pan and zoom**.
- OHCL data representation above the chart, as pan and zoom or select the OHCL bars.
- Provides the **percentage change** value of the stock for you to make better analysis and quick decisions.
- App utilizes [RSKV kaboom](http://kaboom.rksv.net/) APIs .
- **Historical data** plotted in OHLC chart.
  - This view show historical data of each day since 31st Dec, 2004.
  - Data provide by **REST API**: _/api/historical_
- **Live feed** of the Stock in OHLC chart.
  - This view show live feed of the stock values which refreshes every 100ms. You always get the latest details, to make quick decisions.
  - Data provided by **Websocket API** : _/watch_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
