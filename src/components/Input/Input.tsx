import React from "react";

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      className="border border-gray-300 p-2 rounded"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
