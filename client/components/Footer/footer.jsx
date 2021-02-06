import React from "react";
import logo from "../../assets/img/Store.png";
import location from "../../assets/img/lockation.webp";
import mail from "../../assets/img/mail.webp";
import phon from "../../assets/img/telephon.webp";
import { searchGoods } from "../Header/header";
import { Button, makeStyles, Menu, MenuItem } from "@material-ui/core";
import styles from "./footer.module.css";

const useStyles = makeStyles((theme) => ({
  sellectButton: {
    height: 100 + "%",
  },
}));

export const Footer = React.memo(() => {
  const classes = useStyles();
  let inputValue = React.createRef();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.f_body}>
        <div className={styles.f_fashion}>
          <div className={styles.logo_case}>
            <img className={styles.footer_logo} alt='fashion_logo' src={logo} />
          </div>
          <div className={styles.fashion_text}>
            <span>
              Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi
              maximus neque, vitae finibus erat odio eu lacus. Curabitur
              malesuada erat eros, quis dignissim dui accumsan id. Cras non
              imperdiet metus. Sed nec turpis nec.
            </span>
          </div>
        </div>
        <div className={styles.f_form}>
          <div className={styles.sing_up}>
            <h2>Sign up for our Newsletter !</h2>
            <div className='search'>
              <div className='search_wrapper'>
                <input
                  ref={inputValue}
                  id='footerSubmit'
                  className='search_wrapper_input'
                  placeholder='hello@psdfreebies.com'
                  type='text'
                  aria-label='Поиск товаров'
                  role='search'
                />
              </div>
              <div className='search_wrap_btn' onClick={searchGoods}>
                <button
                  type='submit'
                  className='search_btn'
                  id='search-btn'
                  aria-label='Поиск товаров'
                ></button>
              </div>
            </div>
          </div>
          <div className={styles.f_info}>
            <div className={styles.information}>
              <span>information</span>
              <ul>
                {arrUl1.map((x, i) => {
                  return (
                    <li key={x.name + i}>
                      <Button
                        className={classes.sellectButton}
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                        onClick={handleClick}
                      >
                        ►{x.name}
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        elevation={3}
                      >
                        <MenuItem onClick={handleClose}>For men</MenuItem>
                        <MenuItem onClick={handleClose}>For women</MenuItem>
                        <MenuItem onClick={handleClose}>For kids</MenuItem>
                      </Menu>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.customer}>
              <span>customer care</span>
              <ul>
                {arrUl2.map((x, i) => {
                  return (
                    <li key={x.name + i}>
                      <Button
                        className={classes.sellectButton}
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                        onClick={handleClick}
                      >
                        ►{x.name}
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        elevation={3}
                      >
                        <MenuItem onClick={handleClose}>For men</MenuItem>
                        <MenuItem onClick={handleClose}>For women</MenuItem>
                        <MenuItem onClick={handleClose}>For kids</MenuItem>
                      </Menu>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.store}>
              <span>Store Information</span>
              <ul>
                <li>
                  <img src={location} alt='icon location' />
                  address: Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <img src={mail} alt='icon mail' />
                  email: demo@posthemes.com
                </li>
                <li>
                  <img src={phon} alt='icon phon' />
                  phone: 0987.654.321
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.f_end}>
        © {new Date().getFullYear()} Psdfreebies. All Rights Reserved
      </div>
    </footer>
  );
});

const arrUl1 = [
  {
    name: "Careers",
  },
  {
    name: "Investor Relations",
  },
  {
    name: "Press Releases",
  },
  {
    name: "Shop with Points",
  },
];
const arrUl2 = [
  {
    name: "Returns",
  },
  {
    name: "Shipping Info",
  },
  {
    name: "Gift Cards",
  },
  {
    name: "Size Guide",
  },
];
