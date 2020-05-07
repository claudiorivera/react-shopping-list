import React, { Component } from "react";

export default class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add item"
            aria-label="Add item"
            aria-describedby="basic-addon2"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button className="btn btn-success" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}
