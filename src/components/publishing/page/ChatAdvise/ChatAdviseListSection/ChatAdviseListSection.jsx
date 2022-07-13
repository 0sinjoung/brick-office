import React from 'react';
import './ChatAdviseListSection.scss';

/** 채팅 상담 리스트 영역
 */
const ChatAdviseListSection = () => {
  return (
    <>
      <section className="chat_advise_list_section_wrap">
        <div className="chat_advise_list_container_wrap">
          <div className="chat_adviser_information_container">상담사 정보</div>
          <div className="chat_advise_category_container">상담 카테고리</div>
          <div className="chat_advise_search_container">채팅 상담 검색</div>
          <div className="chat_advise_list_container">채팅 상담 리스트</div>
          <div className="previous_chat_advise_container">이전 상담 보기</div>
        </div>
      </section>
    </>
  );
};

export default ChatAdviseListSection;
