import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {addTodo} from "../action";

class AddTodo extends Component{
    constructor(props,context){
        super(props,context);
        
    }

    onSubmit(ev) {
        ev.prevenDefault();

        const inputValue = this.state.value;
        if (!inputValue.trim()) {
            return;
        }

        this.props.onAdd(inputValue);
        this.setState({ value:''});
    }

    onInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className="add-todo">
                <from onSubmit={this.onSubmit}>
                <input className=>    
                </from>
            </div>
        )
    }

}