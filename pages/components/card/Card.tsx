import Image from "next/image";
import jeans2 from "../../../public/jeans2.jpeg";
import shirts1 from "../../../public/shirts1.jpg";
import suits3 from "../../../public/suits3.jpeg";
import { Button, CardContent, Typography, Card } from "@material-ui/core";
import styles from "./Card.module.scss";
import ImageCard from "../../components/card/ImageCard";

interface imageProps {
  title?: string;
  className?: any;
  variant?: string;
}
const CardComponent: React.FC<imageProps> = ({ title }) => {
  return (
    <Card
      variant="outlined"
      style={{
        borderRadius: "16px",
        boxShadow:
          "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
      }}
    >
      <CardContent className={styles.card_wrapper1}>
        <Typography
          className={styles.card_title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <div className={styles.card_images_wrapper}>
          <ImageCard title="SHIRTS" language={shirts1} />
          <ImageCard title="PANTS" language={jeans2} />
          <ImageCard title="SUITS" language={suits3} />
        </div>
      </CardContent>
    </Card>
  );
};
export default CardComponent;
