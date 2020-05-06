import React, { Component } from "react";
import Header from "../components/Header";
import Shoppinglist from "../components/ShoppingList";
import Container from "react-bootstrap/Container";
import ShoppingListForm from "./ShoppingListForm";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    this.getItems();
  }

  async getItems() {
    const axios = require("axios").default;
    try {
      const response = await axios.get("/items");
      this.setState({
        items: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async addItem() {
    const axios = require("axios").default;

    axios({
      method: "post",
      url: "/items",
      data: {
        name: "placeholder",
      },
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <Container>
          <ShoppingListForm onSubmit={this.addItem} />
          <Shoppinglist items={this.state.items} />
        </Container>
      </Container>
    );
  }
}
