import { makeStyles } from "@mui/styles";

const useHomeStyleStyle = makeStyles(
  (theme: any) => ({
    root: {
      width: "100%",
      height: "calc(100% - 67px)",
    },
    body: {
      background: "rgb(244,244,244)",
      height: "100%",
      padding: theme.spacing(5),
    },
    postsTitle: {
      fontSize: 35,
      marginTop: 0,
      marginBottom: 5,
    },
    postsTitleCaption: {
      fontSize: 20,
      marginTop: 0,
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
    },
    viewDetal: {
      width: 100,
      height: 37,
    },
    postsTable: {
      // padding: 20,
    },
  }),
  {
    name: "useStatusBarStyle",
  }
);
export default useHomeStyleStyle;
