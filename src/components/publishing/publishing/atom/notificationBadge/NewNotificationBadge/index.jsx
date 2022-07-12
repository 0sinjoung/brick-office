import React, { useState, useEffect } from 'react';
import './style.scss';

/* New notification badge - N 텍스트만 출력, 고정 스타일 */
const NewNotificationBadge = () => {
  return (
    <div className="new_notification_badge">
      <span className="new_notification_badge_text">N</span>
    </div>
  );
};

export default NewNotificationBadge;
