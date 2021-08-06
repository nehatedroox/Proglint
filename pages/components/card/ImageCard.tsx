import Image from "next/image";
import homePic from "../../../public/homepic.jpg";
import styles from "./ImageCard.module.scss";

interface imageProps {
  title?: string;
  language?: any;
  //  clickHandler;
}
const ImageCard: React.FC<imageProps> = ({
  title,
  language,
  // clickHandler,
}) => {
  // function handleButtonClick() {
  //   clickHandler?.();
  // }
  return (
    <section className={styles.image_section_block}>
      <Image
        src={language}
        width="800"
        height="400"
        //onClick={() => handleButtonClick()}
        alt="neha"
        className={styles.image_section_inside}
      />

      <div className={styles.subtitle}>
        <span>{title}</span>
      </div>
    </section>
  );
};
export default ImageCard;
