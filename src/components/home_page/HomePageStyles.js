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
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    "& h4": {
      fontWeight: "bold",
      marginRight: theme.spacing(2)
    }
  },
  bookCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.15)"
    }
  },
  bookTitle: {
    marginTop: theme.spacing(2),
    fontWeight: "bold"
  },
  bookAuthor: {
    marginTop: theme.spacing(1),
    color: "#666666"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  addBookLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "inherit",
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  addBookText: {
    marginLeft: theme.spacing(1),
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: theme.palette.primary.main
    }
  }
}));

export default useStyles;
