import { container } from "assets/jss/material-kit-react";

const completedStyle = theme => ({
  section: {
    padding: "70px 0",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 0"
    }
  },
  container: {
    ...container,
    textAlign: "center !important"
  },
  paragraph: {
    fontSize: "1.25rem",
    lineHeight: "2.25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    },
    [theme.breakpoints.down("xs")]: {
      lineHeight: "2rem"
    }
  }
});

export default completedStyle;
