import React from 'react';
import { Route, Routes } from "react-router-dom";
import ChatAdvise from 'components/publishing/page/ChatAdvise';
import ChatbotAdvise from 'components/publishing/page/ChatbotAdvise';
import AdviseKeyword from 'components/publishing/page/AdviseKeyword';
import KMS from 'components/publishing/page/KMS';
import SettingChannel from 'components/publishing/page/SettingChannel';
import TextEditorTestPage from 'components/publishing/page/TextEditorTestPage/TextEditorTestPage';
import ThirdDepthSample from 'components/publishing/page/ThirdDepthSample';
import GridSamplePage from 'components/publishing/page/GridSamplePage';
import './MainContent.scss';

const MainContent = () => {
  return (
    <div className="main_content_wrap">
      <Routes>
        <Route path="/home" element={<ThirdDepthSample />} />
        <Route path="/dashboard" element={<ThirdDepthSample />} />
        <Route path="/chatAdvise" element={<ChatAdvise />} />
        <Route path="/chatbotAdvise" element={<ChatbotAdvise />} />
        <Route path="/chatbotBuilder" element={<ThirdDepthSample />} />
        <Route path="/adviseKeyword" element={<AdviseKeyword />} />
        <Route path="/KMS" element={<KMS />} />
        <Route path="/customer" element={<ThirdDepthSample />} />
        <Route path="/setting/channel" element={<SettingChannel />} />
        <Route path="/setting/advice" element={<TextEditorTestPage />} />
        <Route path="/setting/messenger" element={<TextEditorTestPage />} />
        <Route path="/setting/search" element={<TextEditorTestPage />} />
        <Route path="/setting/connect" element={<TextEditorTestPage />} />
        <Route path="/setting/install" element={<TextEditorTestPage />} />
        <Route path="/subscribe" element={<ThirdDepthSample />} />
        <Route path="/textEditor" element={<TextEditorTestPage />} />
        <Route path="/gridSample" element={<GridSamplePage />} />
        <Route path="*" element={<ThirdDepthSample />} />
      </Routes>
    </div>
  );
};

export default MainContent;
