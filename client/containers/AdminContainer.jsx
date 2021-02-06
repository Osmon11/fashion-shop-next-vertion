import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import avaImg from "../assets/img/avatar.webp";
import d_search from "../assets/img/d_search.webp";
import SimplyMenu from "../components/Admin/simplyMenu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import BarChartIcon from "@material-ui/icons/BarChart";
import BallotIcon from "@material-ui/icons/Ballot";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Drawer,
  Divider,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import Link from "next/link";
import withPrivateRoute from "../components/withPrivateRoute";
import FeedbackCollapse from "../components/feedbackCollapse";
import { logoutUser } from "../lib/store";

function Footer() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"©"}
      <Link href='/'>All Rights Reserved</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#303d50",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: "#ffffff",
    width: 100 + "%",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color: "#35b8eb",
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  drowIcon: {
    color: "#ffffff",
  },
  modal: {
    minWidth: 100 + "%",
    position: "absolute",
    zIndex: 10000,
  },
}));

const AdminContainer = ({ modal, error, alert, children }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const tabs = [
    { path: "", name: "Аналитика", icon: <DashboardIcon /> },
    { path: "/sales", name: "Продажи", icon: <BarChartIcon /> },
    { path: "/finance", name: "Финансы", icon: <AccountBalanceWalletIcon /> },
    { path: "/goods", name: "Товары", icon: <ShoppingCartIcon /> },
    { path: "/news", name: "Новости", icon: <BallotIcon /> },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FeedbackCollapse value={modal} style={classes.modal} />
      <div className={classes.root}>
        <AppBar
          position='absolute'
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge='start'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              className={classes.title}
            >
              <div className='d_search for'>
                <button className='dush_search_btn'>
                  <img src={d_search} alt='search icon' />
                </button>
                <input
                  className='dush_search'
                  placeholder='Поиск...'
                  type='text'
                  name='search'
                  role='search'
                />
              </div>
              <div className='dush_menu for'>
                <div className='dush_avatar for'>
                  <Avatar alt='john doe' src={avaImg} />
                  <SimplyMenu />
                </div>
                <button
                  className='dush_exit nav_text'
                  onClick={() => dispatch(logoutUser())}
                >
                  Выход
                </button>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <span className='h_dush dush_header'>Dash</span>
            <span className='h_board dush_header'>Board</span>
            <IconButton
              className={clsx(classes.drowIcon)}
              onClick={handleDrawerClose}
            >
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {tabs.map((tab) => (
              <Link href={"/admin" + tab.path} key={tab.path}>
                <ListItem button onClick={handleDrawerClose}>
                  <ListItemIcon>{tab.icon}</ListItemIcon>
                  <span style={{ color: "#58606D" }}>
                    <ListItemText primary={tab.name} />
                  </span>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth='lg' className={classes.container}>
            {children}
            <Box pt={4}>
              <Footer />
            </Box>
          </Container>
        </main>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    modal: state.reducer.modal,
    waning: state.reducer.warning,
    error: state.reducer.error,
    success: state.reducer.success,
    info: state.reducer.info,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      alert: (payload) => {
        return { type: "WARNING_ALERT", payload: payload };
      },
    },
    dispatch
  );
};

export default withPrivateRoute(
  connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
);
{
  /* <Typography component='h2' variant='h6' color='primary' gutterBottom></Typography> */
}
