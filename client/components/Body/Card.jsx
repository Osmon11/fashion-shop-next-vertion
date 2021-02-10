import { Button, Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import clsx from "clsx";

export function ShopCard({ classes, styles, cardImg, name, xs }) {
  return (
    <Grid item xs={xs}>
      <div className={styles.panel_cart}>
        <img src={cardImg} alt={name} />
      </div>
      <div>
        <div className={clsx(styles.panel_cost_text, styles.tipical)}>
          {name}
        </div>
        <div className={styles.cost_text}>
          <div className={styles.cost_text_cost}>
            <span className={styles.tipical}>£ 61.19</span>
            <Rating
              className={classes.themeSpacing}
              name='half-rating'
              placeholder='Моя оценка'
              defaultValue={2.5}
            />
          </div>
          <Button className={classes.addToCardButton} variant='contained'>
            Add to cart
          </Button>
        </div>
      </div>
    </Grid>
  );
}
