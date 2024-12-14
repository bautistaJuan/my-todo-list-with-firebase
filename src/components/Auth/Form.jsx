import PropTypes from "prop-types";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
const Form = ({
  isRegister,
  handleSignUp,
  handleSignIn,
  handleSignInWithGoogle,
  email,
  setEmail,
  password,
  setPassword,
  children,
  isDarkMode,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <form
        className={`relative flex flex-col gap-3 border border-gray-300 w-full max-w-md justify-center transition-all ease-in duration-200 ${
          isDarkMode ? "bg-slate-900" : "bg-light-primary"
        }  min-h-[400px] rounded-lg p-8 shadow-md `}
      >
        {children}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          className="w-full p-2 border focus:outline-none rounded bg-white text-black"
        />
        <div className="relative">
          <input
            type={showPassword ? "password" : ""}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full p-2 border focus:outline-none bg-white rounded text-black"
          />
          {showPassword ? (
            <IoMdEyeOff
              className="absolute text-gray-600  top-1/2 -translate-y-1/2 right-2 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <IoMdEye
              className="absolute text-black  top-1/2 -translate-y-1/2 right-2 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        {isRegister ? (
          <button
            onClick={handleSignUp}
            className="bg-blue-700 text-white p-2 rounded"
          >
            Registrarse
          </button>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-green-700 text-white p-2 rounded"
          >
            Iniciar sesión
          </button>
        )}
        <button
          onClick={handleSignInWithGoogle}
          className={`cursor-pointer ${
            isDarkMode ? "text-white" : "text-black"
          }  flex gap-2 items-center justify-center border-2 border-gray-300  px-4 py-2 rounded-lg font-medium text-sm hover:bg-zinc-300 `}
        >
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6"
          >
            <path
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              fill="#FFC107"
            ></path>
            <path
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              fill="#FF3D00"
            ></path>
            <path
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              fill="#4CAF50"
            ></path>
            <path
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              fill="#1976D2"
            ></path>
          </svg>
          Ingresar con Google
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  isRegister: PropTypes.bool.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  handleSignInWithGoogle: PropTypes.func.isRequired,
  messageError: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
export default Form;
