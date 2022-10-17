import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "300px",
  color: "#fff", //theme.palette.getContrastText(purple[500]),
  backgroundColor: "rgb(41,121,252)",
  height: 42,
  borderRadius: 8,
  "&:hover": {
    // backgroundColor: purple[700],
  },
}));

export default function MUIButton({ label }: any) {
  return <CustomButton variant="contained">{label}</CustomButton>;
}
