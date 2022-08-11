import React, { useState } from 'react';
import { ReactComponent as IconLightning } from 'assets/svg/icon/chatbotAdvise/icon_charging.svg';
import { ReactComponent as IconPreviousChatAdviseTime } from 'assets/svg/icon/chatAdvise/icon_previous_chat_advise_time.svg';
import { ReactComponent as IconArrowUpLarge } from 'assets/svg/icon/icon_arrow_up_large.svg';
import { ReactComponent as IconCross } from 'assets/svg/icon/icon_cross.svg';
import { ReactComponent as IconDetailSearch } from 'assets/svg/icon/icon_detail_search.svg';
import { ReactComponent as IconRefreshAction } from 'assets/svg/icon/icon_refresh_action.svg';
import { ReactComponent as IconSorting } from 'assets/svg/icon/icon_sorting.svg';
import OnairAvatarIcon from 'components/publishing/atom/avatarIcon/OnairAvatarIcon';
import DropdownMenu from 'components/publishing/molecule/dropdown/DropdownMenu';
import IconButton from 'components/publishing/atom/button/IconButton';
import OutlineButton from 'components/publishing/atom/button/OutlineButton';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import AdviseFieldChip from 'components/publishing/atom/chip/AdviseFieldChip';
import DeletableChip from 'components/publishing/atom/chip/DeletableChip';
import ColorTag from 'components/publishing/atom/tag/ColorTag';
import OutlineSearchTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineSearchTextField';
import ChatListDim from 'components/publishing/atom/dim/ChatListDim';
import NoDataFound from 'components/publishing/atom/NoDataFound';
import BasicTextDropdown from 'components/publishing/molecule/dropdown/BasicTextDropdown';
import './ChatbotAdviseListSection.scss';

/** 챗봇 상담 리스트 영역
 */
