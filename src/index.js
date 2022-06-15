import React from "react"
import ReactDOM from "react-dom"
import { ToastContainer } from "react-toastify"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import "react-toastify/dist/ReactToastify.css"
import "bootstrap/dist/css/bootstrap.min.css"

import "./index.css"
import App from "./App"
import store from "./redux/store"
import ThemeProvider from "./ThemeContext"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <ToastContainer />
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)
