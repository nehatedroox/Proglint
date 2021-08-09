import React from "react";
import { useRouter } from "next/router";
import { Button, Grid } from "@material-ui/core";
import homePic from "../../../public/homepic.jpg";
import Image from "next/image";
import styles from "./Home.module.scss";
import ImageCard from "../../components/card/ImageCard";
import CardComponent from "../../components/card/Card";
import background from "./img/placeholder.png";
import FormComponent from "../../components/forms/Form";

const Home = () => {
  const router = useRouter();

  // const styling = {
  //   backgroundImage: "url('../../../public/homepic.jpg')",
  //   width: "100%",
  //   height: "100%",
  // };
  return (
    <div className={styles.home_container}>
      <section id="home">
        <div className={styles.first_image_section}>
          <Image
            src={homePic}
            alt="Picture of the author"
            width="3000"
            height="800"
            className={styles.image_section1}
          />
          <div className={styles.home_subtitle1}>
            <div className={styles.home_about_and_signup_section}>
              <div className={styles.home_about_us_text}>
                <span className={styles.home_about_us_header}>ABOUT US</span>

                <span className={styles.home_about_us_second_text}>
                  TedrooX - Provides Digital Marketing, IT and Business
                  Consulting Services. We are a pioneer in Social Media
                  Marketing, Online management, UX/UI, Web Design & Application
                  Development with Artificial Intelligence/Machine Learning,
                  Augmented Reality & Virtual Reality, and Blockchain
                  technologies.
                </span>
              </div>

              <div className={styles.home_signup_text}>
                <FormComponent />
              </div>
            </div>
          </div>
        </div>

        <CardComponent
          title="CUSTOMIZE YOU'R PRODUCT"
          className={styles.card_component_wrapper}
        />
      </section>
      <section id="shirts">
        <div className={styles.shirts_page_section}>
          Information Shirts Page
        </div>
      </section>
      <section id="pants">
        <div className={styles.pants_page_section}>Information Pants Page</div>
      </section>
      <section id="suits">
        <div className={styles.suits_page_section}>Information suits Page</div>
      </section>
    </div>
  );
};
export default Home;
