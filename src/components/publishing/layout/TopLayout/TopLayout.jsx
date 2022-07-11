import React from 'react';
import PropTypes from 'prop-types';
import TopNotificationBar from 'components/publishing/layout/TopLayout/TopNotificationBar/TopNotificationBar';
import './TopLayout.scss';

const TopLayout = () => {
  return (
    <div className="top_layout_wrap">
      <TopNotificationBar />
    </div>
  );
};

export default TopLayout;
