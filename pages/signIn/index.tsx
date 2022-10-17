import * as React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import * as yup from "yup";
import { Form, Layout } from "../../src/components";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import Link from "next/link";

const useStyles = makeStyles((theme: any) => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  forgetPassword: {
    color: "rgb(41,121,252)",
    marginTop: 20,
    cursor: "pointer",
    textDecoration: "none",
  },
  formTitle: {
    fontSize: 35,
    marginBottom: 30,
    textAlign: "left",
    width: "100%",
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const router = useRouter();
  // const
  const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    description: yup.string().required("Required"),
  });

  const formData = [
    {
      name: "email",
      placeholder: "Work Email",
      type: "text",
      grid: { xs: 12 },
      defaultValue: "12",
      icon: "email",
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      grid: { xs: 12 },
      defaultValue: "33",
      icon: "lock",
    },
    {
      name: "rules",
      placeholder: "Password",
      label: "I don't want to receive news and offers.",
      type: "checkbox",
      grid: { xs: 12 },
      icon: "lock",
    },
  ];

  // const getPageContent = ()=>{

  //   switch(){
  //     case '':
  //       return <OTPForm />
  //   }
  // }

  return (
    <Layout>
      <Box mb={3} p={2}></Box>
      <div className={classes.formContainer}>
        <p className={classes.formTitle}>Sign In</p>
        <Form
          submitLabel="Login"
          formData={formData}
          validationSchema={validationSchema}
        />
        <Link href="/signIn/otp">
          <a className={classes.forgetPassword}>forget password</a>
        </Link>
      </div>
    </Layout>
  );
};
export default SignIn;
