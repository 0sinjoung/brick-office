import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconSetting } from 'assets/svg/icon/icon_setting.svg';
import IconButton from 'components/publishing/atom/button/IconButton';
import OutlineTag from 'components/publishing/atom/tag/OutlineTag';
import SimpleDropdown from 'components/publishing/atom/dropdown/SimpleDropdown';
import './Header.scss';

const Header = () => {
  const MENU_TITLE = '채팅상담';
  const MY_PROFILE_AVATAR_IMG_URL = 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile2.png';
  const MY_PROFILE_NAME = '김다이';
  const MY_PROFILE_NICNAME = '꾸꾸';
  const IS_ADMIN = false;

  /* about dropdown */
  const [showSettingDropdown, setShowSettingDropdown] = useState(false);
  const clickSettingDropdown = () => {
    setShowSettingDropdown(!showSettingDropdown);
  };
  const handleGoToMyPage = () => {
    console.log('GO TO MYPAGE!');
  };
  const handleLogout = () => {
    console.log('LOGOUT!');
  };
  const settingDropdownData = [
    { text: '마이페이지', handleClick: handleGoToMyPage },
    { text: '로그아웃', handleClick: handleLogout },
  ];

  return (
    <header className="main_header">
      <div className="header_left_area">
        <h2 className="header_menu_title">{MENU_TITLE}</h2>
      </div>
      <div className="header_right_area">
        <div className="header_user_information_container">
          <div className="header_avatar_image_box">
            <img className="header_avatar_image" src={MY_PROFILE_AVATAR_IMG_URL} alt="header avatar" />
          </div>
          <div className="header_user_name_box">
            <p className="header_user_greetings">안녕하세요. </p>
            <div className="header_user_name">{MY_PROFILE_NICNAME !== '' ? MY_PROFILE_NICNAME : MY_PROFILE_NAME}</div>
            <span className="header_user_name_sir">님,</span>
          </div>
          <OutlineTag>{IS_ADMIN ? '관리자' : '멤버'}</OutlineTag>
          <div className="icon_setting_box">
            <IconButton handleClick={clickSettingDropdown}>
              <IconSetting />
            </IconButton>
            <div className={`dropdown_box ${showSettingDropdown ? 'show' : ''}`}>
              <SimpleDropdown dropdownData={settingDropdownData} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
