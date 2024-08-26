import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";

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
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductlist = [...productList];
    let newTotalAmount = totalAmount;
    newProductlist[index].quantity++;
    newTotalAmount += newProductlist[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductlist);
  };

  const decrementQuantity = (index) => {
    let newProductlist = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductlist[index].quantity > 0) {
      newProductlist[index].quantity--;
      newTotalAmount -= newProductlist[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductlist);
  };

  const resetQuantity = () =>{
    let newProductlist = [...productList];
    newProductlist.map((products) => {
      products.quantity = 0
    })
    setProductList(newProductlist);
    setTotalAmount(0);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
