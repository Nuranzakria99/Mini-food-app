import React from "react";

export default function Input({label ,id, ...props}){
    return <p className="flex flex-col m-0">
    <label htmlFor={id}>{label}</label>
    <input id={id} name={id} required {...props} className="w-full max-w-lg p-1 border-2 border-black" />
    </p>
}