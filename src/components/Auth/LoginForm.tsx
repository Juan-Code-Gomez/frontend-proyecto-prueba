import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { LoginFormProps } from "@/interfaces/LoginForm";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(email, password);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full bg-gray-100">
        <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Welcome Back!</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 ">
                Usuario
              </label>
              <Input
                type="text"
                placeholder="Usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 ">
                Contrase;a
              </label>
              <Input
                type="password"
                placeholder="Contrase;a"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                  checked
                />
                <label className="ml-2 block text-sm text-gray-700 ">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Crear una cuenta
              </a>
            </div>

            <Button onClick={handleSubmit}>Iniciar Sesion</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
