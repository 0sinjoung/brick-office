import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg';
import './style.scss';

/** 텍스트 셀렉트 박스
 * @defaultToggleButtonText : 셀렉트 박스 토글 버튼 디폴트 텍스트
 * @selectBoxData : 셀렉트 박스 목록 데이터, 배열
 * @handleClickSelectItem : 셀렉트 아이템 클릭시 실행 함수
 */

const BasicTextSelectbox = ({defaultToggleButtonText, selectBoxData, handleClickSelectItem}) => {
  const refBasicSelectbox = useRef(null);
  const [selectedItem, setSelectedItem] = useState(defaultToggleButtonText);
  const [currentSelectBoxData, setCurrentSelectBoxData] = useState(selectBoxData);

  const handleSelectItem = e => {
    const currentSelectedItemValue = e.target.value;
    const newData = [...currentSelectBoxData];
    newData.forEach(item => {
      item.isSelect = false;
      if (item.value === currentSelectedItemValue) {
        item.isSelect = true;
      }
    })
    setSelectedItem(currentSelectedItemValue);
    setCurrentSelectBoxData([...newData]);
    handleClickSelectItem(currentSelectedItemValue);
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
      return;
    }
    return;
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  

  return (
    <div className="basic_text_selectbox_container" ref={refBasicSelectbox}>
      <div className="basic_text_selectbox">
        <div role="button" tabIndex={0} className="dropdown_toggle_button" onClick={handleToggleDropdown} onKeyUp={handleToggleDropdown}>
          <div className="dropdown_toggle_button_text">{selectedItem}</div>
          <div className={`dropdown_toggle_button_arrow_icon_box ${isOpenDropdown ? 'open' : ''}`}>
            <IconDropdownArrow />
          </div>
        </div>
        <div className={`basic_text_select_box ${isOpenDropdown ? 'open' : ''}`}>
          <ul className="basic_text_select_box_lists">
            {currentSelectBoxData.map((item) => {
              return (
                <li className="basic_text_select_box_list" key={item.value}>
                  <button type="button" value={item.value} className={`basic_text_select_box_button ${item.isSelect ? 'active' : ''}`} onClick={handleSelectItem}>
                    {item.text ? item.text : item.value}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

BasicTextSelectbox.propTypes = {
  defaultToggleButtonText: PropTypes.string,
  showBrickIcon: PropTypes.string,
  children: PropTypes.any,
};

BasicTextSelectbox.defaultProps = {
  defaultToggleButtonText: '',
  showBrickIcon: '',
  children: '',
};

export default BasicTextSelectbox;
