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

const useStyles = makeStyles(
  {
    label: {
      fontSize: 14,
      marginLeft: 4,
    },
    formContainer: {
      width: 300,
    },
  },
  {
    name: "FormStyle",
  }
);

interface FormValues {
  name: string;
  description: string;
}
interface IProps {
  validationSchema: any;
  formData: any;
  submitLabel?: string;
  onSubmit?: any;
}

export default function Form({
  validationSchema,
  formData,
  submitLabel,
  onSubmit: submit,
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
    <div className={classes.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(
          values: FormValues,
          formikHelpers: FormikHelpers<FormValues>
        ) => {
          // alert(JSON.stringify(values, null, 2));
          submit(values);
          // formikHelpers.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <FormikForm noValidate autoComplete="off">
            <Grid container spacing={2}>
              {formData.map((field: any) => {
                const {
                  name,
                  label = "",
                  size,
                  type,
                  icon,
                  placeholder,
                } = field;
                return (
                  <Grid item xs={12}>
                    <Field
                      name={name}
                      label={label}
                      size={size}
                      type={type}
                      icon={icon}
                      placeholder={placeholder}
                      {...(type !== "checkbox" && {
                        component: fieldMaps[type],
                      })}
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
                <Button type="submit" label={submitLabel} />
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
    </div>
  );
}
