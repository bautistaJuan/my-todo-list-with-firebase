import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  if (error) {
    console.error("Error en useAuth:", error);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const signUp = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario registrado exitosamente");
    } catch (err) {
      console.error("Error al registrarse:", err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Inicio de sesión exitoso");
    } catch (err) {
      console.error("Error al iniciar sesión:", err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    try {
      return signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Error al iniciar sesión con Google:", err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = async () => {
    setError(null);
    try {
      console.log("El usuario se está deslogueando...");
      await signOut(auth);
      console.log("Cierre de sesión exitoso");
    } catch (err) {
      console.error("Error al cerrar sesión:", err.message);
      setError(err.message);
    }
  };

  return { user, isLoading, signUp, signIn, logOut, signInWithGoogle };
}

export default useAuth;
