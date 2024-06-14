import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";

//Dialog

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Todo({ todo, handelCheck }) {
  const [showDelete, SetshowDelete] = useState(false);
  const [showUpdet, SetshowUpdet] = useState(false);
  const[showEdit,setShowEdit]=useState({title:"", detials:""})

  const { todos, setTodos } = useContext(TodosContext);

  function handelDeleteClick() {
    SetshowDelete(true);

  }
  function handelUpdetClick() {
    SetshowUpdet(true);
  }

  function handelClosedelet() {
    SetshowDelete(false);
  }
  function handelCloseUpdet() {
    SetshowUpdet(false);
  }

  function handelUpdetConfirm(){
    const updettedTodos =todos.map((t)=>{
      if(t.id ===todo.id){
        return  {...t ,title:showEdit.title ,details:showEdit.detials}
      }else{
        return t
      }
    })
    setTodos(updettedTodos)
    localStorage.setItem("todos", JSON.stringify(updettedTodos))

    setShowEdit(false)
  }

  function hanelCloseConfirm() {
    const updettedTodos = todos.filter((t) => {
      return t.id !== todo.id;
    });
    setTodos(updettedTodos);
    localStorage.setItem("todos", JSON.stringify(updettedTodos))

  }
  function handelCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.Iscompleted = !t.Iscompleted;
      }
      return t;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos))

  }

  return (
    <>
      {/* delete dialog */}
      <Dialog
        style={{ direction: "rtl" }}
        onClose={handelClosedelet}
        open={showDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {" هل أنت متأكد من حذف المهمة؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لايمكنك التراجع عن الحذف
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handelClosedelet}> اغلاق</Button>
          <Button onClick={hanelCloseConfirm} autoFocus>
            تأكيد الحذف
          </Button>
        </DialogActions>
      </Dialog>
      {/*END  delete dialog */}

      {/* ========updet dialog ============*/}

      <Dialog
        style={{ direction: "rtl" }}
        open={showUpdet}
        onClose={handelCloseUpdet}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handelCloseUpdet();
          },
        }}
      >
        <DialogTitle>تعديل المهام</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="عنوان المهمة"
            fullWidth
            value={showEdit.title}
            onChange={(e)=>{
              setShowEdit({...showEdit, title: e.target.value})
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="التفاصيل"
            fullWidth
            variant="standard"
            value={showEdit.detials}
            onChange={(e)=>{
              setShowEdit({...showEdit, detials: e.target.value})
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handelCloseUpdet}>Cancel</Button>
          <Button onClick={handelUpdetConfirm} type="submit">edit</Button>
        </DialogActions>
      </Dialog>
      {/* ===========END updet dialog ======*/}

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
                onClick={handelUpdetClick}
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
                  color: todo.Iscompleted ? "#ff006e" : "#023047",
                  background: todo.Iscompleted ? "#003049" : "#ff006e",
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
