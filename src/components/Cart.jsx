import React from "react";
import Model from "./Model";
import { CartContext } from "../store/CartContext";
import ControlCartContext from "../store/ControlCartContext";
import { useContext } from "react";
export default function Cart() {
  const contexItems = useContext(CartContext);
  const ControlContext = useContext(ControlCartContext);

  const totalItems = contexItems.items.reduce(
    (totalPrice, item) => totalPrice + item.amount * item.price,
    0
  );

  function HandelCloseCart() {
    ControlContext.hideCart();
  }

  function handelGoToCheckout() {
    ControlContext.showCheckout();
  }

  return (
    <Model
      open={ControlContext.Control === "cart"}
      onClose={ControlContext.Control === "cart" ? HandelCloseCart : null}
    >
      <div className="fixed inset-0 bg-amber-50/50 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-amber-50 rounded-lg p-6 w-96 shadow-lg relative">
          <h2 className="text-2xl font-bold mb-4 text-black">Your Cart</h2>

          <ul className="space-y-4">
            {contexItems.items.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <p className="text-black text-sm w-2/3">
                  {item.name} - {item.amount} x{" "}
                  <span className="inline-block text-green-600">
                    ${item.price}
                  </span>
                </p>

                <div className="flex items-center space-x-2 text-black">
                  <button
                    className="px-3 py-1 bg-red-500 rounded-full border-amber-400 border-2"
                    onClick={() => contexItems.addItem({ ...item, amount: 1 })}
                  >
                    +
                  </button>
                  <span className="text-xl">{item.amount}</span>
                  <button
                    className="px-3 py-1 bg-red-500 rounded-full border-amber-400 border-2"
                    onClick={() => contexItems.removeItem(item.id)}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center pt-10 justify-start space-x-4">
            <span className="font-bold text-xl text-black">Total:</span>
            <span className="text-xl text-green-600">${totalItems}</span>
          </div>

          <div className="flex justify-between gap-4">
            <button onClick={HandelCloseCart} className="">
              Close
            </button>
            {contexItems.items.length > 0 && (
              <button
                onClick={handelGoToCheckout}
                type="button"
                className=" bg-red-500 text-white p-2 rounded hover:bg-red-400"
              >
                Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </Model>
  );
}
