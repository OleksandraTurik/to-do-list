import React, { Component } from "react";
import { BsTrash } from "react-icons/bs";
import { IconContext } from "react-icons";

import "./style.css";

export default class ToDoList extends Component {
  state = {
    checked: this.props.isDid,
  };

  handleCheckboxChange = (e) => {
    const { checkbox } = this.state;
    this.setState({ checkbox: !checkbox });
  };

  render() {
    const { checkbox } = this.state;
    const { title, deleteHandler, count } = this.props;

    return (
      <li className={`todos ${checkbox ? "active" : ""}`}>
        <p className="todo-count">{count}</p>
        <div className="todo-item">{title}</div>
        <div className="action-icons">
          <input
            onChange={this.handleCheckboxChange}
            className="complete-todo"
            type="checkbox"
          />
          <IconContext.Provider value={{ className: "react-icon-trash" }}>
            <button className="trash" onClick={deleteHandler}>
              <BsTrash />
            </button>
          </IconContext.Provider>
        </div>
      </li>
    );
  }
}
