import { InputProps } from "@/interfaces/Input";
import React from "react";

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    onChange={onChange}
  />
);

export default Input;
