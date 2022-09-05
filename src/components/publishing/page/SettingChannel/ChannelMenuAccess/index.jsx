import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconLnbDashboard } from 'assets/svg/icon/lnb/icon_lnb_dashboard.svg';
import { ReactComponent as IconLnbChatAdvise } from 'assets/svg/icon/lnb/icon_lnb_chat_advise.svg';
import { ReactComponent as IconLnbChatbotAdvise } from 'assets/svg/icon/lnb/icon_lnb_chatbot_advise.svg';
import { ReactComponent as IconLnbChatbotMaking } from 'assets/svg/icon/lnb/icon_lnb_chatbot_making.svg';
import { ReactComponent as IconLnbAdviseKeyword } from 'assets/svg/icon/lnb/icon_lnb_advise_keyword.svg';
import { ReactComponent as IconLnbKms } from 'assets/svg/icon/lnb/icon_lnb_kms.svg';
import { ReactComponent as IconLnbCustomer } from 'assets/svg/icon/lnb/icon_lnb_customer.svg';
import { ReactComponent as IconLnbSetting } from 'assets/svg/icon/lnb/icon_lnb_setting.svg';
import { ReactComponent as IconLnbSubscribe } from 'assets/svg/icon/lnb/icon_lnb_subscribe.svg';
import { ReactComponent as IconLink } from 'assets/svg/icon/icon_link.svg'
import { ReactComponent as IconSetting } from 'assets/svg/icon/icon_setting.svg'
import { ReactComponent as IconCaution } from 'assets/svg/icon/icon_caution.svg';
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
