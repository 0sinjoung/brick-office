import React, { useState } from 'react';
import { ReactComponent as IconEllipsis } from 'assets/svg/icon/icon_ellipsis.svg';
import OutlineTag from 'components/publishing/atom/tag/OutlineTag';
import AdviseFieldChip from 'components/publishing/atom/chip/AdviseFieldChip';
import './ChatbotAdviseInformationSection.scss';

/** 챗봇 상담 정보 영역
 */
const ChatbotAdviseInformationSection = () => {
  /**
   * groupName: 고객 > 고객그룹에 등록된 고객 그룹명. 그룹 미지정시 '미지정 상태'로 표기
   * name : 비회원일 경우 임시 이름 발급, 난수 5자리
   */
  const CUSTOMER_INFO = {
    groupName: '미지정 상태',
    name: '비회원94846',
    phone: '',
    email: '',
  };
  const ADVISE_INFO = {
    adviseStart: '2022.06.02 오후 11:59',
    adviseEnd: '진행중',
    adviseMemo:
      '메모를입력하고있음메메모를입력하고있음메메모를입력하메모를입력하고있음메메모를입력하고있음메메모를입력하메모를입력  하고있음메메모를입력하고있음메메모를입력하메모를입력하고있음메메모를입력하고있음메메모를입력하',
    // adviseFields: ['A/S', '결제', '고객 관리', '교환 반품 환불', '배송', '상품', '시스템', '주문', '프로모션', '회원', '기타'],
    adviseFields: ['프로모션'],
  };

  const [chatbotAdviseFieldsCount, setChatbotAdviseFieldCount] = useState(ADVISE_INFO.adviseFields.length >= 3 ? 'over' : '');
  const showAdviseFields = () => {
    /* 채팅상담 기획서에는 없지만 필드 내림차순 정렬 방식으로 요청이 있었습니다. 상담 오피스 - 설정 기획서 10p. 순서 참조 - 기타는 맨 후순위 */
    if (chatbotAdviseFieldsCount === 'over') {
      return (
        <div className="chatbot_advise_information_content">
          <div className="advise_field_chip_item">
            <AdviseFieldChip>{ADVISE_INFO.adviseFields[0]}</AdviseFieldChip>
          </div>
          <div className="advise_field_chip_item">
            <AdviseFieldChip>{ADVISE_INFO.adviseFields[1]}</AdviseFieldChip>
          </div>
          <div className="advise_field_more">
            <OutlineTag buttonClassName="tiny outline">
              <IconEllipsis />
            </OutlineTag>
          </div>
        </div>
      );
    }
    return (
      <div className="chatbot_advise_information_content">
        {ADVISE_INFO.adviseFields.map(item => {
          return (
            <div className="advise_field_chip_item" key={item}>
              <AdviseFieldChip>{item}</AdviseFieldChip>
            </div>
          );
        })}
      </div>
    );
  };

  /* 3. 상담요약 탭 */
  const [isCurrentTabChatAdviseSummary, setIsCurrentTabChatAdviseSummary] = useState(true);
  const handleTabChatAdviseSummary = () => {
    setIsCurrentTabChatAdviseSummary(true);
  };

  /* 3-1. 상담요약 - 기획: 상담행동정보 p.121 참조 */
  const SUMMARY_TIME = '오후 12:55';
  const displayChatbotAdviseSummaryTab = () => {
    return (
      <div className="chatbot_advise_summary_container">
        <ul className="chatbot_advise_summary_lists">
          {/* flex-direction: column-reverse로 쌓임. */}
          <li className="chatbot_advise_summary_list">
            <div className="chatbot_advise_summary_time">{SUMMARY_TIME}</div>
            <div className="chatbot_advise_summary_contents">
              <div className="chatbot_advise_delimiter_image_box">
                <img className="chatbot_advise_delimiter_image chatbot" alt="chatbot" src="https://cdn.brickchat.dev/assets/icon/brick_chat_icon_blue.png" />
              </div>
              <p className="chatbot_advise_summary_description">챗봇 상담 시작</p>
            </div>
          </li>
          <li className="chatbot_advise_summary_list">
            <div className="chatbot_advise_summary_time">{SUMMARY_TIME}</div>
            <div className="chatbot_advise_summary_contents">
              <div className="chatbot_advise_delimiter_image_box">
                <img className="chatbot_advise_delimiter_image chatbot" alt="chatbot" src="https://cdn.brickchat.dev/assets/icon/brick_chat_icon_blue.png" />
              </div>
              <p className="chatbot_advise_summary_description">상담사 연결 요청</p>
            </div>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <section className="chatbot_advise_information_section_wrap">
        <div className="chatbot_advise_information_container_wrap">
          {/* 1. 고객 정보 */}
          <div className="customer_profile_information_container">
            <div className="customer_profile_title_head">
              <div className="customer_profile_title_box">
                <h3 className="customer_profile_title">고객 정보</h3>
                <OutlineTag>{CUSTOMER_INFO.groupName}</OutlineTag>
              </div>
              {/* 추후 수정 버튼 추가될수 있음 
              <div className="edit_customer_profile_button_box">
                <IconButton buttonClassName="tiny">
                  <IconEdit />
                </IconButton>
              </div> */}
            </div>
            <div className="customer_profile_contents">
              <ul className="customer_profile_contents_lists">
                <li className="customer_profile_contents_list name">
                  <div className="customer_profile_label">이름</div>
                  <div className="customer_profile_information">{CUSTOMER_INFO.name}</div>
                </li>
                <li className="customer_profile_contents_list phone">
                  <div className="customer_profile_label">휴대폰 번호</div>
                  <div className="customer_profile_information">{CUSTOMER_INFO.phone === '' ? '-' : CUSTOMER_INFO.phone}</div>
                </li>
                <li className="customer_profile_contents_list email">
                  <div className="customer_profile_label">이메일</div>
                  <div className="customer_profile_information">{CUSTOMER_INFO.email === '' ? '-' : ''}</div>
                </li>
              </ul>
            </div>
          </div>
          {/* 2. 상담 정보 */}
          <div className="chatbot_advise_information_container">
            {/* 2-1. 상담 정보 - 기본 보기 */}
            <div className="chatbot_advise_information_contents_box">
              <div className="chatbot_advise_information_title_head">
                <h3 className="chatbot_advise_information_title">상담 정보</h3>
              </div>
              <div className="chatbot_advise_information_contents">
                <ul className="chatbot_advise_information_lists">
                  <li className="chatbot_advise_information_list advise_field">
                    <div className="chatbot_advise_information_label">상담 분야</div>
                    {showAdviseFields()}
                  </li>
                  <li className="chatbot_advise_information_list advise_start_time">
                    <div className="chatbot_advise_information_label">상담 시작 시간</div>
                    <div className="chatbot_advise_information_content">{ADVISE_INFO.adviseStart}</div>
                  </li>
                  <li className="chatbot_advise_information_list advise_end_time">
                    <div className="chatbot_advise_information_label">상담 종료 시간</div>
                    <div className="chatbot_advise_information_content">{ADVISE_INFO.adviseEnd}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 3. 상담요약 */}
          <div className="customer_chatbot_information_container">
            <div className="customer_chatbot_information_title_tabs_head">
              <div className="customer_chatbot_information_title_tabs">
                <button
                  type="button"
                  className={`customer_chatbot_information_title_tab_button chatbot_advise_summary ${isCurrentTabChatAdviseSummary ? 'breadscrumb' : ''}`}
                  onClick={handleTabChatAdviseSummary}
                >
                  <span role="heading" aria-level="3" className="customer_chatbot_information_title">
                    상담요약
                  </span>
                </button>
              </div>
            </div>
            {displayChatbotAdviseSummaryTab()}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatbotAdviseInformationSection;
