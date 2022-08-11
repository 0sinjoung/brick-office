import React, { useState } from 'react';
import { ReactComponent as IconSetting } from 'assets/svg/icon/icon_setting.svg';
import OutlineTag from 'components/publishing/atom/tag/OutlineTag';
import BasicAvatarIcon from 'components/publishing/atom/avatarIcon/BasicAvatarIcon';
import IconButton from 'components/publishing/atom/button/IconButton';
import DropdownMenu from 'components/publishing/molecule/dropdown/DropdownMenu';
import './MessageScenario.scss';

/** 채팅 상담 - 일반 메시지 시나리오
 */
const MessageScenario = () => {
  const [showAvatarMeBadge, setShowAvatarMeBadge] = useState('show');

  /* Bot */
  const BOT_NAME = '브릭';
  const BOT_PROFILE_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_main_icon_blue.png';

  /* Customer */
  // const CUSTOMER_NAME = '김다영';
  const CUSTOMER_NAME = '김다영영김다영영김다영영영';

  /* Adviser */
  const ADVISER_NAME_CASE1 = '김제니';
  const ADVISER_NICKNAME_CASE1 = '꾸꾸';
  const ADVISER_PROFILE_IMAGE_CASE1 = 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile2.png';
  const ADVISER_NAME_CASE2 = '안재이';
  const ADVISER_NICKNAME_CASE2 = '안재이'; // 마이페이지 - 닉네임 설정 안했을 경우 이름과 동일한 값이 닉네임 디폴트로 표시됨
  const ADVISER_PROFILE_IMAGE_CASE2 = 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile3.png';

  /* Name tag */
  const NAME_TAG_CUSTOMER = '고객';
  const NAME_TAG_ADVISER = '상담사';
  const NAME_TAG_CHATBOT = 'BOT';

  /* Etc. */
  const CHAT_TIME = '오후 1:30';
  const DIVIDER_CASE1 = '상담사 연결을 요청합니다.';
  const DIVIDER_CASE2 = '님이 상담사로 배정되었습니다.';
  const DIVIDER_CASE3 = '상담이 종료되었습니다.';

  const handleSearchKMS = () => {
    console.log('KMS 지식 검색');
  };

  /* 메시지 삭제하기 버튼 */
  const [isShowMessageDropdown, setIsShowMessageDropdown] = useState(false);
  const handleToggleMessageActionButton = () => {
    console.log('메시지 액션 버튼 클릭');
    setIsShowMessageDropdown(!isShowMessageDropdown);
  };
  const handleClickMessageActionButton = e => {
    const currentValue = e.target.textContent;
    console.log(currentValue, '실행');
    setIsShowMessageDropdown(false);
  };
  const messageActionDropdownNormalMessageData = [
    // { value: '다운로드', handleClick: handleClickMessageActionButton },
    { value: '삭제하기', handleClick: handleClickMessageActionButton },
  ];

  return (
    <>
      <div className="message_wrapper bot">
        <div className="avatar_container">
          <div className="chat_name_box">{BOT_NAME}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_CHATBOT}</OutlineTag>
          </div>
          <div className="avatar_box">
            <BasicAvatarIcon avatarImage={BOT_PROFILE_IMAGE} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">
              안녕하세요. <em className="highlight">고객</em>님의 쇼핑가이드, 브릭입니다.
              <p>반가워요. 문의하실 내용이 있다면,</p>
              <p>아래 버튼을 눌러주시거나</p>
              <p>메시지 입력창에 입력해주세요.</p>
            </div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="message_action_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                <IconSetting />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper customer">
        <div className="avatar_container">
          <div className="chat_name_box">{CUSTOMER_NAME}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_CUSTOMER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <BasicAvatarIcon avatarImage="" />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">
              <em className="highlight">고객</em>대응
            </div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="message_action_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                <IconSetting />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
    </>
  );
};

export default MessageScenario;
