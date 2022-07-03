import React from 'react';
import clsx from 'clsx';

import styles from './textInput.module.scss';


 const TextInput = ({
  className,
  type,
  value
}) => {

  const handleShow = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div  className={styles.textInput}>
      <input
        className={clsx(className,styles.input)}
        type={type === 'password' && showPassword ? 'text' : type}
        defaultValue={value}
        //error={!!error?.message}
      />
      {/* {error && <p>{!error?.message}</p>}
      {type === 'password' && (
        <div className={styles.eyeIcon}>
          <Icon onClick={handleShow} name={showPassword ? 'eyeIcon' : 'hideEyeIcon'} />
        </div>
      )} */}
    </div>
  );
};
export default TextInput;