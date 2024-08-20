import { createContext ,useState} from "react";
import MySnackBar from "../components/MySnackBar"
export const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {

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
    <ToastContext.Provider value={{ showhideToast }}>
      <MySnackBar open={open} message={message} />

      {children}
    </ToastContext.Provider>
  );
};
