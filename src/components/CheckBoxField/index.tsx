import React from "react";
import { FieldProps, getIn } from "formik";
import { makeStyles } from "@mui/styles";
import { EmailOutlined } from "@mui/icons-material";
import {
  TextFieldProps,
  TextField as MUITextField,
  InputAdornment,
  Checkbox,
} from "@mui/material";
const useStyles = makeStyles(
  {
    label: {
      fontSize: 14,
    },
  },
  {
    name: "CheckBoxFieldStyle",
  }
);

export default function CheckBoxField(props: any) {
  const classes = useStyles();

  const isTouched = getIn(props.form.touched, props.field.name);
  const errorMessage = getIn(props.form.errors, props.field.name);

  const {
    error,
    helperText,
    field,
    form,
    icon,
    label = "label",
    ...rest
  } = props;

  return (
    <div>
      <Checkbox
        // {...label}
        // variant="outlined"
        // error={error ?? Boolean(isTouched && errorMessage)}
        // helperText={
        //   helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
        // }
        {...rest}
        {...field}
        // className={classes.root}
        // label={label}
        // type="checkbox"
        // InputProps={{
        //   className: classes.input,
        // }}
      />
      <label className={classes.label}>{label}</label>
    </div>
  );
}
// export default TextField;
