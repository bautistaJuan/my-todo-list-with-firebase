import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Main from "../Main/Main";
import Loader from "../Loader/Loader";
import Form from "./Form";
import CheckBox from "./CheckBox";
import PopUp from "./PopUp";
import PropTypes from "prop-types";
export function Auth({ isDarkMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn, signInWithGoogle, isLoading } = useAuth();
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSignUp = async e => {
    e.preventDefault();
    try {
      if (email.trim() === "" || password.trim() === "") {
        setMessageError("Por favor, completa todos los campos.");
        setPopUpOpen(true);
        return;
      }
      await signUp(email, password);
    } catch (error) {
      setPopUpOpen(true);
      setMessageError("Email o contraseña incorrectos.");
      console.log("Error al registrarse: " + error.message);
    }
  };

  const handleSignIn = async e => {
    e.preventDefault();

    try {
      if (email.trim() === "" || password.trim() === "") {
        setMessageError("Por favor, completa todos los campos.");
        setPopUpOpen(true);
        return;
      }
      await signIn(email, password);
    } catch (error) {
      setMessageError("Email o contraseña incorrectos.");
      setPopUpOpen(true);
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
          <Form
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSignUp={handleSignUp}
            handleSignIn={handleSignIn}
            handleSignInWithGoogle={handleSignInWithGoogle}
            isRegister={isRegister}
            messageError={messageError}
            isDarkMode={isDarkMode}
          >
            <CheckBox isRegister={isRegister} setIsRegister={setIsRegister} />
          </Form>
        </>
      )}
      {popUpOpen && (
        <PopUp setPopUpOpen={setPopUpOpen} messageError={messageError} />
      )}
    </>
  );
}

Auth.propTypes = {
  isDarkMode: PropTypes.bool,
};
