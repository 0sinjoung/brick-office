import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg';
import './style.scss';

/** 텍스트 드롭다운
 * @defaultToggleText : 토글버튼 텍스트
 * @dropdownMenuData : 드롭다운 메뉴 데이터, 배열
 * @handleClickMenuItem : 드롭다운 메뉴 클릭시 실행 함수
 */

const BasicTextDropdown = ({ defaultToggleText, dropdownMenuData, handleClickMenuItem }) => {
  const refBasicSelectbox = useRef(null);
  const [selectedItem, setSelectedItem] = useState(defaultToggleText);
  const [currentSelectBoxData, setCurrentSelectBoxData] = useState(dropdownMenuData);

  const handleSelectItem = e => {
    const currentSelectedItemValue = e.target.value;
    const newData = [...currentSelectBoxData];
    newData.forEach(item => {
      item.isSelect = false;
      if (item.value === currentSelectedItemValue) {
        item.isSelect = true;
      }
    });
    setSelectedItem(currentSelectedItemValue);
    setCurrentSelectBoxData([...newData]);
    handleClickMenuItem(currentSelectedItemValue);
    setIsOpenDropdown(false);
  };

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const handleToggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleClickOutside = e => {
    const isInside = refBasicSelectbox.current.contains(e.target);
    if (!isInside) {
      setIsOpenDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div className="basic_text_dropdown" ref={refBasicSelectbox}>
      <div role="button" tabIndex={0} className="basic_text_dropdown_toggle" onClick={handleToggleDropdown} onKeyUp={handleToggleDropdown}>
        <div className="dropdown_toggle_text">{selectedItem}</div>
        <div className={`dropdown_toggle_arrow ${isOpenDropdown ? 'open' : ''}`}>
          <IconDropdownArrow />
        </div>
      </div>
      <div className={`basic_text_dropdown_menu ${isOpenDropdown ? 'open' : ''}`}>
        <ul className="basic_text_dropdown_lists">
          {currentSelectBoxData.map(item => {
            return (
              <li className="basic_text_dropdown_list" key={item.value}>
                <button type="button" value={item.value} className="basic_text_dropdown_button" onClick={handleSelectItem}>
                  {item.text ? item.text : item.value}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

BasicTextDropdown.propTypes = {
  defaultToggleText: PropTypes.string,
  dropdownMenuData: PropTypes.array,
  handleClickMenuItem: PropTypes.func,
};

BasicTextDropdown.defaultProps = {
  defaultToggleText: '',
  dropdownMenuData: [],
  handleClickMenuItem: () => {},
};

export default BasicTextDropdown;
