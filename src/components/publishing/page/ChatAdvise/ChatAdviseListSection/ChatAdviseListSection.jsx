import React, { useState } from 'react';
import { ReactComponent as IconPreviousChatAdviseTime } from 'assets/svg/icon/chat_advise/icon_previous_chat_advise_time.svg';
import { ReactComponent as IconArrowUpLarge } from 'assets/svg/icon/icon_arrow_up_large.svg';
import NumberNotificationBadge from 'components/publishing/atom/notificationBadge/NumberNotificationBadge';
import NewNotificationBadge from 'components/publishing/atom/notificationBadge/NewNotificationBadge';
import AdviseFieldChip from 'components/publishing/atom/chip/AdviseFieldChip';
import ColorTag from 'components/publishing/atom/tag/ColorTag';
import './ChatAdviseListSection.scss';

/** 채팅 상담 리스트 영역
 */
const ChatAdviseListSection = () => {
  const CUSTOMER_NAME_SHORT = '김다영';
  const CUSTOMER_NAME_LONG = '김다영김다영김다영';

  const ADVISER_NAME_CASE1 = '김제니';
  const ADVISER_NAME_CASE2 = '김다이';
  const ADVISER_EMAIL = 'rillarilla7777@rilla.com';

  const NEW_MESSAGE_ALERT_COUNT_CASE1 = 0;
  const NEW_MESSAGE_ALERT_COUNT_CASE2 = 8;
  const NEW_MESSAGE_ALERT_COUNT_CASE3 = 50;
  const NEW_MESSAGE_ALERT_COUNT_CASE4 = 100;

  const CHAT_ADVISE_FIELD_CASE1 = '교환 반품 환불';
  const CHAT_ADVISE_FIELD_CASE2 = '고객 관리';
  const CHAT_ADVISE_FIELD_CASE3 = '프로모션';
  const CHAT_ADVISE_FIELDS_MORE_NUMBER = 2;

  const MESSAGE_SHORT = '단문메시지';
  const MESSAGE_LONG = '장문메시지장문메시지장문메시지장문메시지장문메시지장문메시지장문메시지장문메시지';

  const LAST_MESSAGE_TIME_STAMP = '4분 전';

  const handleShowPreviousChatListPannel = () => {
    console.log('안녕 난 패널이야');
  };

  return (
    <>
      <section className="chat_advise_list_section_wrap">
        <div className="chat_advise_list_container_wrap">
          <div className="chat_adviser_information_container">상담사 정보</div>
          <div className="chat_advise_category_container">상담 카테고리</div>
          <div className="chat_advise_search_container">채팅 상담 검색</div>
          <div className="chat_advise_list_container">
            <ul className="chat_advise_lists">
              <li className="chat_advise_list">
                <article className="chat_advise_article active">
                  <div className="chat_advise_article_information_container">
                    <div className="chat_advise_article_information_box">
                      <div className="chat_advise_channel_delimiter_img_box">{/* <img alt='' src='' /> */}</div>
                      <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                      <div className="chat_advise_article_adviser_name">{ADVISER_NAME_CASE1} 상담사</div>
                    </div>
                    <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
                  </div>
                  <div className="chat_advise_article_contents_container">
                    <div className="chat_advise_latest_message_box">{MESSAGE_LONG}</div>
                    <div className="chat_advise_new_message_alert_count">
                      <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE1}</NumberNotificationBadge>
                    </div>
                  </div>
                  <div className="chat_advise_article_fields_container">
                    <div className="chat_advise_fields_box">
                      <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                      <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div className="chat_advise_article_information_container">
                    <div className="chat_advise_article_information_box">
                      <div className="chat_advise_channel_delimiter_img_box">{/* <img alt='' src='' /> */}</div>
                      <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_LONG}</div>
                      <div className="chat_advise_article_adviser_name">{ADVISER_NAME_CASE2} 상담사</div>
                    </div>
                    <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
                  </div>
                  <div className="chat_advise_article_contents_container">
                    <div className="chat_advise_latest_message_box">{MESSAGE_LONG}</div>
                    <div className="chat_advise_new_message_alert_count">
                      <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE2}</NumberNotificationBadge>
                    </div>
                  </div>
                  <div className="chat_advise_article_fields_container">
                    <div className="chat_advise_fields_box">
                      <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                      <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div className="chat_advise_article_information_container">
                    <div className="chat_advise_article_information_box">
                      <div className="chat_advise_channel_delimiter_img_box">{/* <img alt='' src='' /> */}</div>
                      <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                      <div className="chat_advise_article_adviser_name">
                        {ADVISER_NAME_CASE1} 상담사
                        <div className="chat_adviser_information_tooltip_box show">
                          <div className="tooltip_chat_adviser_information">
                            <div className="tooltip_chat_adviser_avatar_box">
                              <div className="chat_adviser_avatar_icon_box on">{/* <img className="chat_adviser_avatar_icon" src="" alt="" /> */}</div>
                            </div>
                            <div className="tooltip_chat_adviser_name">{ADVISER_NAME_CASE1}</div>
                            <div className="tooltip_chat_adviser_email">{ADVISER_EMAIL}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
                  </div>
                  <div className="chat_advise_article_contents_container">
                    <div className="chat_advise_latest_message_box">{MESSAGE_LONG}</div>
                    <div className="chat_advise_new_message_alert_count">
                      <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE3}</NumberNotificationBadge>
                    </div>
                  </div>
                  <div className="chat_advise_article_fields_container">
                    <div className="chat_advise_fields_box">
                      <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip>
                      <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div className="chat_advise_article_information_container">
                    <div className="chat_advise_article_information_box">
                      <div className="chat_advise_channel_delimiter_img_box">{/* <img alt='' src='' /> */}</div>
                      <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                      <div className="chat_advise_article_adviser_name">{ADVISER_NAME_CASE1} 상담사</div>
                    </div>
                    <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
                  </div>
                  <div className="chat_advise_article_contents_container">
                    <div className="chat_advise_latest_message_box">{MESSAGE_LONG}</div>
                    <div className="chat_advise_new_message_alert_count">
                      <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE1}</NumberNotificationBadge>
                    </div>
                  </div>
                  <div className="chat_advise_article_fields_container">
                    <div className="chat_advise_fields_box">
                      <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                      <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div className="chat_advise_article_information_container">
                    <div className="chat_advise_article_information_box">
                      <div className="chat_advise_channel_delimiter_img_box">{/* <img alt='' src='' /> */}</div>
                      <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_LONG}</div>
                      <div className="chat_advise_article_adviser_name">{ADVISER_NAME_CASE2} 상담사</div>
                    </div>
                    <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
                  </div>
                  <div className="chat_advise_article_contents_container">
                    <div className="chat_advise_latest_message_box">{MESSAGE_LONG}</div>
                    <div className="chat_advise_new_message_alert_count">
                      <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE2}</NumberNotificationBadge>
                    </div>
                  </div>
                  <div className="chat_advise_article_fields_container">
                    <div className="chat_advise_fields_box">
                      <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                      <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div className="chat_advise_article_information_container">
                    <div className="chat_advise_article_information_box">
                      <div className="chat_advise_channel_delimiter_img_box">{/* <img alt='' src='' /> */}</div>
                      <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                      <div className="chat_advise_article_adviser_name">{ADVISER_NAME_CASE1} 상담사</div>
                    </div>
                    <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
                  </div>
                  <div className="chat_advise_article_contents_container">
                    <div className="chat_advise_latest_message_box">{MESSAGE_LONG}</div>
                    <div className="chat_advise_new_message_alert_count">
                      <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE1}</NumberNotificationBadge>
                    </div>
                  </div>
                  <div className="chat_advise_article_fields_container">
                    <div className="chat_advise_fields_box">
                      <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                      <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div className="chat_advise_article_information_container">
                    <div className="chat_advise_article_information_box">
                      <div className="chat_advise_channel_delimiter_img_box">{/* <img alt='' src='' /> */}</div>
                      <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_LONG}</div>
                      <div className="chat_advise_article_adviser_name">{ADVISER_NAME_CASE2} 상담사</div>
                    </div>
                    <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
                  </div>
                  <div className="chat_advise_article_contents_container">
                    <div className="chat_advise_latest_message_box">{MESSAGE_LONG}</div>
                    <div className="chat_advise_new_message_alert_count">
                      <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE2}</NumberNotificationBadge>
                    </div>
                  </div>
                  <div className="chat_advise_article_fields_container">
                    <div className="chat_advise_fields_box">
                      <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                      <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
          <div className="previous_chat_advise_container">
            <button type="button" className="previous_chat_advise_show_button" onClick={handleShowPreviousChatListPannel}>
              <div className="previous_chat_advise_button_text_box">
                <div className="previous_chat_advise_time_icon_box">
                  <IconPreviousChatAdviseTime />
                </div>
                <div className="previous_chat_advise_button_text">이전 상담 보기</div>
              </div>
              <div className="previous_chat_advise_arrow_icon_box">
                <IconArrowUpLarge />
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatAdviseListSection;
