import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const {id, text, complete} = this.props;

    return (
      <ul>
        <li key={id}>{text}</li>
      </ul>
    );
  }
}