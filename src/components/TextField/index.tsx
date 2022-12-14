import React from "react";
import { FieldProps, getIn } from "formik";
import { makeStyles } from "@mui/styles";
import { EmailOutlined, Search } from "@mui/icons-material";
import {
  TextFieldProps,
  TextField as MUITextField,
  InputAdornment,
  IconButton,
} from "@mui/material";

const useStyles = makeStyles(
  {
    root: {
      // minWidth: "200px",
      // maxWith:'300px',
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
  },
  {
    name: "TextFieldStyle",
  }
);

const TextField = (props: any) => {
  const classes = useStyles();

  const isTouched = getIn(props?.form?.touched, props?.field?.name);
  const errorMessage = getIn(props?.form?.errors, props?.field?.name);

  const { error, helperText, field, form, icon, ...rest } = props;

  return (
    <MUITextField
      variant="outlined"
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={
        helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
      }
      {...rest}
      {...field}
      {...(props?.value && { value: props?.value })}
      {...(props?.onChange && { onChange: props?.onChange })}
      className={classes.root}
      InputProps={{
        className: classes.input,
        startAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility">
              {icon == "email" ? (
                <EmailOutlined />
              ) : icon === "search" ? (
                <Search />
              ) : (
                ""
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
export default TextField;
