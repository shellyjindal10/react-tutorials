import React from 'react';

import Todo from '../components/Todo';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

export default class ToDos extends React.Component {
  constructor() {
    super();
    this.createTodo = this.createTodo.bind(this);
    this.reloadTodos = this.reloadTodos.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  createTodo() {
    console.log('page createTodo', Date.now());
    TodoActions.createTodo(Date.now())
  }

  reloadTodos() {
    TodoActions.reloadTodo()
  }

  render() {
    const { todos } = this.state;
    console.log(todos);
    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <button onClick={this.reloadTodos}>Reload!</button>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}