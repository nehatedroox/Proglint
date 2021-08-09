import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LockIcon from "@material-ui/icons/Lock";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpen(true);
  };
 
  return (
    <AppBar position="fixed">
      <Toolbar className={styles.navbar_wrapper}>
        <div className={styles.menu_bar}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>

        <Button className={styles.title2}>
          <Typography variant="h4">Tedroox-Max-Pro</Typography>
        </Button>

        <Button
          className={styles.title}
          //onClick={() => handleNavBar}
        >
          <Typography variant="h4">
            <Link href="#home">
              <a title="home" href="#home">
                Home
              </a>
            </Link>
          </Typography>
        </Button>

        <Button className={styles.title}>
          <Typography variant="h4">
            <Link href="#shirts">
              <a title="Shirts" href="#shirts">
                SHIRTS
              </a>
            </Link>
          </Typography>
        </Button>
        <Button className={styles.title}>
          <Typography variant="h4">
            <Link href="#pants">
              <a title="pants" href="#pants">
                PANTS
              </a>
            </Link>
          </Typography>
        </Button>
        <Button className={styles.title}>
          <Typography variant="h4">
            <Link href="#suits">
              <a title="suits" href="#suits">
                SUITS
              </a>
            </Link>
          </Typography>
        </Button>

        <Button
          color="inherit"
          onClick={handleOpen}
          className={styles.lock_button}
        >
          <AssignmentIndIcon style={{ fontSize: 50 }} />
        </Button>
        <Button
          color="inherit"
          onClick={handleOpen}
          className={styles.lock_button}
        >
          <LockIcon style={{ fontSize: 50 }} />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
