import { Box, CssBaseline, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Search } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "#cff0ff",
    height: "49rem",
  },
  search: {
    marginTop: "2px",
    paddingLeft: "7px",
    height: "30px",
    width: "180px",
    fontFamily: "Lato",
    fontSize: "12px",
    outline: "none",
    border: "none",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    margin: ".25em",
    backgroundColor: "white",
  },
  styling: {
    fontFamily: "Rubik",
    fontSize: "13px",
    marginLeft: "7px",
    marginTop: "0.7rem",
  },
  imageStyling: {
    width: "40px",
    height: "40px",
    marginLeft: "10px",
    marginTop: "5px",
    borderRadius: "100%",
  },

  profileState: {
    fontFamily: "Rubik",
    display: "flex",
    height: "50px",
    backgroundColor: "#238ff2",
    margin: ".25em",
  },
  textStyling: {
    display: "flex",
  },
  profileName: {
    color: "white",
    fontSize: "13px",
    marginLeft: "15px",
    marginTop: ".5rem",
  },
  profileDate: {
    color: "white",
    fontSize: "10px",
    fontWeight: "300",
    marginLeft: "5px",
  },
  imageStylingWhite: {
    width: "40px",
    height: "40px",
    marginLeft: "10px",
    marginTop: "5px",
  },
  profileNameWhite: {
    fontSize: "13px",
    marginLeft: "15px",
    marginTop: ".5rem",
  },
  profileStateWhite: {
    fontFamily: "Rubik",
    display: "flex",
    height: "50px",
    backgroundColor: "#ffffff",
    margin: ".25em",
  },
  profileDateWhite: {
    fontSize: "10px",
    fontWeight: "300",
    marginLeft: "5px",
  },
  statusImg: {
    width: "10px",
    height: "10px",
    marginLeft: "2.5rem",
    marginTop: "1.3rem",
  },
}));

export default function ProfileStatus() {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <Grid container spacing={1} className={classes.container}>
        <Grid item spacing={1}>
          <Grid item xs={12}>
            <Typography className={classes.styling} align="left">
              Patients
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.searchContainer}>
              <input
                className={classes.search}
                type="text"
                placeholder="Search Patients"
              />
              <Search />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.profileState}>
              <img
                className={classes.imageStyling}
                src="/media/profile_1.png"
                alt=""
              />
              <div classname={classes.textStyling}>
                <Typography className={classes.profileName}>
                  Sara Smith
                </Typography>
                <Typography className={classes.profileDate}>
                  20 Sep 2021
                </Typography>
              </div>
              <img
                className={classes.statusImg}
                src="/media/online.png"
                alt="online"
              />
            </div>
          </Grid>
          <Grid item xs={12} zeroMinWidth>
            <div className={classes.profileStateWhite}>
              <img
                className={classes.imageStylingWhite}
                src="/media/profile_2.png"
                alt=""
              />
              <div classname={classes.textStyling}>
                <Typography className={classes.profileNameWhite} noWrap>
                  James Jhonn
                </Typography>
                <Typography className={classes.profileDateWhite}>
                  no clearance
                </Typography>
              </div>
              <Box>
                <img
                  className={classes.statusImg}
                  src="/media/offline.png"
                  alt="offline"
                />
              </Box>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.profileStateWhite}>
              <img
                className={classes.imageStylingWhite}
                src="/media/profile_3.png"
                alt=""
              />
              <div classname={classes.textStyling}>
                <Typography className={classes.profileNameWhite}>
                  Patrice Page
                </Typography>
                <Typography className={classes.profileDateWhite}>
                  21 Sep 2021
                </Typography>
              </div>
              <img
                className={classes.statusImg}
                src="/media/online.png"
                alt="online"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
