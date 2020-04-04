import { container } from "assets/jss/material-kit-react.js";

const tabsStyle = theme => ({
  section: {
    background: "#EEEEEE",
    padding: "70px 0",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 0"
    }
  },
  container,
  textCenter: {
    textAlign: "center"
  }
});

export default tabsStyle;
