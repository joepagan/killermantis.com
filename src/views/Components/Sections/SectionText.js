import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionText() {
  const classes = useStyles();
  return (
    <div id="about" className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>We are Killer Mantis!</h2>
            <p className={classes.paragraph}>Killer Mantis (formerly known as Impyus) have just released their second Demo EP titled Clarity. Following on from their first from 2016 titled Tiptoe, featuring regularly on BBC Introducing.</p>
            <p className={classes.paragraph}>A dynamic & collaborative writing style has helped Impyus achieve their unique sound which includes: interesting rhythms, unusual song structures, and, a sprinkling of hip hop. Mark’s unconventional fretwork perfectly compliments Matt’s soundscape of synth which provides Tiph with a platform to deliver his thought provoking lyrics in the rhythmic and melodic style he is known for. This all lies on top of an inseparable rhythm section from Liam, on Drums and Joe, on Bass - intertwining syncopation with a strong, driving undertone.</p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
