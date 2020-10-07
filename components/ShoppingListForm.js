import React, { useState } from "react";
import { mutate } from "swr";
const axios = require("axios").default;

const ShoppingListForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = async (description) => {
    try {
      await axios.post("/api/items", {
        description,
      });
      mutate("/api/items");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add item"
          aria-label="Add item"
          value={value}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default ShoppingListForm;
