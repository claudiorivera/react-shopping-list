import React from "react";
import { mutate } from "swr";
const axios = require("axios").default;

const ShoppingListItem = ({ item }) => {
  const deleteItem = async (id) => {
    try {
      await axios.delete(`/api/items/${id}`);
      mutate("/api/items");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex align-items-center list-group-item">
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteItem(item._id);
        }}
      >
        X
      </button>
      <div className="container">{item.description}</div>
    </div>
  );
};

export default ShoppingListItem;
