import React from "react";
import ltelly from "../../assets/img/white-telly.webp";
import facebook from "../../assets/img/facebook.webp";
import twitter from "../../assets/img/twitter.webp";
import instagram from "../../assets/img/intsagram.webp";
import youtube from "../../assets/img/youtube.webp";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Grid, Menu, MenuItem } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBarRoot: {
    backgroundColor: "transparent",
    padding: 0,
  },
  appBarRoot3: {
    backgroundColor: "#000000",
  },
  sellectButton: {
    width: 100 + "%",
    height: 100 + "%",
  },
}));

export const Header = React.memo(() => {
  let classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} id='appBars'>
      <AppBar className={classes.appBarRoot} position='static'>
        <Toolbar className={classes.appBarRoot}>
          <div className='s_input'>
            <div className='roof_search' />
            <div className='search'>
              <div className='search_wrapper'>
                <input
                  ref={inputValue}
                  id='searchGoods'
                  className='search_wrapper_input'
                  placeholder='Search'
                  type='text'
                  aria-label='Поиск товаров'
                  role='search'
                />
              </div>
              <div className='select_box'>
                <Button
                  className={classes.sellectButton}
                  aria-controls='simple-menu'
                  aria-haspopup='true'
                  onClick={handleClick}
                >
                  Categories
                </Button>
                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>For men</MenuItem>
                  <MenuItem onClick={handleClose}>For women</MenuItem>
                  <MenuItem onClick={handleClose}>For kids</MenuItem>
                </Menu>
              </div>
              <div className='search_wrap_btn' onClick={searchGoods}>
                <button
                  type='submit'
                  className='search_btn'
                  aria-label='Поиск товаров'
                ></button>
              </div>
            </div>
            <div className='nav_icons'>
              {arrAppBar2.map((x, i) => {
                return (
                  <span key={x.path + i + "icon"} className='n_icon'>
                    <Link href={x.path}>
                      <img src={x.name} alt='icon' />
                    </Link>
                  </span>
                );
              })}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar className={classes.appBarRoot3} position='static'>
        <Toolbar>
          <Grid container>
            {arrAppBar1.map((x, i) => {
              return (
                <Grid key={x.name + i} item xs={2} sm={2}>
                  <Link href={x.path}>
                    <div className='nav nav_text tipicalL'>{x.name}</div>
                  </Link>
                </Grid>
              );
            })}
            <Grid item xs={2} sm={2}>
              <span className='shopping_cart tipicalL' onClick={showBasket}>
                <img src={ltelly} id='telly_icon' alt='light telly icon' />{" "}
                Shopping Cart (0)
              </span>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
});

let inputValue = React.createRef();
export const searchGoods = (event) => {
  event.preventDefault();
  let ePersist = event.target;

  if (inputValue.current.value.length > 0) {
    console.log(inputValue.carent.value);
  } else {
    ePersist.closest(".search").classList.add("error");
    setTimeout(() => {
      ePersist.closest(".search").classList.remove("error");
    }, 2000);
  }
};

export function showBasket(e) {
  if (e.target.closest(".wrapper")) {
    console.log("exit");
    e.target.closest(".wrapper").classList.add("show");
  }
}

const arrAppBar1 = [
  { path: "/login", name: "Home" },
  { path: "/shop", name: "Shop" },
  { path: "/features", name: "Features" },
  { path: "/about", name: "About" },
  { path: "/Contact", name: "Contact" },
];
const arrAppBar2 = [
  { path: "*", name: facebook },
  { path: "*", name: twitter },
  { path: "*", name: instagram },
  { path: "*", name: youtube },
];
