import React, { useState, useRef } from 'react';
import { ReactComponent as IconLnbChatAdvise } from 'assets/svg/icon/lnb/icon_lnb_chat_advise.svg';
import { ReactComponent as IconEllipsis } from 'assets/svg/icon/icon_ellipsis.svg';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg';
import { ReactComponent as IconCross } from 'assets/svg/icon/icon_cross.svg';
import ColorTag from 'components/publishing/atom/tag/ColorTag';
import OutlineButton from 'components/publishing/atom/button/OutlineButton';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import AdviseFieldChip from 'components/publishing/atom/chip/AdviseFieldChip';
import OutlineSearchTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineSearchTextField';
import './ChatAdviseEntrySection.scss';

/** 채팅 상담 진입시 화면 섹션
 */
const ChatAdviseEntrySection = () => {
  const TIME_OPEN = '9:00';
  const TIME_CLOSE = '18:00';

  const handleClickPageMoveButton = () => {
    console.log('각 버튼에 따라 페이지 이동👋🏻');
  };
  return (
    <>
      <section className="chat_advise_entry_section_wrap">
        <div className="chat_advise_entry_contents_container">
          <div className="chat_advise_entry_operating_time_box">
            <div className="entry_operating_time_adviser_icon_box">
              <IconLnbChatAdvise />
            </div>
            <div className="operating_time_notice_box">
              <span>채팅상담 운영시간</span>
              <span> {TIME_OPEN}</span>
              <span> ~ </span>
              <span>{TIME_CLOSE}</span>
            </div>
            <div className="current_operation_color_tag_box">
              <ColorTag>운영중</ColorTag>
            </div>
          </div>
          <div className="chat_advise_entry_main_contents_box">
            <div className="chat_advise_entry_main_contents_top">
              <h2 className="chat_advise_entry_main_title">채팅상담에 편리한 기능을 설정해보세요.</h2>
              <p className="chat_advise_entry_description">고객 관계관리를 도와주는 CRM기능</p>
              <div
                role="button"
                tabIndex={0}
                onClick={handleClickPageMoveButton}
                onKeyUp={handleClickPageMoveButton}
                className="chat_advise_introduce_page_move_button customer_manage"
              >
                <div className="chat_advise_entry_page_move_image_box">
                  <img
                    className="chat_advise_entry_page_image"
                    alt="customer manage page"
                    src="https://cdn.brickchat.dev/assets/img/chat_advise_introduce_customer_page.png"
                  />
                </div>
                <div className="chat_advise_introduce_contents_box">
                  <h4 className="chat_advise_introduce_page_title">고객 관리 하기</h4>
                  <p className="chat_advise_introduce_description">
                    유사한 특성을 지닌 고객을 그룹으로 분류하여 <br />
                    관리할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="chat_advise_entry_main_contents_bottom chat_keyword">
              <p className="chat_advise_entry_description">고객들과의 효율적인 대화를 도와주는 기능</p>
              <div
                role="button"
                tabIndex={0}
                onClick={handleClickPageMoveButton}
                onKeyUp={handleClickPageMoveButton}
                className="chat_advise_introduce_page_move_button"
              >
                <div className="chat_advise_entry_page_move_image_box">
                  <img
                    className="chat_advise_entry_page_image"
                    alt="chat keyword page"
                    src="https://cdn.brickchat.dev/assets/img/chat_advise_introduce_chat_keyword.png"
                  />
                </div>
                <div className="chat_advise_introduce_contents_box">
                  <h4 className="chat_advise_introduce_page_title">상담 키워드 만들기</h4>
                  <p className="chat_advise_introduce_description">
                    고객 응대 시, 매번 같은 메시지를 직접 입력해야 하는 <br />
                    번거로움을 줄여줍니다.
                  </p>
                </div>
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={handleClickPageMoveButton}
                onKeyUp={handleClickPageMoveButton}
                className="chat_advise_introduce_page_move_button making_kms"
              >
                <div className="chat_advise_entry_page_move_image_box">
                  <img className="chat_advise_entry_page_image" alt="kms page" src="https://cdn.brickchat.dev/assets/img/chat_advise_introduce_kms_page.png" />
                </div>
                <div className="chat_advise_introduce_contents_box">
                  <h4 className="chat_advise_introduce_page_title">KMS 지식 만들기</h4>
                  <p className="chat_advise_introduce_description">
                    고객의 질문에 의도를 파악하고 최적의 답변을 <br />
                    추천해 줍니다.
                  </p>
                </div>
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={handleClickPageMoveButton}
                onKeyUp={handleClickPageMoveButton}
                className="chat_advise_introduce_page_move_button setting_page"
              >
                <div className="chat_advise_entry_page_move_image_box">
                  <img
                    className="chat_advise_entry_page_image"
                    alt="setting page"
                    src="https://cdn.brickchat.dev/assets/img/chat_advise_introduce_setting_page.png.png"
                  />
                </div>
                <div className="chat_advise_introduce_contents_box">
                  <h4 className="chat_advise_introduce_page_title">자동 종료 시간 설정하기</h4>
                  <p className="chat_advise_introduce_description">
                    일정 시간이 지나면 상담을 자동 종료해주는 기능으로 <br />
                    상담 업무를 효율적으로 관리할 수 있게 도와줍니다.
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

export default ChatAdviseEntrySection;
