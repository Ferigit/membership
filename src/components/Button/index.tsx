import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "300px",
  color: "#fff",
  height: 42,
  borderRadius: 8,
  "&:hover": {},
}));

export default function MUIButton({
  label,
  onClick,
  type,
  variant = "contained",
  icon,
  className,
  loading,
}: any) {
  return (
    <CustomButton
      startIcon={icon && icon}
      variant={variant}
      style={{
        backgroundColor: loading
          ? "#eee"
          : variant === "contained"
          ? "rgb(41,121,252)"
          : "#fff",
        color: variant !== "contained" ? "rgb(41,121,252)" : "#fff",
      }}
      className={className}
      {...(type && { type })}
      {...(onClick && { onClick })}
      disabled={loading}
    >
      {loading ? "..." : label}
    </CustomButton>
  );
}
