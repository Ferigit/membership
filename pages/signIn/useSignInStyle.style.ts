import { makeStyles } from "@mui/styles";

const useSignInStyleStyle = makeStyles(
  {
    formContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100%",
    },
    forgetPassword: {
      color: "rgb(41,121,252)",
      marginTop: 20,
      cursor: "pointer",
      textDecoration: "none",
    },
    formTitle: {
      fontSize: 35,
      marginBottom: 10,
      textAlign: "left",
      width: "100%",
    },
    loginWithAccount: {
      fontSize: 20,
      marginTop: 10,
      marginBottom: 10,
      width: "100%",
    },
    googleBtn: {
      width: 20,
    },
    authBtn: {
      width: 140,
    },
    authBtns: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      marginTop: 10,
      marginBottom: 10,
      paddingBottom: 20,
      borderBottom: "2px solid #eee",
    },
    otpFormContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      flexDirection: "column",
      height: "100%",
      "& .timer": {
        marginTop: 20,
        marginBottom: 20,
        color: "rgb(41,121,252)",
        textAlign: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      "& .resend": {
        cursor: "pointer",
      },
    },
    forgetPassword: {
      color: "rgb(41,121,252)",
      marginTop: 20,
      cursor: "pointer",
    },
    back: {
      color: "rgb(41,121,252)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    enterCode: {
      fontSize: 35,
      margin: "20px 0px",
    },
    caption: {
      fontSize: 16,
    },
    seperator: {
      marginRight: 10,
    },
    inputStyle: {
      width: "50px !important",
      height: 50,
      borderRadius: 10,
      borderColor: "rgb(41,121,252)",
    },
  },
  {
    name: "useSignInStyleStyle",
  }
);

export default useSignInStyleStyle;
