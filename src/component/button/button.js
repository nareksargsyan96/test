import React from 'react';
import clsx from 'clsx';

import styles from './button.module.scss';

const Button = ({
    className,
    children,
    // clickHandler,  
    disabled = false,
    type = 'submit'
  })=>{
    return(
        <button 
           type={type} 
           className={clsx(className, disabled && styles.BtnDisabled)}
        > 
         {children}
        </button>
    )
}
export default Button;