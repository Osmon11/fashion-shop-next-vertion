import React from "react";
import styles from "./body.module.css";
import woman1 from "../../assets/img/Layer_430.webp";
import woman2 from "../../assets/img/Layer_428.webp";
import woman3 from "../../assets/img/Layer_429.webp";
import forman from "../../assets/img/Layer_415.webp";
import OverSlider from "./overSlider";
import FromBlog from "./fromBlog";
import Grid from "@material-ui/core/Grid";
import ActiveLastBreadcrumb from "../Responsive/res-bread-crumbs";
import { Button, makeStyles, Paper, Link } from "@material-ui/core";
import Slider from "./Slider";
import Mcart1 from "../../assets/img/Layer_413.webp";
import Mcart2 from "../../assets/img/Layer_414.webp";
import forwoman from "../../assets/img/Layer_416.webp";
import Wcart1 from "../../assets/img/Layer_418.webp";
import Wcart2 from "../../assets/img/Layer_417.webp";
import NextLink from "next/link";

export const Body = () => {
  const classes = useStyles();
  let descrip = [
    { img: woman1, text: "clothes" },
    { img: woman2, text: "footwear" },
    { img: woman3, text: "hand bags" },
  ];
  return (
    <div className={styles.body}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.breadcrumbPaper} elevation={0} square>
            <ActiveLastBreadcrumb />
          </Paper>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          {descrip.map((item) => {
            return (
              <Grid item xs={12} sm={4} key={item.text}>
                <Paper className={classes.breadcrumbPaper}>
                  <div className={styles.photos_cart}>
                    <span className={styles.descrip}>
                      <div className={styles.descrip_text}>
                        <p className={styles.tipicalL}>{item.text}</p>
                        <Button
                          className={classes.readMoreButton}
                          variant='contained'
                        >
                          <NextLink href='/' style={{ color: "#fff" }}>
                            <Link
                              style={{ color: "#fff", textDecoration: "none" }}
                            >
                              Click here
                            </Link>
                          </NextLink>
                        </Button>
                      </div>
                    </span>
                    <img src={item.img} alt='woman' />
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className={styles.for_man}>
              <div className={styles.man_img}>
                <span className={styles.descrip}>
                  <div className={styles.descrip_text}>
                    <p className={styles.tipicalL}>for men</p>
                    <Button
                      className={classes.readMoreButton}
                      variant='contained'
                    >
                      <NextLink href='/' style={{ color: "#fff" }}>
                        <Link style={{ color: "#fff", textDecoration: "none" }}>
                          More
                        </Link>
                      </NextLink>
                    </Button>
                  </div>
                </span>
                <img src={forman} alt='woman' />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.slider_man}>
              <Slider slides={forManslides} styles={styles} />
            </div>
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className={styles.slider_woman}>
              <Slider slides={forWomanslides} styles={styles} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.for_man}>
              <div className={styles.woman_img}>
                <span className={styles.descrip}>
                  <span className={styles.descrip_text}>
                    <p className={styles.tipicalL}>for women</p>
                    <Button
                      className={classes.readMoreButton}
                      variant='contained'
                    >
                      <NextLink href='/'>
                        <Link style={{ color: "#fff", textDecoration: "none" }}>
                          More
                        </Link>
                      </NextLink>
                    </Button>
                  </span>
                </span>
                <img src={forwoman} alt='woman' />
              </div>
            </div>
          </Grid>
        </Grid>
        <OverSlider styles={styles} />
        <Grid item container xs={12} spacing={2}>
          <FromBlog styles={styles} />
        </Grid>
      </Grid>
    </div>
  );
};

export const useStyles = makeStyles((theme) => ({
  themeSpasing: {
    padding: theme.spacing(1),
  },
  breadcrumbPaper: {
    padding: theme.spacing(1),
    width: 100 + "%",
    height: 100 + "%",
  },
  readMoreButton: {
    backgroundColor: "#db3838",
    color: "#ffffff",
    cursor: "pointer",
    zIndex: 100,
    "&:hover": {
      backgroundColor: "#db3830",
      transform: "scale(1.1)",
    },
    "&:focus": {
      backgroundColor: "#db3830",
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
      padding: "6px 10px",
    },
    [theme.breakpoints.down("870")]: {
      fontSize: "11px",
      padding: "5",
      textTransform: "capitalize",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
      padding: "6px 10px",
      textTransform: "uppercase",
    },
  },
}));

let forManslides = [
  {
    name: "fMslide",
    cart1: Mcart1,
    cart2: Mcart2,
  },
  {
    name: "sMslide",
    cart1: Mcart1,
    cart2: Mcart2,
  },
];

let forWomanslides = [
  {
    name: "fWslide",
    cart1: Wcart1,
    cart2: Wcart2,
  },
  {
    name: "sWslide",
    cart1: Wcart1,
    cart2: Wcart2,
  },
];
