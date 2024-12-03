import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Main from "../Main/Main";
import Loader from "../Loader/Loader";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn, signInWithGoogle, isLoading } = useAuth();
  const [error, setError] = useState(null);
  const handleSignUp = async e => {
    e.preventDefault();
    try {
      await signUp(email, password);
    } catch (error) {
      console.log("Error al registrarse: " + error.message);
      setError(error.message);
    }
  };

  const handleSignIn = async e => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (error) {
      setError(error.message);
      console.log("Error al registrarse: " + error.message);
    }
  };
  const handleSignInWithGoogle = e => {
    e.preventDefault();
    signInWithGoogle();
  };
  if (isLoading) {
    return <Loader />;
  }
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
    </>
  );
}
