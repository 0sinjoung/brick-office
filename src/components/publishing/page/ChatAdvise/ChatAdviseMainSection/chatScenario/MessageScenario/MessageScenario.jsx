import React, { useState } from 'react';
import { ReactComponent as IconTrashCan } from 'assets/svg/icon/icon_trash_can.svg';
import OutlineTag from 'components/publishing/atom/tag/OutlineTag';
import AvatarIcon from 'components/publishing/atom/avatar/AvatarIcon';
import IconButton from 'components/publishing/atom/button/IconButton';
import './MessageScenario.scss';

/** 채팅 상담 - 일반 메시지 시나리오
 */
const MessageScenario = () => {
  const [showAvatarMeBadge, setShowAvatarMeBadge] = useState('show');

  /* Bot */
  const BOT_NAME = '브릭';
  const BOT_PROFILE_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_main_icon_blue.png';

  /* Customer */
  const CUSTOMER_NAME = '김다영';

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
  const handleDeleteMessage = () => {
    console.log('메시지 삭제');
  };

  return (
    <>
      <div className="message_wrapper bot">
        <div className="avatar_container">
          <div className="chat_name_box">{BOT_NAME}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_CHATBOT}</OutlineTag>
          </div>
          <div className="avatar_box">
            <AvatarIcon avatarImage={BOT_PROFILE_IMAGE} />
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
            <div className="message_delete_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconTrashCan />
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
            <AvatarIcon avatarImage="" />
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
            <div className="message_delete_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconTrashCan />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="chat_divider_container">
        <div className="chat_divider_text">{DIVIDER_CASE1}</div>
      </div>
      <div className="message_wrapper customer">
        <div className="avatar_container">
          <div className="chat_name_box">{CUSTOMER_NAME}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_CUSTOMER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <AvatarIcon avatarImage="" />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">상담사 연결</div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="message_delete_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconTrashCan />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="chat_divider_container">
        <div className="chat_divider_text">
          {ADVISER_NICKNAME_CASE1}
          {DIVIDER_CASE2}
        </div>
      </div>
      <div className="message_wrapper adviser my_advise">
        <div className="avatar_container">
          <div className="chat_name_box">{ADVISER_NICKNAME_CASE1}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_ADVISER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <AvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE1} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">
              안녕하세요. <em className="highlight">고객</em>님 상담사 김제니입니다.
              <p>배송관련해서 문의 주셨는데,</p>
              <p>저희 배송은 당일배송을 하고있습니다.</p>
            </div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="message_delete_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconTrashCan />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper adviser my_advise">
        <div className="avatar_container">
          <div className="chat_name_box">{ADVISER_NICKNAME_CASE1}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_ADVISER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <AvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE1} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">단타로 여러줄 쓰는 케이스</div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="message_delete_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconTrashCan />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="message_wrapper adviser my_advise">
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">상담 세션 중이면서 내 상담일 경우만 메시지 영역 마우스 오버시 메시지 삭제 아이콘 표시</div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="message_delete_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconTrashCan />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="message_wrapper adviser my_advise">
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">짧게 대화하는 경우</div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="message_delete_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconTrashCan />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper adviser my_advise">
        <div className="avatar_container">
          <div className="chat_name_box">{ADVISER_NICKNAME_CASE1}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_ADVISER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <AvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE1} showMeBadge={showAvatarMeBadge} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">
              안녕하세요. <em className="highlight">고객</em>님 상담사 김제니입니다.
              <p>배송관련해서 문의 주셨는데,</p>
              <p>저희 배송은 당일배송을 하고있습니다.</p>
            </div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="message_delete_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconTrashCan />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="chat_divider_container">
        <div className="chat_divider_text">{DIVIDER_CASE3}</div>
      </div>
      <div className="message_wrapper adviser">
        <div className="avatar_container">
          <div className="chat_name_box">{ADVISER_NICKNAME_CASE2}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_ADVISER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <AvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE2} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">
              <p>다른 상담사</p>
              <p>(1) 아바타 나 뱃지 안보임</p>
              <p>(2) 내 상담 세션 아닐 경우 대화 내용 삭제할 수 없음(마우스 오버시 버튼 안보이게)</p>
            </div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="message_delete_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconTrashCan />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper adviser message_delete">
        <div className="avatar_container">
          <div className="chat_name_box">{ADVISER_NICKNAME_CASE2}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_ADVISER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <AvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE2} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">삭제되었습니다.</div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="message_delete_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconTrashCan />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper loading">
        <div className="message_contents_box">
          <span className="loading_dot" />
          <span className="loading_dot" />
          <span className="loading_dot" />
        </div>
      </div>
    </>
  );
};

export default MessageScenario;
