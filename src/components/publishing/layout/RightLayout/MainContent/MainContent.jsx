import React from 'react';
import ChatAdvise from 'components/publishing/page/ChatAdvise';
import ThirdDepthSample from 'components/publishing/page/ThirdDepthSample';
import './MainContent.scss';

const MainContent = () => {
  return (
    <div className="main_content_wrap">
      <ChatAdvise />
      {/* <ThirdDepthSample /> */}
    </div>
  );
};

export default MainContent;
