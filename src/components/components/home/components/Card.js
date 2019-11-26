import React from 'react';
import { uCard, uCardBody, uCardTitle, uCardTitleLeft, uCardTitleRight, uCardText } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props) {
  const {image, title, description} = props;
  return (
    <div className={uCard}>
      <div className={uCardBody}>
        <div className={uCardTitle}>
          <div className={uCardTitleLeft}><b>{title}</b></div>
          <div className={uCardTitleRight}>
            <FontAwesomeIcon icon={image} />
          </div>
        </div>
        <div className={uCardText}>{description}</div>
      </div>
    </div>
  );
}

export default Card;
