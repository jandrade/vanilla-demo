import * as React from "react";
import { composeStyles } from "@vanilla-extract/css";

import * as styles from "./button.css";

const Button = ({ onClick, children, kind }) => {
  return (
    <button
      onClick={onClick}
      className={composeStyles(styles.button, styles.variant[kind])}
    >
      {children}
    </button>
  );
};

export default Button;
