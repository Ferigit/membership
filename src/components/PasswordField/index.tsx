import React, { useState } from "react";
import { FieldProps, getIn } from "formik";
import {
  TextFieldProps,
  TextField as MUITextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";

import { makeStyles } from "@mui/styles";

const useStyles1 = makeStyles((theme: any) => ({
  root: {
    width: "300px",
    borderRadius: 8,
    marginLeft: "auto",
    marginRight: "auto",
    background: "rgb(244,244,244)",
    "& label": {
      //& label.Mui-focused
      fontSize: 12,
    },
    "& fieldset": {
      border: "none",
    },
  },
  input: {
    height: 43,
    paddingLeft: 0,
  },
}));

export default function PasswordField(props: any) {
  const classes = useStyles1();
  const isTouched = getIn(props.form.touched, props.field.name);
  const errorMessage = getIn(props.form.errors, props.field.name);
  const { error, helperText, field, form, icon, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <MUITextField
      variant="outlined"
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={
        helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
      }
      {...rest}
      {...field}
      className={classes.root}
      InputProps={{
        className: classes.input,
        startAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {icon == "lock" && <LockOutlined />}
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      type={showPassword ? "text" : "password"}
    />
  );
}
// export default TextField;
