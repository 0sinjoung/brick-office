import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 드롭다운 메뉴
 * @dropdownMenuData : dropdown list data -> text, handleClick
 */
const DropdownMenu = ({ showDropdownMenu, dropdownMenuData }) => {
  return (
    <div className={`dropdown_menu ${showDropdownMenu}`}>
      <ul className="dropdown_lists">
        {dropdownMenuData.map(item => {
          return (
            <li className="dropdown_list" key={item.value}>
              <button type="button" className="dropdown_button" onClick={item.handleClick}>
                {item.value}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DropdownMenu.propTypes = {
  showDropdownMenu: PropTypes.string,
  dropdownMenuData: PropTypes.array,
};

DropdownMenu.defaultProps = {
  showDropdownMenu: '',
  dropdownMenuData: [],
};

export default DropdownMenu;
