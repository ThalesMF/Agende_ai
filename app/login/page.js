'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter(); 
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Simulação de login
    if (email !== "teste@teste.com" || senha !== "123456") {
      setErro("Email ou senha incorretos!");
      return;
    }

    // Se estiver correto
    setErro("");
    router.push('/home');
  }

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="/images/Agendeai.png"
          alt="Placeholder"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Form */}
      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>

        <form onSubmit={handleLogin}>
          {erro && (
            <div className="bg-red-500 text-white p-3 rounded mb-4 text-sm">
              ⚠ {erro}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Email
            </label>
            <input
              id="username"
              type="text"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Senha
            </label>
            <input
              id="password"
              type="password"
              autoComplete="off"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input id="remember" type="checkbox" className="text-blue-500" />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Continuar conectado
            </label>
          </div>

          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-blue-500 text-center">
          <a href="#" className="hover:underline">
            Registre-se aqui
          </a>
        </div>
      </div>
    </div>
  );
}
