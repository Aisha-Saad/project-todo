import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";

//
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

//
import { TodosContext } from "../context/TodosContext";
import { useContext } from "react";

import { Margin, Padding } from "@mui/icons-material";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);

  const [inputTitle, setInputTitle] = useState("");

  const [displayTodo, setdisplayTodo]=useState("all")

  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };



  const complatedTodos=todos.filter((t)=>{
    return t.Iscompleted
  })
  const noncomplatedTodos=todos.filter((t)=>{
    return !t.Iscompleted
  })


  let todosRender=todos

  if(displayTodo ==="complet"){
    todosRender=complatedTodos
  }else if(displayTodo ==="non-complet"){
    todosRender =noncomplatedTodos
  }else{
    todosRender=todos
  }


  const todosJSX = todosRender.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });

  function handelAddclick() {
    const NewTodos = {
      id: uuidv4(),
      title: inputTitle,
      details: "",
      Iscompleted: false,
    };

    const updetTodo = [...todos, NewTodos];
    setTodos(updetTodo);
    localStorage.setItem("todos", JSON.stringify(updetTodo));
    setInputTitle("");
  }

  useEffect(() => {
    console.log("hey from local Storage");
    const storgeTodo = JSON.parse(localStorage.getItem("todos"))?? [];
    setTodos(storgeTodo);
  }, []);


 function changeDisplay(e){
  setdisplayTodo(e.target.value)
 }



  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}
      
      style={{maxHeight:"80vh", overflow:"scroll"}}
      
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography
            variant="h1"
            style={{ fontWeight: "bolder" }}
            gutterBottom
          >
            <Divider>مهامي </Divider>
          </Typography>
          {/* {toggle Buttons} */}

          <ToggleButtonGroup
            style={{ direction: "ltr", margin: "40px" }}
            value={displayTodo}
            exclusive
            onChange={changeDisplay}
            aria-label="text alignment"
            color="primary"
          >
          
          
            <ToggleButton value="non-complet" aria-label="right aligned">
              الغير منجزة
            </ToggleButton>

            <ToggleButton value="complet" aria-label="centered">
              المنجزة
            </ToggleButton>


            <ToggleButton value="all" aria-label="left aligned">
              الكل
            </ToggleButton>
          </ToggleButtonGroup>
          {/* {toggle Buttons} */}

          {/* <Todo/> */}
          {todosJSX}

          <Grid container marginTop="20px" spacing={2}>
            <Grid
              xs={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <TextField
                id="filled-basic"
                label="إضافة مهمة "
                variant="filled"
                style={{ width: "100%" }}
                value={inputTitle}
                onChange={(e) => {
                  setInputTitle(e.target.value);
                }}
              />
            </Grid>
            <Grid xs={4}>
              <Button
                variant="contained"
                onClick={() => {
                  handelAddclick();
                }}
                style={{ width: "100%", height: "100%" }}
                disabled={inputTitle.length ===0}
              >
                إضافة{" "}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
