import React from 'react';

export default class Footer extends React.Component {
  render() {
    const titleStyle = {
      marginLeft: "150px",
      marginTop: "60px"
    }
    return(
      <footer>
        <div className="row">
          <div className="col-lg-12">
            <p style={titleStyle}>Copyright &copy; PerfectTodos.com</p>
          </div>
        </div>
      </footer>
    );
  }
}