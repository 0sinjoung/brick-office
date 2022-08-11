import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCalendar } from 'assets/svg/icon/icon_calendar.svg';
import { ReactComponent as IconArrowUpSmall } from 'assets/svg/icon/icon_arrow_up_small.svg';
import { ReactComponent as IconSearch } from 'assets/svg/icon/icon_search.svg';
import IconButton from 'components/publishing/atom/button/IconButton';
import OutlineButton from 'components/publishing/atom/button/OutlineButton';
import BasicSearchTextField from 'components/publishing/atom/textFields/inlineTextField/BasicSearchTextField';
import MessageScenario from './chatScenario/MessageScenario/MessageScenario';
import ChatbotScenario from './chatScenario/ChatbotScenario/ChatbotScenario';
import './ChatbotAdviseMainSection.scss';

/** 챗봇 상담 메인 영역
 */
const ChatbotAdviseMainSection = () => {
  /* ref */
  const refSearchHeaderTextField = React.createRef();

  /* 1. 채팅 상담 헤더 */
  /* 1-1. 메인 헤더 */
  const ICON_BRICK_CHATBOT_DEFAULT_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_chat_icon_blue.png';
  const CUSTOMER_NAME_SHORT = '비회원94846';
  const BOT_ADVISE_CHAT_STATE = 'BOT 상담 진행'; // BOT 상담 진행 | BOT 상담 종료
  const SEARCH_FOCUS_MOVE_BUTTON_DISABLE = 'disable';

  /* 1-1-2. 채팅 검색 */
  const [showHeaderSearchArea, setShowHeaderSearchArea] = useState('');
  const [showHeaderSearchIcon, setShowHeaderSearchIcon] = useState('show');
  const handleSearchChatContents = () => {
    console.log('헤더 - 채팅 내용 검색');
    console.log(refSearchHeaderTextField.current.value);
  };

  /* 1-2. 검색 헤더 */
  const [showSearchHeaderCalendarIcon, setShowSearchHeaderCalendarIcon] = useState('show');
  const handleClickCalendarButton = () => {
    console.log('달력 아이콘 버튼 클릭');
    setIsActiveCalendarIconButton(!isActiveCalendarIconButton);
  };
  const [isActiveCalendarIconButton, setIsActiveCalendarIconButton] = useState(false);
  const handleShowHeaderSearchArea = () => {
    setShowHeaderSearchArea('show');
    setShowHeaderSearchIcon('');
  };
  const handleHideHeaderSearchArea = () => {
    setShowHeaderSearchArea('');
    setShowHeaderSearchIcon('show');
    setIsActiveCalendarIconButton(false);
  };

  const [showSearchFocusMoveButton, setShowSearchFocusMoveButton] = useState('show');
  const handleMoveSearchFocus = () => {
    console.log('하이라이팅 포커스 이동');
  };

  return (
    <>
      <section className="chatbot_advise_main_section_wrap">
        <div className="chatbot_advise_main_container_wrap">
          {/* 1. 챗봇 상담 헤더 */}
          <div className="chatbot_advise_main_header_container">
            {/* 1-1. 메인 헤더 */}
            <header className="chatbot_advise_main_header">
              <div className="chatbot_advise_main_header_information_box">
                <div className="chatbot_advise_header_channel_delimiter_img_box">
                  <img className="chatbot_advise_header_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                </div>
                <div className="chatbot_advise_header_customer_name">{CUSTOMER_NAME_SHORT}</div>
                <div className="chatbot_advise_header_current_chatbot_state_tag">{BOT_ADVISE_CHAT_STATE}</div>
              </div>
              <div className="chatbot_advise_main_header_buttons_box">
                {/* 1-1-2. 채팅 검색 */}
                <div className={`chatbot_advise_main_header_search_button_box ${showHeaderSearchIcon}`}>
                  <IconButton buttonClassName="small" handleClick={handleShowHeaderSearchArea}>
                    <IconSearch />
                  </IconButton>
                </div>
              </div>
            </header>
            {/* 1-2. 헤더 검색 영역 */}
            <div className={`chatbot_advise_search_header_container ${showHeaderSearchArea} ${isActiveCalendarIconButton ? 'active' : ''}`}>
              <div className="chatbot_advise_search_header_basic_search_text_field_box">
                <BasicSearchTextField
                  ref={refSearchHeaderTextField}
                  placeholderText="찾고 싶은 대화 내용을 입력해 주세요."
                  handleClickSearchButton={handleSearchChatContents}
                />
              </div>
              <div className="chatbot_advise_search_header_buttons_box">
                <div className={`chatbot_advise_search_header_calendar_button_box ${showSearchHeaderCalendarIcon}`}>
                  <IconButton handleClick={handleClickCalendarButton}>
                    <IconCalendar />
                  </IconButton>
                </div>
                <div className="chatbot_advise_main_header_search_cancle_button_box">
                  <OutlineButton buttonClassName="tiny" handleClick={handleHideHeaderSearchArea}>
                    취소
                  </OutlineButton>
                </div>
              </div>
              <div className={`chatbot_search_focus_move_buttons_box ${showSearchFocusMoveButton}`}>
                <IconButton buttonClassName="up" handleClick={handleMoveSearchFocus}>
                  <IconArrowUpSmall />
                </IconButton>
                <IconButton buttonClassName={`down ${SEARCH_FOCUS_MOVE_BUTTON_DISABLE}`} handleClick={handleMoveSearchFocus}>
                  <IconArrowUpSmall />
                </IconButton>
              </div>
            </div>
          </div>
          {/* 2. 챗봇 상담 컨텐츠 */}
          <div className="chatbot_advise_main_content_container">
            {/* 2-1. 상담 메시지 시나리오 */}
            <MessageScenario />
            {/* 2-2. 챗봇 시나리오 */}
            <ChatbotScenario />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatbotAdviseMainSection;
