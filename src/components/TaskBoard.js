import React from 'react';
import TaskLane from './TaskLane';

const TaskBoard = React.createClass({
  renderTaskLane(tasklist, i){
    return (
      <TaskLane status={tasklist.name} key={i}>
        {
          this.props.tasks.map((task, i)=>{
            if(tasklist.id === task.task_list_id)
              return (<div key={i}> {task.name} </div>);
          })
        }
      </TaskLane>
    );
  },
  render(){
    return(
      <div className="kanban-taskboard">
        {this.props.tasklists.reverse().map(this.renderTaskLane)}
      </div>
    );
  }
});

export default TaskBoard;
