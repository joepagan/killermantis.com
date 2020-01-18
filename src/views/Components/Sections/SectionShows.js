import React from "react";
import LazyLoad from 'react-lazyload';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/showsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionShows() {
  const classes = useStyles();
  return (
    <div id="shows" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Shows</h2>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <LazyLoad once height={388}>
              <iframe
                className={classes.shows}
                title="Reverbnation Shows List"
                src="https://www.reverbnation.com/widget_code/html_widget/artist_6779616?widget_id=52&amp;posted_by=artist_6779616&pwc[design]=customized&pwc[background_color]=%23212121&pwc[layout]=detailed&pwc[show_map]=0%2C1&pwc[size]=fit"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </LazyLoad>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
