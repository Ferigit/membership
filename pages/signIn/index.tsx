import * as React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import * as yup from "yup";
import { Form } from "../../src/components";
import { EmailOutlined } from "@mui/icons-material";

export default function signIn() {
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
      //   defaultValue: "33",
      icon: "lock",
    },
  ];

  return (
    <Container maxWidth="md">
      <Box mb={3} p={2}></Box>
      <Form
        submitLabel="Login"
        formData={formData}
        validationSchema={validationSchema}
      />
    </Container>
  );
}
