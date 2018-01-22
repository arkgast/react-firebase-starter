import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import data from './data/reducer'

export default combineReducers({
  data,
  router
})
