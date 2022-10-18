import * as toastify from "react-toastify";
import useStyles from "./ToastProvider.styles";
import CloseImage from "../../../src/toastIcons/Close-Square.svg";
import { Close, CheckCircle } from "@mui/icons-material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const toast = (
  type: "error" | "warning" | "success" | "info" | "loading",
  message: string,
  key: string,
  options?: any
) => {
  const customOptions: {
    error: any;
    warning: any;
    success: any;
    info: any;
    loading: any;
  } = {
    error: {
      ...options,
      toastId: key,
      icon: <CheckCircle sx={{ color: "red" }} />,
    },
    warning: {
      ...options,
      toastId: key,
      icon: <CheckCircle sx={{ color: "yellow" }} />,
    },
    success: {
      ...options,
      toastId: key,
      icon: <CheckCircle sx={{ color: "rgb(48,204,102)" }} />,
    },
    info: {
      ...options,
      toastId: key,
      icon: <CheckCircle sx={{ color: "orange" }} />,
    },
    loading: {
      ...options,
      toastId: key,
      icon: null,
    },
  };

  const ToastMessages = {
    error: toastify.toast.warning,
    warning: toastify.toast.warning,
    info: toastify.toast.info,
    success: toastify.toast.success,
    loading: toastify.toast.info,
  };

  return ToastMessages[type](message, customOptions[type]);
};

const CloseButton = ({ closeToast }: any) => {
  const styles = useStyles();
  return (
    <span onClick={closeToast} className={styles.btnIcon}>
      <Close />
    </span>
  );
};

const ToastProvider = () => {
  const styles = useStyles();
  return (
    <toastify.ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      closeOnClick
      pauseOnHover
      draggable
      transition={toastify.Bounce}
      toastClassName={styles.boxToast}
      bodyClassName={styles.boxBody}
      closeButton={CloseButton}
    />
  );
};
export default ToastProvider;
