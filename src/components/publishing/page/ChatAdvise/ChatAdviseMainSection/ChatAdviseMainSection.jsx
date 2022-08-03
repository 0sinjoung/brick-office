import React, { useState } from 'react';
import { ReactComponent as IconCalendar } from 'assets/svg/icon/icon_calendar.svg';
import { ReactComponent as IconArrowUpSmall } from 'assets/svg/icon/icon_arrow_up_small.svg';
import { ReactComponent as IconArrowDownLong } from 'assets/svg/icon/icon_arrow_down_long.svg';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg';
import { ReactComponent as IconCross } from 'assets/svg/icon/icon_cross.svg';
import { ReactComponent as IconBookmark } from 'assets/svg/icon/icon_bookmark.svg';
import { ReactComponent as IconSearch } from 'assets/svg/icon/icon_search.svg';
import { ReactComponent as IconChatAdviseKeywordPannelButton } from 'assets/svg/icon/chatAdvise/icon_chat_advise_keyword_pannel_button.svg';
import { ReactComponent as IconButtonActionPannelButton } from 'assets/svg/icon/chatAdvise/icon_button_action_pannel_button.svg';
import { ReactComponent as IconTextBold } from 'assets/svg/icon/textEditor/icon_text_bold.svg';
import { ReactComponent as IconTextItalic } from 'assets/svg/icon/textEditor/icon_text_italic.svg';
import { ReactComponent as IconTextUnderline } from 'assets/svg/icon/textEditor/icon_text_underline.svg';
import { ReactComponent as IconTextColor } from 'assets/svg/icon/textEditor/icon_text_color.svg';
import { ReactComponent as IconTextBackground } from 'assets/svg/icon/textEditor/icon_text_background.svg';
import { ReactComponent as IconFileUpload } from 'assets/svg/icon/textEditor/icon_file_upload.svg';
import { ReactComponent as IconEmojiPannel } from 'assets/svg/icon/textEditor/icon_emoji_pannel.svg';
import IconButton from 'components/publishing/atom/button/IconButton';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import OutlineButton from 'components/publishing/atom/button/OutlineButton';
import OutlineTag from 'components/publishing/atom/tag/OutlineTag';
import ColorTag from 'components/publishing/atom/tag/ColorTag';
import BasicSearchTextField from 'components/publishing/atom/textFields/inlineTextField/BasicSearchTextField';
import OutlineTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineTextField';
import OutlineSearchTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineSearchTextField';
import MessageScenario from './chatScenario/MessageScenario/MessageScenario';
import ChatbotScenario from './chatScenario/ChatbotScenario/ChatbotScenario';
import FileUploadScenario from './chatScenario/FileUploadScenario/FileUploadScenario';
import './ChatAdviseMainSection.scss';

/** 채팅 상담 메인 영역
 */
