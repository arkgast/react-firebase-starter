import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'

import rootReducer from './rootReducer'

const logger = createLogger({
  collapsed: true,
  diff: true,
  duration: true
})

export default (history) => createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    logger
  )
)
