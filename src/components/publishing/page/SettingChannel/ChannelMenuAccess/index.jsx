import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCaution } from 'assets/svg/icon/icon_caution.svg';
import { ReactComponent as IconLnbDashboard } from 'assets/svg/icon/lnb/icon_lnb_dashboard.svg';
import { ReactComponent as IconLnbChatAdvise } from 'assets/svg/icon/lnb/icon_lnb_chat_advise.svg';
import { ReactComponent as IconLnbChatbotAdvise } from 'assets/svg/icon/lnb/icon_lnb_chatbot_advise.svg';
import { ReactComponent as IconLnbChatbotMaking } from 'assets/svg/icon/lnb/icon_lnb_chatbot_making.svg';
import { ReactComponent as IconLnbAdviseKeyword } from 'assets/svg/icon/lnb/icon_lnb_advise_keyword.svg';
import { ReactComponent as IconLnbKms } from 'assets/svg/icon/lnb/icon_lnb_kms.svg';
import { ReactComponent as IconLnbCustomer } from 'assets/svg/icon/lnb/icon_lnb_customer.svg';
import { ReactComponent as IconLnbSetting } from 'assets/svg/icon/lnb/icon_lnb_setting.svg';
import { ReactComponent as IconLnbSubscribe } from 'assets/svg/icon/lnb/icon_lnb_subscribe.svg';
import { ReactComponent as IconArrowUpSmall } from 'assets/svg/icon/icon_arrow_up_small.svg'
import IconButton from 'components/publishing/atom/button/IconButton';
import OnOffToggleButton from 'components/publishing/atom/button/OnOffToggleButton';
import ColorTag from 'components/publishing/atom/tag/ColorTag';
import './style.scss';

/** 채널 운영 설정 - (3) 메뉴 접근 설정
 * @children : children
 */

