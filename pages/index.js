import Head from "next/head";
import Header from "../components/Header";
import ShoppingList from "../components/ShoppingList";
import ShoppingListForm from "../components/ShoppingListForm";

const Home = () => (
  <>
    <Head>
      <title>Shopping List</title>
      <link rel="icon" type="image/svg+xml" href="/shopping_cart-24px.svg" />
    </Head>
    <Header />
    <div className="container">
      <ShoppingListForm />
      <ShoppingList />
    </div>
  </>
);

export default Home;
