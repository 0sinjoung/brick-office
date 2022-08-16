import React from 'react';
import { Route, Routes } from "react-router-dom";
import ChatAdvise from 'components/publishing/page/ChatAdvise';
import ChatbotAdvise from 'components/publishing/page/ChatbotAdvise';
import AdviseKeyword from 'components/publishing/page/AdviseKeyword';
import TextEditorTestPage from 'components/publishing/page/TextEditorTestPage/TextEditorTestPage';
import './MainContent.scss';

const MainContent = () => {
  return (
    <div className="main_content_wrap">
      <Routes>
        <Route path="/" element={<TextEditorTestPage />} />
        <Route path="/chatAdvise" element={<ChatAdvise />} />
        <Route path="/chatbotAdvise" element={<ChatbotAdvise />} />
        <Route path="/adviseKeyword" element={<AdviseKeyword />} />
        {/* <Route path="/thirdDepthSample" element={<ThirdDepthSample />} /> */}
      </Routes>
    </div>
  );
};

export default MainContent;
