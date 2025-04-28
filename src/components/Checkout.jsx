import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import Modal from "./Model";
import ControlCartContext from "../store/ControlCartContext";
import Input from "./SharedInputs";
import React from "react";
import { useInput } from "../hooks/useInput";

export default function Checkout() {
  const contexItems = useContext(CartContext);
  const ControlContext = useContext(ControlCartContext);
  const name = useInput("");
  const address = useInput("");
  const phone = useInput("");

  const totalItems = contexItems.items.reduce(
    (totalPrice, item) => totalPrice + item.amount * item.price,
    0
  );

  function HandelClosecheckout() {
    ControlContext.hideCheckout();
  }

  function handelSumbit(e) {
    e.preventDefault();
    console.log("Submitting:", {
      name: name.value,
      address: address.value,
      phone: phone.value,
    });
  }

  return (
    <>
      <Modal
        open={ControlContext.Control === "checkout"}
        onClose={HandelClosecheckout}
      >
        <form
          className="fixed inset-0 bg-amber-50/50 bg-opacity-50 flex justify-center items-center z-50"
          onSubmit={handelSumbit}
        >
          <div className="bg-amber-50 rounded-lg p-6 w-96 shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4 text-black">Checkout</h2>
            <p className="text-black text-sm w-2/3">
              Total Amount:{" "}
              <span className="inline-block text-green-600">${totalItems}</span>
            </p>

            <Input
              label="Name"
              type="text"
              id="name"
              value={name.value}
              onChange={name.onChange}
            />
            <Input
              label="Address"
              type="text"
              id="address"
              value={address.value}
              onChange={address.onChange}
            />
            <Input
              label="Phone"
              type="tel"
              id="phone"
              value={phone.value}
              onChange={phone.onChange}
            />

            <div className="flex justify-between mt-4">
              <button onClick={HandelClosecheckout} type="button">
                Close
              </button>
              <button
                type="sumbit"
                className=" bg-red-500 text-white p-2 rounded hover:bg-red-400"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
