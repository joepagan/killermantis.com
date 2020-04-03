import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import LazyLoad from 'react-lazyload';

// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionMedia from "./Sections/SectionMedia.js";
import SectionProfiles from "./Sections/SectionProfiles.js";
import SectionText from "./Sections/SectionText.js";
import SectionShows from "./Sections/SectionShows.js";
// import SectionTable from "./Sections/SectionTable.js";

import hero from "assets/img/heroes/hero-bg.webp";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Killer Mantis"
        leftLinks={HeaderLinks.LeftHeaderLinks()}
        rightLinks={HeaderLinks.RightHeaderLinks()}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "dark"
        }}
        {...rest}
      />
      <LazyLoad once height={200}>
        <Parallax image={hero}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>
                    <div className={classes.titleLine}>
                      <span className={classes.titleLetter}>K</span>
                      <span className={classes.titleLetter}>i</span>
                      <span className={classes.titleLetter}>l</span>
                      <span className={classes.titleLetter}>l</span>
                      <span className={classes.titleLetter}>e</span>
                      <span className={classes.titleLetter}>r</span>
                    </div>
                    <div className={classes.titleLine}>
                      <span className={classes.titleLetter}>M</span>
                      <span className={classes.titleLetter}>a</span>
                      <span className={classes.titleLetter}>n</span>
                      <span className={classes.titleLetter}>t</span>
                      <span className={classes.titleLetter}>i</span>
                      <span className={classes.titleLetter}>s</span>
                    </div>
                    </h1>
                  <h3 className={classes.subtitle}>
                    A 6-piece from Yorkshire.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </LazyLoad>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <LazyLoad once height={200} placeholder={<div id="about"></div>}>
          <SectionText />
        </LazyLoad>
        <LazyLoad once height={200} placeholder={<div id="media"></div>}>
          <SectionMedia />
        </LazyLoad>
        <LazyLoad once height={200} placeholder={<div id="profiles"></div>}>
          <SectionProfiles />
        </LazyLoad>
        {/* <LazyLoad once height={200} placeholder={<div id="shows"></div>}>
          <SectionShows />
        </LazyLoad> */}
        {/* <SectionTable /> */}
      </div>
      <Footer />
    </div>
  );
}
