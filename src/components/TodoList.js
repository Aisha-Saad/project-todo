import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';





// 
import Todo from "./Todo"
import { v4 as uuidv4 } from 'uuid';

//
import { TodosContext } from '../context/TodosContext';
import { useContext } from 'react';




import { Padding } from '@mui/icons-material';

export default function TodoList() {
 const {todos,setTodos} =useContext(TodosContext)
 const todosJSX=todos.map((t)=>{
  return <Todo key={t.id} todo={t} />
 })

 
 const [inputTitle,setInputTitle]=useState("")

  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  function handelAddclick(){
    const NewTodos= {
      id:uuidv4(),
      title:inputTitle,
      details:"",
      Iscompleted:false
    }

    setTodos([...todos,NewTodos])
    setInputTitle("")
  }
  return (
  
      <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      
        </Typography>
        <Typography variant="h1"  style={{fontWeight:"bolder"}} gutterBottom>
        <Divider>مهامي </Divider>
      </Typography>
      {/* {toggle Buttons} */}





      <ToggleButtonGroup style={{direction:"ltr" }}
      // value={alignment}
      // exclusive
      // onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned" >
        الكل
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
      المنجزة
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
      الغير منجزة
      </ToggleButton>
      
    </ToggleButtonGroup>
      {/* {toggle Buttons} */}
      
      {/* <Todo/> */}
      {todosJSX}
    


    
  
      
      <Grid container style={{marginTop:"20px" }} spacing={2}>
      <Grid xs={8} display="flex" justifyContent="space-around" alignItems="center">
      <TextField id="filled-basic" label="إضافة مهمة " variant="filled" style={{width:"100%"}}
       
       value={inputTitle}
       onChange={(e)=>{
        setInputTitle(e.target.value)
       }}
      
      
      />

          </Grid>
          <Grid xs={4}>
          <Button variant="contained"
           onClick={()=>{
            handelAddclick()
           }}
          style={{width:"100%" ,height:"100%"}}>إضافة </Button>

        </Grid>
      </Grid>
      
  
      </CardContent>
    </Card>
  
   </Container>
    
  ); 
}


