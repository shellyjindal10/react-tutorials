import axios from "axios";

export function fetchTweets(){
  return function(dispatch) {
    axios.get("http://rest.learncode.academy/api/test123/tweets")
      .then((response) =>{
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) =>{
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}

export function addTweet(id, text) {
  return {
    type: "ADD_TWEET", 
    payload: {
      id, 
      text
    }
  }
}

export function updateTweet(id, text) {
  return {
    type: "UPDATE_TWEET", 
    payload: {
      id: id, 
      text: text
    }
  }
}

/*
This file is doing the same thing which is Action Creator file 

1: fetchTweets : with this function it is getting the data from the Rest api , 
   and then create an action
   - FETCH_TWEETS_FULFILLED : when you are getting the data from the api 
   - FETCH_TWEETS_REJECTED: when you are not getting any data from the api .

2: addTweet: This is taking 2 parameters id and text 
   and it craetes an action ADD_TWEET with the payload as id and text.

3: updateTweet: This is again taking the 2 parameters which is id and text 
   and it created an action UPDATE_TWEET and update the payload object.

Redux action creators simply return an action.
*/

