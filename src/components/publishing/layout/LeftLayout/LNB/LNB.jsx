import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { ReactComponent as IconLnbHome} from 'assets/svg/icon/lnb/icon_lnb_home.svg';
import { ReactComponent as IconLnbDashboard} from 'assets/svg/icon/lnb/icon_lnb_dashboard.svg';
import { ReactComponent as IconLnbChatAdvise} from 'assets/svg/icon/lnb/icon_lnb_chat_advise.svg';
import { ReactComponent as IconLnbChatbotAdvise} from 'assets/svg/icon/lnb/icon_lnb_chatbot_advise.svg';
import { ReactComponent as IconLnbChatbotMaking} from 'assets/svg/icon/lnb/icon_lnb_chatbot_making.svg';
import { ReactComponent as IconLnbAdviseKeyword} from 'assets/svg/icon/lnb/icon_lnb_advise_keyword.svg';
import { ReactComponent as IconLnbKms} from 'assets/svg/icon/lnb/icon_lnb_kms.svg';
import { ReactComponent as IconLnbCustomer} from 'assets/svg/icon/lnb/icon_lnb_customer.svg';
import { ReactComponent as IconLnbSetting } from 'assets/svg/icon/lnb/icon_lnb_setting.svg';
import { ReactComponent as IconLnbSubscribe} from 'assets/svg/icon/lnb/icon_lnb_subscribe.svg';
import { ReactComponent as IconLnbBackChannelList } from 'assets/svg/icon/lnb/icon_lnb_back_channel_list.svg';
import { ReactComponent as IconLnbBrickBrandHomepage } from 'assets/svg/icon/lnb/icon_lnb_brick_brand_homepage.svg';
import NumberNotificationBadge from 'components/publishing/atom/notificationBadge/NumberNotificationBadge';
import ColorTag from 'components/publishing/atom/tag/ColorTag';
import './LNB.scss';

