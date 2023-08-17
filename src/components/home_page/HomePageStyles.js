import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f4f4f4",
    minHeight: "100vh"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    position: "relative"
  }
}));

export default useStyles;
