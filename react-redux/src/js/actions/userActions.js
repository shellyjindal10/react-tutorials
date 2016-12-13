/* Action Creator file */

export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "Will Smith", 
      age: 67
    }
  }
}

export function setUserName(name) {
  return {
    type: "SET_USER_NAME", 
    payload: name
  }
}

export function setUserAge(age) {
  return {
    type: "SET_USER_AGE",
    payload: age
  }
}

/*
These functions are the action creators 
1: fetchUser : it will create action of type FETCH_USER_FULFILLED, and ur resukts a default payload 
   with default data 

2: setUserName: This will take the name as parameter and then create an action of tyoe SET_USER_NAME
   and payload data as the name coming as params

3: setUserAge: This will take another params age and create an action of type SET_USER_AGE and payload 
   data as the age which is coming from params
*/
