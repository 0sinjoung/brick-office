import React from 'react';
import PropTypes from 'prop-types';
// import TopNotificationBar from 'components/publishing/topLayout/TopNotificationBar/TopNotificationBar';
import './TopNotificationBar.scss';

const TopNotificationBar = () => {
  return (
    <div className="top_notification_bar_wrap">
      <div className="top_notification_bar_container">
        <h3 className="top_notification_bar_text">상단 알림 바 영역입니다. 임의로 지정 height: 45px</h3>
      </div>
    </div>
  );
};

export default TopNotificationBar;
