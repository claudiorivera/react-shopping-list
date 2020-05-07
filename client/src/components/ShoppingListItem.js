import React, { Component } from "react";

export default class ShoppingListItem extends Component {
  onClick = (event) => {
    event.preventDefault();
    this.props.deleteItem(event.target.id);
  };
  render() {
    return (
      <div className="container d-flex align-items-center list-group-item">
        <button
          className="btn btn-danger"
          onClick={this.onClick}
          id={this.props.item._id}
        >
          X
        </button>
        <div className="container">{this.props.item.name}</div>
      </div>
    );
  }
}
