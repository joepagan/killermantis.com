import React from "react";
import ReactPlayer from 'react-player';
import { isMobile } from "react-device-detect";
import LazyLoad from 'react-lazyload';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/profilesStyle.js";

import rinderImage from "assets/img/profiles/rinder-400.webp";
import rinderVideo from "assets/video/rinder.mp4";
import tiphImage from "assets/img/profiles/tiph-400.webp";
import tiphVideo from "assets/video/tiph.mp4";
import liamImage from "assets/img/profiles/liam-400.webp";
import liamVideo from "assets/video/liam.mp4";
import hickeyImage from "assets/img/profiles/hickey-400.webp";
import hickeyVideo from "assets/video/hickey.mp4";
import joeImage from "assets/img/profiles/joe-400.webp";
import joeVideo from "assets/video/joe.mp4";
import cjImage from "assets/img/profiles/cj-400.webp";
import cjVideo from "assets/video/cj.mp4";

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
              <h5 className={classes.name}>Tiph (Propz)</h5>
              <div className={classes.playerWrapper}>
                <LazyLoad once height={388}>
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
                    url={tiphVideo}
                    config={{
                      file: {
                        attributes: {
                          poster: tiphImage
                        }
                      }
                    }}
                    light={isMobile ? tiphImage : false}
                    playsinline
                    autoPlay
                    muted
                    playing
                    loop
                    width="100%"
                    height="100%"
                  />
                </LazyLoad>
              </div>
              <h6 className={classes.role}>Raps & Vocals</h6>
            </GridItem>
            <GridItem xs={6} md={4}>
              <h5 className={classes.name}>Rinder</h5>
              <div className={classes.playerWrapper}>
                <LazyLoad once height={388}>
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
                </LazyLoad>
              </div>
              <h6 className={classes.role}>Guitar, Backing Vocals</h6>
            </GridItem>
            <GridItem xs={6} md={4}>
              <h5 className={classes.name}>Sully</h5>
              <div className={classes.playerWrapper}>
                <LazyLoad once height={388}>
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
                    url={liamVideo}
                    config={{
                      file: {
                        attributes: {
                          poster: liamImage
                        }
                      }
                    }}
                    light={isMobile ? liamImage : false}
                    playsinline
                    autoPlay
                    muted
                    playing
                    loop
                    width="100%"
                    height="100%"
                  />
                </LazyLoad>
              </div>
              <h6 className={classes.role}>Drums, Percussion</h6>
            </GridItem>
            <GridItem xs={6} md={4}>
              <h5 className={classes.name}>Hick</h5>
              <div className={classes.playerWrapper}>
                <LazyLoad once height={388}>
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
                </LazyLoad>
              </div>
              <h6 className={classes.role}>Synths/Piano</h6>
            </GridItem>
            <GridItem xs={6} md={4}>
              <h5 className={classes.name}>Joe</h5>
              <div className={classes.playerWrapper}>
                <LazyLoad once height={388}>
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
                </LazyLoad>
              </div>
              <h6 className={classes.role}>Bass, Backing Vocals</h6>
            </GridItem>
            <GridItem xs={6} md={4}>
              <h5 className={classes.name}>CJ</h5>
              <div className={classes.playerWrapper}>
                <LazyLoad once height={388}>
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
                    url={cjVideo}
                    config={{
                      file: {
                        attributes: {
                          poster: cjImage
                        }
                      }
                    }}
                    light={isMobile ? cjImage : false}
                    playsinline
                    autoPlay
                    muted
                    playing
                    loop
                    width="100%"
                    height="100%"
                  />
                </LazyLoad>
              </div>
              <h6 className={classes.role}>Lead Vocals</h6>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
