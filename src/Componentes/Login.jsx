import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="w-full max-w-sm md:max-w-lg">
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block font-medium mb-2">Email</label>
          <input
            className="w-full border border-gray-400 p-2 rounded-lg"
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Senha</label>
          <input
            className="w-full border border-gray-400 p-2 rounded-lg"
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">
            Não tem conta? <a href="#">Clique aqui</a>
          </p>
          <p className="text-gray-600">
            <a href="#">Esqueceu sua senha</a>
          </p>
        </div>
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
          Entrar
        </button>
        <div className="flex items-center mt-6">
          <p className="text-gray-600">Ou cadastre-se com</p>
          <a href="#" className="ml-2">
            <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current text-gray-600">
              <path d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z" />
              <path d="M467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-25.968 25.968L25.753 131.685c-4.881 4.882-4.881 12.796 0 17.678l90.132 90.13c4.882 4.882 12.796 4.882 17.678 0l14.142-14.142 25.968 25.968c32.369 32.369 86.726 32.36 118.316.001l90.13-90.13c4.882-4.882 4.882-12.796 0-17.678l-25.968-25.968 131.044-131.045 25.968 25.968c59.261 59.262 59.27 155.69.001 214.96z" />
            </svg>
          </a>
          <a href="#" className="ml-2">
            <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current text-gray-600">
              <path d="M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V257.3h49.2l5.2-59.1h-54.4v-33.5c0-13.5 2.8-19.1 19.1-19.1h38.8v-60.9c-25.5-.3-56.6-1.9-88.1-7.6-29.5-5.8-51-15.5-63.3-28.7-12.3-13.2-18.6-31-18.6-52.3 0-51.5 39.3-100.1 99.5-100.1 26.2 0 50.7 8.6 70.3 23.7 19.6 15.2 34.2 37.2 42.7 64.1 8.5 27 11.7 54.5 11.7 82.1v32.5h-70.1z" />
            </svg>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;