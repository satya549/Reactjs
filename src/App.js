import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import React, {useState} from "react";

function App() {
  const products = [
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
  ]

  let [productList , setProductList] = useState(products)

    const incrementQuantity = (index) => {
    let newProductlist = [...productList]
    newProductlist[index].quantity++
    setProductList(newProductlist);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
      <ProductList productList={productList} incrementQuantity= {incrementQuantity}/>
      </main>
    </>
  );
}

export default App;
