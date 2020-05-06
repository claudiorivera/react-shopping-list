import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function ShoppingList(props) {
  return (
    <ListGroup>
      {props.items.map((item) => {
        return <ListGroup.Item key={item._id}>{item.name}</ListGroup.Item>;
      })}
    </ListGroup>
  );
}
