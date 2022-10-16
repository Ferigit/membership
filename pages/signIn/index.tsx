import * as React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import { TextField } from "../../src/components/textField";
import * as yup from "yup";

interface FormValues {
  name: string;
  description: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  description: yup.string().required("Required"),
});

export default function App() {
  return (
    <Container maxWidth="md">
      <Box mb={3} p={2}></Box>
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(
          values: FormValues,
          formikHelpers: FormikHelpers<FormValues>
        ) => {
          alert(JSON.stringify(values, null, 2));
          formikHelpers.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  name="name"
                  label="Name"
                  size="small"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="description"
                  label="Description"
                  size="small"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  size="large"
                  color="primary"
                  disabled={formikProps.isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
