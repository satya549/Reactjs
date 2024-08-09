import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";

function App() {
  const productList = [
    {
      price: 90000,
      name: "Iphon 10S",
      quantity: 0,
    },
    {
      price: 11000,
      name: "Redmi Note 10S",
      quantity: 0,
    },
  ];
  return (
    <>
      <Navbar />
      <main className="container mt-5">
      <ProductList productList={productList} />
      </main>
    </>
  );
}

export default App;
