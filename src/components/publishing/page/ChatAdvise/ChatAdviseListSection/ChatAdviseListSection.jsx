import React, { useState } from 'react';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg';
import { ReactComponent as IconPreviousChatAdviseTime } from 'assets/svg/icon/chatAdvise/icon_previous_chat_advise_time.svg';
import { ReactComponent as IconArrowUpLarge } from 'assets/svg/icon/icon_arrow_up_large.svg';
import { ReactComponent as IconCross } from 'assets/svg/icon/icon_cross.svg';
import { ReactComponent as IconDetailSearch } from 'assets/svg/icon/icon_detail_search.svg';
import { ReactComponent as IconRefreshAction } from 'assets/svg/icon/icon_refresh_action.svg';
import { ReactComponent as IconSorting } from 'assets/svg/icon/icon_sorting.svg';
import { ReactComponent as IconBookmark } from 'assets/svg/icon/icon_bookmark.svg';
import { ReactComponent as IconLnbChatAdvise } from 'assets/svg/icon/lnb/icon_lnb_chat_advise.svg';
import NumberNotificationBadge from 'components/publishing/atom/notificationBadge/NumberNotificationBadge';
import NewNotificationBadge from 'components/publishing/atom/notificationBadge/NewNotificationBadge';
import OnairAvatarIcon from 'components/publishing/atom/avatarIcon/OnairAvatarIcon';
import IconButton from 'components/publishing/atom/button/IconButton';
import OutlineButton from 'components/publishing/atom/button/OutlineButton';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import AdviseFieldChip from 'components/publishing/atom/chip/AdviseFieldChip';
import DeletableChip from 'components/publishing/atom/chip/DeletableChip';
import ColorTag from 'components/publishing/atom/tag/ColorTag';
import OutlineSearchTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineSearchTextField';
import NoDataFound from 'components/publishing/atom/NoDataFound';
import BasicConfirmModal from 'components/publishing/molecule/modal/BasicConfirmModal';
import ToastMessage from 'components/publishing/atom/ToastMessage';
import BasicTextSelectbox from 'components/publishing/molecule/selectbox/BasicTextSelectbox';
import './ChatAdviseListSection.scss';

/** 채팅 상담 리스트 영역
 */
