import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChatbotAdviseListSection from 'components/publishing/page/ChatbotAdvise/ChatbotAdviseListSection/ChatbotAdviseListSection';
import ChatbotAdviseMainSection from 'components/publishing/page/ChatbotAdvise/ChatbotAdviseMainSection/ChatbotAdviseMainSection';
import ChatbotAdviseInformationSection from 'components/publishing/page/ChatbotAdvise/ChatbotAdviseInformationSection/ChatbotAdviseInformationSection';
import ChatbotAdviseEntrySection from 'components/publishing/page/ChatbotAdvise/ChatbotAdviseEntrySection/ChatbotAdviseEntrySection';
import './style.scss';

/** 챗봇 상담 페이지
 * @children : children
 */
const ChatbotAdvise = ({ children }) => {
  const [isAdviserWorkingStart, setIsAdviserWorkingStart] = useState(true);
  const displayAdviseEntrySection = () => {
    if (!isAdviserWorkingStart) {
      return <ChatbotAdviseEntrySection />;
    }
    return (
      <>
        <ChatbotAdviseMainSection />
        <ChatbotAdviseInformationSection />
      </>
    );
  };
  return (
    <>
      <div className="contents_wrap">
        <main className="page_wrap full">
          <div className="chatbot_advise_section_wrap">
            <ChatbotAdviseListSection />
            {displayAdviseEntrySection()}
          </div>
        </main>
      </div>
    </>
  );
};

ChatbotAdvise.propTypes = {
  children: PropTypes.any,
};

ChatbotAdvise.defaultProps = {
  children: '',
};

export default ChatbotAdvise;