const ChatbotAdviseListSection = () => {
  /* 챗봇 */
  const CHANNEL_BRICK_CHATBOT_DEFAULT_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_main_icon_blue.png';
  const ICON_BRICK_CHATBOT_DEFAULT_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_chat_icon_blue.png';
  const CHANNEL_BRICK_CAHTBOT_NAME = '챗봇 이름';

  /* 고객 */
  // const CUSTOMER_NAME_SHORT = '비회원94846';
  const CUSTOMER_NAME_SHORT = '비회원94846';

  /* 상담 케이스 */
  const MESSAGE_SHORT = '단문메시지';
  const MESSAGE_LONG = '장문메시지장문메시지장문메시지장문메시지장문메시지장문메시지장문메시지장문메시지';
  const LAST_MESSAGE_TIME_STAMP = '4분 전';
  const DIMED_TEXT_CASE1 = 'dim 추가 될 수도 있음';

  /* 상담 분류 */
  const CHAT_ADVISE_FIELD_CASE1 = '교환 반품 환불';
  const CHAT_ADVISE_FIELD_CASE2 = '고객 관리';
  const CHAT_ADVISE_FIELD_CASE3 = '프로모션';
  const CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE1 = 2;
  const CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 = 0;

  /* 2. 상담 카테고리 영역 */
  const handleTabChatbotAdviseCategory = () => {
    console.log('카테고리 탭 클릭');
  };

  /* 3. 챗봇 상담 검색 영역 */
  const refChatbotDetailSearchCustomerTextField = React.createRef();
  const refChatbotPreviousSearchCustomerTextField = React.createRef();
  const DETAIL_SEARCH_ACTIVE = '';
  const PREVIOUS_DETAIL_SEARCH_ACTIVE = 'active';

  /* 3-1. 상세 검색 결과 칩 영역 */
  const handleDeleteDetailSearchKeyword = value => {
    console.log(value, '삭제시 로직 수행');
  };
  /* 3-2. 상세 검색 패널 */
  const [isShowChatbotDetailSearchPannel, setIsShowChatbotDetailSearchPannel] = useState(false);
  const handleShowDetailSearchPannel = () => {
    setIsShowChatbotDetailSearchPannel(true);
  };
  const handleCancleDetailSearchPannel = () => {
    setIsShowChatbotDetailSearchPannel(false);
  };
  const handleSearchDetailChatAdviseLists = () => {
    console.log('상담 목록 상세 검색🐰');
    setIsShowChatbotDetailSearchPannel(false);
  };
  const detailSearchSelectboxAdviseFieldData = [
    { value: '전체', isSelect: true },
    { value: 'A/S', isSelect: false },
    { value: '결제', isSelect: false },
    { value: '고객 관리', isSelect: false },
    { value: '교환 반품 환불', isSelect: false },
    { value: '배송', isSelect: false },
    { value: '상품', isSelect: false },
    { value: '시스템', isSelect: false },
    { value: '주문', isSelect: false },
    { value: '프로모션', isSelect: false },
    { value: '회원', isSelect: false },
    { value: '기타', isSelect: false },
  ];

  const handleClickDropdownMenuItem = value => {
    console.log(value, '선택됨');
  };
  const handleSearchCustomerInformation = () => {
    console.log('회원 정보 검색🐰, DeletableChip 생성');
  };
  const handleRefreshSearch = () => {
    console.log('검색 초기화🥕');
  };

  const [isShowSortingDropdown, setIsShowSortingDropdown] = useState(false);
  const handleClickSortingDropdown = () => {
    setIsShowSortingDropdown(!isShowSortingDropdown);
  };
  const handleSortingChatList = e => {
    const currentValue = e.target.textContent;
    console.log('상담 리스트 정렬🥕', currentValue);
  };
  const sortingDropdownData = [
    { value: '최신대화순', handleClick: handleSortingChatList },
    { value: '오래된 대화순', handleClick: handleSortingChatList },
    { value: '최신 문의순', handleClick: handleSortingChatList },
    { value: '오래된 문의순', handleClick: handleSortingChatList },
  ];

  /* 4. 챗봇 상담 리스트 영역 */
  const CURRENT_CHATBOT_ADIVSE_LIST_COUNT = 5;
  const handleClickChatbotAdviseListItem = () => {
    console.log('상담 리스트 클릭');
  };
  const displayChatbotAdviseLists = () => {
    /* 4-1. 챗봇 상담 리스트 없는 경우 */
    if (CURRENT_CHATBOT_ADIVSE_LIST_COUNT === 0) {
      return (
        /* 진입시 리스트 없는 경우 | 검색 결과 없을 경우 문구 달라짐 */
        <div className="chatbot_advise_lists_no_data_found_box">
          <NoDataFound>챗봇 상담 목록이 없어요.</NoDataFound>
          {/* <NoDataFound>앗! 검색 결과가 없어요.</NoDataFound> */}
        </div>
      );
    }

    /* 4-2. 챗봇 상담 리스트 */
    return (
      <ul className="chatbot_advise_lists">
        <li className="chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container active"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="chatbot_advise_list">
          <article className="chatbot_advise_article">
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="chatbot_advise_list">
          <article className="chatbot_advise_article">
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="chatbot_advise_list">
          <article className="chatbot_advise_article">
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="chatbot_advise_list">
          <article className="chatbot_advise_article">
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="chatbot_advise_list">
          <article className="chatbot_advise_article">
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="chatbot_advise_list">
          <article className="chatbot_advise_article">
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    );
  };

  /* 5. 이전 상담 보기 영역 */
  const [isShowPreviousChatListPannel, setIsShowPreviousChatListPannel] = useState(false);
  const handleShowPreviousChatListPannel = () => {
    setIsShowPreviousChatListPannel(!isShowPreviousChatListPannel);
  };

  /* 5-1. 이전 상담 보기 패널 */
  const PREVISOUS_CHAT_ADIVSE_LIST_COUNT = 0;
  const displayPreviousChatAdviseLists = () => {
    /* 5-1-1. 이전 상담 보기 패널 - 리스트 없음 */
    if (PREVISOUS_CHAT_ADIVSE_LIST_COUNT === 0) {
      return (
        <div className="previous_chatbot_advise_lists_no_data_found_box">
          <NoDataFound>이전 상담 목록이 없어요.</NoDataFound>
          {/* <NoDataFound>앗! 검색 결과가 없어요.</NoDataFound> */}
        </div>
      );
    }

    /* 5-1-2. 이전 상담 보기 패널 - 상담 리스트 영역 */
    return (
      <ul className="previous_chatbot_advise_lists">
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container active"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chatbot_advise_list">
          <article className="chatbot_advise_article">
            {/* 4-3-1. 챗봇 상담 딤되는 상황 - 현재는 없으나 앞으로 생길수 있음 */}
            <ChatListDim isDim={false}>{DIMED_TEXT_CASE1}</ChatListDim>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatbotAdviseListItem}
              onKeyUp={handleClickChatbotAdviseListItem}
              className="chatbot_advise_article_clickable_container"
            >
              <div className="chatbot_advise_article_information_container">
                <div className="chatbot_advise_article_information_box">
                  <div className="chatbot_advise_channel_delimiter_img_box">
                    <img className="chatbot_advise_channel_delimiter_img" alt="channel delimiter" src={ICON_BRICK_CHATBOT_DEFAULT_IMAGE} />
                  </div>
                  <div className="chatbot_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chatbot_advise_article_adviser_name_box">BOT 상담
                  </div>
                </div>
                <div className="chatbot_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chatbot_advise_article_contents_container">
                <div className="chatbot_advise_latest_message_box">{MESSAGE_SHORT}</div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number, 상담사와 상담하고 챗봇으로 복귀한 경우 상담분야 더 있을수 있음 */}
              <div className="chatbot_advise_article_fields_container">
                <div className="chatbot_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  {/* <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip> */}
                  <div className="chatbot_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    );
  };

  const [isCurrentProceedingTab, setIsCurrentProceedingTab] = useState(true);

  return (
    <>
      <section className="chatbot_advise_list_section_wrap">
        <div className="chatbot_advise_list_container_wrap">
          {/* 1. 챗봇 정보 영역 */}
          <div className="chatbot_adviser_information_container">
            <div className="chatbot_adviser_information_box">
              <div className="chatbot_adviser_information_avatar_box">
                <OnairAvatarIcon avatarImage={CHANNEL_BRICK_CHATBOT_DEFAULT_IMAGE} onair="onair" />
              </div>
              <div className="chatbot_adviser_information_text_box">
                <div className="chatbot_adviser_information_name_box">{CHANNEL_BRICK_CAHTBOT_NAME}</div>
                <div className="chatbot_advise_operate_tag_box">
                  <ColorTag tagStyle={{backgroundColor: '#E8F4ED', color: '#219652'}}>챗봇 운영 중 <IconLightning /></ColorTag>
                </div>
              </div>
            </div>
          </div>
          {/* 2. 챗봇 상담 카테고리 영역 */}
          <div className="chatbot_advise_category_container">
            <div className="chatbot_advise_category_tabs">
              <div
                role="button"
                tabIndex={0}
                onClick={handleTabChatbotAdviseCategory}
                onKeyUp={handleTabChatbotAdviseCategory}
                className={`chatbot_advise_category_tab_button proceeding ${isCurrentProceedingTab ? 'breadscrumb' : ''}`}
              >
                <div className="chatbot_advise_category_tab_text">진행</div>
                <div className="chatbot_advise_category_tab_alert_count">
                  <span className="tab_alert_count_number">0</span>
                  <span className="tab_alert_count_text">건</span>
                </div>
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={handleTabChatbotAdviseCategory}
                onKeyUp={handleTabChatbotAdviseCategory}
                className={`chatbot_advise_category_tab_button end ${isCurrentProceedingTab ? '' : 'breadscrumb'}`}
              >
                <div className="chatbot_advise_category_tab_text">종료</div>
                <div className="chatbot_advise_category_tab_alert_count">
                  <span className="tab_alert_count_number">120</span>
                  <span className="tab_alert_count_text">건</span>
                </div>
              </div>
            </div>
          </div>
          {/* 3. 챗봇 상담 검색 영역 */}
          <div className="chatbot_advise_search_container">
            <div className="chatbot_advise_search_box">
              <div className="chatbot_advise_customer_information_search_text_field_box">
                <OutlineSearchTextField
                  ref={refChatbotDetailSearchCustomerTextField}
                  placeholderText="고객 이름, 이메일"
                  handleClickSearchButton={handleSearchCustomerInformation}
                />
              </div>
              <div className="chatbot_advise_detail_search_icon_buttons_box">
                <div className={`chatbot_advise_detail_search_icon_button_box detail_pannel ${DETAIL_SEARCH_ACTIVE}`}>
                  <IconButton buttonClassName="small outline" handleClick={handleShowDetailSearchPannel}>
                    <IconDetailSearch />
                  </IconButton>
                </div>
                <div className="chatbot_advise_detail_search_icon_button_box refresh">
                  <IconButton buttonClassName="small outline" handleClick={handleRefreshSearch}>
                    <IconRefreshAction />
                  </IconButton>
                </div>
                <div className="chatbot_advise_detail_search_icon_button_box sorting">
                  <IconButton buttonClassName="small outline" handleClick={handleClickSortingDropdown}>
                    <IconSorting />
                  </IconButton>
                  <DropdownMenu showDropdownMenu={isShowSortingDropdown ? 'show' : ''} dropdownMenuData={sortingDropdownData} />
                </div>
              </div>
            </div>
            {/* 3-1. 상세 검색 결과 칩 영역 */}
            <div className={`detail_search_deletable_chip_box ${DETAIL_SEARCH_ACTIVE === 'active' ? 'show' : ''}`}>
              <div className="detail_search_deletable_chips">
                <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#프로모션</DeletableChip>
                <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#고객관리</DeletableChip>
                <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#교환 반품 환불</DeletableChip>
              </div>
            </div>
            {/* 3-2. 상세 검색 패널 */}
            <div className={`chatbot_advise_search_detail_pannel ${isShowChatbotDetailSearchPannel ? 'show' : ''}`}>
              <div className="chatbot_advise_search_detail_pannel_dropdown_container">
                <div className="chatbot_advise_search_detail_pannel_dropdown advise_field">
                  <BasicTextDropdown
                    defaultToggleText="상담분야"
                    dropdownMenuData={detailSearchSelectboxAdviseFieldData}
                    handleClickMenuItem={handleClickDropdownMenuItem}
                  />
                </div>
              </div>
              <div className="chatbot_advise_search_detail_pannel_action_buttons_container">
                <div className="chatbot_advise_search_detail_pannel_cancle_button_box">
                  <OutlineButton handleClick={handleCancleDetailSearchPannel}>취소</OutlineButton>
                </div>
                <div className="chatbot_advise_search_detail_pannel_cancle_button_box">
                  <SolidButton handleClick={handleSearchDetailChatAdviseLists}>검색하기</SolidButton>
                </div>
              </div>
            </div>
          </div>
          {/* 4. 채팅 상담 리스트 영역 */}
          <div className="chatbot_advise_list_container">{displayChatbotAdviseLists()}</div>
          {/* 5. 이전 상담 보기 패널 영역 */}
          <div className="previous_chatbot_advise_container">
            <div
              role="button"
              tabIndex={0}
              onClick={handleShowPreviousChatListPannel}
              onKeyUp={handleShowPreviousChatListPannel}
              className="previous_chatbot_advise_show_button"
            >
              <div className="previous_chatbot_advise_button_text_box">
                <div className="previous_chatbot_advise_time_icon_box">
                  <IconPreviousChatAdviseTime />
                </div>
                <div className="previous_chatbot_advise_button_text">이전 상담 보기</div>
              </div>
              <div className="previous_chatbot_advise_arrow_icon_box">
                <IconArrowUpLarge />
              </div>
            </div>
          </div>
          {/* 5-1. 이전 상담 보기 패널 */}
          <div className={`previous_chatbot_list_pannel ${isShowPreviousChatListPannel ? 'show' : ''}`}>
            <div className="previous_chatbot_list_pannel_title_box">
              <h3 className="previous_chatbot_list_pannel_title">이전 상담 보기</h3>
              <div className="previous_chatbot_list_pannel_close_button_box">
                <IconButton buttonClassName="tiny" handleClick={handleShowPreviousChatListPannel}>
                  <IconCross />
                </IconButton>
              </div>
            </div>
            <div className="previous_chatbot_list_search_container">
              {/* 5-1-1. 상세 검색 텍스트 필드 영역 */}
              <div className="chatbot_advise_search_box">
                <div className="chatbot_advise_customer_information_search_text_field_box">
                  <OutlineSearchTextField
                    ref={refChatbotPreviousSearchCustomerTextField}
                    placeholderText="고객 이름, 이메일"
                    handleClickSearchButton={handleSearchCustomerInformation}
                  />
                </div>
                <div className="chatbot_advise_detail_search_icon_buttons_box">
                  <div className={`chatbot_advise_detail_search_icon_button_box detail_pannel ${PREVIOUS_DETAIL_SEARCH_ACTIVE}`}>
                    <IconButton buttonClassName="small outline" handleClick={handleShowDetailSearchPannel}>
                      <IconDetailSearch />
                    </IconButton>
                  </div>
                  <div className="chatbot_advise_detail_search_icon_button_box refresh">
                    <IconButton buttonClassName="small outline" handleClick={handleRefreshSearch}>
                      <IconRefreshAction />
                    </IconButton>
                  </div>
                </div>
              </div>
              {/* 5-1-2. 상세 검색 결과 칩 영역 */}
              <div className={`detail_search_deletable_chip_box ${PREVIOUS_DETAIL_SEARCH_ACTIVE === 'active' ? 'show' : ''}`}>
                <div className="detail_search_deletable_chips">
                  <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>브릭</DeletableChip>
                  <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#프로모션</DeletableChip>
                  <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#고객관리</DeletableChip>
                  <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#A/S</DeletableChip>
                  <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#교환 반품 환불</DeletableChip>
                </div>
              </div>
              {/* 5-1-3. 상세 검색 패널 */}
              <div className={`chatbot_advise_search_detail_pannel ${isShowChatbotDetailSearchPannel ? 'show' : ''}`}>
                <div className="chatbot_advise_search_detail_pannel_dropdown_container">
                  <div className="chatbot_advise_search_detail_pannel_dropdown advise_field">
                    <BasicTextDropdown
                      defaultToggleText="상담분야"
                      dropdownMenuData={detailSearchSelectboxAdviseFieldData}
                      handleClickMenuItem={handleClickDropdownMenuItem}
                    />
                  </div>
                </div>
                <div className="chatbot_advise_search_detail_pannel_action_buttons_container">
                  <div className="chatbot_advise_search_detail_pannel_cancle_button_box">
                    <OutlineButton handleClick={handleCancleDetailSearchPannel}>취소</OutlineButton>
                  </div>
                  <div className="chatbot_advise_search_detail_pannel_cancle_button_box">
                    <SolidButton handleClick={handleSearchDetailChatAdviseLists}>검색하기</SolidButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="previous_chatbot_advise_list_box">{displayPreviousChatAdviseLists()}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatbotAdviseListSection;
