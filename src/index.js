import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"

import "./index.css"
import App from "./App"
import store from "./redux/store"
import ThemeProvider from "./ThemeContext"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)
