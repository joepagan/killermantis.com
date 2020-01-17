/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// scroll links
import * as Scroll from 'react-scroll';
let ScrollLink = Scroll.Link;
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
        <ScrollLink className={classes.scrollLink} to="about" spy={true} smooth="easeOutQuint" duration={500}>
          <Button
            href="#about"
            color="transparent"
            className={classes.navLink}
          >
            About
          </Button>
        </ScrollLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ScrollLink className={classes.scrollLink} to="media" spy={true} smooth="easeOutQuint" duration={500}>
          <Button
            href="#media"
            color="transparent"
            className={classes.navLink}
          >
            Media
          </Button>
        </ScrollLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ScrollLink className={classes.scrollLink} to="profiles" spy={true} smooth="easeOutQuint" duration={500}>
          <Button
            href="#profiles"
            color="transparent"
            className={classes.navLink}
          >
            Profiles
          </Button>
        </ScrollLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ScrollLink className={classes.scrollLink} to="shows" spy={true} smooth="easeOutQuint" duration={500}>
          <Button
            href="#shows"
            color="transparent"
            className={classes.navLink}
          >
            Shows
          </Button>
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
            href="https://drive.google.com/drive/u/0/folders/0Bzsy3pa2O7zCZHdnT213SFBjVnc"
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
            href="https://twitter.com/killermantis?ref=killermantis-website"
            target="_blank"
            rel="noopener noreferrer"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
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
            href="https://www.facebook.com/killermantis?ref=killermantis-website"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
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
            href="https://www.instagram.com/killermantis?ref=killermantis-website"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
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
            <i className={classes.socialIcons + " fab fa-spotify"} />
          </Button>
        </Tooltip>
      </ListItem>
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
            <i className={classes.socialIcons + " fab fa-soundcloud"} />
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
            href="https://www.youtube.com/killermantis?ref=killermantis-website"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-youtube"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default { RightHeaderLinks, LeftHeaderLinks };