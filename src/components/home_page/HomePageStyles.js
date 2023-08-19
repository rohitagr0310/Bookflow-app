import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./Images/background.jpg/')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      backgroundAttachment: "fixed"
    }
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    position: "relative",
    zIndex: 1
  },
  libraryImage: {
    width: "80%",
    margin: "50px auto",
    display: "block",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3]
  },
  mainHeading: {
    color: "transparent",
    textAlign: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    WebkitTextStroke: "1px #EEEDED",
    textShadow: "-3px 5px 3px rgba(0, 0, 0, 1)"
  },
  contentText: {
    color: "#EEE9DA",
    marginBottom: theme.spacing(2),
    textAlign: "center"
  },
  section: {
    margin: theme.spacing(8),
    textAlign: "center"
  },
  sectionHeading: {
    color: "#E9FFC2",
    marginBottom: theme.spacing(5),
    fontSize: "2.5rem",
    fontWeight: "bold",
    textShadow: "0 1px 7px rgba(0, 0, 0, 1)"
  },
  sectionContent: {
    color: "#EEE9DA",
    marginBottom: theme.spacing(1),
    paddingTop: theme.spacing(2),
    fontSize: "1rem"
  },
  testimonialCards: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  },
  testimonialCard: {
    width: "100%",
    maxWidth: 400,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      width: "48%"
    }
  },
  testimonialContent: {
    color: "#000",
    fontStyle: "italic",
    fontSize: "0.9rem",
    textAlign: "center",
    marginTop: theme.spacing(1)
  }
}));

export default useStyles;
