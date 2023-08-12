import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2)
  },
  p: {
    cursor: "pointer",
    color: theme.palette.primary.main,
    textDecoration: "underline",
    marginTop: theme.spacing(2),
    fontSize: "14px",
    fontWeight: "bold"
  }
}));

export default useStyles;
