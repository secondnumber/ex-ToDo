import React from 'react';
import './TodoList.css';
import TodoListItem from '../TodoListItem';

const TodoList = ({ todos, onItemDelete, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((el) => {
    const { id, ...itemProps } = el;
    return (
      <TodoListItem
        key={id}
        {...itemProps}
        onDelete={() => onItemDelete(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
      />
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
