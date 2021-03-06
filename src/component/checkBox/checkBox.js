import React from "react";
import Heading from "../heading";
import clsx from "clsx";
import Checkbox from "@mui/material/Checkbox";

import styles from "./checkBox.module.scss";

const CheckBox = ({
  title,
  tag,
  info,
  className,
  disabled = false,
  defaultChecked = false,
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className={clsx(className)}>
      {title && <Heading variant={tag}>{title}</Heading>}
      <div>
        {info?.map((item) => {
          return (
            <div className={styles.checkBox_name} key={item.id}>
              <Checkbox
                {...label}
                disabled={disabled}
                defaultChecked={defaultChecked}
              />
              <div> {item.name} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CheckBox;
