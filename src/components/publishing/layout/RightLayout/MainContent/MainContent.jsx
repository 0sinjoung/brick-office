import React from 'react';
import { Route, Routes } from "react-router-dom";
import ChatAdvise from 'components/publishing/page/ChatAdvise';
import ChatbotAdvise from 'components/publishing/page/ChatbotAdvise';
import AdviseKeyword from 'components/publishing/page/AdviseKeyword';
import KMS from 'components/publishing/page/KMS';
import TextEditorTestPage from 'components/publishing/page/TextEditorTestPage/TextEditorTestPage';
import ThirdDepthSample from 'components/publishing/page/ThirdDepthSample';
import './MainContent.scss';

const MainContent = () => {
  return (
    <div className="main_content_wrap">
      <Routes>
        <Route path="/" element={<ThirdDepthSample />} />
        <Route path="/chatAdvise" element={<ChatAdvise />} />
        <Route path="/chatbotAdvise" element={<ChatbotAdvise />} />
        <Route path="/adviseKeyword" element={<AdviseKeyword />} />
        <Route path="/KMS" element={<KMS />} />
        <Route path="/textEditor" element={<TextEditorTestPage />} />
      </Routes>
    </div>
  );
};

export default MainContent;
