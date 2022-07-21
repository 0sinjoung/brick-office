import React, { useState } from 'react';
import { ReactComponent as IconCalendar } from 'assets/svg/icon/icon_calendar.svg';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg';
import { ReactComponent as IconPreviousChatAdviseTime } from 'assets/svg/icon/chat_advise/icon_previous_chat_advise_time.svg';
import { ReactComponent as IconArrowUpLarge } from 'assets/svg/icon/icon_arrow_up_large.svg';
import { ReactComponent as IconCross } from 'assets/svg/icon/icon_cross.svg';
import { ReactComponent as IconDetailSearch } from 'assets/svg/icon/icon_detail_search.svg';
import { ReactComponent as IconRefreshAction } from 'assets/svg/icon/icon_refresh_action.svg';
import { ReactComponent as IconSorting } from 'assets/svg/icon/icon_sorting.svg';
import { ReactComponent as IconBookmark } from 'assets/svg/icon/icon_bookmark.svg';
import { ReactComponent as IconSearch } from 'assets/svg/icon/icon_search.svg';
import { ReactComponent as IconLnbChatAdvise } from 'assets/svg/icon/lnb/icon_lnb_chat_advise.svg';
import NumberNotificationBadge from 'components/publishing/atom/notificationBadge/NumberNotificationBadge';
import NewNotificationBadge from 'components/publishing/atom/notificationBadge/NewNotificationBadge';
import OnairAvatarIcon from 'components/publishing/atom/avatar/OnairAvatarIcon';
import IconButton from 'components/publishing/atom/button/IconButton';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import OutlineButton from 'components/publishing/atom/button/OutlineButton';
import OutlineTag from 'components/publishing/atom/tag/OutlineTag';
import SimpleDropdown from 'components/publishing/atom/dropdown/SimpleDropdown';
import AdviseFieldChip from 'components/publishing/atom/chip/AdviseFieldChip';
import ColorTag from 'components/publishing/atom/tag/ColorTag';
import BasicSearchTextField from 'components/publishing/atom/textFields/inlineTextField/BasicSearchTextField';
import './ChatAdviseMainSection.scss';

/** 채팅 상담 메인 영역
 */
const ChatAdviseMainSection = () => {
  const textFieldRef = React.createRef();
  const [showHeaderSearchArea, setShowHeaderSearchArea] = useState('');
  const [showHeaderSearchIcon, setShowHeaderSearchIcon] = useState('show');
  const [dimedChangeAdviserButton, setDimedChangeAdviserButton] = useState('dimed');
  const [showSearchHeaderCalendarIcon, setShowSearchHeaderCalendarIcon] = useState('show');
  const [showHeaderAlertBar, setShowHeaderAlertBar] = useState('show');
  const [activeCalendarIconButton, setActiveCalendarIconButton] = useState(false);
  const CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_chat_icon_white.png';
  const CUSTOMER_NAME_SHORT = '김다영';
  const CURRENT_ADVISE_CHAT_STATE = '김제니 상담 진행 중';
  const HEADER_ALERT_BAR_TITLE = '상담사 변경 요청 이유';
  const HEADER_ALERT_BAR_DESCRIPTION = '상담분야 변경: 배송문의 - 결제문의';
  const CURRENT_CHAT_STATE = '상담진행중';

  const handleShowHeaderSearchArea = () => {
    setShowHeaderSearchArea('show');
    setShowHeaderSearchIcon('');
  };
  const handleHideHeaderSearchArea = () => {
    setShowHeaderSearchArea('');
    setShowHeaderSearchIcon('show');
    setActiveCalendarIconButton(false);
  };
  const handleChangeAdviser = () => {
    console.log('상담사 변경');
  };
  const handleClickSearchButton = () => {
    console.log('검색 버튼 클릭');
    console.log(textFieldRef.current.value);
  };

  const handleClickCalendarButton = () => {
    console.log('달력 아이콘 버튼 클릭');
    setActiveCalendarIconButton(!activeCalendarIconButton);
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
                  <img className="chat_advise_header_channel_delimiter_img" alt="channel delimiter image" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
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
            <div className={`chat_advise_search_header_container ${showHeaderSearchArea} ${activeCalendarIconButton ? 'active' : ''}`}>
              <div className="chat_advise_search_header_basic_search_text_field_box">
                <BasicSearchTextField
                  ref={textFieldRef}
                  placeholderText="찾고 싶은 대화 내용을 입력해 주세요"
                  handleClickSearchButton={handleClickSearchButton}
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
            메인 상담 영역
            <div className="dummy" />
            <div className="dummy" />
            <div className="dummy" />
            <div className="dummy" />
            <div className="dummy" />
            <div className="dummy" />
            <div className="dummy" />
            <div className="dummy" />
          </div>
          {/* 3. 채팅 상담 푸터 */}
          <div className="chat_advise_footer_container">
            <footer className="chat_advise_main_footer">
              <div className="chat_advise_main_footer_box">{/* <div>채팅 메인 푸터</div> */}</div>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatAdviseMainSection;
