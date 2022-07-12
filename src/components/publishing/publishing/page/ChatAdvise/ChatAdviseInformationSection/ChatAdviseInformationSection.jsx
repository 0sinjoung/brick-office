import React from 'react';
import './ChatAdviseInformationSection.scss';

/** 채팅 상담 정보 영역
 */
const ChatAdviseInformationSection = () => {
  return (
    <>
      <section className="chat_advise_information_section_wrap">
        <div className="chat_advise_information_container_wrap">
          <div className="customer_profile_information_container">고객정보</div>
          <div className="chat_advise_information_container">상담정보</div>
          <div className="customer_chat_information_container">고객 상담 정보</div>
        </div>
      </section>
    </>
  );
};

export default ChatAdviseInformationSection;
