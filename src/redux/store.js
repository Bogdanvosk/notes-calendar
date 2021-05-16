import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { calendar } from './reducers/calendarReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(calendar, composeEnhancers(applyMiddleware(logger)))

window.store = store

export default store
