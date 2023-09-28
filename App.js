import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Outlet  } from "react-router-dom";


import inventory from './inventory.mjs';
import ComposeSalad from './ComposeSalad';
import ViewOrder from './ViewOrder';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import OrderHandler from './OrderHandler';

function App() {
  const [myOrderHandler, setOrderHandler] = useState(new OrderHandler());

  const handleAddSalad = (saladData) => {
    let newOrderHandler = new OrderHandler();
    myOrderHandler.basket.forEach((x) => newOrderHandler.add(x));
    if (saladData)
      newOrderHandler.add(saladData);
    setOrderHandler(newOrderHandler);
  }

  const removeSaladButton = function (uuid) {
    myOrderHandler.delete(uuid);
    handleAddSalad();
  }

  const copySaladButton = function (salad) {
    return salad;
  }

  return (
    <div className="container py-4">
      <Header />
      <p>"Visa navbar då förhelvete"</p>
      <Outlet context={[ myOrderHandler, handleAddSalad, inventory, removeSaladButton ]} /> 
      <ViewOrder orderHandler={myOrderHandler} button={removeSaladButton} />
      <ComposeSalad inventory={inventory} parentCallBack={handleAddSalad} />
      <Footer />
    </div>
  );
}

export default App;
