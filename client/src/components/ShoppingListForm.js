import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
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
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add item"
            aria-label="Add item"
            aria-describedby="basic-addon2"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <InputGroup.Append>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}
