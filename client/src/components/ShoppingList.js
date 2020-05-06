import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
export default function ShoppingList(props) {
  return (
    <Container>
      <ListGroup>
        {props.items.map((item) => {
          return <ListGroup.Item key={item._id}>{item.name}</ListGroup.Item>;
        })}
      </ListGroup>
    </Container>
  );
}
