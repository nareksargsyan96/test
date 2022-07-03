import React, { useState } from "react";
import clsx from "clsx";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";

import styles from "./basicSelect.module.scss";

const BasicSelect = ({
  selectName,
  size,
  height,
  colors,
  className,
  borderSelect = false,
}) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl
        className={borderSelect ? clsx(className) : null}
        variant={borderSelect ? "outlined" : "standard"}
        sx={{ m: 1, minWidth: size, height: height }}
      >
        <InputLabel style={colors && { color: colors }}>
          {selectName}
        </InputLabel>
        <Select
          style={colors && { color: colors }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label={selectName}
          disableUnderline={!borderSelect}
          classes={{
            icon: styles.basicIcon,
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default BasicSelect;
