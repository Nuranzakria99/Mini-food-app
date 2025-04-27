import { createContext, useState } from "react";
import React from "react";

 const ControlCartContext = createContext({
    Control: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
})
export default ControlCartContext;

export function ControlCartProvider({children}){
    const [controlModel, setControlModel] = useState('')

    function showCart(){
        setControlModel('cart')
    }
    
    function hideCart(){
        setControlModel('')
    }
    function showCheckout(){
        setControlModel('checkout')
    }
    function hideCheckout(){
        setControlModel('')
    }

    const ControlModelContext = {
        Control: controlModel,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout

    }
    return (
        <ControlCartContext.Provider value={ControlModelContext}>
            {children}
        </ControlCartContext.Provider>
    );
}
