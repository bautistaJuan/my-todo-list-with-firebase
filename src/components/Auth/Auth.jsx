import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Main from "../Main/Main";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, signUp, signIn, signInWithGoogle } = useAuth();

  const handleSignUp = async e => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
    } catch (error) {
      setError("Error al registrarse: " + error.message);
    }
  };

  const handleSignIn = async e => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
    } catch (error) {
      setError("Error al iniciar sesión: " + error.message);
    }
  };
  const handleSignInWithGoogle = e => {
    e.preventDefault();
    signInWithGoogle();
  };

  return (
    <>
      {user ? (
        <Main />
      ) : (
        <form className="flex flex-col gap-3 w-full max-w-md justify-center">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleSignIn}
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
          >
            Iniciar sesión
          </button>
          <button
            onClick={handleSignUp}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mb-4"
          >
            Registrarse
          </button>
          <button onClick={handleSignInWithGoogle}>
            Iniciar sesión con Google
          </button>
        </form>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </>
  );
}
