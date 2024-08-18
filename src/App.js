import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState ,useContext} from "react";
import {toastContext} from "./context/Toast"
import { v4 as uuidv4 } from "uuid";


import { TodosContext } from "./context/TodosContext";
import Tosat from "./components/Toast";










function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["A"],
    },
    palette:{
      primary:{
        main:"#673ab7"
      }
    }
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
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  function showhideToast(){
    setOpen(true)
    setTimeout (()=>{
      setOpen(false)
    },2000)

  }
  
  return (
    
    <ThemeProvider theme={theme}>
      <TodosContext.Provider value={{showhideToast}}>
      
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
        <Tosat open={open}/>
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
          </TodosContext.Provider>
      
      </div>
      </TodosContext.Provider>
    </ThemeProvider>
  );
}

export default App;
