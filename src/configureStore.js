import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './rootReducer'


let middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger')
  const logger = createLogger({
    collapsed: true,
    diff: true,
    duration: true
  })
  middlewares.push(logger)
}


export default (history) => createStore(
  rootReducer,
  applyMiddleware(
    routerMiddleware(history),
    ...middlewares
  )
)
