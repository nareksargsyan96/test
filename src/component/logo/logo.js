import React from 'react';
import clsx from 'clsx';
import { ReactComponent as LogoSvg } from '../svg/logo.svg';

import styles from './logo.module.scss'

const Logo = (className)=>{
    return(
      <div className={clsx(styles.logo, className)}>
        <LogoSvg /> 
      </div>
    )
}

export default Logo;