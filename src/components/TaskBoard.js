import React from 'react';
import TaskLane from './TaskLane';

const TaskBoard = React.createClass({
    render(){
    return(
        <div className="kanban-taskboard">
        <TaskLane status="To Do" {... this.props}/>
        <TaskLane status="In Progress" {... this.props} />
        <TaskLane status="Done" {... this.props}/>
        </div>
    );
  }
});

export default TaskBoard;
