import React from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';

class TaskLane extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const status = this.props.status;
    return (
        <Droppable type={['task']} onDrop={this.props.onDrop}>
        <div className="kanban-lane">
        <h1> { this.props.status } </h1>
        {this.props.children}
        </div>
        </Droppable>
    );
  }
};

export default TaskLane;
