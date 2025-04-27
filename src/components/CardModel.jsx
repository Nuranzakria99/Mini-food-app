import { useContext } from "react";
import { CartContext} from "../store/CartContext";
import React from "react";

export default function CardModal({ onClose }) {
  const contexItems = useContext(CartContext);
  const totalItems = contexItems.items.reduce(
    (totalPrice, item) => totalPrice + item.amount * item.price,
    0
  );
  return ( 
    <div className="fixed inset-0 bg-amber-50/50 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-amber-50 rounded-lg p-6 w-96 shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-black">Your Cart</h2>

        {contexItems.items.length === 0 ? (
          <p className="text-black">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {contexItems.items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b "
              >
             
                 
                  <div className="text-black text-sm">
                    {item.name} - {item.amount} x <p className="inline-block text-green-600">${item.price}</p>
                  </div>
              

                <div className="text-black">
                <button className="px-2 bg-red-500 rounded-full m-2 border-amber-400 border-2" onClick={() => contexItems.addItem({ ...item, amount: 1 })}>+</button>
                <button>{item.amount}</button>
                <button className="px-2 bg-red-500 rounded-full m-2 border-amber-400 border-2" onClick={() => contexItems.removeItem(item.id)}>-</button>
                </div>
           
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-xl text-black">Total:</span>
          <span className="text-xl text-green-600">${totalItems.toFixed(2)}</span>
        </div>

        <div className="flex flex-row">
        <button
        onClick={onClose}
        className="mt-6 w-full  text-black py-2 rounded "
      >
        Close
      </button>
      {contexItems.items.length > 0 &&  ( <button className="mt-6 w-full bg-red-500 text-black py-2 rounded hover:bg-red-400">
        Checkout
      </button>)}
     
        </div>
       
      </div>
    </div>
  );
}
