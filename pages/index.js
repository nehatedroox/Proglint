import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Common.module.scss";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Home from "./src/home/Home";
import Contact from "./src/contact/Contact";

// import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className={styles.container}>
      {/* <button style={{ padding: "100px" }}>
        <a href="#footer">footer</a>
      </button> */}
      <Head style={styles.head_wrapper}></Head>
      <Navbar />
      {/* <div style={styles.Nav_wrapper_for_index}>
        <Navbar />
      </div> */}

      <main className={styles.main}>
        <Home />
      </main>
      <footer className={styles.footer_wrapper} id="footer">
        <Contact />
      </footer>
    </div>
  );
}
