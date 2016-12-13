/*
   User redcuer is taking the current state and action and based on the action , 
   it is returning the new state.
*/

export default function reducer(state={
    user: {
      id: null,
      name: null,
      age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        }
      }
      case "SET_USER_NAME": {
        return {
          ...state,
          user: {...state.user, name: action.payload},
        }
      }
      case "SET_USER_AGE": {
        return {
          ...state,
          user: {...state.user, age: action.payload},
        }
      }
    }

    return state
}
/*
ON what action how the state are changed are told by the reducers 
  1: action.type = FETCH_USER :
     return the same state and fetching value changed from false to true
  2: action.type  = FETCH_USER_REJECTED
     return same state m wuth 2 values changed fetching: false, error: action.payload
  3: action.type  = FETCH_USER_FULFILLED
     changes three state values fetching: false, fetched: true, user: action.payload
  4: action.type  =  SET_USER_NAME
     changes user state 
  5: action.type = SET_USER_AGE
     changes the user state by age.
*/
