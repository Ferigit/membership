import * as React from "react";
import OtpInput from "react-otp-input";
import { Form, Layout, CountdownTimer, Button } from "../../src/components";
import { makeStyles } from "@mui/styles";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";

const useStyles = makeStyles(
  {
    formContainer: {
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
    name: "OTPFormStyle",
  }
);

const OTPForm = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Layout>
      <div className={classes.formContainer}>
        <p className={classes.back} onClick={() => router.push("/signIn")}>
          <ArrowBack sx={{ color: "rgb(41,121,252)" }} /> Back
        </p>
        <p className={classes.enterCode}>Enter code</p>
        <p className={classes.caption}>
          Enter the code sent to test@gmail.com email.
        </p>
        <OtpInput
          value={"2"}
          onChange={() => {}}
          numInputs={5}
          separator={<span className={classes.seperator}> </span>}
          inputStyle={classes.inputStyle}
          focusStyle
        />
        <CountdownTimer expiresIn={120} />
        <Button
          label="Confirm"
          onClick={() => router.push("/signIn/resetpassword")}
        />
      </div>
    </Layout>
  );
};
export default OTPForm;
