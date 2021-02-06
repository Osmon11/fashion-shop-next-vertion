import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import CustomRating from "./rating";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  addToCardButton: {
    backgroundColor: "#db3838",
    color: "#ffffff",
    cursor: "pointer",
    zIndex: 100,
    "&:hover": {
      backgroundColor: "#05c005",
    },
    "&:focus": {
      backgroundColor: "#db3830",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
      padding: "6px 10px",
    },
    [theme.breakpoints.down("870")]: {
      fontSize: "12px",
      padding: "5",
    },
  },
}));

export default function Slider({ slides, styles }) {
  const classes = useStyles();

  return (
    <Carousel
      autoPlay={false}
      indicators={true}
      animation='fade'
      timeout={400}
      timer={400}
    >
      {slides.map((slide, index) => {
        return (
          <Grid key={slide.name + index} item xs={12} sm={12}>
            <div className={styles.swipe_cart}>
              <div className={styles.panel}>
                <div className={styles.panel_cart}>
                  <img src={slide.cart1} alt='Printed Chiffon Dress' />
                </div>
                <div className={styles.panel_cart}>
                  <img src={slide.cart2} alt='Printed Chiffon Dress' />
                </div>
              </div>
              <div className={styles.swipe_text}>
                <div className={styles.panel_cost}>
                  <div className={clsx(styles.panel_cost_text, styles.tipical)}>
                    Printed Chiffon Dress
                  </div>
                  <div className={styles.cost_text}>
                    <div className={styles.cost_text_cost}>
                      <span className={styles.tipical}>£ 61.19</span>
                      <CustomRating />
                    </div>
                    <Button
                      className={classes.addToCardButton}
                      variant='contained'
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
                <div className={styles.panel_cost}>
                  <div className={clsx(styles.panel_cost_text, styles.tipical)}>
                    Printed Chiffon Dress
                  </div>
                  <div className={styles.cost_text}>
                    <div className={styles.cost_text_cost}>
                      <span className={styles.tipical}>£ 61.19</span>
                      <CustomRating />
                    </div>
                    <Button
                      className={classes.addToCardButton}
                      variant='contained'
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        );
      })}
    </Carousel>
  );
}
