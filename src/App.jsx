import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import {
  addDoc,
  doc,
  collection,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import ButtonDarkMode from "./components/ButtonDarkMode/ButtonDarkMode";
import { Auth } from "./components/Auth/Auth";

function App() {
  // const [input, setInput] = useState("");
  // const [editIndex, setEditIndex] = useState(-1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), snapshot => {
      setTodos(
        snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo }))
      );
    });
    return () => unsubscribe();
  }, []);

  // const setEdit = index => {
  //   setInput(todos[index].todo);
  //   setEditIndex(index);
  // };
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-dark-primary text-dark-text"
          : "bg-light-primary text-light-text"
      } min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-dark-primary`}
    >
      <ButtonDarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Auth />
    </div>
  );
}

export default App;
