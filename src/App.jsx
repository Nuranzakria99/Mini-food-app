import React from "react";
import Header from "./components/Header";
import Maels from "./components/maels";
import { CartProvider } from "./store/CartContext"; // ✨ خدي بالك!

function App() {
  return (
    <CartProvider>
      <div className="bg-amber-50 min-h-screen">
        <Header />
        <Maels />
      </div>
    </CartProvider>
  );
}

export default App;
