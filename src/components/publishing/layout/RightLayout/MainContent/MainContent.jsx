import React from 'react';
import { Route, Routes, Router } from "react-router-dom";
import ChatAdvise from 'components/publishing/page/ChatAdvise';
import ChatbotAdvise from 'components/publishing/page/ChatbotAdvise';
import ThirdDepthSample from 'components/publishing/page/ThirdDepthSample';
import TextEditorTestPage from 'components/publishing/page/TextEditorTestPage/TextEditorTestPage';
import './MainContent.scss';

const MainContent = () => {
  return (
    <div className="main_content_wrap">
      <Routes>
        <Route path="/" element={<TextEditorTestPage />} />
        <Route path="/chatAdvise" element={<ChatAdvise />} />
        <Route path="/chatbotAdvise" element={<ChatbotAdvise />} />
        {/* <Route path="/thirdDepthSample" element={<ThirdDepthSample />} /> */}
      </Routes>
    </div>
  );
};

export default MainContent;
