import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
    renderItems() {
        const {todos, ...props} = this.props;

        return todos.map((todo, key)=> <TodosListItem key={key} index={key} {...todo} {...props}/>);
    }

    render (){
        return (
            <div>
                <table>
                    <TodosListHeader/>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
            </div>
        );
    }
}