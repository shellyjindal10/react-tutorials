import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

const initialState = {
  fetching: false, 
  fetched: false, 
  users: [], 
  error: null
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START": {
    	 return {
    	   ...state, 
    	   fetching: true
    	 }
      break;
    }
    case "FETCH_USERS_ERR": {
    	 return {
    	   ...state, 
    	   fetching: false, 
    	   error: action.payload
    	 }
      break;
    }
    case "RECEIVE_USERS": {
    	 return {
    	   ...state, 
    	   fetched: true, 
    	   users: action.payload
    	 }
      break;
    }
  }
  return state
}
const middleware  = applyMiddleware(promise(), thunk, logger())
const store = createStore(reducer, middleware);

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})
