import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Main from "../Main/Main";
import Loader from "../Loader/Loader";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn, signInWithGoogle, isLoading } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [messageError, setMessageError] = useState("");
  const handleSignUp = async e => {
    e.preventDefault();
    try {
      if (email.trim() === "" || password.trim() === "") {
        setMessageError("Por favor, completa todos los campos.");
        setModalOpen(true);
        return;
      }
      await signUp(email, password);
    } catch (error) {
      setModalOpen(true);
      setMessageError("Email o contraseña incorrectos.");
      console.log("Error al registrarse: " + error.message);
    }
  };

  const handleSignIn = async e => {
    e.preventDefault();

    try {
      if (email.trim() === "" || password.trim() === "") {
        setMessageError("Por favor, completa todos los campos.");
        setModalOpen(true);
        return;
      }
      await signIn(email, password);
    } catch (error) {
      setMessageError("Email o contraseña incorrectos.");
      setModalOpen(true);
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
        <>
          <h1>Bienvenido</h1>
          <form className="flex flex-col gap-3 w-full max-w-md justify-center">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              className="w-full p-2 border rounded text-black"
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full p-2 border rounded text-black"
            />
            <button
              onClick={handleSignUp}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mb-8"
            >
              Registrarse
            </button>
            <button onClick={handleSignIn} className="w-full mb-4">
              Iniciar sesión
            </button>
            <button
              onClick={handleSignInWithGoogle}
              className="text-green-700 "
            >
              Iniciar sesión con Google
            </button>
          </form>
        </>
      )}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-red-50  max-h-[50vh] rounded-lg shadow-xl overflow-hidden">
            <div className="bg-orange-500 p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Info</h2>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(50vh-100px)]">
              <p className="text-gray-700">{messageError}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
