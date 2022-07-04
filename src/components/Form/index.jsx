import React, { Component } from "react";
import { TiPlusOutline } from "react-icons/ti";
import { IconContext } from "react-icons";

import "./style.css";

export default class Form extends Component {
  state = {
    title: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      title: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdd(this.state.title);
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.title}
            required
            onChange={this.handleChange}
            type="text"
            name="title"
            placeholder="Add your task..."
          />
          <button className="search-button" type="submit">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <TiPlusOutline />
            </IconContext.Provider>
          </button>
        </form>
      </div>
    );
  }
}
