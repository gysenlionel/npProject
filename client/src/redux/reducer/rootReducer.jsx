import { combineReducers } from 'redux'

import shoppingReducer from '../Shopping/shoppingReducer'

const rootReducer = combineReducers({
  shop: shoppingReducer,
})

export default rootReducer
