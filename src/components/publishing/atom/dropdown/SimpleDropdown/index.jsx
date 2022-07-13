import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 심플 드롭다운
 * @dropdownData : dropdown list data
 */
const SimpleDropdown = ({ dropdownData }) => {
  return (
    <div className="dropdown">
      <ul className="dropdown_lists">
        {dropdownData.map((item, idx) => {
          return (
            <li className="dropdown_list" key={`simple_dropdown_${idx}`}>
              <button type="button" className="dropdown_button" onClick={item.handleClick}>
                {item.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SimpleDropdown.propTypes = {
  dropdownData: PropTypes.array,
};

SimpleDropdown.defaultProps = {
  dropdownData: [],
};

export default SimpleDropdown;
