import React from 'react';
import './ChatAdviseMainSection.scss';

/** 채팅 상담 메인 영역
 */
const ChatAdviseMainSection = () => {
  return (
    <>
      <section className="chat_advise_main_section_wrap">
        <div className="chat_advise_main_container_wrap">
          <header className="chat_advise_main_header">채팅 메인 헤더</header>
          <div className="chat_advise_main_content_container">메인 상담 영역</div>
          <footer className="chat_advise_main_footer">채팅 메인 푸터</footer>
        </div>
      </section>
    </>
  );
};

export default ChatAdviseMainSection;
