import { container } from "assets/jss/material-kit-react.js";

const tabsStyle = theme => ({
  section: {
    background: "#EEEEEE",
    padding: "70px 0",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 0"
    }
  },
  container,
  textCenter: {
    textAlign: "center"
  },
  shows: {
    minHeight: 500,
  }
});

export default tabsStyle;
