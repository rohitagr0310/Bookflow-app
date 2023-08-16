import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(to top, #3498db, #2ecc71)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(3),
    padding: theme.spacing(6),
    borderRadius: "16px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    background: "#fff"
  }
}));

export default useStyles;
