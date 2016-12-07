import React from 'react';

const TaskLane =  React.createClass({
  renderTask(task, i){
    return (
        <div className="kanban-task" key={i} >{task.name}</div>
    );
  },

  filterTasks(status, task, i){
    switch(status){
    case 'To Do':
      if(!task.start_on)
        return this.renderTask(task, i);
      break;
    case 'In Progress':
      if(task.start_on && !task.finish_on)
        return this.renderTask(task, i);
      break;
    case 'Done':
      if(task.finish_on)
        return this.renderTask(task, i);
      break;
    default:
      return '';
    }
  },

  render() {
    const status = this.props.status;
    const tasks = this.props.tasks;
    return (
        <div className="kanban-lane">
        <h1> { this.props.status } </h1>
        {tasks.map((task, i)=>this.filterTasks(status, task, i))}
        </div>
    );
  }
});

export default TaskLane;
