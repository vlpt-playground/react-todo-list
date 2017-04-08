import React, { Component } from 'react';
import shortId from 'shortid';
import TodoItemList from './components/TodoItemList';
import TodoInsert from './components/TodoInsert';
import TodoReset from './components/TodoReset';

import './App.css';

function createItem(name) {
    return {
        id: shortId.generate(),
        name,
        finished: false
    }
}

const defaultTodos = [
    '리액트 시작하기', 
    '컴포넌트 이해하기', 
    'props/state 사용하기', 
    'LifeCycle API'
].map(createItem);

function findItemIndex(id, items) {
    for(let i = 0; i < items.length; i++) {
        if(items[i].id === id) return i;
    }
    return -1;
}

class App extends Component {

    state = {
        todoItems: defaultTodos
    }
    
    constructor(props) {
        super(props);

        const todos = localStorage.getItem('todos');

        if(todos) {
            this.state = {
                todoItems: JSON.parse(todos)
            };
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('todos', JSON.stringify(this.state.todoItems));
    }
    
    handleReset = () => {
        this.setState({
            todoItems: defaultTodos
        });
    }

    handleInsert = (name) => {
        this.setState({
            todoItems: [...this.state.todoItems, createItem(name)]
        })
    }

    handleToggle = (id) => {
        const { todoItems } = this.state;
        const index = findItemIndex(id, todoItems);
        const item = todoItems[index];

        this.setState({
            todoItems: [
                ...todoItems.slice(0, index), 
                {
                    ...item,
                    finished: !item.finished
                },
                ...todoItems.slice(index + 1, todoItems.length)
            ]
        })
    }

    handleRemove = (id) => {
        const { todoItems } = this.state;
        const index = findItemIndex(id, todoItems);
        this.setState({
            todoItems: [
                ...todoItems.slice(0, index),
                ...todoItems.slice(index + 1, todoItems.length)
            ]
        });
    }

    render() {
        const { todoItems } = this.state;
        const { handleInsert, handleToggle, handleRemove, handleReset} = this;
        return (
            <div className="App">
                <h1>TODO LIST</h1>
                <TodoReset onClick={handleReset}>초기화</TodoReset>
                <TodoInsert onInsert={handleInsert}/>
                <TodoItemList items={todoItems} onToggle={handleToggle} onRemove={handleRemove}/>
            </div>
        );
    }
}

export default App;