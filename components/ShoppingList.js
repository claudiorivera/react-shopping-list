import React from "react";
import useItems from "../lib/useItems";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = () => {
  const { items, isLoading, isError } = useItems();

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="list-group-flush">
      {items.map((item) => (
        <ShoppingListItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ShoppingList;
