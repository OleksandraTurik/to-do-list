import React, { Component } from "react";
import { RiTodoLine } from "react-icons/ri";
import PropTypes from 'prop-types';
import Form from "../Form";
import ToDoList from "../ToDoList";

import "./style.css";

export default class Todos extends Component {
  _maxId = 100;
  state = {
    todoItems: [
      {
        id: 1,
        title: "Read a book",
        isDid: false,
      },
      {
        id: 2,
        title: "Learn React",
        isDid: false,
      },
      {
        id: 3,
        title: "Learn js",
        isDid: false,
      },
    ],
  };

  deleteHandler = (id) => {
    this.setState(({ todoItems }) => {
      const filteredItems = todoItems.filter((item) => item.id !== id);
      return {
        todoItems: filteredItems,
      };
    });
  };

  onItemAdd = (text) => {
    this.setState(({ todoItems }) => {
      const newItem = {
        id: this._maxId++,
        title: text,
        isDid: false,
      };
      const newArray = [...todoItems, newItem];
      return {
        todoItems: newArray,
      };
    });
  };

  render() {
    const { todoItems } = this.state;
    const elements = todoItems.map((item, index) => {
      const { id, title, isDid } = item;

      return (
        <ul key={id}>
          <ToDoList
            count={index + 1}
            title={title}
            isDid={isDid}
            deleteHandler={() => this.deleteHandler(id)}
          />
        </ul>
      );
    });
    return (
      <>
        <div className="title-info">
          <h1 className="title">To do list</h1>
          <i>
            <RiTodoLine className="icon-list" />
          </i>
        </div>
        <Form onItemAdd={this.onItemAdd} />
        <div className="todo-list">{elements}</div>
      </>
    );
  }
}

Todos.propTypes = {
  todoItems: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    isDid: PropTypes.bool,
  }).isRequired,

}