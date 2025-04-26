import React from "react";
import logoImage from "../assets/logoimage.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4  text-white">
      <div className="flex items-center gap-1">
        <img src={logoImage} alt="Logo" className="" width={50} height={50} />
        <h1 className="text-red-500 text-md font-bold">Foodio</h1>
      </div>
      <div>
        <button className="text-black bg-red-500 hover:bg-red-400 p-2 rounded-lg text-md">Cart 0</button>
      </div>
    </header>
  );
}
