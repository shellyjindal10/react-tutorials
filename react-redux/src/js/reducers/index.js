import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"

export default combineReducers({
  tweets,
  user,
})

/*
  Reducers tells how the appliation state changes with that action 
  

*/
