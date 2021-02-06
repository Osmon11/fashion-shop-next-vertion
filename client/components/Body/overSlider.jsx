import React from "react";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import cart1 from "../../assets/img/Layer_423.webp";
import cart2 from "../../assets/img/Layer_425.webp";
import cart3 from "../../assets/img/Layer_424.webp";
import cart4 from "../../assets/img/Layer_426.webp";
import { Button, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  themeSpasing: {
    padding: theme.spacing(1),
  },
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
  gridOverflowHidden: {
    overflow: "hidden",
  },
}));

const OverSlider = ({ styles }) => {
  const classes = useStyles();
  const theme = useTheme();
  let match = useMediaQuery(theme.breakpoints.down("xs"));
  let arrMd = [
    [cart1, cart2, cart3, cart4],
    [cart1, cart2, cart3, cart4],
    [cart1, cart2, cart3, cart4],
  ];
  let arrXs = [
    [cart1, cart2],
    [cart3, cart4],
  ];

  return (
    <Grid item container xs={12} spacing={2}>
      <Grid item container xs={12} spacing={3}>
        <Grid item xs={4} sm={4}>
          <span className={styles.over_header}>New arrivals</span>
        </Grid>
        <Grid item xs={4} sm={4}>
          <span className={styles.over_header}>Best Sellers</span>
        </Grid>
        <Grid item xs={4} sm={4}>
          <span className={styles.over_header}>Popular</span>
        </Grid>
      </Grid>
      <Grid className={classes.gridOverflowHidden} item xs={12}>
        <Carousel
          timeout={400}
          timer={400}
          autoPlay={false}
          indicators={true}
          animation={match ? "fade" : "slide"}
          navButtonsAlwaysVisible={false}
        >
          {match
            ? arrXs.map(function (x, i) {
                return (
                  <Grid key={"arrSm" + i} item container xs={12} spacing={2}>
                    {x.map((slide, index) => {
                      return (
                        <Grid item xs={6} key={index}>
                          <div className={styles.panel_cart}>
                            <img src={slide} alt='Printed Chiffon Dress' />
                          </div>
                          <div>
                            <div
                              className={
                                (styles.panel_cost_text, styles.tipical)
                              }
                            >
                              Printed Chiffon Dress
                            </div>
                            <div className={styles.cost_text}>
                              <div className={styles.cost_text_cost}>
                                <span className={styles.tipical}>£ 61.19</span>
                                <Rating
                                  className={classes.themeSpacing}
                                  name='half-rating'
                                  placeholder='Моя оценка'
                                  defaultValue={2.5}
                                  precision={0.5}
                                />
                              </div>
                              <Button
                                className={classes.addToCardButton}
                                variant='contained'
                              >
                                Add to cart
                              </Button>
                            </div>
                          </div>
                        </Grid>
                      );
                    })}
                  </Grid>
                );
              })
            : arrMd.map(function (x, i) {
                return (
                  <Grid key={"arrMd" + x} item container xs={12} spacing={2}>
                    {x.map((slide, index) => {
                      return (
                        <Grid item xs={3} key={index}>
                          <div className={styles.panel_cart}>
                            <img src={slide} alt='Printed Chiffon Dress' />
                          </div>
                          <div>
                            <div
                              className={
                                (styles.panel_cost_text, styles.tipical)
                              }
                            >
                              Printed Chiffon Dress
                            </div>
                            <div className={styles.cost_text}>
                              <div className={styles.cost_text_cost}>
                                <span className={styles.tipical}>£ 61.19</span>
                                <Rating
                                  className={classes.themeSpacing}
                                  name='half-rating'
                                  placeholder='Моя оценка'
                                  defaultValue={2.5}
                                  precision={0.5}
                                />
                              </div>
                              <Button
                                className={classes.addToCardButton}
                                variant='contained'
                              >
                                Add to cart
                              </Button>
                            </div>
                          </div>
                        </Grid>
                      );
                    })}
                  </Grid>
                );
              })}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default OverSlider;
