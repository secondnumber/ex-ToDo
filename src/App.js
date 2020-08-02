import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import ItemAddForm from './components/ItemAddForm';
import ItemStatusFilter from './components/ItemStatusFilter';

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Repeat'),
        ],
    };

    createTodoItem(label) {
        return {id: this.maxId++, label: label, important: false, done: false };
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((el) => el.id === id);
            const newTodoData = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
            return {
                todoData: newTodoData
            }
        });
    };

    addItem = (text) => {
        let newItem = this.createTodoItem(text);
        this.setState(({ todoData }) => {
            let newTodoData = [...todoData, newItem];
            return {
                todoData: newTodoData
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty( todoData, id, 'important')
            }
        })
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty( todoData, id, 'done')
            }
        })
    };

  render() {
      const { todoData } = this.state;
      const doneCount = todoData
          .filter((el) => el.done === true).length;
      const todoCount = todoData.length - doneCount;
      return (
          <div className="container wrapper">
              <div className="row d-flex justify-content-between align-items-end my-2">
                  <h1 className="col-sm">Todo List</h1>
                  <Header doneCount={doneCount} todoCount={todoCount}/>
              </div>
              <div className="row d-flex justify-content-between my-2">
                  <SearchPanel />
                  <ItemStatusFilter />
              </div>
              <TodoList
                  todos={this.state.todoData}
                  onItemDelete={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}
              />
              <ItemAddForm onItemAdd={this.addItem}/>
          </div>
      )
  }
}

