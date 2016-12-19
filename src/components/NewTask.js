import React, { Component } from 'react';
import InlineEdit from 'react-edit-inline';

class NewTask extends React.Component{
  constructor(props){
    super(props);
    this.text = 'New Task';
    this.dataChanged = this.dataChanged.bind(this);
  }
  dataChanged(data){
    this.props.createTask(this.props.id, this.props.project.id, data.taskName);
    this.text = 'New Task';
  }
  render(){
    return (
        <div className="kanban-task new-task">
        <h2> + <InlineEdit
      text={this.text}
      paramName="taskName"
      change={this.dataChanged}
      style={{
        display: 'inline-block',
        margin: 0,
        padding: 0,
        fontSize: 25,
        outline: 0,
        border: 0,
        cursor: 'text'
      }}
        /></h2>
        </div>
    );
  }
}
export default NewTask;
