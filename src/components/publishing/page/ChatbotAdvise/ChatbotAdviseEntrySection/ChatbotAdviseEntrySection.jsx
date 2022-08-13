import React from 'react';
import './ChatbotAdviseEntrySection.scss';

/** 챗봇 상담 진입시 화면 섹션
 */
const ChatbotAdviseEntrySection = () => {
  const handlePageMoveButton = () => {
    console.log('각 버튼에 따라 페이지 이동👋🏻');
  };
  return (
    <>
      <section className="chatbot_advise_entry_section_wrap">
        <div className="chatbot_advise_entry_contents_container">
          <div className="chatbot_advise_entry_main_contents_box">
            <div className="chatbot_advise_entry_main_contents_top">
              <h2 className="chatbot_advise_entry_main_title">챗봇상담 기능을 설정해 보세요.</h2>
              <div
                role="button"
                tabIndex={0}
                onClick={handlePageMoveButton}
                onKeyUp={handlePageMoveButton}
                className="chatbot_advise_introduce_page_move_button customer_manage"
              >
                <div className="chatbot_advise_entry_page_move_image_box">
                  <img
                    className="chatbot_advise_entry_page_image"
                    alt="chatbot making page"
                    src="https://storage.googleapis.com/brickchat-cdn-bucket/assets/img/chatbot_advise_introduce_chatbot_making_page.png"
                  />
                </div>
                <div className="chatbot_advise_introduce_contents_box">
                  <h4 className="chatbot_advise_introduce_page_title">챗봇 지식 만들기</h4>
                  <p className="chatbot_advise_introduce_description">
                    어떤 질문이 들어와도 챗봇이 고객 질문의 의도를 파악하여 <br />
                    정확한 답변을 전달합니다.
                  </p>
                </div>
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={handlePageMoveButton}
                onKeyUp={handlePageMoveButton}
                className="chatbot_advise_introduce_page_move_button customer_manage"
              >
                <div className="chatbot_advise_entry_page_move_image_box">
                  <img
                    className="chatbot_advise_entry_page_image"
                    alt="welcome making page"
                    src="https://storage.googleapis.com/brickchat-cdn-bucket/assets/img/chatbot_advise_introduce_welcome_making_page.png"
                  />
                </div>
                <div className="chatbot_advise_introduce_contents_box">
                  <h4 className="chatbot_advise_introduce_page_title">챗봇 웰컴 메시지 만들기</h4>
                  <p className="chatbot_advise_introduce_description">
                    환영 인사 메시지를 통해 브랜드 소개나 자주 묻는 질문을 <br />
                    안내할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatbotAdviseEntrySection;
