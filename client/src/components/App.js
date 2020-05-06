import React, { Component } from "react";
import Header from "../components/Header";
import Shoppinglist from "../components/ShoppingList";
import Container from "react-bootstrap/Container";
import ShoppingListAdd from "./ShoppingListAdd";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
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

  render() {
    return (
      <Container>
        <Header />
        <ShoppingListAdd items={this.state.items} />
        <Shoppinglist items={this.state.items} />
      </Container>
    );
  }
}
