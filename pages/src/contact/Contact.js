import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Contact.module.scss";
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

import Link from "next/link";
const Contact = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(true);

  const handleActiveButton = () => {
    setActiveButton(!activeButton);
    console.log("activeButton", activeButton);
  };
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_container_first_row}>
        <div>
          {" "}
          <Typography variant="h1" className={styles.title}>
            Tedroox-Max-Pro
          </Typography>
        </div>
        <div className={styles.order_container}>
          <Typography variant="h4" className={styles.title}>
            Your Order
          </Typography>
          <Link href="/blog/hello-world">
            <a>Order details</a>
          </Link>
          <Link href="/blog/hello-world">
            <a>Your cart</a>
          </Link>
          <Link href="/blog/hello-world">
            <a>Rescent orders</a>
          </Link>
          <Link href="/blog/hello-world">
            <a>Invoice</a>
          </Link>
        </div>
        <div className={styles.order_container}>
          {" "}
          <Typography variant="h4" className={styles.title}>
            Customized
          </Typography>
          <Link href="/blog/hello-world">
            <a>Shirts</a>
          </Link>
          <Link href="/blog/hello-world">
            <a>Pants</a>
          </Link>
          <Link href="/blog/hello-world">
            <a>Suits</a>
          </Link>
        </div>
        <div className={styles.order_container}>
          <Typography variant="h4" className={styles.title}>
            Company
          </Typography>

          <Link href="/blog/hello-world">
            <a>About Us</a>
          </Link>
          <Link href="/blog/hello-world">
            <a>Contact Us</a>
          </Link>
          <Link href="/blog/hello-world">
            <a>History</a>
          </Link>
        </div>

        <div className={styles.footer_buttons}>
          <Button
           // className={styles.footer_register_button}
            className={
              activeButton
                ? styles.active_background
                : styles.Inactive_background
            }
            onClick={handleActiveButton}
          >
            Register
          </Button>
          <Button
           // className={styles.footer_login_button}
            className={
              activeButton
                ? styles.Inactive_background
                : styles.active_background
            }
            onClick={handleActiveButton}
          >
            Login
          </Button>
        </div>
      </div>
      <hr />
      <div className={styles.authorization}>
        <Typography variant="h5" className={styles.title}>
          © 2013 Tedroox Technologies and Data Services Private Limited. All
          rights reserved.
        </Typography>
        <Typography variant="h5" className={styles.title1}>
          Follow Us:
        </Typography>
        <div>
          <FacebookIcon
            style={{ fontSize: 50, marginRight: "30px", color: "e44017" }}
          />
          <InstagramIcon
            style={{ fontSize: 50, marginRight: "30px", color: "e44017" }}
          />
          <TwitterIcon
            style={{ fontSize: 50, marginRight: "30px", color: "e44017" }}
          />
          <YouTubeIcon
            style={{ fontSize: 50, marginRight: "30px", color: "e44017" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
