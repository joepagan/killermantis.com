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
  item: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px"
    }
  }
});

export default tabsStyle;
