import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Lottie from "react-lottie";
import ButtonArrow from "./ui/ButtonArrow";
import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import inforBackground from "../assets/infoBackground.svg";

const useStyle = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    margin: "0 2em 10% 0",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },

  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },

  buttonContainer: {
    marginTop: "1em",
  },

  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },

  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },

  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },

  herotextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },

  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },

  subtitle: {
    marginBottom: "1em",
  },

  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },

  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },

  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },

  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },

  inforBackground: {
    backgroundImage: `url(${inforBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

function LandingPage(props) {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* Hero Block */}
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.herotextContainer}>
            <Typography variant="h2" align="center">
              Bring West Coast Technology <br /> to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie
              options={defaultOptions}
              height={"100%"}
              width={"100%"}
            ></Lottie>
          </Grid>
        </Grid>
      </Grid>

      {/* Customer Service Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customSoftwareIcon}
              alt="custom software icon"
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Ios/android Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either moblie platform.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginRight: matchesSM ? 0 : "5em",
            }}
          >
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt="Mobile icon"
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Website Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={websitesIcon}
              alt="website icon"
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Revolution Cover */}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "100em", marginTop: "12em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Vision insights coupled with cutting-edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      {/* The infomation */}
      <Grid item>
        <Grid
          container
          style={{ height: "80em" }}
          alignItems="center"
          direction="row"
        >
          <Grid
            item
            container
            style={{
              position: "absolute",
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
            spacing={matchesXS ? 10 : 0}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={"white"} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say hello!{" "}
                  <span role="img" aria-label="hello">
                    😊
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={"white"} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.inforBackground} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;