const ChatAdviseMainSection = () => {
  /* ref */
  const refSearchHeaderTextField = React.createRef();
  const refKeywordPannelTextField = React.createRef();
  const refButtonActionPannelButtonNameTextField = React.createRef();
  const refButtonActionPannelButtonActionTextField = React.createRef();

  const [dimedChangeAdviserButton, setDimedChangeAdviserButton] = useState('dimed');
  const [showSearchHeaderCalendarIcon, setShowSearchHeaderCalendarIcon] = useState('show');
  const [showHeaderAlertBar, setShowHeaderAlertBar] = useState('');
  const [isActiveCalendarIconButton, setIsActiveCalendarIconButton] = useState(false);
  const [isShowChatAdviseKeywordPannel, setIsShowChatAdviseKeywordPannel] = useState(false);
  const [isShowButtonActionPannel, setIsShowButtonActionPannel] = useState(false);
  const CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_chat_icon_white.png';
  const CUSTOMER_NAME_SHORT = '김다영';
  const CURRENT_ADVISE_CHAT_STATE = '김제니 상담 진행 중';
  const HEADER_ALERT_BAR_TITLE = '상담사 변경 요청 이유';
  const HEADER_ALERT_BAR_DESCRIPTION = '상담분야 변경: 배송문의 - 결제문의';
  const CURRENT_CHAT_STATE = '상담진행중';
  const CHAT_ADVISE_KEYWORD_SHORTCUT_NUMBER_KEY = '0'; // 단축키 ctrl 고정 + 숫자 0~9 까지
  const CHAT_ADVISER_KEYWORD_NO_LIST = '등록한 상담 키워드가 없습니다.' || '검색 결과가 없습니다.';
  const DISABLE = 'disable';

  /* header */
  const [showHeaderSearchArea, setShowHeaderSearchArea] = useState('');
  const [showHeaderSearchIcon, setShowHeaderSearchIcon] = useState('show');
  const handleShowHeaderSearchArea = () => {
    setShowHeaderSearchArea('show');
    setShowHeaderSearchIcon('');
  };
  const handleHideHeaderSearchArea = () => {
    setShowHeaderSearchArea('');
    setShowHeaderSearchIcon('show');
    setIsActiveCalendarIconButton(false);
  };
  const handleChangeAdviser = () => {
    console.log('상담사 변경');
  };
  const handleSearchChatContents = () => {
    console.log('헤더 - 채팅 내용 검색');
    console.log(refSearchHeaderTextField.current.value);
  };

  const handleClickCalendarButton = () => {
    console.log('달력 아이콘 버튼 클릭');
    setIsActiveCalendarIconButton(!isActiveCalendarIconButton);
  };

  const [showSearchFocusMoveButton, setShowSearchFocusMoveButton] = useState('show');
  const handleMoveSearchFocus = () => {
    console.log('하이라이팅 포커스 이동');
  };

  /* footer */
  const [showScrollBottomButton, setShowScrollBottomButton] = useState('show');
  const handleMoveScrollBottom = () => {
    console.log('scroll bottom!');
  };

  const [showScrollNewMessageButton, setScrollNewMessageButton] = useState('show');
  const handleMoveNewMessagePosition = () => {
    console.log('새 메시지 위치로 이동');
  };

  /* 상담 키워드 패널 */
  const handleToggleChatAdviseKeywordPannel = () => {
    setIsShowChatAdviseKeywordPannel(!isShowChatAdviseKeywordPannel);
  };
  const handleHideChatAdviseKeywordPannel = () => {
    setIsShowChatAdviseKeywordPannel(false);
  };
  const handleSearchChatAdviseKeywordPannel = () => {
    console.log('상담 키워드 검색');
  };
  const handleClickChatAdviseKeywordItem = () => {
    console.log('상담 키워드 리스트 아이템 클릭');
  };

  /* 버튼 액션 패널 */
  const handleToggleButtonActionPannel = () => {
    setIsShowButtonActionPannel(!isShowButtonActionPannel);
  };
  const handleHideButtonActionPannel = () => {
    setIsShowButtonActionPannel(false);
  };
  const handleAddButtonAction = () => {
    console.log('버튼 액션 추가🥕');
  };

  /* 텍스트 에디터 */
  const handleTextDecoration = () => {
    console.log('텍스트 데코레이션');
  };
  const handleKMSPannel = () => {
    console.log('상담 지식 사전 패널');
  };
  const handleSendMessage = () => {
    console.log('💌 메시지 전송');
  };
  /* 푸터 dimed */
  const DIMED_SHOW = '';
  const FOOTER_DIMED_BUTTON_TEXT = '상담 시작하기';
  const FOOTER_DIMED_INFORMATION_TEXT_CASE1 = '김제니 상담사가 상담보류 중 입니다.';
  const FOOTER_DIMED_INFORMATION_TEXT_CASE2 = '지금은 업무 종료 상태입니다. \n 업무 시작으로 변경 후, 채팅상담을 진행 할 수 있습니다.';
  const FOOTER_DIMED_INFORMATION_TEXT_CASE2_CLASSNAME = 'shutdown'; // 디폴트 ''
  const handleFooterDimedButton = () => {
    // button text case : 상담 시작하기 | 변경 요청 취소 | 상담사 변경 거절 | 상담사 변경 수락
    console.log('footer dimed 버튼 클릭');
    if (FOOTER_DIMED_BUTTON_TEXT === '상담 시작하기') {
      return () => console.log('상담 시작하기');
    }
  };

  return (
    <>
      <section className="chat_advise_main_section_wrap">
        <div className="chat_advise_main_container_wrap">
          {/* 1. 채팅 상담 헤더 */}
          <div className="chat_advise_main_header_container">
            {/* 1-1. 메인 헤더 */}
            <header className="chat_advise_main_header">
              <div className="chat_advise_main_header_information_box">
                <div className="chat_advise_header_channel_delimiter_img_box">
                  <img className="chat_advise_header_channel_delimiter_img" alt="channel delimiter" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                </div>
                <div className="chat_advise_header_customer_name">{CUSTOMER_NAME_SHORT}</div>
                <button type="button" className="chat_advise_header_bookmark_button active">
                  <IconBookmark />
                </button>
                <div className="chat_advise_header_current_chat_state_tag">{CURRENT_ADVISE_CHAT_STATE}</div>
              </div>
              <div className="chat_advise_main_header_buttons_box">
                <div className={`chat_advise_main_header_search_button_box ${showHeaderSearchIcon}`}>
                  <IconButton buttonClassName="chat_advise_main_header_search_button" handleClick={handleShowHeaderSearchArea}>
                    <IconSearch />
                  </IconButton>
                </div>
                <div className={`chat_advise_main_header_change_adviser_button_box ${dimedChangeAdviserButton}`}>
                  <OutlineButton buttonClassName="small" handleClick={handleChangeAdviser}>
                    상담사 변경
                  </OutlineButton>
                </div>
                <div className="chat_advise_main_header_change_chat_state_select_button_box">
                  <div className="change_chat_state_select_toggle_button_box dimed">
                    <button type="button" className="change_chat_state_select_toggle_button">
                      <span className="change_chat_state_select_toggle_button_text">{CURRENT_CHAT_STATE}</span>
                      <span className="change_chat_state_select_toggle_button_arrow">
                        <IconDropdownArrow />
                      </span>
                    </button>
                  </div>
                  <div className="change_chat_state_select_box">
                    <ul className="change_chat_state_select_button_lists">
                      <li className="change_chat_state_select_button_list">
                        <button type="button" className="change_chat_state_select_button">
                          셀렉트 버튼
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </header>
            {/* 1-2. 헤더 검색 영역 */}
            <div className={`chat_advise_search_header_container ${showHeaderSearchArea} ${isActiveCalendarIconButton ? 'active' : ''}`}>
              <div className="chat_advise_search_header_basic_search_text_field_box">
                <BasicSearchTextField
                  ref={refSearchHeaderTextField}
                  placeholderText="찾고 싶은 대화 내용을 입력해 주세요."
                  handleClickSearchButton={handleSearchChatContents}
                />
              </div>
              <div className="chat_advise_search_header_buttons_box">
                <div className={`chat_advise_search_header_calendar_button_box ${showSearchHeaderCalendarIcon}`}>
                  <IconButton handleClick={handleClickCalendarButton}>
                    <IconCalendar />
                  </IconButton>
                </div>
                <div className="chat_advise_main_header_search_cancle_button_box">
                  <OutlineButton buttonClassName="tiny" handleClick={handleHideHeaderSearchArea}>
                    취소
                  </OutlineButton>
                </div>
              </div>
              <div className={`search_focus_move_buttons_box ${showSearchFocusMoveButton}`}>
                <IconButton buttonClassName="up" handleClick={handleMoveSearchFocus}>
                  <IconArrowUpSmall />
                </IconButton>
                <IconButton buttonClassName={`down ${DISABLE}`} handleClick={handleMoveSearchFocus}>
                  <IconArrowUpSmall />
                </IconButton>
              </div>
            </div>
            {/* 1-3. 헤더 알림바 영역 */}
            <div className={`chat_advise_header_alert_bar_container ${showHeaderAlertBar}`}>
              <div className="chat_advise_header_alert_bar_box">
                <h4 className="chat_advise_header_alert_bar_title">{HEADER_ALERT_BAR_TITLE}</h4>
                <p className="chat_advise_header_alert_bar_description">{HEADER_ALERT_BAR_DESCRIPTION}</p>
              </div>
            </div>
          </div>
          {/* 2. 채팅 상담 컨텐츠 */}
          <div className="chat_advise_main_content_container">
            {/* 2-1. 상담 메시지 시나리오 */}
            <MessageScenario />
            {/* 2-2. 챗봇 시나리오 */}
            <ChatbotScenario />
            {/* 2-1. 첨부파일 시나리오 */}
            <FileUploadScenario />
          </div>
          {/* 3. 채팅 상담 푸터 */}
          <div className="chat_advise_footer_container">
            {/* 3-1. 메인 푸터 - 텍스트 에디터 영역 */}
            <footer className="chat_advise_main_footer">
              <div className="chat_advise_main_footer_box">
                {/* 3-1-0. 푸터 dimed */}
                <div className={`chat_advise_main_footer_dimed_box ${DIMED_SHOW}`}>
                  <div className="chat_advise_main_footer_dimed_box_contents">
                    {/* 3-1-0-1. CASE : 버튼 표시 */}
                    <div className="chat_advise_main_footer_dimed_button_box">
                      <button type="button" className="chat_advise_main_footer_dimed_button" onClick={handleFooterDimedButton}>
                        {FOOTER_DIMED_BUTTON_TEXT}
                      </button>
                    </div>
                    <div className="chat_advise_main_footer_dimed_button_box">
                      <button type="button" className="chat_advise_main_footer_dimed_button" onClick={handleFooterDimedButton}>
                        {FOOTER_DIMED_BUTTON_TEXT}
                      </button>
                    </div>
                    {/* 3-1-0-2. CASE : 정보 표시 */}
                    {/* <div className={`chat_advise_main_footer_dimed_information_box ${FOOTER_DIMED_INFORMATION_TEXT_CASE2_CLASSNAME}`}>
                      <span className="chat_advise_main_footer_dimed_information_icon">
                        <IconLnbChatAdvise />
                      </span>
                      <span className="chat_advise_main_footer_dimed_information_text">{FOOTER_DIMED_INFORMATION_TEXT_CASE2}</span>
                    </div> */}
                  </div>
                </div>
                <div className="chat_advise_main_footer_texteditor_box">
                  {/* 3-1-1. 푸터 탑 버튼 영역 */}
                  <div className="chat_advise_main_footer_top_buttons_box">
                    <div className="chat_advise_main_footer_top_left_buttons_box">
                      <div className="chat_advise_main_footer_button chat_advise_keyword_pannel">
                        <IconButton buttonClassName="tiny" handleClick={handleToggleChatAdviseKeywordPannel}>
                          <IconChatAdviseKeywordPannelButton />
                        </IconButton>
                      </div>
                      <div className="chat_advise_main_footer_top_button button_action_pannel">
                        <IconButton buttonClassName="tiny" handleClick={handleToggleButtonActionPannel}>
                          <IconButtonActionPannelButton />
                        </IconButton>
                      </div>
                      <div className="chat_advise_main_footer_top_button text_bold">
                        <IconButton buttonClassName="tiny" handleClick={handleTextDecoration}>
                          <IconTextBold />
                        </IconButton>
                      </div>
                      <div className="chat_advise_main_footer_top_button text_italic">
                        <IconButton buttonClassName="tiny" handleClick={handleTextDecoration}>
                          <IconTextItalic />
                        </IconButton>
                      </div>
                      <div className="chat_advise_main_footer_top_button text_underline">
                        <IconButton buttonClassName="tiny" handleClick={handleTextDecoration}>
                          <IconTextUnderline />
                        </IconButton>
                      </div>
                      <div className="chat_advise_main_footer_top_button text_color">
                        <IconButton buttonClassName="tiny" handleClick={handleTextDecoration}>
                          <IconTextColor />
                        </IconButton>
                      </div>
                      <div className="chat_advise_main_footer_top_button text_background">
                        <IconButton buttonClassName="tiny" handleClick={handleTextDecoration}>
                          <IconTextBackground />
                        </IconButton>
                      </div>
                    </div>
                    <div className="chat_advise_main_footer_top_right_buttons_box">
                      <div className="KMS_pannel_button_box">
                        <OutlineButton buttonClassName="small" handleClick={handleKMSPannel}>
                          상담 지식 사전
                        </OutlineButton>
                      </div>
                    </div>
                  </div>
                  {/* 3-1-2. 푸터 입력 영역 */}
                  <div className="chat_advise_main_footer_textarea_box">텍스트입력부</div>
                  {/* 3-1-3. 푸터 첨부파일 영역 */}
                  <div className="chat_advise_main_footer_file_thumnail_box">파일썸네일 영역</div>
                  {/* 3-1-4. 푸터 바텀 버튼 영역 */}
                  <div className="chat_advise_main_footer_bottom_buttons_box">
                    <div className="chat_advise_main_footer_bottom_right_buttons_box">
                      <div className="chat_advise_main_footer_bottom_button file_upload">
                        <IconButton buttonClassName="tiny" handleClick={handleTextDecoration}>
                          <IconFileUpload />
                        </IconButton>
                      </div>
                      <div className="chat_advise_main_footer_bottom_button emoji_pannel">
                        <IconButton buttonClassName="tiny" handleClick={handleTextDecoration}>
                          <IconEmojiPannel />
                        </IconButton>
                      </div>
                      <div className="send_message_button_box">
                        <SolidButton buttonClassName="inactive" handleClick={handleSendMessage}>
                          메시지 전송
                        </SolidButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* 3-2. 상담 키워드 패널 */}
            <div className={`chat_advise_footer_keyword_pannel ${isShowChatAdviseKeywordPannel ? 'show' : ''}`}>
              <div className="chat_advise_footer_keyword_pannel_box">
                <div className="keyword_pannel_title_box">
                  <h4 className="keyword_pannel_title">상담 키워드</h4>
                  <div className="keyword_pannel_close_button_box">
                    <IconButton buttonClassName="tiny" handleClick={handleHideChatAdviseKeywordPannel}>
                      <IconCross />
                    </IconButton>
                  </div>
                </div>
                <div className="keyword_pannel_outline_search_text_field_box">
                  <OutlineSearchTextField
                    ref={refKeywordPannelTextField}
                    placeholderText="검색 내용을 입력해주세요."
                    handleClickSearchButton={handleSearchChatAdviseKeywordPannel}
                  />
                </div>
                <div className="keyword_pannel_keyword_list_box">
                  {/* 등록된 상담 키워드가 없거나 | 검색 결과가 없을 경우 출력 - 각 상황 문구 다름 주의 */}
                  {/* <div className="keyword_pannel_keyword_list_no_data_found">{CHAT_ADVISER_KEYWORD_NO_LIST}</div> */}
                  <div className="keyword_pannel_scroll_box">
                    <ul className="keyword_pannel_keyword_lists">
                      <li className="keyword_pannel_keyword_list">
                        <div
                          role="button"
                          tabIndex={0}
                          className="keyword_pannel_keyword_item_button"
                          onClick={handleClickChatAdviseKeywordItem}
                          onKeyUp={handleClickChatAdviseKeywordItem}
                        >
                          <div className="chat_advise_keyword_shortcut_text">
                            /<span className="chat_advise_keyword_highlight">고객</span>상담
                          </div>
                          <div className="chat_advise_keyword_contents">
                            텍스트를길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게
                          </div>
                          <div className="chat_advise_keyword_shortcut_keyboard no_keyboard_shortcut">단축키 없음</div>
                        </div>
                      </li>
                      <li className="keyword_pannel_keyword_list">
                        <div
                          role="button"
                          tabIndex={0}
                          className="keyword_pannel_keyword_item_button"
                          onClick={handleClickChatAdviseKeywordItem}
                          onKeyUp={handleClickChatAdviseKeywordItem}
                        >
                          <div className="chat_advise_keyword_shortcut_text">/환불문의</div>
                          <div className="chat_advise_keyword_contents">
                            텍스트를길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게
                          </div>
                          <div className="chat_advise_keyword_shortcut_keyboard">
                            <ColorTag>Ctrl</ColorTag>
                            <span>+</span>
                            <ColorTag>{CHAT_ADVISE_KEYWORD_SHORTCUT_NUMBER_KEY}</ColorTag>
                          </div>
                        </div>
                      </li>
                      <li className="keyword_pannel_keyword_list">
                        <div
                          role="button"
                          tabIndex={0}
                          className="keyword_pannel_keyword_item_button"
                          onClick={handleClickChatAdviseKeywordItem}
                          onKeyUp={handleClickChatAdviseKeywordItem}
                        >
                          <div className="chat_advise_keyword_shortcut_text">/고객문의</div>
                          <div className="chat_advise_keyword_contents">
                            텍스트를길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게
                          </div>
                          <div className="chat_advise_keyword_shortcut_keyboard">
                            <ColorTag>Ctrl</ColorTag>
                            <span>+</span>
                            <ColorTag>{CHAT_ADVISE_KEYWORD_SHORTCUT_NUMBER_KEY}</ColorTag>
                          </div>
                        </div>
                      </li>
                      <li className="keyword_pannel_keyword_list">
                        <div
                          role="button"
                          tabIndex={0}
                          className="keyword_pannel_keyword_item_button"
                          onClick={handleClickChatAdviseKeywordItem}
                          onKeyUp={handleClickChatAdviseKeywordItem}
                        >
                          <div className="chat_advise_keyword_shortcut_text">/환불고객문의문의문의문의</div>
                          <div className="chat_advise_keyword_contents">길지않은 텍스트도 올 수 있음</div>
                          <div className="chat_advise_keyword_shortcut_keyboard">
                            <ColorTag>Ctrl</ColorTag>
                            <span>+</span>
                            <ColorTag>{CHAT_ADVISE_KEYWORD_SHORTCUT_NUMBER_KEY}</ColorTag>
                          </div>
                        </div>
                      </li>
                      <li className="keyword_pannel_keyword_list">
                        <div
                          role="button"
                          tabIndex={0}
                          className="keyword_pannel_keyword_item_button"
                          onClick={handleClickChatAdviseKeywordItem}
                          onKeyUp={handleClickChatAdviseKeywordItem}
                        >
                          <div className="chat_advise_keyword_shortcut_text">/환불고객문의문의문의문의</div>
                          <div className="chat_advise_keyword_contents">
                            텍스트를길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게길게
                          </div>
                          <div className="chat_advise_keyword_shortcut_keyboard">
                            <ColorTag>Ctrl</ColorTag>
                            <span>+</span>
                            <ColorTag>{CHAT_ADVISE_KEYWORD_SHORTCUT_NUMBER_KEY}</ColorTag>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* 3-3. 버튼액션 추가 패널 */}
            <div className={`chat_advise_footer_button_action_pannel ${isShowButtonActionPannel ? 'show' : ''}`}>
              <div className="chat_advise_footer_button_action_box">
                <div className="button_action_title_box">
                  <h4 className="button_action_title">버튼액션 추가</h4>
                </div>
                <div className="button_action_text_fields_box">
                  <div className="button_action_text_field_label_box">
                    <div className="button_action_text_field_label">버튼명</div>
                    <div className="button_action_text_field_box">
                      <OutlineTextField ref={refButtonActionPannelButtonNameTextField} placeholderText="버튼명을 입력해주세요." />
                    </div>
                  </div>
                  <div className="button_action_text_field_label_box">
                    <div className="button_action_text_field_label">
                      액션<OutlineTag>URL</OutlineTag>
                    </div>
                    <div className="button_action_text_field_box">
                      <OutlineTextField ref={refButtonActionPannelButtonActionTextField} placeholderText="버튼 클릭 시 연결할 URL을 입력해주세요." />
                    </div>
                  </div>
                </div>
                <div className="button_action_add_button_box">
                  <OutlineButton handleClick={handleHideButtonActionPannel}>취소</OutlineButton>
                  <SolidButton handleClick={handleAddButtonAction}>추가하기</SolidButton>
                </div>
              </div>
            </div>
            {/* 3-4. 이모지 패널 */}
            <div className="chat_advise_keyword_emoji_pannel">이모지패널-작업필요</div>
            {/* 3-5. 푸터 영역 fixed 버튼 */}
            <div className={`move_scroll_bottom_button_box ${showScrollBottomButton}`}>
              <IconButton handleClick={handleMoveScrollBottom}>
                <IconArrowDownLong />
              </IconButton>
            </div>
            <div className={`move_scroll_new_message_button_box ${showScrollNewMessageButton}`}>
              <SolidButton handleClick={handleMoveNewMessagePosition}>새 메시지 보기</SolidButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatAdviseMainSection;
