import React, { useState } from 'react';
import clsx from 'clsx';
import { Button, Menu, MenuItem } from '@mui/material';
import { ReactComponent as VectorSvg } from '../svg/Vector.svg';

import styles from './dropdown.module.scss';

const Dropdown = ({ DropdownName, className }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [vector, setVector] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setVector(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setVector(false);
    setAnchorEl(null);
  };

  const stylesBtn = { background: 'none', color: '#363549' };

  return (
    <div className={clsx(className, styles.dropdown)}>
      <Button
        className={styles.btn}
        style={stylesBtn}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {DropdownName} <VectorSvg className={styles.vectorSvg} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={styles.basic_menu}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Menu>
    </div>
  );
};

export default Dropdown;
