import { ButtonProps } from "@/interfaces/Button";
import React from "react";

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
