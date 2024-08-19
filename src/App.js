import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { TodosContext } from "./context/TodosContext";
import { ToastContext } from "./context/ToastContext";

import MySnackBar from "./components/MySnackBar";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["A"],
    },
    palette: {
      primary: {
        main: "#673ab7",
      },
    },
  });
  const initialtodos = [
    {
      id: uuidv4(),
      title: "rtyrtyryr",
      details: "lkkl;k",
      Iscompleted: false,
    },
    {
      id: uuidv4(),
      title: "rtyrtyryr",
      details: "lkkl;k",
      Iscompleted: false,
    },
    {
      id: uuidv4(),
      title: "rtyrtyryr",
      details: "lkkl;k",
      Iscompleted: false,
    },
    {
      id: uuidv4(),
      title: "rtyrtyryr",
      details: "lkkl;k",
      Iscompleted: false,
    },
  ];
  const [todos, setTodos] = useState(initialtodos);
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  function showhideToast(message) {
    setOpen(true);
    setMessage(message)
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContext.Provider value={{ showhideToast }}>
        <div
          className="App"
          style={{
            background: "#0d1b2a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            direction: "rtl",
          }}
        >
          <MySnackBar open={open} message={message} />
          <TodosContext.Provider value={{ todos, setTodos }}>
            <TodoList />
          </TodosContext.Provider>
        </div>
      </ToastContext.Provider>
    </ThemeProvider>
  );
}

export default App;
