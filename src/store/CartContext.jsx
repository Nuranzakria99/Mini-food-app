import { createContext, useReducer } from 'react';
import React from "react";

export const CartContext = createContext();

function cartReducer(state, action) {
  if (action.type === 'ADD_TO_CART') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      const existingCartItem = updatedItems[existingItemIndex];
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, amount: 1 });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === 'REMOVE_FROM_CART') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.id);
    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      const existingCartItem = updatedItems[existingItemIndex];
      if (existingCartItem.amount === 1) {
        updatedItems.splice(existingItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      }
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

export function CartProvider({ children }) {
    const [cartState, dispatchAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchAction({ type: 'ADD_TO_CART', item });
  }

  function removeItem(id) {
    dispatchAction({ type: 'REMOVE_FROM_CART', id });
  }

  const contextValue = {
    items: cartState.items,
    addItem,
    removeItem,
  };

  console.log(contextValue)

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

