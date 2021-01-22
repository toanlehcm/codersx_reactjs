import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
    render() {
        const {item} = this.props; //destructoring, props is a obj, set item obj equa props.item
        
        let className = 'TodoItem';

        if (item.isComplete) {
            className += ' TodoItem-complete';
        }

        return(
            <div className={className}>
                <p>{this.props.item.title }</p>
            </div>
        );
    }
}

export default TodoItem;