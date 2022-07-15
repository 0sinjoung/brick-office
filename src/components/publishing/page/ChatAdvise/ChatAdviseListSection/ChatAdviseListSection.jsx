import React, { useState } from 'react';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg';
import { ReactComponent as IconPreviousChatAdviseTime } from 'assets/svg/icon/chat_advise/icon_previous_chat_advise_time.svg';
import { ReactComponent as IconArrowUpLarge } from 'assets/svg/icon/icon_arrow_up_large.svg';
import { ReactComponent as IconSmallCancle } from 'assets/svg/icon/icon_small_cancle.svg';
import { ReactComponent as IconDetailSearch } from 'assets/svg/icon/icon_detail_search.svg';
import { ReactComponent as IconRefreshAction } from 'assets/svg/icon/icon_refresh_action.svg';
import { ReactComponent as IconSorting } from 'assets/svg/icon/icon_sorting.svg';
import NumberNotificationBadge from 'components/publishing/atom/notificationBadge/NumberNotificationBadge';
import NewNotificationBadge from 'components/publishing/atom/notificationBadge/NewNotificationBadge';
import IconButton from 'components/publishing/atom/button/IconButton';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import OutlineTag from 'components/publishing/atom/tag/OutlineTag';
import SimpleDropdown from 'components/publishing/atom/dropdown/SimpleDropdown';
import AdviseFieldChip from 'components/publishing/atom/chip/AdviseFieldChip';
import ColorTag from 'components/publishing/atom/tag/ColorTag';
import './ChatAdviseListSection.scss';

/** 채팅 상담 리스트 영역
 */
