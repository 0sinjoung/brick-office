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
import { ReactComponent as IconSetting } from 'assets/svg/icon/icon_setting.svg'
import IconButton from 'components/publishing/atom/button/IconButton';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import OutlineButton from 'components/publishing/atom/button/OutlineButton';
import FullScreenDim from 'components/publishing/atom/dim/FullScreenDim';
import NoDataFound from 'components/publishing/atom/NoDataFound';
import Pagination from 'components/publishing/atom/Pagination';
import DropdownToggle from 'components/publishing/molecule/dropdown/DropdownToggle';
import DropdownMenu from 'components/publishing/molecule/dropdown/DropdownMenu';
import ToastMessage from 'components/publishing/atom/ToastMessage';
import BasicTextDropdown from 'components/publishing/molecule/dropdown/BasicTextDropdown';
import OutlineSearchTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineSearchTextField';
import './style.scss';
import OnOffToggleButton from 'components/publishing/atom/button/OnOffToggleButton';

/** 채널 운영 설정 - (3) 메뉴 접근 설정
 * @children : children
 */

const ChannelAccess = ({ children }) => {
  const [isOpendCustomerMenuAccordion, setIsOpendCustomerMenuAccordion] = useState(false);
  const handleToggleCustomerMenu = () => {
    console.log('고객 메뉴 아코디언 토글');
    setIsOpendCustomerMenuAccordion(!isOpendCustomerMenuAccordion);
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
                    <OnOffToggleButton isChecked={true} checkboxName="dashboard_toggle" />
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
                    <OnOffToggleButton isChecked={true} checkboxName="dashboard_toggle" />
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
                    <OnOffToggleButton isChecked={true} checkboxName="dashboard_toggle" />
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
                    <OnOffToggleButton isChecked={true} checkboxName="dashboard_toggle" />
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
                    <OnOffToggleButton isChecked={true} checkboxName="dashboard_toggle" />
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
                    <OnOffToggleButton isChecked={true} checkboxName="dashboard_toggle" />
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
                  <div className={`channel_menu_access_accordion_button ${isOpendCustomerMenuAccordion ? 'open' : ''}`}>
                    <IconButton buttonClassName="outline">
                      <IconArrowUpSmall />
                    </IconButton>
                  </div>
                </div>
                <div className="channel_menu_access_pannel">
                  <div className="channel_menu_access_bar">
                    <div className="channel_menu_access_section_text">
                      <h3 className="channel_menu_access_section_title">설정</h3>
                      <p className="channel_menu_access_section_description">브릭을 설치하고 채널 운영 환경을 설정할 수 있어요.</p>
                    </div>
                    <div className="channel_menu_access_toggle_button">
                      <OnOffToggleButton isChecked={true} checkboxName="dashboard_toggle" />
                    </div>
                  </div>
                </div>
              </section>
              <section role="button" tabIndex={0}  className="channel_menu_access_section setting">
                <div className="channel_menu_access_bar" onClick={() => handleToggleCustomerMenu()}>
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
                <div className="channel_menu_access_pannel">패널</div>
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
                    <OnOffToggleButton isChecked={true} checkboxName="dashboard_toggle" />
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
