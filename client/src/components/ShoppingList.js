import React from "react";
import ShoppingListItem from "../components/ShoppingListItem";

export default function ShoppingList(props) {
  return (
    <div className="list-group-flush">
      {props.items.map((item) => {
        return (
          <ShoppingListItem
            item={item}
            key={item._id}
            deleteItem={props.deleteItem}
          />
        );
      })}
    </div>
  );
}
