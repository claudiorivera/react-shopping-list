import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class ShoppingListItem extends Component {
  onClick = (event) => {
    event.preventDefault();
    this.props.deleteItem(event.target.id);
  };
  render() {
    return (
      <div className="container d-flex align-items-center list-group-item">
        <Button
          variant="danger"
          onClick={this.onClick}
          id={this.props.item._id}
        >
          X
        </Button>
        <div className="container">{this.props.item.name}</div>
      </div>
    );
  }
}
