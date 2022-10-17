import { makeStyles } from "@mui/styles";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme: any) => ({
  containerBox: { display: "flex", height: "100vh" },
  sidebar: { width: "20%", backgroundColor: "rgb(244,244,244)" },
  mainBox: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    containerBox: { display: "flex", height: "unset", flexDirection: "column" },
    sidebar: { width: "100%", backgroundColor: "rgb(244,244,244)" },
    mainBox: {
      width: "100%",
    },
  },
}));

const Layout = ({ children }: any) => {
  const classes = useStyles();
  return (
    <div className={classes.containerBox}>
      <aside className={classes.sidebar}>
        <Sidebar />
      </aside>
      <main className={classes.mainBox}>{children}</main>
    </div>
  );
};
export default Layout;
