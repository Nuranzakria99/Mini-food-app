import React from "react";
import Header from "./components/Header";
import Maels from "./components/maels";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./store/CartContext";
import { ControlCartProvider } from "./store/ControlCartContext";

function App() {
  return (
    <ControlCartProvider>
      <CartProvider>
        <div className="bg-amber-50 min-h-screen">
          <Header />
          <Maels />
          <Cart />
          <Checkout />
        </div>
      </CartProvider>
    </ControlCartProvider>
  );
}

export default App;
