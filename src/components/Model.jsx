import { useRef } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import React from "react"


export default function Model({children , open, onClose}){
    const dialog = useRef()
    useEffect(() => {
        const model = dialog.current
        if(open){
            model.showModal()
        }

        return () => model.close() //run only when dep change 
    }, [open])
    return createPortal(
        <dialog ref={dialog} onClose={onClose}>{children}</dialog>,
        document.getElementById("modal") 
    )
}