import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import ItemAddForm from './components/ItemAddForm';
import ItemStatusFilter from './components/ItemStatusFilter';

const App = () => {
  const todoData = [
    { id: 1, label: 'Drink coffee', important: false },
    { id: 2, label: 'Build React App', important: true },
    { id: 3, label: 'Buy tickets', important: false },
  ];
  return (
    <div>
      <Header />
      <SearchPanel />
      <ItemAddForm />
      <ItemStatusFilter />
      <TodoList todos={todoData} />
    </div>
  );
};
export default App;
