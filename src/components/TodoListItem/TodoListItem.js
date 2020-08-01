import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
  render() {
    const liStyle = {
      color: important ? 'tomato' : 'black',
    };
    const { label, important = false } = this.props;

    return (
      <li className="list-group-item todo-list-item" style={liStyle}>
        {label}
        <button>
          <i className="fa fa-exclamation" />
        </button>
        <button>
          <i className="fa fa-trash-o" />
        </button>
      </li>
    );
  }
}
