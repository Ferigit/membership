import { makeStyles } from "@mui/styles";
import Sidebar from "./Sidebar";
import AuthorizedSidebar from "./AuthorizedSidebar";

const useStyles = makeStyles(
  (theme: any) => ({
    containerBox: { display: "flex", height: "100vh" },
    sidebar: { width: "20%", backgroundColor: "rgb(244,244,244)" },
    mainBox: {
      width: "80%",
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
    },
    [theme.breakpoints.down("md")]: {
      containerBox: {
        display: "flex",
        height: "unset",
        flexDirection: "column",
      },
      sidebar: { width: "100%", backgroundColor: "rgb(244,244,244)" },
      mainBox: {
        width: "100%",
      },
    },
  }),
  {
    name: "LayoutCustomStyle",
  }
);

const Layout = ({ children }: any) => {
  const classes = useStyles();
  const authorized = false;
  return (
    <div className={classes.containerBox}>
      <aside className={classes.sidebar}>
        {authorized ? <AuthorizedSidebar /> : <Sidebar />}
      </aside>
      <main className={classes.mainBox}>{children}</main>
    </div>
  );
};
export default Layout;
