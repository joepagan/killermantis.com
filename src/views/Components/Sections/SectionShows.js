import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/showsStyle.js";
const useStyles = makeStyles(styles);

export default function SectionShows() {
  const classes = useStyles();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;
    document.body.appendChild(script);
  });
  return (
    <div id="shows" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Shows</h2>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <div className="c-shows">
              <a
                className="bit-widget-initializer"
                data-artist-name="Impyus"
                data-display-local-dates="false"
                data-display-past-dates="true"
                data-auto-style="false"
                data-text-color="#3c4858"
                data-link-color="#212121"
                data-background-color="rgba(0,0,0,0)"
                data-display-limit=""
                data-display-start-time="true"
                data-link-text-color="#fff"
                data-display-lineup="true"
                data-display-play-my-city="true"
                data-separator-color="rgba(0, 0, 0, 0.1)"
              ></a>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
