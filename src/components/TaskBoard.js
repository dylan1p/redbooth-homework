import React, { Component }from 'react';
import TaskLane from './TaskLane';
import Task from './Task';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class TaskBoard extends Component {
    render(){
      return(
        <div className="kanban-taskboard">
        {
          this.props.tasklists.map((tasklist, i)=>{
            return(
                <TaskLane id={tasklist.id}
              status={tasklist.name}
              key={i}
              {...this.props}/>
            )
          })
        }
      </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(TaskBoard);
