import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import ChannelMember from 'components/publishing/page/SettingChannel/ChannelMember';
import ChannelJoin from 'components/publishing/page/SettingChannel/ChannelJoin';
import './style.scss';

/** 채널 운영 설정 페이지
 * @children : children
 */

const SettingChannel = ({ children }) => {
  const [thirdDepthMenu, setThirdDepthMenu] = useState('멤버 관리');
  const handleClickThirdMenu = e => {
    const currentThirdMenuText = e.target.textContent;
    setThirdDepthMenu(currentThirdMenuText);
    console.log(currentThirdMenuText);
  };
  const displaySettingChannelPage = () => {
    if (thirdDepthMenu === '멤버 관리') {
      return <ChannelMember />
    }
    if (thirdDepthMenu === '가입 관리') {
      return <ChannelJoin />
    }
    if (thirdDepthMenu === '메뉴 접근 설정') {
      return <ChannelMember />
    }
    if (thirdDepthMenu === '채널 정보') {
      return <ChannelMember />
    }
  }

  return (
    <>
      <div className="third_depth_area">
        <ul className="third_depth_lists">
          <li className="third_depth_list">
            <div role="button" tabIndex={0} onClick={e => handleClickThirdMenu(e)} className={`third_depth_menu ${thirdDepthMenu === '멤버 관리' ? 'breadscrumb' : ''}`}>멤버 관리</div>
          </li>
          <li className="third_depth_list">
            <div role="button" tabIndex={0} onClick={e => handleClickThirdMenu(e)} className={`third_depth_menu ${thirdDepthMenu === '가입 관리' ? 'breadscrumb' : ''}`}>가입 관리</div>
          </li>
          <li className="third_depth_list">
            <div role="button" tabIndex={0} onClick={e => handleClickThirdMenu(e)} className={`third_depth_menu ${thirdDepthMenu === '메뉴 접근 설정' ? 'breadscrumb' : ''}`}>메뉴 접근 설정</div>
          </li>
          <li className="third_depth_list">
            <div role="button" tabIndex={0} onClick={e => handleClickThirdMenu(e)} className={`third_depth_menu ${thirdDepthMenu === '채널 정보' ? 'breadscrumb' : ''}`}>채널 정보</div>
          </li>
        </ul>
      </div>
      {displaySettingChannelPage()}
    </>
  );
};

SettingChannel.propTypes = {
  children: PropTypes.any,
};

SettingChannel.defaultProps = {
  children: '',
};

export default SettingChannel;
