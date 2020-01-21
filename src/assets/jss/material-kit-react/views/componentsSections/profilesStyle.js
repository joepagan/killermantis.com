import { container } from "assets/jss/material-kit-react.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const profileStyle = theme => ({
  section: {
    padding: "70px 0",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 0"
    }
  },
  name: {
    fontSize: "24px"
  },
  role: {
    paddingTop: "4px",
    fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif'
  },
  playerWrapper: {
    position: "relative",
    paddingTop: "100%"
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden"
  },
  container,
  ...imagesStyles
});

export default profileStyle;
