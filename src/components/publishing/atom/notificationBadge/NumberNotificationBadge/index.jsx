import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/**
 * @children : notification number
 * @tagStyle : inline style로 스타일 변경
 */
const NumberNotificationBadge = ({ children, tagStyle }) => {
  const currentNotificationNumber = children;
  const [placeValueStyle, setPlaceValueStyle] = useState('hide');
  const [placeValueText, setPlaceValueText] = useState('');

  useEffect(() => {
    if (currentNotificationNumber > 0 && currentNotificationNumber < 10) {
      setPlaceValueStyle('units');
      setPlaceValueText(currentNotificationNumber);
    } else if (currentNotificationNumber >= 10 && currentNotificationNumber < 100) {
      setPlaceValueStyle('tens');
      setPlaceValueText(currentNotificationNumber);
    } else if (currentNotificationNumber >= 100 ) {
      setPlaceValueStyle('hundereds');
      setPlaceValueText('99+');
    }
  }, [currentNotificationNumber])

  return (
    <div className={`number_notification_badge ${placeValueStyle}`} style={tagStyle}>
      {placeValueText}
    </div>
  );
};

NumberNotificationBadge.propTypes = {
  children: PropTypes.number,
  tagStyle: PropTypes.object,
};

NumberNotificationBadge.defaultProps = {
  children: null,
  tagStyle: {},
};

export default NumberNotificationBadge;
