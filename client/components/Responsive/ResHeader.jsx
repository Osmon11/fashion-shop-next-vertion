import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { showBasket } from "../Header/header";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CategoryIcon from "@material-ui/icons/Category";
import HomeIcon from "@material-ui/icons/Home";
import ShopIcon from "@material-ui/icons/Shop";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import GroupIcon from "@material-ui/icons/Group";
import InfoIcon from "@material-ui/icons/Info";
import BookIcon from "@material-ui/icons/Book";
import ContactsIcon from "@material-ui/icons/Contacts";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../../assets/img/Store.png";
import facebook from "../../assets/img/facebook.webp";
import twitter from "../../assets/img/twitter.webp";
import instagram from "../../assets/img/intsagram.webp";
import youtube from "../../assets/img/youtube.webp";
import Box from "@material-ui/core/Box";
import { Button, Menu, MenuItem } from "@material-ui/core";
import Link from "next/link";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  burger: {
    color: "#1976D2",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

let inputValue = React.createRef();

function searchGoods(e) {
  e.preventDefault();
  let ePersist = e.target;
  if (inputValue.current.value.length > 0) {
    console.log(inputValue.carent.value);
  } else {
    ePersist.closest(".search").classList.add("error");
    setTimeout(() => {
      ePersist.closest(".search").classList.remove("error");
    }, 2000);
  }
}

export const ResHeader = React.memo(() => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div id='resHeader'>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant='h6' noWrap className={classes.title}>
            <div className='res_roof_search'>
              <img className='res_nav_logo' alt='fashion_logo' src={logo} />
            </div>
          </Typography>
          <IconButton
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide, classes.burger)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <Box component='form' className='search'>
              <div className='search_wrapper'>
                <input
                  ref={inputValue}
                  id='res_searchGoods'
                  className='search_wrapper_input'
                  placeholder='Search'
                  type='text'
                  aria-label='Поиск товаров'
                  role='search'
                />
              </div>
              <div className='search_wrap_btn'>
                <button
                  onClick={searchGoods}
                  className='search_btn'
                  id='res-search-btn'
                  aria-label='Поиск товаров'
                ></button>
              </div>
            </Box>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={showBasket}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText>Shopping Cart (0)</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText>
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
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <span className='res_n_icon'>
              <img src={facebook} alt='facebook icon' />
            </span>
            <span className='res_n_icon'>
              <img src={twitter} alt='twitter icon' />
            </span>
            <span className='res_n_icon'>
              <img src={instagram} alt='instagram icon' />
            </span>
            <span className='res_n_icon'>
              <img src={youtube} alt='youtube icon' />
            </span>
          </ListItem>
        </List>
        <Divider />
        {navs.map((nav, index) => {
          return (
            <List key={nav.name + index}>
              <ListItem button>
                <ListItemIcon>{nav.icon}</ListItemIcon>
                <ListItemText>
                  <Link className='nav_text res_nav' href={nav.path}>
                    {nav.name}
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          );
        })}
      </Drawer>
    </div>
  );
});

const navs = [
  { name: "Home", path: "/login", icon: <HomeIcon /> },
  { name: "Shop", path: "/shop", icon: <ShopIcon /> },
  { name: "Features", path: "/features", icon: <FeaturedPlayListIcon /> },
  { name: "Mega Group", path: "/mega-group", icon: <GroupIcon /> },
  { name: "About", path: "/about", icon: <InfoIcon /> },
  { name: "Blog", path: "/blog", icon: <BookIcon /> },
  { name: "Contact", path: "/contact", icon: <ContactsIcon /> },
];
