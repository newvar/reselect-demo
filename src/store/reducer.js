import { combineReducers } from 'redux'
import band from './band/reducer'
import user from './user/reducer'

export default combineReducers({
  band,
  user,
})
