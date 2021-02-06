import React from "react";
import blog1 from "../../assets/img/Layer_420.webp";
import blog2 from "../../assets/img/Layer_421.webp";
import blog3 from "../../assets/img/Layer_422.webp";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Paper } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  breadcrumbPaper: {
    padding: theme.spacing(1),
    width: 100 + "%",
    height: 100 + "%",
  },
}));

const FromBlog = ({ styles }) => {
  const classes = useStyles();
  const blogCartData = [blog1, blog2, blog3];

  return (
    <div className={styles.blog_conteiner}>
      <Grid item container xs={12} sm={12}>
        {blogCartData.map((img, i) => (
          <Grid item xs={12} sm={4} key={"blogCart" + i}>
            <Paper className={classes.breadcrumbPaper} elevation={0}>
              <div className={styles.blog_cart}>
                <span>
                  <div className={clsx(styles.zero, styles.tipicalL)}>02</div>
                  <div className={clsx(styles.feb, styles.tipicalL)}>feb</div>
                </span>
                <img src={img} alt='women' />
              </div>
              <div className={styles.blog_text}>
                <div className={clsx(styles.blog_text_header, styles.tipical)}>
                  Curabitur ligulasapien{" "}
                </div>
                <p>
                  Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi
                  maximus neque, vitae finibus erat odio eu lacus. Curabitur
                  malesuada erat.
                </p>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FromBlog;
