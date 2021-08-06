import React from "react";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
const About = (contactUs) => {
  const router = useRouter();
  return (
    <div id="contactUs">
      <p>Hi this is About page.</p>
      {/* <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p> */}

      {/* <Button variant="contained" color="primary">
        material Button
      </Button>

      <ul className="link-wrapper">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>
      <Button
        onClick={() => router.push("/")}
        variant="contained"
        color="primary"
      >
        Back button{" "}
      </Button> */}
    </div>
  );
};
export default About;
