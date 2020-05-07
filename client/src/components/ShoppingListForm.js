import React, { Component } from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      <Form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <FormControl
            placeholder="Add item"
            aria-label="Add item"
            aria-describedby="basic-addon2"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}
