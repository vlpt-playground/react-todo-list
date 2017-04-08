import React from 'react';
import './TodoReset.css';

const TodoReset = ({onClick}) => {
    return (
        <button className="TodoReset" onClick={onClick}>
            초기화
        </button>
    );
};

export default TodoReset;