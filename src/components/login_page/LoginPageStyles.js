import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(to right, #3498db, #2ecc71)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(4),
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    background: "#fff"
  },
  p: {
    cursor: "pointer",
    color: theme.palette.primary.main,
    textDecoration: "underline",
    marginTop: theme.spacing(2),
    fontSize: "14px",
    fontWeight: "bold",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: theme.palette.primary.dark
    }
  }
}));

export default useStyles;
