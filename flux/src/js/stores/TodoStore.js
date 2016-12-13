import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
  	   {
        id: 100,
        text: "Go Shopping",
        complete: false
  	   },
  	   {
       id: 101,
       text: "Pay Water Bills",
       complete: false
  	   },
  	   {
       id: 103,
       text: "Pay ComCast Bills",
       complete: false
  	   },
  	   {
       id: 104,
       text: "Watch a movie",
       complete: false
  	   },
  	   {
       id: 105,
       text: "Visit a friend on Saturday",
       complete: false
  	   }
    ]
  }

  createTodo(text) {
  	console.log('store todos', text)
    const id = Date.now();
    this.todos.push({
      id, 
      text, 
      complete: false
    })
    console.log(this.todos)
    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
  	 console.log('handle actions ', action)
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
      case "RELOAD_TODO": {
        this.todos = action.todos;
        this.emit("change");
      }
  	 }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore))
window.dispatcher = dispatcher;

export default todoStore;
