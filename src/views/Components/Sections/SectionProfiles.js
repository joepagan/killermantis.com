import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, Typography } from "@material-ui/core";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/profilesStyle.js";

import rinder from "assets/img/profiles/rinder.jpg";
import tiph from "assets/img/profiles/tiph.jpg";
import liam from "assets/img/profiles/liam.jpg";
import hickey from "assets/img/profiles/hickey.jpg";
import joe from "assets/img/profiles/joe.jpg";

const useStyles = makeStyles(styles);

export default function SectionProfile() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
            <h2>Members</h2>
          </div>
          <br />
          <GridContainer spacing={3}>
            <GridItem xs={3} implementation="css" smDown component={Hidden} />
            <GridItem xs={12} sm={2}>
              <h5>Tiph Milstar (Propz)</h5>
              <img
                src={tiph}
                alt="Tiph Milstar"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h6>Lead Vocals</h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h5>Mark Rinder</h5>
              <img
                src={rinder}
                alt="Mark Rinder"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h6>Guitar, Backing Vocals</h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h5>Liam Sullivan</h5>
              <img
                src={liam}
                alt="Liam Sullivan"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h6>Drums, Percussion</h6>
            </GridItem>
          </GridContainer>
          <GridContainer justifyContent="center" alignItems="center">
            <GridItem xs={4} implementation="css" smDown component={Hidden} />
            <GridItem xs={12} sm={2}>
              <h5>Matt Hickey</h5>
              <img
                src={hickey}
                alt="Matt Hickey"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h6>Synths/Piano</h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h5>Joe Pagan</h5>
              <img
                src={joe}
                alt="Joe Pagan"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <h6>Bass, Backing Vocals</h6>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
