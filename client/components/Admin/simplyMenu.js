import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import mini from "../../assets/img/d_mini.webp";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#596771",
    textTransform: "none",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  img: {
    margin: 5,
  },
}));
export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='sdush_menu'>
      <Button
        className={classes.btn}
        aria-controls='avatar-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        John Doe
        <img className={classes.img} src={mini} alt='mini_icon' />
      </Button>
      <Menu
        id='avatar-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='admin-cs30/singup-master'>
            <span className='nav_text'>Add new account</span>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
