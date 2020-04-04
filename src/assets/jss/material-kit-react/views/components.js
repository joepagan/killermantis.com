import { container } from "assets/jss/material-kit-react.js";

const mantisGreen = "#08ff00";

const componentsStyle = theme => ({
  container,
  brand: {
    color: mantisGreen,
    textAlign: "left"
  },
  title: {
    fontSize: "6rem",
    fontWeight: "400",
    textAlign: "center",
    display: "inline-block",
    position: "relative",
    textShadow: "0 0 10px rgba(0,0,0,0.5)",
    color: mantisGreen,
    // color: "#fff",
    lineHeight: "1.5",
    width: "100%",
    zIndex: "2",
  },
  titleLine: {
    display: "flex",
    justifyContent: "space-between"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0",
    textShadow: "0 0 10px rgba(0,0,0,1)"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("xs")]: {
      margin: "-60px 15px 0px"
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
});

export default componentsStyle;
