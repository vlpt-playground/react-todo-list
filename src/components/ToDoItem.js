import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.finished !== this.props.finished;
    }
    
    render() {
        const { name, finished, id, onToggle, onRemove } = this.props;
        
        const style = {
            cursor: 'pointer',
            textDecoration: finished ? 'line-through' : 'none'
        };

        console.log(name);

        return (
            <li className="TodoItem" style={style} onClick={()=>{onToggle(id)}} onDoubleClick={() => onRemove(id)}>
                {name}
            </li>
        );
    }
}

export default TodoItem;