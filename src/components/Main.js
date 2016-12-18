import React, { Component }from 'react';
import { Link } from 'react-router';

//React.clone element passes data down to first child element
class Main extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="kanban">
        <div className="kanban-header">
          <h1>
            Dylan's Kanban
          </h1>
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
};

export default Main;
