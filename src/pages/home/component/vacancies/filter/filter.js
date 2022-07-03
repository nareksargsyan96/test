import React from 'react';
import CheckBox from '../../../../../component/checkBox';
import typeWork from './filterInfo';

import styles from './filter.module.scss';

const Filter = () => {
  return (
    <div>
      <CheckBox
        className={styles.filter_checkBox}
        info={typeWork}
        tag="h2"
        title={'Ֆիլտր՝ ըստ աշխատանքի'}
      />
    </div>
  );
};
export default Filter;
