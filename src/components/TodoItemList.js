import React, { Component } from 'react';
import TodoItem from './ToDoItem';
import './TodoItemList.css'

class TodoItemList extends Component {
    render() {
        const { items, onToggle, onRemove } = this.props;
        const itemList = items.map(
            item => (
                <TodoItem
                    key={item.id}
                    name={item.name}
                    finished={item.finished}
                    id={item.id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            )
        )
        return (
            <ul className="TodoItemList">
                {itemList}
            </ul>
        );
    }
}

export default TodoItemList;