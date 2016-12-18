import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import Task from './Task';

const taskTarget = {
    drop(props, monitor) {
        props.changeTaskStatus(monitor.getItem().id, props.id);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class TaskLane extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { connectDropTarget, isOver } = this.props;
        const status = this.props.status;
        return connectDropTarget(
            <div className="kanban-lane">
            <h1> { this.props.status } </h1>
            <div className="kanban-lane-items">
            {
                this.props.tasks.map((task, i)=>{
                    if(this.props.id === task.task_list_id)
                        return (<Task key={i} id={task.id} name={task.name}></Task>);
                })
            }
            </div>
            </div>
        )
    }
};

export default DropTarget('task', taskTarget, collect)(TaskLane);
