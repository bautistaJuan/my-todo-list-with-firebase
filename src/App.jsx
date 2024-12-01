import { useEffect, useState } from "react";
import "./App.css";
import ButtonDarkMode from "./components/ButtonDarkMode/ButtonDarkMode";
import { Auth } from "./components/Auth/Auth";
import { TodoProvider } from "./context/TodoContext";

function App() {
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
          <Auth />
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
