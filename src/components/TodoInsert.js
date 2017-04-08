import React, { Component } from 'react';
import './TodoInsert.css';

class TodoInsert extends Component {
    state = {
        input: ''
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleClick = () => {
        this.props.onInsert(this.state.input);
        this.setState({
            input: ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') this.handleClick();
    }

    render() {
        const { input } = this.state;
        const { handleChange, handleClick, handleKeyPress } = this;

        return (
            <div className="TodoInsert">
                <input value={input} onChange={handleChange} onKeyPress={handleKeyPress}/>
                <button onClick={handleClick}>추가</button>        
            </div>
        );
    }
}

export default TodoInsert;