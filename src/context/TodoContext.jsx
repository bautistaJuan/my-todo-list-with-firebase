import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import PropTypes from "prop-types";

const TodoContext = createContext();
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), snapshot => {
      setTodos(
        snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo }))
      );
    });
    return () => unsubscribe();
  }, []);

  const addTodo = async todo => {
    if (todo.trim() !== "") {
      await addDoc(collection(db, "todos"), { todo });
    }
  };

  const updateTodo = async (id, newTodo) => {
    if (newTodo.trim() !== "") {
      const todoDocRef = doc(db, "todos", id);
      await updateDoc(todoDocRef, { todo: newTodo });
    }
  };

  const removeTodo = async id => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoProvider };
