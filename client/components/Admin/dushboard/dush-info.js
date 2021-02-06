import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import expenses from "../../../assets/img/expenses.webp";
import taxes from "../../../assets/img/taxes.webp";
import profit from "../../../assets/img/profit.webp";
import totalAmount from "../../../assets/img/total_amount.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    width: "140px",
    height: "65px",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export function SpacingGrid() {
  const classes = useStyles();
  const widgets = [
    { cost: "$32300", text: "Всего затрат", img: expenses },
    { cost: "$16500", text: "налоги", img: taxes },
    { cost: "$22700", text: "Всего прибыль", img: profit },
    { cost: "$66400", text: "Общая сумма", img: totalAmount },
  ];
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={2}>
          {widgets.map((widget) => (
            <Grid item key={widget.text}>
              <Paper className={classes.paper} square>
                <div className='info_box'>
                  <div className='info_img'>
                    <img src={widget.img} alt='info icon' />
                  </div>
                </div>
                <div className='info_text'>
                  <div>{widget.cost}</div>
                  <span>{widget.text}</span>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
