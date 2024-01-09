// PageWidth.js

import React from 'react';
import styles from './PageWidth.module.scss';

const PageWidth = ({ children }) => {
  return <div className={styles.PageWidth}>{children}</div>;
};

export default PageWidth;
