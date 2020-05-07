import React, { Component } from "react";
import Header from "../components/Header";
import Shoppinglist from "../components/ShoppingList";
import ShoppingListForm from "./ShoppingListForm";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    try {
      const response = await axios.get("/items");
      this.setState({
        items: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  addItem = async (item) => {
    try {
      await axios({
        method: "post",
        url: "/items",
        data: {
          name: item,
        },
      });
    } catch (error) {
      console.error(error);
    }
    this.getItems();
  };

  deleteItem = async (id) => {
    try {
      await axios.delete(`/items/${id}`);
    } catch (error) {
      console.error(error);
    }
    this.getItems();
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="container">
          <ShoppingListForm addItem={this.addItem} />
          <Shoppinglist items={this.state.items} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}
