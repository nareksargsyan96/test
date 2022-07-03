import React, { memo } from 'react';
import Button from '../../../../component/button';
import Heading from '../../../../component/heading';
import { ReactComponent as Location } from '../../../../component/svg/ep_location.svg';
import { ReactComponent as Clock } from '../../../../component/svg/akar-icons_clock.svg';
import { ReactComponent as Design } from '../../../../component/svg/ant-design.svg';

import jop from './jobs';

import styles from './showJobs.module.scss';

const ShowJobs = () => {
  return (
    <div className={styles.showJobs}>
      <div className={styles.showJobs_heading}>
        <Heading variant="h1" className={styles.heading}>
          Ամենապահանջված աշխատատեղերը
        </Heading>
        <Button className={styles.btn}>Տեսնել ամբողջը</Button>
      </div>
      <Heading className={styles.text} variant="p">
        Ստորև ներկայացված են հայտնի ընկերություններում առկա թափուր աշխատատեղերը : Սկսեք դիմել հիմա:
      </Heading>
      <div className={styles.jops}>
        {jop?.map((item) => (
          <div className={styles.jop} key={item.id}>
            <div className={styles.jop_info}>
              <div className={styles.name_location}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.location}>
                  <Location className={styles.location_svg} /> {item.location}
                </div>
              </div>
              <div className={styles.time_distance}>
                <div className={styles.time}>
                  <Clock className={styles.time_svg} /> {item.time}
                </div>
                <div className={styles.distance}>
                  <Design className={styles.distance_svg} /> {item.distance}
                </div>
              </div>
            </div>
            <div className={styles.price_btn}>
              <div className={styles.price}>{item.price}</div>
              <Button className={styles.btn}>Դիմել հիմա</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ShowJobs);
