'use client';
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (email: string, password: string) => {
    // Lógica de autenticación
    console.log("Login:", email, password);
  };

  const handleRegister = (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    // Lógica de registro
    console.log("Register:", email, password, confirmPassword);
  };

  return (
    <div >
      {isLogin ? (
        <>
          <LoginForm onSubmit={handleLogin} />
        </>
      ) : (
        <>
          <RegisterForm onSubmit={handleRegister} />
        </>
      )}
    </div>
  );
};

export default AuthForm;
