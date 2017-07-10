import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        };
        this.onEditClick = this.onEditClick.bind(this);
        this.renderActionSection = this.renderActionSection.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onEditClick(){
        this.setState({
            isEditing: true
        })
    }

    onCancelClick() {
        this.setState({
            isEditing: false
        });
    }

    onDeleteClick(){
        this.props.deleteTask(this.props.index);
    }

    onSaveClick(event){
        event.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing: false});
    }

    renderActionSection(){
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick}>Edit</button>
                <button onClick={this.onDeleteClick}>Delete</button>
            </td>
        );
    }
    renderTaskSection() {
        const {task, isCompleted} = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };
        if(this.state.isEditing){
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput"/>
                    </form>
                </td>
            )
        }
        return (<td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>{task}</td>)
    }
    render (){
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        );
    }
}