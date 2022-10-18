import { makeStyles } from "@mui/styles";

const useStatusBarStyle = makeStyles(
  (theme: any) => ({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.spacing(3, 5),
    },
    rightSide: {
      display: "flex",
      "& svg": {
        marginRight: theme.spacing(2),
      },
    },
  }),
  {
    name: "useStatusBarStyle",
  }
);
export default useStatusBarStyle;