const ChatAdviseListSection = () => {
  const CUSTOMER_NAME_SHORT = '김다영';
  const CUSTOMER_NAME_LONG = '김다영김다영김다영';

  const CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_chat_icon_white.png';
  const CHANNEL_BRICK_CHATBOT_DEFAULT_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_chat_icon_blue.png';
  const CHANNEL_KAKAO_DEFAULT_IMAGE = '';
  const CHANNEL_NAVER_DEFAULT_IMAGE = '';

  const ADVISER_NAME_CASE1 = '김다이';
  const ADVISER_PROFILE_IMAGE_CASE1 = 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile.png';
  const ADVISER_NAME_CASE2 = '김제니';
  const ADVISER_PROFILE_IMAGE_CASE2 = 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile2.png';
  const ADVISER_NAME_CASE3 = '안재이';
  const ADVISER_PROFILE_IMAGE_CASE3 = 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile2.png';
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

  /* about dropdown */
  const [showWorkingStateDropdown, setShowSettingDropdown] = useState(false);
  const clickSettingDropdown = () => {
    setShowSettingDropdown(!showWorkingStateDropdown);
  };
  const handleGoToMyPage = () => {
    console.log('GO TO MYPAGE!');
  };
  const handleLogout = () => {
    console.log('LOGOUT!');
  };
  const workingStateDropdownData = [
    { text: '업무시작', handleClick: handleGoToMyPage },
    { text: '업무종료', handleClick: handleLogout },
  ];

  const handleShowPreviousChatListPannel = () => {
    console.log('안녕 난 이전 상담 보기 패널이야👋');
  };
  const handleShowDetailSearchPannel = () => {
    console.log('안녕 난 상세 검색 패널이야👋');
  };
  const handleSearchCustomerInformation = () => {
    console.log('회원 정보 검색🐰');
  };
  const handleRefreshSearch = () => {
    console.log('검색 초기화🥕');
  };
  const handleSortingChatList = () => {
    console.log('상담 리스트 정렬🥕');
  };

  return (
    <>
      <section className="chat_advise_list_section_wrap">
        <div className="chat_advise_list_container_wrap">
          <div className="chat_adviser_information_container">
            <div className="chat_adviser_information_box">
              <div className="chat_adviser_information_avatar_box">
                <div className="chat_adviser_avatar_img_box">
                  <img className="chat_adviser_avatar_img" src={ADVISER_PROFILE_IMAGE_CASE2} alt="adviser avatar image" />
                </div>
              </div>
              <div className="chat_adviser_information_text_box">
                <div className="chat_adviser_information_name_box">{ADVISER_NAME_CASE2}</div>
                <div className="chat_advise_fields_box">
                  <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                  <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                </div>
              </div>
            </div>
            <div className="chat_advise_working_state_dropdown">
              <button type="button" className="chat_advise_working_state_dropdown_button">
                <div className="current_working_state_box">
                  <ColorTag tagStyle={{ backgroundColor: '#ECEDEF' }}>종료</ColorTag>
                  <span className="current_working_state_text">업무종료</span>
                </div>
                <div className="dropdown_arrow_box">
                  <IconDropdownArrow />
                </div>
              </button>
              {/* <div className={`dropdown_box ${showWorkingStateDropdown ? 'show' : ''}`}>hi</div> */}
            </div>
          </div>
          <div className="chat_advise_category_container">
            <div className="chat_advise_category_first_tabs">
              <button type="button" className="chat_advise_category_first_tab_button active my_advise">
                <div className="chat_advise_category_first_tab_text">내 상담</div>
                <div className="chat_advise_category_first_tab_alert_count">
                  <span className="tab_alert_count_number">80</span>
                  <span className="tab_alert_count_text">건</span>
                </div>
              </button>
              <button type="button" className="chat_advise_category_first_tab_button my_advise">
                <div className="chat_advise_category_first_tab_text">전체상담</div>
                <div className="chat_advise_category_first_tab_alert_count">
                  <span className="tab_alert_count_number">100</span>
                  <span className="tab_alert_count_text">건</span>
                </div>
              </button>
            </div>
            <div className="chat_advise_category_second_tabs">
              <button type="button" className="chat_advise_category_second_tab_button wating active">
                <div className="chat_advise_category_second_tab_text">대기</div>
                <div className="chat_advise_category_second_tab_alert_count">00</div>
              </button>
              {/* 예외: 진행중 카테고리에만 new badge 표시 */}
              <button type="button" className="chat_advise_category_second_tab_button proceeding">
                <div className="chat_advise_category_second_tab_text">진행</div>
                <div className="chat_advise_category_second_tab_alert_count">
                  00
                  <NewNotificationBadge />
                </div>
              </button>
              <button type="button" className="chat_advise_category_second_tab_button holding">
                <div className="chat_advise_category_second_tab_text">보류</div>
                <div className="chat_advise_category_second_tab_alert_count">00</div>
              </button>
              <button type="button" className="chat_advise_category_second_tab_button end">
                <div className="chat_advise_category_second_tab_text">종료</div>
                <div className="chat_advise_category_second_tab_alert_count">00</div>
              </button>
            </div>
          </div>
          <div className="chat_advise_search_container">
            <div className="chat_advise_search_box">
              <div className="chat_advise_customer_information_search_box">
                <div className="basic_search_input_box">
                  <input type="text" className="basic_search_input" placeholder="고객, 이메일 검색" />
                  <button type="button" className="text_delete_button">
                    <IconSmallCancle />
                  </button>
                  <button type="button" className="search_action_button active">
                    검색
                  </button>
                </div>
              </div>
              <div className="chat_advise_detail_search_box">
                <IconButton buttonClassName="chat_advise_search_style" handleClick={handleShowDetailSearchPannel}>
                  <IconDetailSearch />
                </IconButton>
                <IconButton buttonClassName="chat_advise_search_style" handleClick={handleRefreshSearch}>
                  <IconRefreshAction />
                </IconButton>
                <IconButton buttonClassName="chat_advise_search_style" handleClick={handleSortingChatList}>
                  <IconSorting />
                </IconButton>
              </div>
            </div>
            <div className="chat_advise_search_detail_pannel">검색 패널 영역</div>
          </div>
          <div className="chat_advise_list_container">
            <ul className="chat_advise_lists">
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div role="button" aria-pressed="true" className="chat_advise_article_clickable_container active">
                    <div className="chat_advise_article_information_container">
                      <div className="chat_advise_article_information_box">
                        <div className="chat_advise_channel_delimiter_img_box">
                          <img className="chat_advise_channel_delimiter_img" alt="channel delimiter image" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                        </div>
                        <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                        <div className="chat_advise_article_adviser_name_box">
                          <span className="chat_adviser_name">{ADVISER_NAME_CASE2} 상담사</span>
                          <div className="chat_adviser_information_tooltip_box show">
                            <div className="tooltip_chat_adviser_avatar_box">
                              <div className="chat_adviser_avatar_img_box on">
                                <img className="chat_adviser_avatar_img" src={ADVISER_PROFILE_IMAGE_CASE2} alt="adviser avatar image" />
                              </div>
                            </div>
                            <div className="tooltip_chat_adviser_information_box">
                              <div className="tooltip_chat_adviser_name">{ADVISER_NAME_CASE2}</div>
                              <div className="tooltip_chat_adviser_email">{ADVISER_EMAIL}</div>
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
                    <div className="chat_advise_article_fields_container">
                      <div className="chat_advise_fields_box">
                        <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                        <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                        <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip>
                        <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div role="button" aria-pressed="false" className="chat_advise_article_clickable_container">
                    <div className="chat_advise_article_information_container">
                      <div className="chat_advise_article_information_box">
                        <div className="chat_advise_channel_delimiter_img_box">
                          <img className="chat_advise_channel_delimiter_img" alt="channel delimiter image" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                        </div>
                        <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                        <div className="chat_advise_article_adviser_name_box">
                          <span className="chat_adviser_name">{ADVISER_NAME_CASE1} 상담사</span>
                          <div className="chat_adviser_information_tooltip_box show">
                            <div className="tooltip_chat_adviser_avatar_box">
                              <div className="chat_adviser_avatar_img_box on">
                                <img className="chat_adviser_avatar_img" src={ADVISER_PROFILE_IMAGE_CASE1} alt="adviser avatar image" />
                              </div>
                            </div>
                            <div className="tooltip_chat_adviser_information_box">
                              <div className="tooltip_chat_adviser_name">{ADVISER_NAME_CASE1}</div>
                              <div className="tooltip_chat_adviser_email">{ADVISER_EMAIL}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
                    </div>
                    <div className="chat_advise_article_contents_container">
                      <div className="chat_advise_latest_message_box">{MESSAGE_SHORT}</div>
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
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div role="button" aria-pressed="false" className="chat_advise_article_clickable_container">
                    <div className="chat_advise_article_information_container">
                      <div className="chat_advise_article_information_box">
                        <div className="chat_advise_channel_delimiter_img_box">
                          <img className="chat_advise_channel_delimiter_img" alt="channel delimiter image" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                        </div>
                        <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                        <div className="chat_advise_article_adviser_name_box">
                          <span className="chat_adviser_name">{ADVISER_NAME_CASE2} 상담사</span>
                          <div className="chat_adviser_information_tooltip_box show">
                            <div className="tooltip_chat_adviser_avatar_box">
                              <div className="chat_adviser_avatar_img_box on">
                                <img className="chat_adviser_avatar_img" src={ADVISER_PROFILE_IMAGE_CASE2} alt="adviser avatar image" />
                              </div>
                            </div>
                            <div className="tooltip_chat_adviser_information_box">
                              <div className="tooltip_chat_adviser_name">{ADVISER_NAME_CASE2}</div>
                              <div className="tooltip_chat_adviser_email">{ADVISER_EMAIL}</div>
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
                    <div className="chat_advise_article_fields_container">
                      <div className="chat_advise_fields_box">
                        <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE3}</AdviseFieldChip>
                        <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div role="button" aria-pressed="false" className="chat_advise_article_clickable_container">
                    <div className="chat_advise_article_information_container">
                      <div className="chat_advise_article_information_box">
                        <div className="chat_advise_channel_delimiter_img_box">
                          <img className="chat_advise_channel_delimiter_img" alt="channel delimiter image" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                        </div>
                        <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                        <div className="chat_advise_article_adviser_name_box">
                          <span className="chat_adviser_name">{ADVISER_NAME_CASE1} 상담사</span>
                          <div className="chat_adviser_information_tooltip_box show">
                            <div className="tooltip_chat_adviser_avatar_box">
                              <div className="chat_adviser_avatar_img_box on">
                                <img className="chat_adviser_avatar_img" src={ADVISER_PROFILE_IMAGE_CASE1} alt="adviser avatar image" />
                              </div>
                            </div>
                            <div className="tooltip_chat_adviser_information_box">
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
                        <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE4}</NumberNotificationBadge>
                      </div>
                    </div>
                    <div className="chat_advise_article_fields_container">
                      <div className="chat_advise_fields_box">
                        <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                        <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div role="button" aria-pressed="false" className="chat_advise_article_clickable_container">
                    <div className="chat_advise_article_information_container">
                      <div className="chat_advise_article_information_box">
                        <div className="chat_advise_channel_delimiter_img_box">
                          <img className="chat_advise_channel_delimiter_img" alt="channel delimiter image" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                        </div>
                        <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_LONG}</div>
                        <div className="chat_advise_article_adviser_name_box">
                          <span className="chat_adviser_name">{ADVISER_NAME_CASE2} 상담사</span>
                          <div className="chat_adviser_information_tooltip_box show">
                            <div className="tooltip_chat_adviser_avatar_box">
                              <div className="chat_adviser_avatar_img_box on">
                                <img className="chat_adviser_avatar_img" src={ADVISER_PROFILE_IMAGE_CASE2} alt="adviser avatar image" />
                              </div>
                            </div>
                            <div className="tooltip_chat_adviser_information_box">
                              <div className="tooltip_chat_adviser_name">{ADVISER_NAME_CASE2}</div>
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
                        <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE2}</NumberNotificationBadge>
                      </div>
                    </div>
                    <div className="chat_advise_article_fields_container">
                      <div className="chat_advise_fields_box">
                        <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                        <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div role="button" aria-pressed="false" className="chat_advise_article_clickable_container">
                    <div className="chat_advise_article_information_container">
                      <div className="chat_advise_article_information_box">
                        <div className="chat_advise_channel_delimiter_img_box">
                          <img className="chat_advise_channel_delimiter_img" alt="channel delimiter image" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                        </div>
                        <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                        <div className="chat_advise_article_adviser_name_box">
                          <span className="chat_adviser_name">{ADVISER_NAME_CASE2} 상담사</span>
                          <div className="chat_adviser_information_tooltip_box show">
                            <div className="tooltip_chat_adviser_avatar_box">
                              <div className="chat_adviser_avatar_img_box on">
                                <img className="chat_adviser_avatar_img" src={ADVISER_PROFILE_IMAGE_CASE2} alt="adviser avatar image" />
                              </div>
                            </div>
                            <div className="tooltip_chat_adviser_information_box">
                              <div className="tooltip_chat_adviser_name">{ADVISER_NAME_CASE2}</div>
                              <div className="tooltip_chat_adviser_email">{ADVISER_EMAIL}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat_advise_last_message_time_stamp_box">{LAST_MESSAGE_TIME_STAMP}</div>
                    </div>
                    <div className="chat_advise_article_contents_container">
                      <div className="chat_advise_latest_message_box">{MESSAGE_SHORT}</div>
                      <div className="chat_advise_new_message_alert_count">
                        <NumberNotificationBadge>{NEW_MESSAGE_ALERT_COUNT_CASE2}</NumberNotificationBadge>
                      </div>
                    </div>
                    <div className="chat_advise_article_fields_container">
                      <div className="chat_advise_fields_box">
                        <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE1}</AdviseFieldChip>
                        <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
              <li className="chat_advise_list">
                <article className="chat_advise_article">
                  <div role="button" aria-pressed="false" className="chat_advise_article_clickable_container">
                    <div className="chat_advise_article_information_container">
                      <div className="chat_advise_article_information_box">
                        <div className="chat_advise_channel_delimiter_img_box">
                          <img className="chat_advise_channel_delimiter_img" alt="channel delimiter image" src={CHANNEL_BRICK_ADVISER_DEFAULT_IMAGE} />
                        </div>
                        <div className="chat_advise_article_customer_name">{CUSTOMER_NAME_SHORT}</div>
                        <div className="chat_advise_article_adviser_name_box">
                          <span className="chat_adviser_name">{ADVISER_NAME_CASE2} 상담사</span>
                          <div className="chat_adviser_information_tooltip_box show">
                            <div className="tooltip_chat_adviser_avatar_box">
                              <div className="chat_adviser_avatar_img_box on">
                                <img className="chat_adviser_avatar_img" src={ADVISER_PROFILE_IMAGE_CASE2} alt="adviser avatar image" />
                              </div>
                            </div>
                            <div className="tooltip_chat_adviser_information_box">
                              <div className="tooltip_chat_adviser_name">{ADVISER_NAME_CASE2}</div>
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
                        <AdviseFieldChip>{CHAT_ADVISE_FIELD_CASE2}</AdviseFieldChip>
                        <div className="chat_advise_fields_more_number_box">+{CHAT_ADVISE_FIELDS_MORE_NUMBER}</div>
                      </div>
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
