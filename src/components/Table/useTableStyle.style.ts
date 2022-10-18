import { makeStyles } from "@mui/styles";

const useTableStyleStyle = makeStyles(
  (theme: any) => ({
    searchBox: {
      "& .MuiInput-root": {
        margin: 10,
        background: "rgb(244,244,244)",
        borderRadius: 8,
        padding: 4,
      },
      "& .MuiInput-root:before": {
        display: "none",
        border: "none",
      },
      "& .MuiInput-underline": {
        border: "none !important",
      },
    },
  }),
  {
    name: "useStatusBarStyle",
  }
);
export default useTableStyleStyle;
