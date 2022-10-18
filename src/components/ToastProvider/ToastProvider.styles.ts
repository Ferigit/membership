import { makeStyles } from "@mui/styles";
// import { pxToRem } from "theme/helpers";
const useToastProvider = makeStyles(
  (theme: any) => ({
    boxToast: {
      borderRadius: 80,
      height: 45,
      padding: 13,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& button": {
        marginRight: 16,
      },
    },
    boxBody: {
      color: "black",
      fontWeight: 400,
      fontSize: 14,
      padding: 0,
      textAlign: "start",
      "& :first-child": {
        width: 52,
        height: 35,
      },
    },
    boxStooryBook: {
      borderRadius: 80,
      height: 40,
      padding: 13,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& button": {
        width: 18,
        height: 18,
        marginRight: 16,
        padding: 0,
      },
    },
    boxBodyStooryBook: {
      color: "black",
      fontWeight: 400,
      fontSize: 14,
      padding: 0,
      textAlign: "start",
      "& :first-child": {
        width: 52,
        height: 52,
      },
    },
    btnIcon: {
      padding: 0,
      width: 18,
      height: 18,
    },
  }),
  { name: "ToastProvider" }
);
export default useToastProvider;
