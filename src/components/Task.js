import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

const taskSource = {
  beginDrag(props) {
    return {id: props.id};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Task extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
        <div className="kanban-task" style={{
          opacity: isDragging ? 0.5 : 1,
        }}>
        {this.props.name}
      </div>
    );
  }
}

Task.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource('task', taskSource, collect)(Task);

