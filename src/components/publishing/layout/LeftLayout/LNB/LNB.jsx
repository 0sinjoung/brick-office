import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as IconLnbHome } from 'assets/svg/icon/lnb/icon_lnb_home.svg';
import { ReactComponent as IconLnbDashboard } from 'assets/svg/icon/lnb/icon_lnb_dashboard.svg';
import { ReactComponent as IconLnbChatAdvise } from 'assets/svg/icon/lnb/icon_lnb_chat_advise.svg';
import { ReactComponent as IconLnbChatbotAdvise } from 'assets/svg/icon/lnb/icon_lnb_chatbot_advise.svg';
import { ReactComponent as IconLnbChatbotMaking } from 'assets/svg/icon/lnb/icon_lnb_chatbot_making.svg';
import { ReactComponent as IconLnbAdviseKeyword } from 'assets/svg/icon/lnb/icon_lnb_advise_keyword.svg';
import { ReactComponent as IconLnbKms } from 'assets/svg/icon/lnb/icon_lnb_kms.svg';
import { ReactComponent as IconLnbCustomer } from 'assets/svg/icon/lnb/icon_lnb_customer.svg';
import { ReactComponent as IconLnbSetting } from 'assets/svg/icon/lnb/icon_lnb_setting.svg';
import { ReactComponent as IconLnbSubscribe } from 'assets/svg/icon/lnb/icon_lnb_subscribe.svg';
import { ReactComponent as IconLnbBackChannelList } from 'assets/svg/icon/lnb/icon_lnb_back_channel_list.svg';
import { ReactComponent as IconLnbBrickBrandHomepage } from 'assets/svg/icon/lnb/icon_lnb_brick_brand_homepage.svg';
import NumberNotificationBadge from 'components/publishing/atom/notificationBadge/NumberNotificationBadge';
import NewNotificationBadge from 'components/publishing/atom/notificationBadge/NewNotificationBadge';
import ColorTag from 'components/publishing/atom/tag/ColorTag';
import './LNB.scss';

