import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default class ShoppingListItem extends Component {
  onClick = (event) => {
    event.preventDefault();
    this.props.deleteItem(event.target.id);
  };
  render() {
    return (
      <ListGroup.Item
        key={this.props.item._id}
        className="d-flex align-items-center"
      >
        <Button
          variant="danger"
          onClick={this.onClick}
          id={this.props.item._id}
        >
          X
        </Button>
        <Container>{this.props.item.name}</Container>
      </ListGroup.Item>
    );
  }
}