const LNB = () => {
  const [showLNB2depth, setShowLNB2depth] = useState('');
  const CHANNEL_TITLE = '채널명';
  const CHANNEL_PROFILE_AVATAR = 'https://cdn.brickchat.dev/assets/icon/brick_main_icon_blue.png';
  const NOTIFICATION_NUMBER = 120;
  const planTagStyle = {
    backgroundColor: '#1F71F91A', 
    color: '#1F71F9', 
    fontSize: '12px',
  }

  const handle2depth = e => {
    e.preventDefault();
    // const currentMenuTitle = e.target.closest('.LNB_menu_link').querySelector('.LNB_link_text').textContent;
    const currentMenuTitle = e.target.closest('.LNB_menu_link').dataset.menuText;
    console.log(currentMenuTitle);
    currentMenuTitle === '설정' ? setShowLNB2depth('show') : setShowLNB2depth('');
  }

  if (showLNB2depth === 'show') {
    console.log('show!!!');

    return (
      <nav className="LNB_wrap">
        <div className="LNB_depth second_depth">
          <div className="LNB_channel_information_container">
            <a href='/' className="LNB_channel_title_link">
              <div className="LNB_channel_avatar_img_box">
                <img className="LNB_channel_avatar_img" src={CHANNEL_PROFILE_AVATAR}alt="channel_avatar_img" />
              </div>
            </a>
          </div>
          <div className="LNB_menu_container">
            <div className='LNB_menu_group first_group'>
              <ul className="LNB_menu_lists">
                <li className="LNB_menu_list">
                  <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="홈">
                    <div className="LNB_link_icon" role="img" aria-label="link button icon">
                      <IconLnbHome />
                    </div>
                  </a>
                </li>
                <li className="LNB_menu_list">
                  <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="대시보드">
                    <div className="LNB_link_icon" role="img" aria-label="link button icon">
                      <IconLnbDashboard />
                    </div>
                  </a>
                </li>
                <li className="LNB_menu_list">
                  <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="채팅 상담">
                    <div className="LNB_link_icon" role="img" aria-label="link button icon">
                      <IconLnbChatAdvise />
                    </div>
                  </a>
                </li>
                <li className="LNB_menu_list">
                  <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="챗봇 상담">
                    <div className="LNB_link_icon" role="img" aria-label="link button icon">
                      <IconLnbChatbotAdvise />
                    </div>
                  </a>
                </li>
                <li className="LNB_menu_list">
                  <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="챗봇 만들기">
                    <div className="LNB_link_icon" role="img" aria-label="link button icon">
                      <IconLnbChatbotMaking />
                    </div>
                  </a>
                </li>
                <li className="LNB_menu_list">
                  <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="상담 키워드">
                    <div className="LNB_link_icon" role="img" aria-label="link button icon">
                      <IconLnbAdviseKeyword />
                    </div>
                  </a>
                </li>
                <li className="LNB_menu_list">
                  <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="KMS">
                    <div className="LNB_link_icon" role="img" aria-label="link button icon">
                      <IconLnbKms />
                    </div>
                  </a>
                </li>
                <li className="LNB_menu_list">
                  <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="고객">
                    <div className="LNB_link_icon" role="img" aria-label="link button icon">
                      <IconLnbCustomer />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className='LNB_menu_group second_group'>
              <ul className="LNB_menu_lists">
                <li className="LNB_menu_list">
                  <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="설정">
                    <div className="LNB_link_icon" role="img" aria-label="link button icon">
                      <IconLnbSetting />
                    </div>
                  </a>
                </li>
                <li className="LNB_menu_list">
                  <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="구독">
                    <div className="LNB_link_icon" role="img" aria-label="link button icon">
                      <IconLnbSubscribe />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="LNB_site_link_container">
            <ul className="LNB_site_link_lists">
              <li className="LNB_site_link_list">
                <a href="/" className="LNB_site_link">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbBackChannelList />
                  </div>
                </a>
              </li>
              <li className="LNB_menu_list">
                <a href="/" className="LNB_site_link">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbBrickBrandHomepage />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="LNB_depth second_depth">설정</div>
      </nav>
    );
  }

  return (
    <nav className="LNB_wrap">
      <div className="LNB_depth first_depth">
        <div className="LNB_channel_information_container">
          <a href='/' className="LNB_channel_title_link">
            <div className="LNB_channel_avatar_img_box">
              <img className="LNB_channel_avatar_img" src={CHANNEL_PROFILE_AVATAR}alt="channel_avatar_img" />
            </div>
            <h1 className="LNB_channel_title">{CHANNEL_TITLE}</h1>
          </a>
        </div>
        <div className="LNB_menu_container">
          <div className='LNB_menu_group first_group'>
            <ul className="LNB_menu_lists">
              <li className="LNB_menu_list">
                <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="홈">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbHome />
                  </div>
                  <div className="LNB_link_text">홈</div>
                </a>
              </li>
              <li className="LNB_menu_list">
                <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="대시보드">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbDashboard />
                  </div>
                  <div className="LNB_link_text">대시보드</div>
                </a>
              </li>
              <li className="LNB_menu_list">
                <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="채팅 상담">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbChatAdvise />
                  </div>
                  <div className="LNB_link_text">채팅 상담</div>
                  <NumberNotificationBadge>{NOTIFICATION_NUMBER}</NumberNotificationBadge>
                </a>
              </li>
              <li className="LNB_menu_list">
                <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="챗봇 상담">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbChatbotAdvise />
                  </div>
                  <div className="LNB_link_text">챗봇 상담</div>
                </a>
              </li>
              <li className="LNB_menu_list">
                <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="챗봇 만들기">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbChatbotMaking />
                  </div>
                  <div className="LNB_link_text">챗봇 만들기</div>
                </a>
              </li>
              <li className="LNB_menu_list">
                <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="상담 키워드">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbAdviseKeyword />
                  </div>
                  <div className="LNB_link_text">상담 키워드</div>
                </a>
              </li>
              <li className="LNB_menu_list">
                <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="KMS">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbKms />
                  </div>
                  <div className="LNB_link_text">KMS</div>
                </a>
              </li>
              <li className="LNB_menu_list">
                <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="고객">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbCustomer />
                  </div>
                  <div className="LNB_link_text">고객</div>
                </a>
              </li>
            </ul>
          </div>
          <div className='LNB_menu_group second_group'>
            <ul className="LNB_menu_lists">
              <li className="LNB_menu_list">
                <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="설정">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbSetting />
                  </div>
                  <div className="LNB_link_text">설정</div>
                </a>
              </li>
              <li className="LNB_menu_list">
                <a href="/" className="LNB_menu_link" onClick={handle2depth} data-menu-text="구독">
                  <div className="LNB_link_icon" role="img" aria-label="link button icon">
                    <IconLnbSubscribe />
                  </div>
                  <div className="LNB_link_text">구독</div>
                </a>
              </li>
            </ul>
            <div className="LNB_current_subscribe_plan_box">
              <ColorTag tagStyle={planTagStyle}>FREE 플랜 이용중</ColorTag>
            </div>
          </div>
        </div>
        <div className="LNB_site_link_container">
          <ul className="LNB_site_link_lists">
            <li className="LNB_site_link_list">
              <a href="/" className="LNB_site_link">
                <div className="LNB_link_icon" role="img" aria-label="link button icon">
                  <IconLnbBackChannelList />
                </div>
                <div className="LNB_link_text">브릭 채널</div>
              </a>
            </li>
            <li className="LNB_menu_list">
              <a href="/" className="LNB_site_link">
                <div className="LNB_link_icon" role="img" aria-label="link button icon">
                  <IconLnbBrickBrandHomepage />
                </div>
                <div className="LNB_link_text">브릭 사이트 가기</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LNB;
