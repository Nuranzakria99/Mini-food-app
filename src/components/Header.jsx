import React, { useContext } from "react";
import logoImage from "../assets/logoimage.png";
import { CartContext } from "../store/CartContext";
import ControlCartContext from "../store/ControlCartContext"


export default function Header() {
  const Context = useContext(CartContext);
  const ControlContext = useContext(ControlCartContext)

  const totalItems = Context.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  function handelCartClick(){
    ControlContext.showCart()
  }
  return (
    <header className="flex justify-between items-center p-4  text-white">
      <div className="flex items-center gap-1">
        <img src={logoImage} alt="Logo" className="" width={50} height={50} />
        <h1 className="text-red-500 text-md font-bold">Foodio</h1>
      </div>
      <div>
        <button
          onClick={handelCartClick}
          className="text-black bg-red-500 hover:bg-red-400 p-2 rounded-lg text-md"
        >
          Cart {totalItems}
        </button>
      </div>
     
    </header>
  );
}
