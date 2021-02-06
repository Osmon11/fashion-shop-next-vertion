import React from "react";
import { Chart } from "./Chart";
import { ChartDeposits } from "./ChartDeposits";
import { Goods } from "../goods";
import { SpacingGrid } from "./dush-info";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  paper: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  chart: {
    height: "100%",
  },
  fixedHeight: {
    height: "100%",
  },
}));

export function Dushboard() {
  const classes = styles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SpacingGrid />
      </Grid>
      <Grid item xs={12}>
        <Paper className={clsx(classes.chart)}>
          <ChartDeposits />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Goods />
        </Paper>
      </Grid>
    </Grid>
  );
}
