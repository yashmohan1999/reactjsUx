import React from "react";
import {
  AppBar,
  CssBaseline,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyle = makeStyles((theme) => ({
  logo: {
    marginRight: "1rem",
  },
  selector: {
    align: "center",
    margin: "1rem",
    fontFamily: "Rubik",
    fontSize: "12px",
  },
  container: {
    align: "center",
    marginLeft: "2rem",
    padding: theme.spacing(3.1, 1, 3.1, 1),
    color: "#ffffff",
    backgroundColor: "#238ff2",
    fontFamily: "Rubik",
    fontSize: "10px",
  },
  profile: {
    marginLeft: 5,
    marginRight: 5,
    width: "30px",
    height: "30px",
  },
  lastContainer: {
    margin: theme.spacing(1, 105, 1, 1),
    fontFamily: "Rubik",
    fontSize: "12px",
  },
  navbar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function Header() {
  const classes = useStyle();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        className={classes.navbar}
        justify-content="justify"
        color="Paper"
      >
        <Toolbar>
          <img className={classes.logo} src="/media/logo.png" alt="" />

          <Typography
            className={classes.container}
            varient="caption"
            Disablegutter
          >
            PATIENTS
          </Typography>
          <Typography className={classes.selector} varient="button">
            CALENDER
          </Typography>
          <Typography className={classes.selector} varient="button">
            USERS
          </Typography>
          <Typography className={classes.lastContainer} varient="button">
            BILLING
          </Typography>
          <NotificationsIcon />
          <img className={classes.profile} src="/media/profile.png" alt="" />
        </Toolbar>
      </AppBar>
    </>
  );
}
