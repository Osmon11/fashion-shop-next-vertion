import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handle = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Breadcrumbs aria-label="breadcrumb" id="breadcrumbs">
      <Link color="inherit" href="/go-qickly/women" onClick={handleClick}>
        Women
      </Link>
      <Link color="inherit" href="/go-qickly/men" onClick={handleClick}>
        Men
      </Link>
      <Link color="inherit" href="/go-qickly/fashion" onClick={handleClick}>
        Fashion
      </Link>
      <Link color="inherit" href="/go-qickly/features" onClick={handleClick}>
        Features
      </Link>
      <Link
        color="textPrimary"
        href="/go-qickly/accessories"
        onClick={handle}
        aria-current="page"
        >
        Accessories
        </Link>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link color="inherit" href="/go-qickly/caps&hats" onClick={handleClick}>
        Caps & Hats
      </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link color="inherit" href="/go-qickly/fragrances" onClick={handleClick}>
        Fragrances
      </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link color="inherit" href="/go-qickly/bags&wallets" onClick={handleClick}>
        Bags & Wallets
      </Link></MenuItem>
      <MenuItem><Link color="inherit" href="/go-qickly/clothings" onClick={handleClick}>
        Clothings
      </Link></MenuItem>
      </Menu>
    </Breadcrumbs>
  );
}