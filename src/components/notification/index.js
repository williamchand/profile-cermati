import React from 'react';
import {cx} from 'emotion/macro';
import {uNotification, uNotificationParagraph, uNotificationButton, uNotificationContainer, uNotificationHide, uNotificationShow, uNotificationColButton} from './styles';
import { uColorBlue } from '../../utils/styles';
import { uColmd10 } from '../../utils/grid';

function Appnotification() {
  const [notification, setNotification] = React.useState(true);
  const buttonClick = () => setNotification(false);
  return (
    <div className={cx(uNotification, notification ? uNotificationShow : uNotificationHide)}>
      <div className={uNotificationContainer}>
        <div className={uColmd10}>
          <p className={uNotificationParagraph}>
            By accessing and using this website, you acknowledge that you have read and
            understand our <span className={uColorBlue}>Cookie Policy</span>, <span className={uColorBlue}>Privacy Policy</span>, and our <span className={uColorBlue}>Terms of Service</span>.
          </p>
        </div>
        <div className={uNotificationColButton}>
          <button className={uNotificationButton} onClick={buttonClick}>Got It</button>
        </div>
       </div>
    </div>
  );
}

export default Appnotification;
