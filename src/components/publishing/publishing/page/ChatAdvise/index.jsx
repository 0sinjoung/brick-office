import React from 'react';
import PropTypes from 'prop-types';
import ChatAdviseListSection from 'components/publishing/page/ChatAdvise/ChatAdviseListSection/ChatAdviseListSection';
import ChatAdviseMainSection from 'components/publishing/page/ChatAdvise/ChatAdviseMainSection/ChatAdviseMainSection';
import ChatAdviseInformationSection from 'components/publishing/page/ChatAdvise/ChatAdviseInformationSection/ChatAdviseInformationSection';
import './style.scss';

/** 채팅 상담 페이지
 * @children : children
 */
const ChatAdvise = ({ children }) => {
  return (
    <>
      <div className="contents_wrap">
        <main className="page_wrap full">
          <div className="chat_advise_section_wrap">
            <ChatAdviseListSection />
            <ChatAdviseMainSection />
            <ChatAdviseInformationSection />
          </div>
        </main>
      </div>
    </>
  );
};

ChatAdvise.propTypes = {
  children: PropTypes.any,
};

ChatAdvise.defaultProps = {
  children: '',
};

export default ChatAdvise;
