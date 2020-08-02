import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
  render() {
    const { label, important, done, onDelete, onToggleImportant, onToggleDone } = this.props;

    let classNames = '';
    if (done) {
      classNames += ' done'
    }
    if (important) {
      classNames += ' important'
    }

    return (
      <li
        className="d-flex justify-content-between align-items-center list-group-item"
      >
        <span className={`pr-5 ${classNames}`} onClick={onToggleDone}>
          {label}
        </span>
        <span>
          <button type="button" className="btn btn-outline-success button" onClick={onToggleImportant}>
            <i className="fa fa-exclamation" />
          </button>
          <button type="button" className="btn btn-outline-danger button" onClick={onDelete}>
            <i className="fa fa-trash-o" />
          </button>
        </span>
      </li>
    );
  }
}
