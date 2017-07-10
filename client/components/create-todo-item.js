import React from 'react';


export default class CreateTodoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        }
    }
    handleCreate(e) {
        e.preventDefault();
        const createInput = this.refs.createInput;
        const task = createInput.value.trim();
        const validateInput = this.validateInput(task);
        if(validateInput){
            this.setState({error:validateInput});
            return;
        }
        this.setState({error:null});
        this.props.createTask(task);
        this.refs.createInput.value = "";
    }
    render (){
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" ref="createInput"/>
                <button>Create</button>
                {this.renderError()}
            </form>
        );
    }

    renderError(error){
        if(!this.state.error){
            return null;
        }

        return (
            <div style={{color: 'red'}}>{this.state.error}</div>
        );
    }

    validateInput(task){
        if (!task){
            return 'please enter a task'
        }
        else if (this.props.todos.some(todo => todo.task === task)){
            return 'duplicate task';
        }
        else {
            return null;
        }
    }
}