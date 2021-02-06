import React from "react";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    textTransform: "none",
  },
}));

export function GoodsList() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.header} item xs={12}>
        <span className='chart_header chart_head'>List of all products</span>
        <Button className={classes.btn} variant='contained' color='secondary'>
          <Link href='/admin-cs30/goods&list/add_goods'>
            <a style={{ color: "#ffffff" }}>Add Goods</a>
          </Link>
        </Button>
      </Grid>
      {/* {this.orders.map((item, index) => {
        return (
          <Grid item xs={12}>
            <Paper>
							<Grid item xs={4}> <img  className="panel-cart" src={item.img} alt={item.name} /></Grid>
							<Grid item xs={8}>
								<div><NavLink className="panel-cost-text tipical" to={"/admin-cs30/goods&list/{item.category + item.id}"}>{item.name}</NavLink></div>
							</Grid>
						</Paper>
          </Grid>
         );
      })} */}
    </Grid>
  );
}
