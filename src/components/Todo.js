import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useContext,useState } from "react";
import { TodosContext } from '../context/TodosContext';


//Dialog

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';



export default function Todo({ todo, handelCheck }) {

  const[showDelete,SetshowDelete] =useState(false)

  const {todos,setTodos} =useContext(TodosContext)



  function handelDeleteClick (){
    SetshowDelete (true)
     
  }

  function handelClose (){
    SetshowDelete (false)
     
  }
  function handelCheckClick() {
    const upgatedTodos=todos.map((t)=>{
      if(t.id === todo.id){
        t.Iscompleted = !t.Iscompleted
      }
      return t
    })
    setTodos(upgatedTodos)
  }
  return (
   <>
    <Dialog
        style={{direction:"rtl"}}
        onClose={handelClose}
        open={showDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {" هل أنت متأكد من حذف المهمة؟" }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لايمكنك التراجع عن الحذف
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button >تأكيد الحذف</Button>
          <Button  autoFocus>
            موافق
          </Button>
        </DialogActions>
      </Dialog>  


    <Card sx={{ minWidth: 275 }}>
      <CardContent className="card-main">
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Typography sx={{ fontSize: 22, textAlign: "right" }}>
              {todo.title}
            </Typography>

            <Typography sx={{ fontSize: 17, textAlign: "right" }}>
              {todo.details}
            </Typography>
          </Grid>
          <Grid
            xs={4}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <IconButton
              aria-label="delete"
              className="button-style"
              style={{ border: "solid #d90429 1px", color: "#d90429" }}
              onClick={handelDeleteClick}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              className="button-style"
              style={{ border: "solid #588157 1px", color: "#588157" }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              className="button-style"
              onClick={() => {
                handelCheckClick();
              }}
              style={{
                border: "solid #415a77 1px",
                color: todo.Iscompleted ?"#ff006e" :"#023047",
                background: todo.Iscompleted ? "#003049" :"#ff006e",
              }}
            >
              <CheckIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </>
  );
}
