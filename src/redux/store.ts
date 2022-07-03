import {
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import { State } from "../typescript"

import rootReducer from "./reducers"

function saveToLocalStorage(state: State) {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem("persistantState", serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState")
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

const middleware = [thunk]
const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
