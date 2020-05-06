import React from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function ShoppingListAdd(props) {
  return (
    <Container>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add item"
          aria-label="Add item"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Add</Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
}
