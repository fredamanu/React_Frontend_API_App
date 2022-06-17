import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux"
import thunk from "redux-thunk"

import rootReducer from "./reducers"

function saveToLocalStorage(state) {
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
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
