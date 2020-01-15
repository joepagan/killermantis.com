import { container } from "assets/jss/material-kit-react";

const completedStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...container,
    textAlign: "center !important",
  },
  paragraph: {
    fontSize: "1.25rem",
    lineHeight: "2.25rem"
  }
};

export default completedStyle;
