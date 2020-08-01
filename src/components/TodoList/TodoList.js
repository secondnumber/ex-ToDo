import React from 'react';
import './TodoList.css';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos }) => {
  const elements = todos.map((el) => {
    const { id, ...itemProps } = el;
    return <TodoListItem key={id} {...itemProps} />;
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
