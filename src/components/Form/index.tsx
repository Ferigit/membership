import * as React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form as FormikForm,
  Field,
} from "formik";
import { TextField, PasswordField, Button, CheckBoxField } from "../index";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  label: {
    fontSize: 14,
    marginLeft: 4,
  },
}));

interface FormValues {
  name: string;
  description: string;
}
interface IProps {
  validationSchema: any;
  formData: any;
  submitLabel?: string;
}

export default function Form({
  validationSchema,
  formData,
  submitLabel,
}: IProps) {
  const classes = useStyles();

  const initialValues = formData.reduce((acc: any, curr: any) => {
    acc[curr.name] = curr.defaultValue;
    return acc;
  }, {});

  const fieldMaps: any = {
    text: TextField,
    password: PasswordField,
    checkbox: CheckBoxField,
  };

  return (
    <Formik
      initialValues={initialValues}
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
        <FormikForm noValidate autoComplete="off">
          <Grid container spacing={2}>
            {formData.map((field: any) => {
              const { name, label = "", size, type, icon, placeholder } = field;
              return (
                <Grid item xs={12}>
                  <Field
                    name={name}
                    label={label}
                    size={size}
                    type={type}
                    icon={icon}
                    placeholder={placeholder}
                    {...(type !== "checkbox" && { component: fieldMaps[type] })}
                    // ...({type!=='checkbox' && {component: fieldMaps[type]}})
                    // component={fieldMaps[type]}
                  />
                  {type === "checkbox" && (
                    <label className={classes.label}>{label}</label>
                  )}
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Button label={submitLabel} />
              {/* <Button
                type="submit"
                variant="outlined"
                size="large"
                color="primary"
                disabled={formikProps.isSubmitting}
              >
                Submit
              </Button> */}
            </Grid>
          </Grid>
        </FormikForm>
      )}
    </Formik>
  );
}
