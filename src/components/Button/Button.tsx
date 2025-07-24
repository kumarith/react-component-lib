import React from "react";

export interface ButtonProps {
    label : string;
    onClick? : () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export const KButton : React.FC<ButtonProps>  = ({label, onClick, className, type}) => {
    return (
        <button 
        type={type}
        onClick={onClick}
        className={`kbutton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className ?? ""}`}>
        {label}
        </button>

    )

}