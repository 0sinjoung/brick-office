import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg';
import './style.scss';

/** 드롭다운 토글 버튼
 * @children : 토글버튼 컨텐츠 - svg icon | text
 * @isOpenDropdown : 드롭다운 메뉴 오픈 상태
 * @setIsOpenDropdown : 드롭다운 메뉴 오픈 상태 변경 함수
 */

const DropdownToggle = ({ children, isOpenDropdown, setIsOpenDropdown }) => {  

  const handleToggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown)
  };
  
  return (
    <div role="button" tabIndex={0} className="dropdown_toggle" onClick={handleToggleDropdown} onKeyUp={handleToggleDropdown}>
      <div className="dropdown_toggle_text">{children}</div>
      <div className={`dropdown_toggle_arrow ${isOpenDropdown ? 'open' : ''}`}>
        <IconDropdownArrow />
      </div>
    </div>
  );
};

DropdownToggle.propTypes = {
  defaultToggleText: PropTypes.any,
  isOpenDropdown: PropTypes.bool,
  setIsOpenDropdown: PropTypes.func,
};

DropdownToggle.defaultProps = {
  defaultToggleText: '',
  isOpenDropdown: false,
  setIsOpenDropdown: () => {},
};

export default DropdownToggle;
