import React, { useState } from "react";
import { RegisterFormProps } from "@/interfaces/RegisterForm";
import Input from "../UI/Input";
import Button from "../UI/Button";

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(email, password, confirmPassword);
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-gray-200 rounded-full p-3">
              hola
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Create una cuenta
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Ingresa los datos para el registro
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Contrase;a"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Confirmar Contrase;a"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <Button onClick={handleSubmit}>Registrarse</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
