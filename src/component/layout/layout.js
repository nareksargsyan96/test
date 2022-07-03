import React from 'react';
import Header from '../header';
import Footer from "../footer";

import styles from './layout.module.scss';

 const Layout = ( {children} ) => {

  return (
    <div className={styles.layout}>
      <Header />
        <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
