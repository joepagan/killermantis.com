import React from "react";
import ReactPlayer from 'react-player';
import { isMobile } from "react-device-detect";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/profilesStyle.js";

import rinderImage from "assets/img/profiles/rinder-800.jpg";
import rinderVideo from "assets/video/rinder.mp4";
import tiph from "assets/img/profiles/tiph.jpg";
import liam from "assets/img/profiles/liam.jpg";
import hickeyImage from "assets/img/profiles/hickey-800.jpg";
import hickeyVideo from "assets/video/hickey.mp4";
import joeImage from "assets/img/profiles/joe-800.jpg";
import joeVideo from "assets/video/joe.mp4";

const useStyles = makeStyles(styles);

export default function SectionProfile() {
  const classes = useStyles();
  return (
    <div id="profiles" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
            <h2>Profiles</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={6} md={4}>
              <h5 className={classes.name}>Tiph Milstar (Propz)</h5>
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
              <h6 className={classes.role}>Lead Vocals</h6>
            </GridItem>
            <GridItem xs={6} md={4}>
              <h5 className={classes.name}>Mark Rinder</h5>
              <div className={classes.playerWrapper}>
                <ReactPlayer
                  className={
                    classes.player +
                    " " +
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  url={rinderVideo}
                  config={{
                    file: {
                      attributes: {
                        poster: rinderImage
                      }
                    }
                  }}
                  light={isMobile ? rinderImage : false}
                  playsinline
                  autoPlay
                  muted
                  playing
                  loop
                  width="100%"
                  height="100%"
                />
              </div>
              <h6 className={classes.role}>Guitar, Backing Vocals</h6>
            </GridItem>
            <GridItem xs={6} md={4}>
              <h5 className={classes.name}>Liam Sullivan</h5>
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
              <h6 className={classes.role}>Drums, Percussion</h6>
            </GridItem>
            <GridItem xs={6} md={4}>
              <h5 className={classes.name}>Matt Hickey</h5>
              <div className={classes.playerWrapper}>
                <ReactPlayer
                  className={
                    classes.player +
                    " " +
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  url={hickeyVideo}
                  config={{
                    file: {
                      attributes: {
                        poster: hickeyImage
                      }
                    }
                  }}
                  light={isMobile ? hickeyImage : false}
                  playsinline
                  autoPlay
                  muted
                  playing
                  loop
                  width="100%"
                  height="100%"
                />
              </div>
              <h6 className={classes.role}>Synths/Piano</h6>
            </GridItem>
            <GridItem xs={6} md={4}>
              <h5 className={classes.name}>Joe Pagan</h5>
              <div className={classes.playerWrapper}>
                <ReactPlayer
                  className={
                    classes.player +
                    " " +
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  url={joeVideo}
                  config={{
                    file: {
                      attributes: {
                        poster: joeImage
                      }
                    }
                  }}
                  light={isMobile ? joeImage : false}
                  playsinline
                  autoPlay
                  muted
                  playing
                  loop
                  width="100%"
                  height="100%"
                />
              </div>
              <h6 className={classes.role}>Bass, Backing Vocals</h6>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
