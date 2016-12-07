import React from 'react';
import { Link } from 'react-router';

//React.clone element passes data down to first child element
const Main = React.createClass({

  render(){
    return (
      <div className="kanban">
        <div className="kanban-header">
          <h1>
            <Link to="/">Dylan's Kanban</Link>
          </h1>
        </div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;
