import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveEmbed from "react-responsive-embed";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/mediaStyle.js";

const useStyles = makeStyles(styles);

export default function SectionMedia() {
  const classes = useStyles();
  return (
    <div id="media" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Media</h2>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} lg={6} className={classes.item}>
            <ResponsiveEmbed
              title="SoundCloud Player, Killer Mantis"
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/719317062&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">'
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={6}>
            <ResponsiveEmbed
              title="YouTube Player, Killer Mantis - Black Shark"
              src="https://www.youtube.com/embed/iFDZ3QDq8Sc"
              allowFullScreen
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
