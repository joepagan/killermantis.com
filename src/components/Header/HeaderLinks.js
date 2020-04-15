/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// scroll links
import * as Scroll from 'react-scroll';
let ScrollLink = Scroll.Link;

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram, faSpotify, faSoundcloud, faYoutube, faPatreon } from '@fortawesome/free-brands-svg-icons'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

function LeftHeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <ScrollLink className={classes.scrollLink + " " + classes.navLink} to="about" spy={true} smooth="easeOutQuint" duration={500} color="transparent">About</ScrollLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ScrollLink className={classes.scrollLink + " " + classes.navLink} to="media" spy={true} smooth="easeOutQuint" duration={500} color="transparent">Media</ScrollLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ScrollLink className={classes.scrollLink + " " + classes.navLink} to="profiles" spy={true} smooth="easeOutQuint" duration={500} color="transparent">
          Profiles
        </ScrollLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ScrollLink className={classes.scrollLink + " " + classes.navLink} to="shows" spy={true} smooth="easeOutQuint" duration={500} color="transparent">
          Shows
        </ScrollLink>
      </ListItem>
    </List>
  );
}

function RightHeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
            id="presspack-tooltip"
            title="Download our Press Pack"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
          <Button
            href="https://drive.google.com/open?id=1DdbOtK9zzpMCeecGV4adAotR6499oqzr"
            color="transparent"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <CloudDownload className={classes.icons} />&nbsp;Press pack
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
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
      </ListItem>
      <ListItem className={classes.listItem}>
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
      </ListItem>
      <ListItem className={classes.listItem}>
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
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="spotify-tooltip"
          title="Follow us on Spotify"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.spotify.com/killermantis?ref=killermantis-website"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <FontAwesomeIcon className={classes.icons} icon={faSpotify} />
          </Button>
        </Tooltip>
      </ListItem> */}
      <ListItem className={classes.listItem}>
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
            <FontAwesomeIcon className={classes.icons} icon={faSoundcloud} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
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
      </ListItem>
      <ListItem className={classes.listItem}>
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
              className={classes.svg}
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

        <Tooltip
          id="patreon-tooltip"
          title="Support us on Patreon"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.patreon.com/bePatron?u=28088162&redirect_uri=https://killermantis.com&utm_medium=headerLink"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <FontAwesomeIcon className={classes.icons} icon={faPatreon} />
          </Button>
        </Tooltip>

      </ListItem>
    </List>
  );
}

export default { RightHeaderLinks, LeftHeaderLinks };