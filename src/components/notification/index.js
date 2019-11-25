import React from 'react';
import {uNotification, uNotificationParagraph, uNotificationButton, uNotificationContainer, uNotificationColButton} from './styles';
import { uColorBlue } from '../../utils/styles';
import { uColmd10 } from '../../utils/grid';
function Appnotification() {
  return (
    <div className={uNotification}>
      <div className={uNotificationContainer}>
        <div className={uColmd10}>
          <p className={uNotificationParagraph}>
            By accessing and using this website, you acknowledge that you have read and
            understand our <span className={uColorBlue}>Cookie Policy</span>, <span className={uColorBlue}>Privacy Policy</span>, and our <span className={uColorBlue}>Terms of Service</span>.
          </p>
        </div>
        <div className={uNotificationColButton}>
          <button className={uNotificationButton}>Got It</button>
        </div>
       </div>
    </div>
  );
}

export default Appnotification;
