import ButtonDarkMode from "./components/ButtonDarkMode/ButtonDarkMode";
import { IoMdLogOut } from "react-icons/io";
import { useEffect, useState } from "react";
import { Auth } from "./components/Auth/Auth";
import { TodoProvider } from "./context/TodoContext";
import useAuth from "./hooks/useAuth";
import "./App.css";

function App() {
  const { logOut, user } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("isDarkMode")) || false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <>
      <TodoProvider>
        <div
          className={`${
            isDarkMode
              ? "bg-dark-primary text-dark-text"
              : "bg-light-primary text-light-text"
          } min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-dark-primary`}
        >
          <ButtonDarkMode
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
          {user && (
            <button onClick={logOut}>
              <IoMdLogOut className="absolute top-4 left-4 text-4xl cursor-pointer transition-transform duration-500 transform hover:scale-110" />
            </button>
          )}

          <Auth />
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
