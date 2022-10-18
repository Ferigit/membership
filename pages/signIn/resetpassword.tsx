import * as React from "react";
import OtpInput from "react-otp-input";
import { Form, Layout, CountdownTimer, Button } from "../../src/components";
import { makeStyles } from "@mui/styles";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";
import * as yup from "yup";

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
    name: "ResetPasswordStyle",
  }
);

const ResetPassword = () => {
  const classes = useStyles();
  const router = useRouter();
  const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    description: yup.string().required("Required"),
  });
  const formData = [
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      grid: { xs: 12 },
      icon: "lock",
    },
    {
      name: "confirmpassword",
      placeholder: "Confirm Password",
      type: "password",
      grid: { xs: 12 },
      icon: "lock",
    },
  ];

  return (
    <Layout>
      <div className={classes.formContainer}>
        <p className={classes.back} onClick={() => router.push("/signIn/otp")}>
          <ArrowBack sx={{ color: "rgb(41,121,252)" }} /> Back
        </p>
        <p className={classes.enterCode}>Reset password</p>
        <p className={classes.caption}>Set a new password</p>
        <Form
          submitLabel="Confirm"
          formData={formData}
          validationSchema={validationSchema}
        />
        {/* <Button label="Confirm" /> */}
      </div>
    </Layout>
  );
};
export default ResetPassword;
