import {
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "#ededed",
    height: "13rem",
    width: "70.1rem",
  },
  col1: {
    textAlign: "left",
    fontFamily: "Rubik",
    fontSize: "13px",
    marginTop: "1em",
  },
  col2: {
    textAlign: "right",
    fontFamily: "Rubik",
    fontWeight: "100",
    fontSize: "10px",
    color: "grey",
    marginTop: "1.2em",
  },
  col3: {
    textAlign: "right",
    fontFamily: "Rubik",
    fontWeight: "300",
    fontSize: "11px",
    marginTop: "1em",
  },
  col4: {
    color: "grey",
    marginTop: "5px",
  },
  fixedDetail: {
    fontFamily: "Arial",
    fontWeight: "100",
    fontSize: "12px",
    color: "Grey",
  },
  userData: {
    fontFamily: "Rubik",
    fontWeight: "100",
    fontSize: "12px",
    color: "Black",
  },
  headText: {
    position: "relative",
    fontFamily: "rubic",
    color: "white",
    width: "3.5rem",
    height: "3.5rem",
    backgroundColor: "green",
    borderRadius: "50%",
    left: "1rem",
    top: "1rem",
  },
  text: {
    paddingTop: "1rem",
  },
  alignStyle: {
    textAlign: "left",
  },
}));
export default function ProfileDetails() {
  const classes = useStyle();
  return (
    <>
      <CssBaseline>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={6}>
              <Typography className={classes.col1}>
                Patients Information
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.col2}>last-Updated:</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography className={classes.col3}>12:20 AM, Today</Typography>
            </Grid>
            <Grid item xs={1} className={classes.col4}>
              <MoreHoriz />
            </Grid>

            <Grid item xs={12}>
              <Typography
                style={{
                  fontFamily: "Rubik",
                  fontSize: "19px",
                  textAlign: "left",
                  paddingLeft: "110px",
                }}
                gutterbottom
              >
                Sara Smith
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <img
                src="./media/profile_1.png"
                alt=""
                style={{ borderRadius: "100%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <Grid display="flex" container spacing={1}>
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "left", paddingLeft: "42px" }}
                >
                  <Typography gutterBottom className={classes.fixedDetail}>
                    Phone:
                  </Typography>
                  <Typography gutterBottom className={classes.fixedDetail}>
                    Email:
                  </Typography>
                  <Typography gutterBottom className={classes.fixedDetail}>
                    Gender:
                  </Typography>
                  <Typography gutterBottom className={classes.fixedDetail}>
                    Age:
                  </Typography>
                </Grid>
                <Grid item xs={6} className={classes.alignStyle}>
                  <Typography gutterBottom className={classes.userData}>
                    302-625-5648
                  </Typography>
                  <Typography gutterBottom className={classes.userData}>
                    sara.smith@gmail.com
                  </Typography>
                  <Typography gutterBottom className={classes.userData}>
                    Female
                  </Typography>
                  <Typography gutterBottom className={classes.userData}>
                    45
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid display="flex" container spacing={1}>
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "left", paddingLeft: "30px" }}
                >
                  <Typography gutterBottom className={classes.fixedDetail}>
                    Surgery Type:
                  </Typography>
                  <Typography gutterBottom className={classes.fixedDetail}>
                    Suregry Date
                  </Typography>
                  <Typography gutterBottom className={classes.fixedDetail}>
                    Height (cm):
                  </Typography>
                  <Typography gutterBottom className={classes.fixedDetail}>
                    Weight (lb):
                  </Typography>
                  <Typography gutterBottom className={classes.fixedDetail}>
                    BMI:
                  </Typography>
                </Grid>
                <Grid item xs={6} className={classes.alignStyle}>
                  <Typography gutterBottom className={classes.userData}>
                    Rotater Cuff Repair
                  </Typography>
                  <Typography gutterBottom className={classes.userData}>
                    15 Oct 2021
                  </Typography>
                  <Typography gutterBottom className={classes.userData}>
                    163
                  </Typography>
                  <Typography gutterBottom className={classes.userData}>
                    110
                  </Typography>
                  <Typography gutterBottom className={classes.userData}>
                    19
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid display="flex" container spacing={1}>
                <Grid item xs={6} className={classes.alignStyle}>
                  <Typography gutterBottom className={classes.fixedDetail}>
                    Anesthesiologist:
                  </Typography>
                  <Typography gutterBottom className={classes.fixedDetail}>
                    Anesthesiologist Phone:
                  </Typography>
                  <Typography gutterBottom className={classes.fixedDetail}>
                    Anesthesiologist Email:
                  </Typography>
                </Grid>
                <Grid item xs={6} className={classes.alignStyle}>
                  <Typography gutterBottom className={classes.userData}>
                    Dr.Christina hardaway
                  </Typography>
                  <Typography gutterBottom className={classes.userData}>
                    301-896-8745
                  </Typography>
                  <Typography gutterBottom className={classes.userData}>
                    christina@h3a.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Typography gutterbottom className={classes.fixedDetail}>
                Surgery Clearance
              </Typography>
              <div className={`${classes.headText} ${classes.text}`}>
                <Typography>Yes</Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </CssBaseline>
    </>
  );
}
