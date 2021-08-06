import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LockIcon from "@material-ui/icons/Lock";
import styles from "./Navbar.module.scss";
import Home from "../src/home/Home";
import Link from "next/link";
import About from "../src/about/about";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="static">
      <Toolbar className={styles.navbar_wrapper}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={styles.menuButton}
        >
          <MenuIcon style={{ fontSize: 50, marginRight: "10px" }} />
        </IconButton>

        <Button className={styles.title}>
          <Typography variant="h4">Tedroox-Max-Pro</Typography>
        </Button>
        <Button className={styles.title} onClick={() => handleNavBar}>
          <Typography variant="h4">
            <Link href="/">
              <a title="About Page">Home</a>
            </Link>
          </Typography>
        </Button>
        <Button className={styles.title}>
          <Typography variant="h4">
            {/* <Link href="/shirts">
              <a title="About Page">SHIRTS</a>
             
            </Link> */}

            <a href="#contactUs" title="About Page">
              {" "}
              <About />{" "}
            </a>
          </Typography>
        </Button>
        <Button className={styles.title}>
          <Typography variant="h4">
            <Link href="/pants">
              <a title="About Page">PANTS</a>
            </Link>
          </Typography>
        </Button>
        <Button className={styles.title}>
          <Typography variant="h4">
            <Link href="/suits">
              <a title="About Page">SUITS</a>
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

        <div id="contactUs">
          <h2>Contact Us section </h2>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// function About() {
//   return <section id="contactUs">Information About Page</section>;
// }
