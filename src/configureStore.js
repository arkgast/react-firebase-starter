import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './rootReducer'

let middlewares = [thunkMiddleware]

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger')
  const logger = createLogger({
    collapsed: true,
    diff: true,
    duration: true
  })

  middlewares.push(logger)
}

export const history = createHistory()
export default (() => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      routerMiddleware(history),
      ...middlewares
    )
  )

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
})()
