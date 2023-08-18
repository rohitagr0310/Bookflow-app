import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  authPageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #64b5f6, #1976d2)"
  },
  formContainer: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: "10px",
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  formHeader: {
    marginBottom: theme.spacing(2),
    textAlign: "center"
  },
  submitButton: {
    marginTop: theme.spacing(3),
    borderRadius: "8px",
    width: "100%"
  },
  bodyNoMarginPadding: {
    margin: 0,
    padding: 0
  }
}));

export default useStyles;
