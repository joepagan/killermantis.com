import React, { useEffect } from "react";
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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://c6.patreon.com/becomePatronButton.bundle.js";
    script.async = true;
    document.body.appendChild(script);
  });
  return (
    <div id="about" className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Killer Mantis!</h2>
            <p className={classes.paragraph}>
              Killer Mantis ( formerly known as Impyus ) have been making noise for 5 years.
              <br />
              The 6 boys from Yorkshire have been rocking the stages of the North since they joined forces.
            </p>
            <p className={classes.paragraph}>
              They’ve got raps, fantastic beats, killer synths, rockin’ riffs and those amazing catchy choruses.
            </p>
            <p className={classes.paragraph}>
              With over 50 gigs under their belt, they have decided to step things up with a fresh direction on a new batch of songs, a name change to suit.
            </p>
            <p className={classes.paragraph}>
              Currently Killer Mantis are underway creating a collection of recordings to push in 2020 at Mantis HQ.
            </p>
            <h3>Support us!</h3>
            <p className={classes.paragraph}>You can support us right now on Patreon!</p>
            <a
              href="https://www.patreon.com/bePatron?u=28088162"
              data-patreon-widget-type="become-patron-button"
            >
              Become a Patron!
            </a>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
