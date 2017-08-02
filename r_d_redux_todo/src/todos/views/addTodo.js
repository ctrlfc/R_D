import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {addTodo} from "../action";

class AddTodo extends Component{
    constructor(props,context){
        super(props,context);
        
    }


    onsubmit(ev) {
        ev.prevenDefault();

        const inputValue = this.state.value;
        if (!inputValue.trim()) {
            return;
        }
    }
}