import React, { Component, useState } from 'react';
import "../styles/AddTask.css";

class AddTask extends Component {



    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    minDate = new Date().toISOString().slice(0, 10);

    handleText = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = e => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDate = e => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = () => {
        const { text, checked, date } = this.state;
        if (text.length < 2) return
        const add = this.props.add(text, date, checked)
        if (add) {
            this.setState({
                text: '',
                checked: false,
                date: this.minDate,
            })
        }
    }

    render() {

        let maxDate = this.minDate.slice(0, 4) * 1 + 1
        maxDate = `${maxDate}-12-31`
        return (
            <div className='form'>
                <label htmlFor="add">Add task</label>
                <input
                    type="text"
                    placeholder='add task'
                    value={this.state.text}
                    id='add'
                    onChange={this.handleText}
                />
                <div className="priority-checkbox">
                    <input
                        type="checkbox"
                        checked={this.state.checked}
                        id="important"
                        onChange={this.handleCheckbox}
                    />
                    <label htmlFor="important">Priority</label>
                </div>
                <div className="date">
                    <label htmlFor="date">Choose when to do</label>
                    <input
                        type="date"
                        id="date"
                        value={this.state.date}
                        min={this.minDate}
                        max={maxDate}
                        onChange={this.handleDate}
                    />
                </div>
                <button onClick={this.handleClick}>Confirm</button>
            </div>
        );
    }
}

export default AddTask;