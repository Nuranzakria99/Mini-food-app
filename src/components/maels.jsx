import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../store/CartContext";



export default function Meals() {
  const Context = useContext(CartContext)
  function AddItemToCard(meal){
    Context.addItem(meal)
  }
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const res = await fetch('/data/meals.json'); 

      if (!res.ok) {
        
        console.error('Failed to fetch meals.');
        return;
      }

      const meals = await res.json();
      setMeals(meals); 
    }

    fetchMeals();
  }, []);

  return (
    <div className=" flex flex-row flex-wrap justify-center gap-4 p-4 m-2 max-w-6xl mx-auto">
    {meals.map((meal) => (
      <div key={meal.id} className="border p-4 rounded-lg shadow-md flex flex-col items-center w-64">
        <div className="w-full h-40 overflow-hidden rounded-md mb-2">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-center">{meal.name}</h2>
        <p className="text-gray-500 text-center">{meal.description}</p>
        <p className="text-green-600 font-semibold mt-2">${meal.price}</p>
        <button onClick={() => AddItemToCard(meal)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400">
          Add to Cart
        </button>
      </div>
    ))}
  </div>
  
  
  );
}
