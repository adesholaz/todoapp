import React from 'react';
import TodosList from './todolist';
import CreateTodoItem from './create-todo-item';


const todos = [
    {
        task: 'make react component',
        isCompleted: true
    },
    {
        task: 'learning must feel good',
        isCompleted: false
    }
];

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos
        }
    }
    render (){
        return (
          <div>
              <h1>React TODOs App</h1>
              <CreateTodoItem todos={this.state.todos} createTask={this.createTask.bind(this)}/>
              <TodosList
                  todos={this.state.todos}
                  toggleTask={this.toggleTask.bind(this)}
                  saveTask={this.saveTask.bind(this)}
                  deleteTask={this.deleteTask.bind(this)}
              />
          </div>
        );
    }

    createTask(task) {
        this.state.todos.push({
            task, isCompleted: false
        });
        this.setState({todos: this.state.todos})
    }

    toggleTask(task){
        const foundTodo = this.state.todos.find(todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }

    saveTask (oldTask, newTask){
        const foundTodo = this.state.todos.find(todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});

    }

    deleteTask (key){
        this.state.todos.splice(key, 1);
        this.setState({todos: this.state.todos});
    }

}