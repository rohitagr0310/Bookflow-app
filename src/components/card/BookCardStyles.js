import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "16px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9 aspect ratio
  },
  content: {
    flex: "1 0 auto",
    padding: "16px"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "bold"
  },
  author: {
    marginTop: "8px",
    color: theme.palette.text.secondary
  },
  description: {
    marginTop: "16px"
  },
  availability: {
    marginTop: "16px",
    color: theme.palette.text.secondary
  }
}));

export default useStyles;
