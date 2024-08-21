import { createContext ,useContext,useState} from "react";
import MySnackBar from "../components/MySnackBar"
export const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);


  function showhideToast(message) {
    setOpen(true);
    setMessage(message)
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }




  return (
    <ToastContext.Provider value={{ showhideToast }}>
      <MySnackBar open={open} message={message} />

      {children}
    </ToastContext.Provider>
  );
};


export const useToast=()=>{
   return useContext(ToastContext)
}
