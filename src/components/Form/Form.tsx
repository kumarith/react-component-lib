import React from "react";

export interface FormProps {
    children: React.ReactNode;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    className?: string;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit, className }) => {
    return (
        <form onSubmit={onSubmit} className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${className}`}>
            {children}
        </form>
    );
};      