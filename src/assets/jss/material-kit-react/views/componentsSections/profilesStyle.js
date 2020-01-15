import { container } from "assets/jss/material-kit-react.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const profileStyle = {
  section: {
    padding: "70px 0"
  },
  name: {
    fontSize: "24px"
  },
  role: {
    paddingTop: "4px",
    fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif'
  },
  container,
  ...imagesStyles
};

export default profileStyle;