const LNB = () => {
  const CHANNEL_TITLE = '채널명';
  const CHANNEL_PROFILE_AVATAR = 'https://cdn.brickchat.dev/assets/icon/brick_main_icon_blue.png';
  const NOTIFICATION_NUMBER = 120;
  const subscribePlanTagStyle = {
    backgroundColor: '#1F71F91A',
    color: '#1F71F9',
    fontSize: '12px',
  };
  const [showSecondDepth, setShowSecondDepth] = useState('');
  const [currentMenu, setCurrentMenu] = useState('');

  const LNBMenuFirstGroupListData = [
    { name: '홈', link: '/', icon: <IconLnbHome />, ariaLabel: '홈 메뉴 링크 아이콘' },
    { name: '대시보드', link: '/', icon: <IconLnbDashboard />, ariaLabel: '대시보드 메뉴 링크 아이콘' },
    { name: '채팅 상담', link: '/chatAdvise', icon: <IconLnbChatAdvise />, ariaLabel: '채팅 상담 메뉴 링크 아이콘' },
    { name: '챗봇 상담', link: '/chatbotAdvise', icon: <IconLnbChatbotAdvise />, ariaLabel: '챗봇 상담 메뉴 링크 아이콘' },
    { name: '챗봇 만들기', link: '/', icon: <IconLnbChatbotMaking />, ariaLabel: '챗봇 만들기 메뉴 링크 아이콘' },
    { name: '상담 키워드', link: '/adviseKeyword', icon: <IconLnbAdviseKeyword />, ariaLabel: '상담 키워드 메뉴 링크 아이콘' },
    { name: 'KMS', link: '/KMS', icon: <IconLnbKms />, ariaLabel: 'KMS 메뉴 링크 아이콘' },
    { name: '고객', link: '/', icon: <IconLnbCustomer />, ariaLabel: '고객 메뉴 링크 아이콘' },
  ];
  const LNBMenuSecondGroupListData = [
    { name: '설정', link: '/', icon: <IconLnbSetting />, ariaLabel: '설정 메뉴 링크 아이콘' },
    { name: '구독', link: '/', icon: <IconLnbSubscribe />, ariaLabel: '구독 메뉴 링크 아이콘' },
  ];
  const LNBSiteLinkListData = [
    { name: '브릭 채널', link: '/', icon: <IconLnbBackChannelList />, ariaLabel: '브릭 채널 메뉴 링크 아이콘' },
    { name: '브릭 사이트 가기', link: '/', icon: <IconLnbBrickBrandHomepage />, ariaLabel: '브릭 사이트 가기 메뉴 링크 아이콘' },
  ];
  const LNBSecondDepthData = {
    customer: [
      { name: '캠페인 관리', link: '/' },
      { name: '메시지 보내기', link: '/' },
      { name: '고객 관리', link: '/' },
      { name: '고객 그룹 관리', link: '/' },
    ],
    setting: [
      { name: '채널 운영 설정', link: '/' },
      { name: '상담 운영 설정', link: '/' },
      { name: '메신저 설정', link: '/' },
      { name: '상품 검색 설정', link: '/' },
      { name: '연동 설정', link: '/' },
      { name: '설치', link: '/' },
    ],
    subscribe: [
      { name: '구독 상태', link: '/' },
      { name: '구독 내역', link: '/' },
      { name: '문자 충전', link: '/' },
      { name: '결제 관리', link: '/' },
      { name: '쿠폰 관리', link: '/' },
    ],
  };

  const handleShowSecondDepth = e => {
    // e.preventDefault();
    const currentMenuTitle = e.target.closest('.LNB_menu_link').dataset.menuText;
    setCurrentMenu(currentMenuTitle);

    if (currentMenuTitle === '고객' || currentMenuTitle === '설정' || currentMenuTitle === '구독') {
      setShowSecondDepth('show');
      return;
    }
    setShowSecondDepth('');
  };

  if (showSecondDepth === 'show') {
    let secondDepthData;
    if (currentMenu === '고객') secondDepthData = LNBSecondDepthData.customer;
    if (currentMenu === '설정') secondDepthData = LNBSecondDepthData.setting;
    if (currentMenu === '구독') secondDepthData = LNBSecondDepthData.subscribe;

    return (
      <nav className="LNB_wrap">
        <div className="LNB_style small_style">
          <div className="LNB_channel_information_container">
            <a href="/" className="LNB_channel_title_link">
              <div className="LNB_channel_avatar_img_box">
                <img className="LNB_channel_avatar_img" src={CHANNEL_PROFILE_AVATAR} alt="channel_avatar_img" />
              </div>
            </a>
          </div>
          <div className="LNB_menu_container">
            <div className="LNB_menu_group first_group">
              <ul className="LNB_menu_lists">
                {LNBMenuFirstGroupListData.map((item, idx) => {
                  if (item.name === '채팅 상담') {
                    return (
                      <li className="LNB_menu_list" key={`small_menu_first_group_${idx}`}>
                        <NavLink to={item.link} className="LNB_menu_link" onClick={handleShowSecondDepth} data-menu-text={item.name}>
                          <div className="LNB_link_icon" role="img" aria-label={item.ariaLabel}>
                            {item.icon}
                          </div>
                          <NewNotificationBadge />
                        </NavLink>
                      </li>
                    );
                  }
                  return (
                    <li className="LNB_menu_list" key={`small_menu_first_group_${idx}`}>
                      <NavLink to={item.link} className="LNB_menu_link" onClick={handleShowSecondDepth} data-menu-text={item.name}>
                        <div className="LNB_link_icon" role="img" aria-label={item.ariaLabel}>
                          {item.icon}
                        </div>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="LNB_menu_group second_group">
              <ul className="LNB_menu_lists">
                {LNBMenuSecondGroupListData.map((item, idx) => {
                  return (
                    <li className="LNB_menu_list" key={`small_menu_second_group_${idx}`}>
                      <a href={item.link} className="LNB_menu_link" onClick={handleShowSecondDepth} data-menu-text={item.name}>
                        <div className="LNB_link_icon" role="img" aria-label={item.ariaLabel}>
                          {item.icon}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="LNB_site_link_container">
            <ul className="LNB_site_link_lists">
              {LNBSiteLinkListData.map((item, idx) => {
                return (
                  <li className="LNB_site_link_list" key={`small_site_link_${idx}`}>
                    <a href={item.link} className="LNB_site_link" data-menu-text={item.name}>
                      <div className="LNB_link_icon" role="img" aria-label={item.ariaLabel}>
                        {item.icon}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="LNB_style second_depth">
          <div className="first_depth_menu_title_container">
            <h2 className="first_depth_menu_title">{currentMenu}</h2>
          </div>
          <div className="LNB_menu_container">
            <div className="LNB_menu_group">
              <ul className="LNB_menu_lists">
                {secondDepthData.map((item, idx) => {
                  return (
                    <li className="LNB_menu_list" key={`second_depth_menu_${idx}`}>
                      <a href={item.link} className="LNB_menu_link" data-menu-text={item.name}>
                        <div className="LNB_link_text">{item.name}</div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="LNB_wrap">
      <div className="LNB_style large_style">
        <div className="LNB_channel_information_container">
          <a href="/" className="LNB_channel_title_link">
            <div className="LNB_channel_avatar_img_box">
              <img className="LNB_channel_avatar_img" src={CHANNEL_PROFILE_AVATAR} alt="channel_avatar_img" />
            </div>
            <h1 className="LNB_channel_title">{CHANNEL_TITLE}</h1>
          </a>
        </div>
        <div className="LNB_menu_container">
          <div className="LNB_menu_group first_group">
            <ul className="LNB_menu_lists">
              {LNBMenuFirstGroupListData.map((item, idx) => {
                if (item.name === '채팅 상담') {
                  return (
                    <li className="LNB_menu_list" key={`menu_first_group_${idx}`}>
                      <a href={item.link} className="LNB_menu_link" onClick={handleShowSecondDepth} data-menu-text={item.name}>
                        <div className="LNB_link_icon" role="img" aria-label={item.ariaLabel}>
                          {item.icon}
                        </div>
                        <div className="LNB_link_text">{item.name}</div>
                        <NumberNotificationBadge>{NOTIFICATION_NUMBER}</NumberNotificationBadge>
                      </a>
                    </li>
                  );
                }
                return (
                  <li className="LNB_menu_list" key={`menu_first_group_${idx}`}>
                    <a href={item.link} className="LNB_menu_link" onClick={handleShowSecondDepth} data-menu-text={item.name}>
                      <div className="LNB_link_icon" role="img" aria-label={item.ariaLabel}>
                        {item.icon}
                      </div>
                      <div className="LNB_link_text">{item.name}</div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="LNB_menu_group second_group">
            <ul className="LNB_menu_lists">
              {LNBMenuSecondGroupListData.map((item, idx) => {
                return (
                  <li className="LNB_menu_list" key={`menu_second_group_${idx}`}>
                    <a href={item.link} className="LNB_menu_link" onClick={handleShowSecondDepth} data-menu-text={item.name}>
                      <div className="LNB_link_icon" role="img" aria-label={item.ariaLabel}>
                        {item.icon}
                      </div>
                      <div className="LNB_link_text">{item.name}</div>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="LNB_current_subscribe_plan_box">
              <ColorTag tagStyle={subscribePlanTagStyle}>v0.1.0-beta</ColorTag>
            </div>
          </div>
        </div>
        <div className="LNB_site_link_container">
          <ul className="LNB_site_link_lists">
            {LNBSiteLinkListData.map((item, idx) => {
              return (
                <li className="LNB_site_link_list" key={`site_link_list_${idx}`}>
                  <a href={item.link} className="LNB_site_link" data-menu-text={item.name}>
                    <div className="LNB_link_icon" role="img" aria-label={item.ariaLabel}>
                      {item.icon}
                    </div>
                    <div className="LNB_link_text">{item.name}</div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LNB;
