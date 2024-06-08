import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


import { TodosContext } from "./context/TodosContext";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["A"],
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
  
  return (
    <ThemeProvider theme={theme}>
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
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
