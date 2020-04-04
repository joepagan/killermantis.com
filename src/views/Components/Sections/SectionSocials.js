import React from "react";
import LazyLoad from "react-lazyload";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faSoundcloud,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import styles from "assets/jss/material-kit-react/views/componentsSections/socialsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionShows() {
  const classes = useStyles();
  return (
    <div id="socials" className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Tooltip
              id="twitter-tooltip"
              title="Follow us on Twitter"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                href="https://twitter.com/killermantisuk?ref=killermantis-website"
                target="_blank"
                rel="noopener noreferrer"
                color="transparent"
                className={classes.navLink}
              >
                <FontAwesomeIcon className={classes.icons} icon={faTwitter} />
              </Button>
            </Tooltip>

            <Tooltip
              id="facebook-tooltip"
              title="Follow us on Facebook"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.facebook.com/killermantismusic?ref=killermantis-website"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.navLink}
              >
                <FontAwesomeIcon className={classes.icons} icon={faFacebookF} />
              </Button>
            </Tooltip>

            <Tooltip
              id="instagram-tooltip"
              title="Follow us on Instagram"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.instagram.com/killermantismusic?ref=killermantis-website"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.navLink}
              >
                <FontAwesomeIcon className={classes.icons} icon={faInstagram} />
              </Button>
            </Tooltip>

            <Tooltip
              id="spotify-tooltip"
              title="Follow us on SoundCloud"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.soundcloud.com/killermantis?ref=killermantis-website"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.navLink}
              >
                <FontAwesomeIcon
                  className={classes.icons}
                  icon={faSoundcloud}
                />
              </Button>
            </Tooltip>

            <Tooltip
              id="youtube-tooltip"
              title="Subscribe on Youtube"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.youtube.com/channel/UCjXeqCAvBsTNb2FlemGRhKQ?ref=killermantis-website"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.navLink}
              >
                <FontAwesomeIcon className={classes.icons} icon={faYoutube} />
              </Button>
            </Tooltip>

            <Tooltip
              id="reverbnation-tooltip"
              title="Reverbnation"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.reverbnation.com/killermantis?ref=killermantis-website"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.navLink}
              >
                <svg
                  enableBackground="new 0 0 568.6 76"
                  height="87.983047"
                  viewBox="0 0 87.983051 87.983047"
                  width="87.983047"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m78.418524 32.452812-25.968893-.085424-8.200702-24.7729565-8.029855 24.7729565-25.968893.085424h.08542l20.928878 15.20547-8.115279 24.858381h.08542l21.185155-15.290894 21.014301 15.290894-8.115279-24.772957z"
                    strokeWidth=".85424"
                  />
                </svg>
              </Button>
            </Tooltip>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
