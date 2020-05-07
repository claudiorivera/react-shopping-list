import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ShoppingListItem from "../components/ShoppingListItem";

export default function ShoppingList(props) {
  return (
    <ListGroup variant="flush">
      {props.items.map((item) => {
        return (
          <ShoppingListItem
            item={item}
            key={item._id}
            deleteItem={props.deleteItem}
          />
        );
      })}
    </ListGroup>
  );
}
