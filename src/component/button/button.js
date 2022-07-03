import React from "react";
import clsx from "clsx";

import styles from "./button.module.scss";

const Button = ({ className, children, disabled = false, type = "submit" }) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.btnStyles,
        className,
        disabled && styles.BtnDisabled
      )}
    >
      {children}
    </button>
  );
};
export default Button;
