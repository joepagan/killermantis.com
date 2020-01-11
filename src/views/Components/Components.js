import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
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
// import SectionTable from "./Sections/SectionTable.js";

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
      <Parallax image="https://impyus.com/uploads/images/events/2017-06-16/ceiling-demons-dan-audio-the-breaks-terra-ist-impyus/_2000xAUTO_crop_center-center_80/DSC_9513.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Killer Mantis</h1>
                <h3 className={classes.subtitle}>
                  A 5-piece from Yorkshire ( Leeds & Harrogate ).
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionText />
        <SectionMedia />
        <SectionProfiles />
        {/* <SectionTable /> */}
      </div>
      <Footer />
    </div>
  );
}
