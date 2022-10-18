import { makeStyles } from "@mui/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const useStyles = makeStyles(
  (theme: any) => ({
    containerBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    logo: {
      width: 100,
      marginTop: 80,
    },
    city: {
      width: 150,
      marginTop: 100,
    },
    accountName: {
      fontSize: 26,
      marginBottom: 40,
      marginTop: 40,
    },
    row: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& span": {
        marginLeft: 5,
      },
      marginBottom: 20,
    },
    rowContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      flexDirection: "column",
    },
  }),
  {
    name: "SidebarStyle",
  }
);

const Sidebar = ({ children }: any) => {
  const classes = useStyles();
  return (
    <div className={classes.containerBox}>
      <img
        src="/assets/images/logo.png"
        alt="membership logo"
        className={classes.logo}
      />
      <img
        src="/assets/images/city.png"
        alt="city view"
        className={classes.city}
      />
      <p className={classes.accountName}>XYZ account</p>
      <div className={classes.rowContainer}>
        {[
          {
            title: "Unlimited opportunities",
            icon: <CheckCircleIcon sx={{ color: "rgb(48,204,102)" }} />,
          },
          {
            title: "Pro tips",
            icon: <CheckCircleIcon sx={{ color: "rgb(48,204,102)" }} />,
          },
          {
            title: "Control over your work",
            icon: <CheckCircleIcon sx={{ color: "rgb(48,204,102)" }} />,
          },
          {
            title: "New ways to earn",
            icon: <CheckCircleIcon sx={{ color: "rgb(48,204,102)" }} />,
          },
        ].map((item) => {
          return (
            <div className={classes.row}>
              {item.icon} <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
