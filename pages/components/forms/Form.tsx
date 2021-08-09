import React, { useState } from "react";
import { Button, CardContent, Card } from "@material-ui/core";
import styles from "./Form.module.scss";
import TextField from "@material-ui/core/TextField";

interface imageProps {
  title?: string;
  className?: any;
  variant?: string;
}
const FormComponent: React.FC<imageProps> = ({ title }) => {
  const [submitButton, setSubmitButton] = useState(true);

  const handleSubmitButton = () => {
    setSubmitButton(!submitButton);
    console.log("submitButton", submitButton);
  };
  return (
    <Card
      variant="outlined"
      style={{
        borderRadius: "16px",
        boxShadow:
          "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
      }}
    >
      <CardContent>
        <form className={styles.form_wrapper} noValidate autoComplete="off">
          <span className={styles.form_title}>Sign Up for a free account</span>
          <div className={styles.first_line}>
            <TextField
              className={styles.filled_basic}
              label="First Name"
              variant="outlined"
            />
            <TextField
              className={styles.filled_basic}
              label="Last Name"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ borderRadius: "16px" }}
              className={styles.filled_phone_number}
              label="Phone Number"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              className={styles.filled_basic}
              label="Email Address"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              className={styles.filled_basic}
              label="Create Address"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              className={styles.filled_basic}
              label="Create Password"
              variant="outlined"
            />
          </div>
          <div>
            <Button
              className={styles.active_background}
              onClick={handleSubmitButton}
            >
              Register
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
export default FormComponent;