const ChannelAccess = ({ children }) => {
  /* 아코디언 디폴트 : 열림 */
  const [isOpendCustomerMenuAccordion, setIsOpendCustomerMenuAccordion] = useState(true);
  const handleToggleCustomerMenu = () => {
    console.log('고객 메뉴 아코디언 토글');
    setIsOpendCustomerMenuAccordion(!isOpendCustomerMenuAccordion);
  };
  const [isOpendSettingMenuAccordion, setIsOpendSettingMenuAccordion] = useState(true);
  const handleToggleSettingMenu = () => {
    console.log('설정 메뉴 아코디언 토글');
    setIsOpendSettingMenuAccordion(!isOpendSettingMenuAccordion);
  };

  const handleClick = bool => {
    console.log('current checked::: ', bool);
  };

  return (
    <>
      <div className="contents_wrap scroll">
        <main className="page_wrap full">
          <div className="channel_menu_access_wrap">
            <div className="channel_menu_access_caution_box">
              <div className="caution_icon_box">
                <IconCaution />
              </div>
              <p className="caution_text">스위치를 끄면 채널 멤버가 접근할 수 없어요.</p>
            </div>
            <div className="channel_menu_access_sections_wrap">
              <section className="channel_menu_access_section dashboard">
                <div className="channel_menu_access_bar">
                  <div className="channel_menu_access_section_icon_box">
                    <IconLnbDashboard />
                  </div>
                  <div className="channel_menu_access_section_text">
                    <h3 className="channel_menu_access_section_title">대시보드</h3>
                    <p className="channel_menu_access_section_description">채널 운영 현황을 확인하고 데이터를 다운로드할 수 있어요.</p>
                  </div>
                  <div className="channel_menu_access_toggle_button">
                    <OnOffToggleButton onClick={handleClick} defaultChecked={true} toggleId="menu_access_dashboard_toggle" />
                  </div>
                </div>
              </section>
              <section className="channel_menu_access_section chat_advise">
                <div className="channel_menu_access_bar">
                  <div className="channel_menu_access_section_icon_box">
                    <IconLnbChatAdvise />
                  </div>
                  <div className="channel_menu_access_section_text">
                    <h3 className="channel_menu_access_section_title">채팅 상담</h3>
                    <p className="channel_menu_access_section_description">고객과 채팅 상담을 진행할 수 있어요.</p>
                  </div>
                  <div className="channel_menu_access_toggle_button">
                    <OnOffToggleButton onClick={handleClick} defaultChecked={true} toggleId="menu_access_chat_advise_toggle" />
                  </div>
                </div>
              </section>
              <section className="channel_menu_access_section chatbot_advise">
                <div className="channel_menu_access_bar">
                  <div className="channel_menu_access_section_icon_box">
                    <IconLnbChatbotAdvise />
                  </div>
                  <div className="channel_menu_access_section_text">
                    <h3 className="channel_menu_access_section_title">챗봇 상담</h3>
                    <p className="channel_menu_access_section_description">진행 중인 챗봇 상담을 모니터링할 수 있어요.</p>
                  </div>
                  <div className="channel_menu_access_toggle_button">
                    <OnOffToggleButton onClick={handleClick} defaultChecked={true} toggleId="menu_access_chatbot_advise_toggle" />
                  </div>
                </div>
              </section>
              <section className="channel_menu_access_section chatbot_builder">
                <div className="channel_menu_access_bar">
                  <div className="channel_menu_access_section_icon_box">
                    <IconLnbChatbotMaking />
                  </div>
                  <div className="channel_menu_access_section_text">
                    <h3 className="channel_menu_access_section_title">챗봇 빌더</h3>
                    <p className="channel_menu_access_section_description">챗봇 대화 주제를 만들고 관리할 수 있어요.</p>
                  </div>
                  <div className="channel_menu_access_toggle_button">
                    <OnOffToggleButton onClick={handleClick} defaultChecked={true} toggleId="menu_access_chatbot_builder_toggle" />
                  </div>
                </div>
              </section>
              <section className="channel_menu_access_section kms">
                <div className="channel_menu_access_bar">
                  <div className="channel_menu_access_section_icon_box">
                    <IconLnbKms />
                  </div>
                  <div className="channel_menu_access_section_text">
                    <h3 className="channel_menu_access_section_title">KMS</h3>
                    <p className="channel_menu_access_section_description">KMS 지식을 만들고 편집할 수 있어요.</p>
                  </div>
                  <div className="channel_menu_access_toggle_button">
                    <OnOffToggleButton onClick={handleClick} defaultChecked={true} toggleId="menu_access_kms_toggle" />
                  </div>
                </div>
              </section>
              <section className="channel_menu_access_section advise_keyword">
                <div className="channel_menu_access_bar">
                  <div className="channel_menu_access_section_icon_box">
                    <IconLnbAdviseKeyword />
                  </div>
                  <div className="channel_menu_access_section_text">
                    <h3 className="channel_menu_access_section_title">상담 키워드</h3>
                    <p className="channel_menu_access_section_description">빠른 채팅상담을 돕는 상담 키워드를 만들고 편집할 수 있어요.</p>
                  </div>
                  <div className="channel_menu_access_toggle_button">
                    <OnOffToggleButton onClick={handleClick} defaultChecked={true} toggleId="menu_access_advise_keyword_toggle" />
                  </div>
                </div>
              </section>
              <section role="button" tabIndex={0} className={`channel_menu_access_section customer ${isOpendCustomerMenuAccordion ? 'open' : ''}`}>
                <div className="channel_menu_access_bar" onClick={() => handleToggleCustomerMenu()}>
                  <div className="channel_menu_access_section_icon_box">
                    <IconLnbCustomer />
                  </div>
                  <div className="channel_menu_access_section_text">
                    <h3 className="channel_menu_access_section_title">고객</h3>
                    <p className="channel_menu_access_section_description">고객 정보를 관리하고 마케팅 캠페인을 진행할 수 있어요.</p>
                  </div>
                  <div className="channel_menu_access_accordion_button">
                    <IconButton buttonClassName="outline">
                      <IconArrowUpSmall />
                    </IconButton>
                  </div>
                </div>
                <div className="channel_menu_access_pannel">
                  <div className="channel_menu_access_sub_bars_box">
                    <div className="channel_menu_access_sub_bar">
                      <div className="channel_menu_access_section_text">
                        <div className="channel_menu_access_section_title_box">
                          <h4 className="channel_menu_access_section_title">고객 관리</h4>
                        </div>
                        <p className="channel_menu_access_section_description">고객을 비슷한 성향과 특성별로 그룹화하여 분류하고 관리할 수 있어요.</p>
                      </div>
                      <div className="channel_menu_access_toggle_button">
                        <OnOffToggleButton onClick={handleClick} defaultChecked={true} toggleId="menu_access_managing_customer_toggle" />
                      </div>
                    </div>
                    <div className="channel_menu_access_sub_bar disable">
                      <div className="channel_menu_access_section_text">
                        <div className="channel_menu_access_section_title_box">
                          <h4 className="channel_menu_access_section_title">캠페인 관리</h4>
                          <ColorTag>출시 예정</ColorTag>
                        </div>
                        <p className="channel_menu_access_section_description">캠페인 진행 내역을 관리할 수 있어요.</p>
                      </div>
                      <div className="channel_menu_access_toggle_button">
                        <OnOffToggleButton onClick={handleClick} defaultChecked={false} toggleId="menu_access_managing_campaign_toggle" />
                      </div>
                    </div>
                    <div className="channel_menu_access_sub_bar disable">
                      <div className="channel_menu_access_section_text">
                        <div className="channel_menu_access_section_title_box">
                          <h4 className="channel_menu_access_section_title">메시지 보내기</h4>
                          <ColorTag>출시 예정</ColorTag>
                        </div>
                        <p className="channel_menu_access_section_description">캠페인 메시지를 만들고 전송할 수 있어요.</p>
                      </div>
                      <div className="channel_menu_access_toggle_button">
                        <OnOffToggleButton onClick={handleClick} defaultChecked={false} toggleId="menu_access_campaign_message_toggle" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section role="button" tabIndex={0} className={`channel_menu_access_section setting ${isOpendSettingMenuAccordion ? 'open' : ''}`}>
                <div className="channel_menu_access_bar" onClick={() => handleToggleSettingMenu()}>
                  <div className="channel_menu_access_section_icon_box">
                    <IconLnbSetting />
                  </div>
                  <div className="channel_menu_access_section_text">
                    <h3 className="channel_menu_access_section_title">설정</h3>
                    <p className="channel_menu_access_section_description">브릭을 설치하고 채널 운영 환경을 설정할 수 있어요.</p>
                  </div>
                  <div className="channel_menu_access_accordion_button">
                    <IconButton buttonClassName="outline">
                      <IconArrowUpSmall />
                    </IconButton>
                  </div>
                </div>
                <div className="channel_menu_access_pannel">
                  <div className="channel_menu_access_sub_bars_box">
                    <div className="channel_menu_access_sub_bar">
                      <div className="channel_menu_access_section_text">
                        <div className="channel_menu_access_section_title_box">
                          <h4 className="channel_menu_access_section_title">채널 운영 설정</h4>
                        </div>
                        <p className="channel_menu_access_section_description">채널 멤버를 관리하고 메뉴별 멤버 접근 가능 여부를 설정할 수 있어요.</p>
                      </div>
                      <div className="channel_menu_access_toggle_button">
                        <OnOffToggleButton onClick={handleClick} defaultChecked={false} toggleId="menu_access_setting_channel_toggle" />
                      </div>
                    </div>
                    <div className="channel_menu_access_sub_bar">
                      <div className="channel_menu_access_section_text">
                        <div className="channel_menu_access_section_title_box">
                          <h4 className="channel_menu_access_section_title">상담 운영 설정</h4>
                        </div>
                        <p className="channel_menu_access_section_description">챗봇과 채팅 상담 진행에 필요한 환경을 설정할 수 있어요.</p>
                      </div>
                      <div className="channel_menu_access_toggle_button">
                        <OnOffToggleButton onClick={handleClick} defaultChecked={false} toggleId="menu_access_setting_advise_toggle" />
                      </div>
                    </div>
                    <div className="channel_menu_access_sub_bar">
                      <div className="channel_menu_access_section_text">
                        <div className="channel_menu_access_section_title_box">
                          <h4 className="channel_menu_access_section_title">메신저 설정</h4>
                        </div>
                        <p className="channel_menu_access_section_description">메신저 운영 여부와 인트로, 메신저의 디자인을 설정할 수 있어요.</p>
                      </div>
                      <div className="channel_menu_access_toggle_button">
                        <OnOffToggleButton onClick={handleClick} defaultChecked={true} toggleId="menu_access_setting_messenger_toggle" />
                      </div>
                    </div>
                    <div className="channel_menu_access_sub_bar">
                      <div className="channel_menu_access_section_text">
                        <div className="channel_menu_access_section_title_box">
                          <h4 className="channel_menu_access_section_title">상품 검색 설정</h4>
                        </div>
                        <p className="channel_menu_access_section_description">상품 검색 사용 여부를 설정하고 상품 정보를 최신으로 업데이트할 수 있어요.</p>
                      </div>
                      <div className="channel_menu_access_toggle_button">
                        <OnOffToggleButton onClick={handleClick} defaultChecked={true} toggleId="menu_access_setting_search_product_toggle" />
                      </div>
                    </div>
                    <div className="channel_menu_access_sub_bar">
                      <div className="channel_menu_access_section_text">
                        <div className="channel_menu_access_section_title_box">
                          <h4 className="channel_menu_access_section_title">연동 설정</h4>
                        </div>
                        <p className="channel_menu_access_section_description">외부 상담 채널을 연동할 수 있어요.</p>
                      </div>
                      <div className="channel_menu_access_toggle_button">
                        <OnOffToggleButton onClick={handleClick} defaultChecked={false} toggleId="menu_access_setting_external_channel_toggle" />
                      </div>
                    </div>
                    <div className="channel_menu_access_sub_bar">
                      <div className="channel_menu_access_section_text">
                        <div className="channel_menu_access_section_title_box">
                          <h4 className="channel_menu_access_section_title">설치</h4>
                        </div>
                        <p className="channel_menu_access_section_description">메신저를 홈페이지에 설치할 수 있어요.</p>
                      </div>
                      <div className="channel_menu_access_toggle_button">
                        <OnOffToggleButton onClick={handleClick} defaultChecked={false} toggleId="menu_access_setting_install_toggle" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="channel_menu_access_section subscribe">
                <div className="channel_menu_access_bar">
                  <div className="channel_menu_access_section_icon_box">
                    <IconLnbSubscribe />
                  </div>
                  <div className="channel_menu_access_section_text">
                    <h3 className="channel_menu_access_section_title">구독</h3>
                    <p className="channel_menu_access_section_description">구독 내역을 관리하고 결제 정보를 업데이트할 수 있어요.</p>
                  </div>
                  <div className="channel_menu_access_toggle_button">
                    <OnOffToggleButton onClick={handleClick} defaultChecked={true} toggleId="menu_access_subscribe_toggle" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

ChannelAccess.propTypes = {
  children: PropTypes.any,
};

ChannelAccess.defaultProps = {
  children: '',
};

export default ChannelAccess;