const ChatAdviseListSection = () => {
  /* 상담 채널 */
  const CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_chat_icon_white.png';
  const CHANNEL_BRICK_CHATBOT_DEFAULT_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_chat_icon_blue.png';
  const CHANNEL_KAKAO_DEFAULT_IMAGE = '';
  const CHANNEL_NAVER_DEFAULT_IMAGE = '';

  /* 고객 */
  const CUSTOMER_NAME_SHORT = '김다영';
  const CUSTOMER_NAME_LONG = '김다영김다영김다영';

  /* 상담사 */
  const START_WORKING_CASE1 = true;
  const ADVISER_NAME_CASE1 = '김제니';
  const ADVISER_NICKNAME_CASE1 = '꾸꾸';
  const ADVISER_PROFILE_IMAGE_CASE1 = 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile2.png';
  const ADVISER_EMAIL_CASE1 = 'rilla7777@rilla.com';

  const START_WORKING_CASE2 = false;
  const ADVISER_NAME_CASE2 = '안재이';
  const ADVISER_NICKNAME_CASE2 = '안재이'; // 마이페이지 - 닉네임 설정 안했을 경우 이름과 동일한 값이 닉네임 디폴트로 표시됨
  const ADVISER_PROFILE_IMAGE_CASE2 = 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile3.png';
  const ADVISER_EMAIL_CASE2 = 'rillarillarillarillari77777777@rilla.com';

  /* 상담 케이스 */
  const NEW_MESSAGE_ALERT_COUNT_CASE1 = 0;
  const NEW_MESSAGE_ALERT_COUNT_CASE2 = 8;
  const NEW_MESSAGE_ALERT_COUNT_CASE3 = 50;
  const NEW_MESSAGE_ALERT_COUNT_CASE4 = 100;
  const MESSAGE_SHORT = '단문메시지';
  const MESSAGE_LONG = '장문메시지장문메시지장문메시지장문메시지장문메시지장문메시지장문메시지장문메시지';
  const LAST_MESSAGE_TIME_STAMP = '4분 전';
  const DIMED_TEXT_CASE1 = '안재이님에게 상담사 변경 요청을 보냈어요.';

  /* 상담 분류 */
  const CHAT_ADVISE_FIELD_CASE1 = '교환 반품 환불';
  const CHAT_ADVISE_FIELD_CASE2 = '고객 관리';
  const CHAT_ADVISE_FIELD_CASE3 = '프로모션';
  const CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE1 = 2;
  const CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 = 0;

  /* 0. 토스트 메시지 */
  const [toastMessageData, setToastMessageData] = useState({
    isShow: false,
    icon: '',
    message: '',
  });

  /* 1. 상담사 정보 영역 */
  /* 1-1. 셀렉트 박스 - 업무 상태 */
  const [showAdviserWorkingStateModal, setShowClickAdviseWorkingStateModal] = useState('');
  const [versionAdviserWorkingStateModal, setVersionAdviserWorkingStateModal] = useState('');
  const handleClickSelectboxAdviserWorkingStateStart = () => {
    console.log('셀렉트박스 - 시작하기');
    setShowClickAdviseWorkingStateModal('show');
    setVersionAdviserWorkingStateModal('start');
  };
  const handleClickSelectboxAdviserWorkingStateEnd = () => {
    console.log('셀렉트박스 - 종료하기');
    setShowClickAdviseWorkingStateModal('show');
    setVersionAdviserWorkingStateModal('end');
  };
  const handleCloseAdviserWorkingStateModal = () => {
    console.log('모달 종료');
    setShowClickAdviseWorkingStateModal('');
  };
  const handleActionAdviserWorkingStateStartModal = () => {
    console.log('업무상태 = 시작');
    setShowClickAdviseWorkingStateModal('');
    setToastMessageData({ ...toastMessageData, isShow: true, message: '업무 시작으로 상태를 변경했어요.' });
    setTimeout(() => setToastMessageData({ isShow: false, icon: '', message: '' }), 3000);
  };
  const handleActionAdviserWorkingStateEndModal = () => {
    console.log('업무상태 = 종료');
    setShowClickAdviseWorkingStateModal('');
    setToastMessageData({ ...toastMessageData, isShow: true, message: '업무 종료로 상태를 변경했어요.' });
    setTimeout(() => setToastMessageData({ isShow: false, icon: '', message: '' }), 3000);
  };
  const displayAdviserWorkingStateModal = () => {
    if (showAdviserWorkingStateModal === 'show') {
      if (versionAdviserWorkingStateModal === 'start') {
        return (
          <BasicConfirmModal
            showModal={showAdviserWorkingStateModal}
            titleText="상담 업무를 시작할까요?"
            actionButtonText="시작하기"
            handleAction={handleActionAdviserWorkingStateStartModal}
            handleClose={handleCloseAdviserWorkingStateModal}
          />
        );
      }

      return (
        <BasicConfirmModal
          showModal={showAdviserWorkingStateModal}
          titleText="상담 업무를 종료할까요?"
          actionButtonText="종료하기"
          handleAction={handleActionAdviserWorkingStateEndModal}
          handleClose={handleCloseAdviserWorkingStateModal}
        >
          상담 업무 종료상태에서 채팅 상담을 진행 할 수 없습니다.
        </BasicConfirmModal>
      );
    }
  };
  const workingStateDropdownData = {
    start: {
      text: '업무시작',
      handleClick: handleClickSelectboxAdviserWorkingStateStart,
      tagText: '근무중',
      tagTextColor: '#219652',
      tagBackgroundColor: '#2196521A',
    },
    end: { text: '업무종료', handleClick: handleClickSelectboxAdviserWorkingStateEnd, tagText: '종료', tagTextColor: '#28323C', tagBackgroundColor: '#ECEDEF' },
  };
  const [showWorkingStateDropdown, setShowSettingDropdown] = useState(false);
  const clickWorkingStateDropdownToggle = () => {
    console.log('업무상태 토글');
    setShowSettingDropdown(!showWorkingStateDropdown);
  };

  /* 2. 상담 카테고리 영역 */
  const handleTabChatAdviseCategory = () => {
    console.log('카테고리 탭 클릭');
  };

  /* 3. 채팅 상담 검색 영역 */
  const refDetailSearchCustomerTextField = React.createRef();
  const refPreviousSearchCustomerTextField = React.createRef();
  const DETAIL_SEARCH_ACTIVE = 'active';
  const PREVIOUS_DETAIL_SEARCH_ACTIVE = '';

  /* 3-1. 상세 검색 결과 칩 영역 */
  const handleDeleteDetailSearchKeyword = value => {
    console.log(value, '삭제시 로직 수행');
  };
  /* 3-2. 상세 검색 패널 */
  const [isShowDetailSearchPannel, setIsShowDetailSearchPannel] = useState(false);
  const handleShowDetailSearchPannel = () => {
    setIsShowDetailSearchPannel(true);
  };
  const handleCancleDetailSearchPannel = () => {
    setIsShowDetailSearchPannel(false);
  };
  const handleSearchDetailChatAdviseLists = () => {
    console.log('상담 목록 상세 검색🐰');
    setIsShowDetailSearchPannel(false);
  };
  const detailSearchSelectboxAdviserData = [
    { value: '전체', isSelect: true },
    { value: '상담사 배정 필요', isSelect: false },
    { value: '김제니(꾸꾸)', isSelect: false },
    { value: '안재이(안재이)', isSelect: false },
    { value: '김소나(안드로메다)', isSelect: false },
  ];
  const detailSearchSelectboxChannelData = [
    { value: '전체', isSelect: true },
    { value: '브릭', isSelect: false },
    { value: '카카오톡', isSelect: false },
    { value: '네이버 톡톡', isSelect: false },
    { value: '라인', isSelect: false },
  ];
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

  const handleClickSelectBoxItem = value => {
    console.log(value, '선택됨');
  };
  const handleSearchCustomerInformation = () => {
    console.log('회원 정보 검색🐰, DeletableChip 생성');
  };
  const handleRefreshSearch = () => {
    console.log('검색 초기화🥕');
  };
  const handleSortingChatList = () => {
    console.log('상담 리스트 정렬🥕');
  };

  /* 4. 채팅 상담 리스트 영역 */
  const CURRENT_CHAT_ADIVSE_LIST_COUNT = 10;
  const handleClickChatAdviseListItem = () => {
    console.log('상담 리스트 클릭');
  };
  const displayChatAdviseLists = () => {
    /* 4-1. 채팅 상담 리스트 없는 경우 */
    if (CURRENT_CHAT_ADIVSE_LIST_COUNT === 0) {
      return (
        /* 진입시 리스트 없는 경우 | 검색 결과 없을 경우 문구 달라짐 */
        <div className="chat_advise_lists_no_data_found_box">
          <NoDataFound>상담 목록이 없어요.</NoDataFound>
          {/* <NoDataFound>앗! 검색 결과가 없어요.</NoDataFound> */}
        </div>
      );
    }

    /* 4-2. 채팅 상담 리스트 */
    return (
      <ul className="chat_advise_lists">
        <li className="chat_advise_list">
          <article className="chat_advise_article">
            <div className="chat_advise_dimed">
              <div className="chat_advise_dimed_text_box">
                <div className="chat_advise_dimed_text">{DIMED_TEXT_CASE1}</div>
              </div>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatAdviseListItem}
              onKeyUp={handleClickChatAdviseListItem}
              className="chat_advise_article_clickable_container active"
            >
              <div className="chat_advise_article_information_container">
                <div className="chat_advise_article_information_box">
                  <div className="chat_advise_channel_delimiter_img_box">
                    <img className="chat_advise_channel_delimiter_img" alt="channel delimiter" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                  </div>
                  <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chat_advise_article_bookmark_icon_box">
                    <IconBookmark />
                  </div>
                  <div className="chat_advise_article_adviser_name_box show">
                    {/* (1) 상담사 미배정 상태 */}
                    {/* <span className="chat_adviser_name">상담사 배정 필요</span>
                    <div className="chat_adviser_name_card no_adviser">상담사 미배정 상태</div> */}
                    {/* (2) 상담사 정보  */}
                    <span className="chat_adviser_name">{ADVISER_NICKNAME_CASE1} 상담사</span>
                    <div className="chat_adviser_name_card">
                      <div className="chat_adviser_name_card_avatar_box">
                        <OnairAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE1} onair={START_WORKING_CASE1 ? 'onair' : ''} />
                      </div>
                      <div className="chat_adviser_name_card_information_box">
                        <div className="chat_adviser_name_card_name_text">{`${ADVISER_NAME_CASE1}(${ADVISER_NICKNAME_CASE1})`}</div>
                        <div className="chat_adviser_name_card_email_text">{ADVISER_EMAIL_CASE1}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chat_advise_article_contents_container">
                <div className="chat_advise_latest_message_box">{MESSAGE_SHORT}</div>
                <div className="chat_advise_new_message_alert_count">
                  <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE1}</NumberNotificationBadge>
                </div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number */}
              <div className="chat_advise_article_fields_container">
                <div className="chat_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip>
                  <div className="chat_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE1 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE1}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="chat_advise_list">
          <article className="chat_advise_article">
            <div className="chat_advise_dimed">
              <div className="chat_advise_dimed_text_box">
                <div className="chat_advise_dimed_text">{DIMED_TEXT_CASE1}</div>
              </div>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatAdviseListItem}
              onKeyUp={handleClickChatAdviseListItem}
              className="chat_advise_article_clickable_container"
            >
              <div className="chat_advise_article_information_container">
                <div className="chat_advise_article_information_box">
                  <div className="chat_advise_channel_delimiter_img_box">
                    <img className="chat_advise_channel_delimiter_img" alt="channel delimiter" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                  </div>
                  <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chat_advise_article_bookmark_icon_box">
                    <IconBookmark />
                  </div>
                  <div className="chat_advise_article_adviser_name_box show">
                    {/* (1) 상담사 미배정 상태 */}
                    {/* <span className="chat_adviser_name">상담사 배정 필요</span>
                    <div className="chat_adviser_name_card no_adviser">상담사 미배정 상태</div> */}
                    {/* (2) 상담사 정보  */}
                    <span className="chat_adviser_name">{ADVISER_NICKNAME_CASE2} 상담사</span>
                    <div className="chat_adviser_name_card">
                      <div className="chat_adviser_name_card_avatar_box">
                        <OnairAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE2} onair={START_WORKING_CASE2 ? 'onair' : ''} />
                      </div>
                      <div className="chat_adviser_name_card_information_box">
                        <div className="chat_adviser_name_card_name_text">{`${ADVISER_NAME_CASE2}(${ADVISER_NICKNAME_CASE2})`}</div>
                        <div className="chat_adviser_name_card_email_text">{ADVISER_EMAIL_CASE2}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chat_advise_article_contents_container">
                <div className="chat_advise_latest_message_box">{MESSAGE_LONG}</div>
                <div className="chat_advise_new_message_alert_count">
                  <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE2}</NumberNotificationBadge>
                </div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number */}
              <div className="chat_advise_article_fields_container">
                <div className="chat_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  <div className="chat_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="chat_advise_list">
          <article className="chat_advise_article">
            <div className="chat_advise_dimed active">
              <div className="chat_advise_dimed_text_box">
                <div className="chat_advise_dimed_text">{DIMED_TEXT_CASE1}</div>
              </div>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatAdviseListItem}
              onKeyUp={handleClickChatAdviseListItem}
              className="chat_advise_article_clickable_container"
            >
              <div className="chat_advise_article_information_container">
                <div className="chat_advise_article_information_box">
                  <div className="chat_advise_channel_delimiter_img_box">
                    <img className="chat_advise_channel_delimiter_img" alt="channel delimiter" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                  </div>
                  <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chat_advise_article_bookmark_icon_box">
                    <IconBookmark />
                  </div>
                  <div className="chat_advise_article_adviser_name_box show">
                    {/* (1) 상담사 미배정 상태 */}
                    {/* <span className="chat_adviser_name">상담사 배정 필요</span>
                    <div className="chat_adviser_name_card no_adviser">상담사 미배정 상태</div> */}
                    {/* (2) 상담사 정보  */}
                    <span className="chat_adviser_name">{ADVISER_NICKNAME_CASE1} 상담사</span>
                    <div className="chat_adviser_name_card">
                      <div className="chat_adviser_name_card_avatar_box">
                        <OnairAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE2} onair={START_WORKING_CASE1 ? 'onair' : ''} />
                      </div>
                      <div className="chat_adviser_name_card_information_box">
                        <div className="chat_adviser_name_card_name_text">{`${ADVISER_NAME_CASE1}(${ADVISER_NICKNAME_CASE1})`}</div>
                        <div className="chat_adviser_name_card_email_text">{ADVISER_EMAIL_CASE1}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chat_advise_article_contents_container">
                <div className="chat_advise_latest_message_box">{MESSAGE_SHORT}</div>
                <div className="chat_advise_new_message_alert_count">
                  <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE3}</NumberNotificationBadge>
                </div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number */}
              <div className="chat_advise_article_fields_container">
                <div className="chat_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip>
                  <div className="chat_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE1 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE1}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="chat_advise_list">
          <article className="chat_advise_article">
            <div className="chat_advise_dimed">
              <div className="chat_advise_dimed_text_box">
                <div className="chat_advise_dimed_text">{DIMED_TEXT_CASE1}</div>
              </div>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatAdviseListItem}
              onKeyUp={handleClickChatAdviseListItem}
              className="chat_advise_article_clickable_container"
            >
              <div className="chat_advise_article_information_container">
                <div className="chat_advise_article_information_box">
                  <div className="chat_advise_channel_delimiter_img_box">
                    <img className="chat_advise_channel_delimiter_img" alt="channel delimiter" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                  </div>
                  <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_LONG}</div>
                  <div className="chat_advise_article_bookmark_icon_box">
                    <IconBookmark />
                  </div>
                  <div className="chat_advise_article_adviser_name_box show">
                    {/* (1) 상담사 미배정 상태 */}
                    {/* <span className="chat_adviser_name">상담사 배정 필요</span>
                    <div className="chat_adviser_name_card no_adviser">상담사 미배정 상태</div> */}
                    {/* (2) 상담사 정보  */}
                    <span className="chat_adviser_name">{ADVISER_NICKNAME_CASE2} 상담사</span>
                    <div className="chat_adviser_name_card">
                      <div className="chat_adviser_name_card_avatar_box">
                        <OnairAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE2} onair={START_WORKING_CASE2 ? 'onair' : ''} />
                      </div>
                      <div className="chat_adviser_name_card_information_box">
                        <div className="chat_adviser_name_card_name_text">{`${ADVISER_NAME_CASE2}(${ADVISER_NICKNAME_CASE2})`}</div>
                        <div className="chat_adviser_name_card_email_text">{ADVISER_EMAIL_CASE2}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chat_advise_article_contents_container">
                <div className="chat_advise_latest_message_box">{MESSAGE_SHORT}</div>
                <div className="chat_advise_new_message_alert_count">
                  <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE4}</NumberNotificationBadge>
                </div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number */}
              <div className="chat_advise_article_fields_container">
                <div className="chat_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip>
                  <div className="chat_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="chat_advise_list">
          <article className="chat_advise_article">
            <div className="chat_advise_dimed">
              <div className="chat_advise_dimed_text_box">
                <div className="chat_advise_dimed_text">{DIMED_TEXT_CASE1}</div>
              </div>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatAdviseListItem}
              onKeyUp={handleClickChatAdviseListItem}
              className="chat_advise_article_clickable_container"
            >
              <div className="chat_advise_article_information_container">
                <div className="chat_advise_article_information_box">
                  <div className="chat_advise_channel_delimiter_img_box">
                    <img className="chat_advise_channel_delimiter_img" alt="channel delimiter" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                  </div>
                  <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chat_advise_article_bookmark_icon_box">
                    <IconBookmark />
                  </div>
                  <div className="chat_advise_article_adviser_name_box show">
                    {/* (1) 상담사 미배정 상태 */}
                    {/* <span className="chat_adviser_name">상담사 배정 필요</span>
                    <div className="chat_adviser_name_card no_adviser">상담사 미배정 상태</div> */}
                    {/* (2) 상담사 정보  */}
                    <span className="chat_adviser_name">{ADVISER_NICKNAME_CASE2} 상담사</span>
                    <div className="chat_adviser_name_card">
                      <div className="chat_adviser_name_card_avatar_box">
                        <OnairAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE2} onair={START_WORKING_CASE2 ? 'onair' : ''} />
                      </div>
                      <div className="chat_adviser_name_card_information_box">
                        <div className="chat_adviser_name_card_name_text">{`${ADVISER_NAME_CASE2}(${ADVISER_NICKNAME_CASE2})`}</div>
                        <div className="chat_adviser_name_card_email_text">{ADVISER_EMAIL_CASE2}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chat_advise_article_contents_container">
                <div className="chat_advise_latest_message_box">{MESSAGE_SHORT}</div>
                <div className="chat_advise_new_message_alert_count">
                  <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE4}</NumberNotificationBadge>
                </div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number */}
              <div className="chat_advise_article_fields_container">
                <div className="chat_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip>
                  <div className="chat_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE2}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="chat_advise_list">
          <article className="chat_advise_article">
            <div className="chat_advise_dimed">
              <div className="chat_advise_dimed_text_box">
                <div className="chat_advise_dimed_text">{DIMED_TEXT_CASE1}</div>
              </div>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatAdviseListItem}
              onKeyUp={handleClickChatAdviseListItem}
              className="chat_advise_article_clickable_container"
            >
              <div className="chat_advise_article_information_container">
                <div className="chat_advise_article_information_box">
                  <div className="chat_advise_channel_delimiter_img_box">
                    <img className="chat_advise_channel_delimiter_img" alt="channel delimiter" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                  </div>
                  <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chat_advise_article_bookmark_icon_box">
                    <IconBookmark />
                  </div>
                  <div className="chat_advise_article_adviser_name_box show">
                    {/* (1) 상담사 미배정 상태 */}
                    {/* <span className="chat_adviser_name">상담사 배정 필요</span>
                    <div className="chat_adviser_name_card no_adviser">상담사 미배정 상태</div> */}
                    {/* (2) 상담사 정보  */}
                    <span className="chat_adviser_name">{ADVISER_NICKNAME_CASE2} 상담사</span>
                    <div className="chat_adviser_name_card">
                      <div className="chat_adviser_name_card_avatar_box">
                        <OnairAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE2} onair={START_WORKING_CASE2 ? 'onair' : ''} />
                      </div>
                      <div className="chat_adviser_name_card_information_box">
                        <div className="chat_adviser_name_card_name_text">{`${ADVISER_NAME_CASE2}(${ADVISER_NICKNAME_CASE2})`}</div>
                        <div className="chat_adviser_name_card_email_text">{ADVISER_EMAIL_CASE2}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chat_advise_article_contents_container">
                <div className="chat_advise_latest_message_box">{MESSAGE_SHORT}</div>
                <div className="chat_advise_new_message_alert_count">
                  <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE4}</NumberNotificationBadge>
                </div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number */}
              <div className="chat_advise_article_fields_container">
                <div className="chat_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip>
                  <div className="chat_advise_fields_more_number_box">
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
        <div className="previous_chat_advise_lists_no_data_found_box">
          <NoDataFound>이전 상담 목록이 없어요.</NoDataFound>
          {/* <NoDataFound>앗! 검색 결과가 없어요.</NoDataFound> */}
        </div>
      );
    }

    /* 5-1-2. 이전 상담 보기 패널 - 상담 리스트 영역 */
    return (
      <ul className="previous_chat_advise_lists">
        <li className="previous_chat_advise_list">
          <article className="chat_advise_article">
            <div className="chat_advise_dimed">
              <div className="chat_advise_dimed_text_box">
                <div className="chat_advise_dimed_text">{DIMED_TEXT_CASE1}</div>
              </div>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatAdviseListItem}
              onKeyUp={handleClickChatAdviseListItem}
              className="chat_advise_article_clickable_container active"
            >
              <div className="chat_advise_article_information_container">
                <div className="chat_advise_article_information_box">
                  <div className="chat_advise_channel_delimiter_img_box">
                    <img className="chat_advise_channel_delimiter_img" alt="channel delimiter" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                  </div>
                  <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chat_advise_article_bookmark_icon_box">
                    <IconBookmark />
                  </div>
                  <div className="chat_advise_article_adviser_name_box show">
                    {/* (1) 상담사 미배정 상태 */}
                    {/* <span className="chat_adviser_name">상담사 배정 필요</span>
                    <div className="chat_adviser_name_card no_adviser">상담사 미배정 상태</div> */}
                    {/* (2) 상담사 정보  */}
                    <span className="chat_adviser_name">{ADVISER_NICKNAME_CASE1} 상담사</span>
                    <div className="chat_adviser_name_card">
                      <div className="chat_adviser_name_card_avatar_box">
                        <OnairAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE1} onair={START_WORKING_CASE1 ? 'onair' : ''} />
                      </div>
                      <div className="chat_adviser_name_card_information_box">
                        <div className="chat_adviser_name_card_name_text">{`${ADVISER_NAME_CASE1}(${ADVISER_NICKNAME_CASE1})`}</div>
                        <div className="chat_adviser_name_card_email_text">{ADVISER_EMAIL_CASE1}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chat_advise_article_contents_container">
                <div className="chat_advise_latest_message_box">{MESSAGE_SHORT}</div>
                <div className="chat_advise_new_message_alert_count">
                  <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE1}</NumberNotificationBadge>
                </div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number */}
              <div className="chat_advise_article_fields_container">
                <div className="chat_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip>
                  <div className="chat_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE1 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE1}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
        <li className="previous_chat_advise_list">
          <article className="chat_advise_article">
            <div className="chat_advise_dimed">
              <div className="chat_advise_dimed_text_box">
                <div className="chat_advise_dimed_text">{DIMED_TEXT_CASE1}</div>
              </div>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={handleClickChatAdviseListItem}
              onKeyUp={handleClickChatAdviseListItem}
              className="chat_advise_article_clickable_container"
            >
              <div className="chat_advise_article_information_container">
                <div className="chat_advise_article_information_box">
                  <div className="chat_advise_channel_delimiter_img_box">
                    <img className="chat_advise_channel_delimiter_img" alt="channel delimiter" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                  </div>
                  <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                  <div className="chat_advise_article_bookmark_icon_box">
                    <IconBookmark />
                  </div>
                  <div className="chat_advise_article_adviser_name_box show">
                    {/* (1) 상담사 미배정 상태 */}
                    {/* <span className="chat_adviser_name">상담사 배정 필요</span>
                    <div className="chat_adviser_name_card no_adviser">상담사 미배정 상태</div> */}
                    {/* (2) 상담사 정보  */}
                    <span className="chat_adviser_name">{ADVISER_NICKNAME_CASE1} 상담사</span>
                    <div className="chat_adviser_name_card">
                      <div className="chat_adviser_name_card_avatar_box">
                        <OnairAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE1} onair={START_WORKING_CASE1 ? 'onair' : ''} />
                      </div>
                      <div className="chat_adviser_name_card_information_box">
                        <div className="chat_adviser_name_card_name_text">{`${ADVISER_NAME_CASE1}(${ADVISER_NICKNAME_CASE1})`}</div>
                        <div className="chat_adviser_name_card_email_text">{ADVISER_EMAIL_CASE1}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
              </div>
              <div className="chat_advise_article_contents_container">
                <div className="chat_advise_latest_message_box">{MESSAGE_SHORT}</div>
                <div className="chat_advise_new_message_alert_count">
                  <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE1}</NumberNotificationBadge>
                </div>
              </div>
              {/* 상담 분야 최대 3개까지 표시, 그 이상일 경우 +number */}
              <div className="chat_advise_article_fields_container">
                <div className="chat_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip>
                  <div className="chat_advise_fields_more_number_box">
                    {CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE1 !== 0 ? `+${CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE1}` : ''}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    );
  };

  return (
    <>
      <section className="chat_advise_list_section_wrap">
        <div className="chat_advise_list_container_wrap">
          {/* 1. 상담사 정보 영역 */}
          <div className="chat_adviser_information_container">
            <div className="chat_adviser_information_box">
              <div className="chat_adviser_information_avatar_box">
                <OnairAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE1} onair={START_WORKING_CASE1 ? 'onair' : ''} />
              </div>
              <div className="chat_adviser_information_text_box">
                <div className="chat_adviser_information_name_box">{ADVISER_NICKNAME_CASE1}</div>
                <div className="chat_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER_CASE1}</div>
                </div>
              </div>
            </div>
            <div className="chat_adviser_working_state_dropdown">
              <button type="button" className="chat_adviser_working_state_dropdown_button" onClick={clickWorkingStateDropdownToggle}>
                <div className="current_working_state_box">
                  <ColorTag tagStyle={{ backgroundColor: workingStateDropdownData.end.tagBackgroundColor, color: workingStateDropdownData.end.tagTextColor }}>
                    {workingStateDropdownData.end.tagText}
                  </ColorTag>
                  <span className="current_working_state_text">{workingStateDropdownData.end.text}</span>
                </div>
                <div className="dropdown_arrow_box">
                  <IconDropdownArrow />
                </div>
              </button>
              <div className={`chat_adviser_working_state_dropdown_box ${showWorkingStateDropdown ? 'show' : ''}`}>
                <ul className="chat_adviser_working_state_dropdown_lists">
                  <li className="chat_adviser_working_state_dropdown_list">
                    <button type="button" onClick={workingStateDropdownData.start.handleClick} className="chat_adviser_working_state_dropdown_list_item_button">
                      {workingStateDropdownData.start.text}
                    </button>
                  </li>
                  <li className="chat_adviser_working_state_dropdown_list">
                    <button
                      type="button"
                      onClick={workingStateDropdownData.end.handleClick}
                      className="chat_adviser_working_state_dropdown_list_item_button active"
                    >
                      {workingStateDropdownData.end.text}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {displayAdviserWorkingStateModal()}
          {/* 2. 상담 카테고리 영역 */}
          <div className="chat_advise_category_container">
            <div className="chat_advise_category_first_tabs">
              <div
                role="button"
                tabIndex={0}
                onClick={handleTabChatAdviseCategory}
                onKeyUp={handleTabChatAdviseCategory}
                className="chat_advise_category_first_tab_button my_advise breadscrumb"
              >
                <div className="chat_advise_category_first_tab_text">내 상담</div>
                <div className="chat_advise_category_first_tab_alert_count">
                  <span className="tab_alert_count_number">80</span>
                  <span className="tab_alert_count_text">건</span>
                </div>
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={handleTabChatAdviseCategory}
                onKeyUp={handleTabChatAdviseCategory}
                className="chat_advise_category_first_tab_button all_advise"
              >
                <div className="chat_advise_category_first_tab_text">전체상담</div>
                <div className="chat_advise_category_first_tab_alert_count">
                  <span className="tab_alert_count_number">100</span>
                  <span className="tab_alert_count_text">건</span>
                </div>
              </div>
            </div>
            <div className="chat_advise_category_second_tabs">
              <div
                role="button"
                tabIndex={0}
                onClick={handleTabChatAdviseCategory}
                onKeyUp={handleTabChatAdviseCategory}
                className="chat_advise_category_second_tab_button wating breadscrumb"
              >
                <div className="chat_advise_category_second_tab_text">대기</div>
                <div className="chat_advise_category_second_tab_alert_count">20</div>
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={handleTabChatAdviseCategory}
                onKeyUp={handleTabChatAdviseCategory}
                className="chat_advise_category_second_tab_button proceeding"
              >
                <div className="chat_advise_category_second_tab_text">진행</div>
                <div className="chat_advise_category_second_tab_alert_count">
                  06
                  {/* <NewNotificationBadge /> */}
                </div>
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={handleTabChatAdviseCategory}
                onKeyUp={handleTabChatAdviseCategory}
                className="chat_advise_category_second_tab_button holding"
              >
                <div className="chat_advise_category_second_tab_text">보류</div>
                <div className="chat_advise_category_second_tab_alert_count">00</div>
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={handleTabChatAdviseCategory}
                onKeyUp={handleTabChatAdviseCategory}
                className="chat_advise_category_second_tab_button end"
              >
                <div className="chat_advise_category_second_tab_text">종료</div>
                <div className="chat_advise_category_second_tab_alert_count">00</div>
              </div>
            </div>
          </div>
          {/* 3. 채팅 상담 검색 영역 */}
          <div className="chat_advise_search_container">
            <div className="chat_advise_search_box">
              <div className="chat_advise_customer_information_search_text_field_box">
                <OutlineSearchTextField
                  ref={refDetailSearchCustomerTextField}
                  placeholderText="고객 이름, 이메일"
                  handleClickSearchButton={handleSearchCustomerInformation}
                />
              </div>
              <div className="chat_advise_detail_search_icon_buttons_box">
                <div className={`chat_advise_detail_search_icon_button_box detail_pannel ${DETAIL_SEARCH_ACTIVE}`}>
                  <IconButton buttonClassName="small outline" handleClick={handleShowDetailSearchPannel}>
                    <IconDetailSearch />
                  </IconButton>
                </div>
                <div className="chat_advise_detail_search_icon_button_box refresh">
                  <IconButton buttonClassName="small outline" handleClick={handleRefreshSearch}>
                    <IconRefreshAction />
                  </IconButton>
                </div>
                <div className="chat_advise_detail_search_icon_button_box sorting">
                  <IconButton buttonClassName="small outline" handleClick={handleSortingChatList}>
                    <IconSorting />
                  </IconButton>
                </div>
                {/* <div className="header_setting_icon_button_box">
                  <IconButton handleClick={clickSettingDropdown}>
                    <IconSetting />
                  </IconButton>
                  <div className={`dropdown_box ${showSettingDropdown ? 'show' : ''}`}>
                    <SimpleDropdown dropdownData={settingDropdownData} />
                  </div>
                </div> */}
              </div>
            </div>
            {/* 3-1. 상세 검색 결과 칩 영역 */}
            <div className={`detail_search_deletable_chip_box ${DETAIL_SEARCH_ACTIVE === 'active' ? 'show' : ''}`}>
              <div className="detail_search_deletable_chips">
                <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>브릭</DeletableChip>
                <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#프로모션</DeletableChip>
                <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#고객관리</DeletableChip>
                <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#고객관리</DeletableChip>
                <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#고객관리</DeletableChip>
                <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#고객관리</DeletableChip>
                <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#교환 반품 환불</DeletableChip>
              </div>
            </div>
            {/* 3-2. 상세 검색 패널 */}
            <div className={`chat_advise_search_detail_pannel ${isShowDetailSearchPannel ? 'show' : ''}`}>
              <div className="chat_advise_search_detail_pannel_selectboxs_container">
                {/* 내 상담일 경우 상담사 검색 셀렉트 박스 없음 */}
                {/* <div className="chat_advise_search_detail_pannel_selectbox adviser">
                  <BasicTextSelectbox defaultToggleButtonText="상담사" selectBoxData={detailSearchSelectboxAdviserData} handleClickSelectItem={handleClickSelectBoxItem} />
                </div> */}
                <div className="chat_advise_search_detail_pannel_selectbox channel">
                  <BasicTextSelectbox
                    defaultToggleButtonText="상담채널"
                    selectBoxData={detailSearchSelectboxChannelData}
                    handleClickSelectItem={handleClickSelectBoxItem}
                  />
                </div>
                <div className="chat_advise_search_detail_pannel_selectbox advise_field">
                  <BasicTextSelectbox
                    defaultToggleButtonText="상담분야"
                    selectBoxData={detailSearchSelectboxAdviseFieldData}
                    handleClickSelectItem={handleClickSelectBoxItem}
                  />
                </div>
              </div>
              <div className="chat_advise_search_detail_pannel_action_buttons_container">
                <div className="chat_advise_search_detail_pannel_cancle_button_box">
                  <OutlineButton handleClick={handleCancleDetailSearchPannel}>취소</OutlineButton>
                </div>
                <div className="chat_advise_search_detail_pannel_cancle_button_box">
                  <SolidButton handleClick={handleSearchDetailChatAdviseLists}>검색하기</SolidButton>
                </div>
              </div>
            </div>
          </div>
          {/* 4. 채팅 상담 리스트 영역 */}
          <div className="chat_advise_list_container">{displayChatAdviseLists()}</div>
          {/* 5. 이전 상담 보기 패널 영역 */}
          <div className="previous_chat_advise_container">
            <div
              role="button"
              tabIndex={0}
              onClick={handleShowPreviousChatListPannel}
              onKeyUp={handleShowPreviousChatListPannel}
              className="previous_chat_advise_show_button"
            >
              <div className="previous_chat_advise_button_text_box">
                <div className="previous_chat_advise_time_icon_box">
                  <IconPreviousChatAdviseTime />
                </div>
                <div className="previous_chat_advise_button_text">이전 상담 보기</div>
              </div>
              <div className="previous_chat_advise_arrow_icon_box">
                <IconArrowUpLarge />
              </div>
            </div>
          </div>
          {/* 5-1. 이전 상담 보기 패널 */}
          <div className={`previous_chat_list_pannel ${isShowPreviousChatListPannel ? 'show' : ''}`}>
            <div className="previous_chat_list_pannel_title_box">
              <h3 className="previous_chat_list_pannel_title">이전 상담 보기</h3>
              <div className="previous_chat_list_pannel_close_button_box">
                <IconButton buttonClassName="tiny" handleClick={handleShowPreviousChatListPannel}>
                  <IconCross />
                </IconButton>
              </div>
            </div>
            <div className="previous_chat_list_search_box">
              <div className="chat_advise_search_box">
                <div className="chat_advise_customer_information_search_text_field_box">
                  <OutlineSearchTextField
                    ref={refPreviousSearchCustomerTextField}
                    placeholderText="고객 이름, 이메일"
                    handleClickSearchButton={handleSearchCustomerInformation}
                  />
                </div>
                <div className="chat_advise_detail_search_icon_buttons_box">
                  <div className={`chat_advise_detail_search_icon_button_box detail_pannel ${PREVIOUS_DETAIL_SEARCH_ACTIVE}`}>
                    <IconButton buttonClassName="small outline" handleClick={handleShowDetailSearchPannel}>
                      <IconDetailSearch />
                    </IconButton>
                  </div>
                  <div className="chat_advise_detail_search_icon_button_box refresh">
                    <IconButton buttonClassName="small outline" handleClick={handleRefreshSearch}>
                      <IconRefreshAction />
                    </IconButton>
                  </div>
                </div>
                {/* 5-1-1. 상세 검색 결과 칩 영역 */}
                <div className={`detail_search_deletable_chip_box ${PREVIOUS_DETAIL_SEARCH_ACTIVE === 'active' ? 'show' : ''}`}>
                  <div className="detail_search_deletable_chips">
                    <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>브릭</DeletableChip>
                    <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#프로모션</DeletableChip>
                    <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#고객관리</DeletableChip>
                    <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#고객관리</DeletableChip>
                    <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#고객관리</DeletableChip>
                    <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#고객관리</DeletableChip>
                    <DeletableChip handleDelete={handleDeleteDetailSearchKeyword}>#교환 반품 환불</DeletableChip>
                  </div>
                </div>
                {/* 5-1-2. 상세 검색 패널 */}
                <div className={`chat_advise_search_detail_pannel ${isShowDetailSearchPannel ? 'show' : ''}`}>
                  <div className="chat_advise_search_detail_pannel_selectboxs_container">
                    <div className="chat_advise_search_detail_pannel_selectbox adviser">
                      <BasicTextSelectbox
                        defaultToggleButtonText="상담사"
                        selectBoxData={detailSearchSelectboxAdviserData}
                        handleClickSelectItem={handleClickSelectBoxItem}
                      />
                    </div>
                    <div className="chat_advise_search_detail_pannel_selectbox channel">
                      <BasicTextSelectbox
                        defaultToggleButtonText="상담채널"
                        selectBoxData={detailSearchSelectboxChannelData}
                        handleClickSelectItem={handleClickSelectBoxItem}
                      />
                    </div>
                    <div className="chat_advise_search_detail_pannel_selectbox advise_field">
                      <BasicTextSelectbox
                        defaultToggleButtonText="상담분야"
                        selectBoxData={detailSearchSelectboxAdviseFieldData}
                        handleClickSelectItem={handleClickSelectBoxItem}
                      />
                    </div>
                  </div>
                  <div className="chat_advise_search_detail_pannel_action_buttons_container">
                    <div className="chat_advise_search_detail_pannel_cancle_button_box">
                      <OutlineButton handleClick={handleCancleDetailSearchPannel}>취소</OutlineButton>
                    </div>
                    <div className="chat_advise_search_detail_pannel_cancle_button_box">
                      <SolidButton handleClick={handleSearchDetailChatAdviseLists}>검색하기</SolidButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="previous_chat_advise_list_box">{displayPreviousChatAdviseLists()}</div>
          </div>
        </div>
      </section>
      <ToastMessage showToast={toastMessageData.isShow ? 'show' : ''} iconStyle={toastMessageData.icon}>
        {toastMessageData.message}
      </ToastMessage>
    </>
  );
};

export default ChatAdviseListSection;
