import dispatcher from '../dispatcher';

export function createTodo(text) {
	console.log('In action todos', text)
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  });
}

export function reloadTodo() {
  dispatcher.dispatch({type: "RELOAD_TODO", todos :[
    {
      id: 200,
      text: "Go Shopping AGAIN ",
      complete: false
  	 },
  	 {
      id: 201,
      text: "Pay Water Bills AGAIN",
      complete: false
  	  }
  ]});
}
