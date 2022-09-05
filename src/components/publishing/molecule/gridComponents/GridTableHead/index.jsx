import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg';
import DropdownMenu from 'components/publishing/molecule/dropdown/DropdownMenu';
import './style.scss';

/** Grid Table - Head
 * @children : children
 * @gridColumnData : grid column data
 */

const GridTableHead = ({ children, gridColumnData }) => {
  const [gridHeadData, setGridHeadData] = useState([...gridColumnData]);
  const handleShowDropdownMenu = idx => {
    const currentData = [...gridHeadData];
    if (currentData[idx].isShownDropdownMenu === true) {
      currentData[idx].isShownDropdownMenu = false;
      setGridHeadData([...currentData])
      return;
    }
    currentData.map(item => item.isShownDropdownMenu = false);
    currentData[idx].isShownDropdownMenu = true;
    setGridHeadData(currentData);
  };

  return (
    <thead className="table_head">
      <tr className="table_row">
        {(
          gridHeadData.map((item, idx) => {
            if(item.isDropdown) {
              return (
                <th className="table_head_column dropdown" key={`${item.value}_${idx}`}>
                  <div role="button" tabIndex={0} className="dropdown_toggle" onClick={() => handleShowDropdownMenu(idx)} onKeyUp={() => handleShowDropdownMenu(idx)}>
                    <div className="dropdown_toggle_text">{item.value}</div>
                    <div className={`dropdown_toggle_arrow ${item.isShownDropdownMenu ? 'open' : ''}`}>
                      <IconDropdownArrow />
                    </div>
                  </div>
                  <DropdownMenu showDropdownMenu={item.isShownDropdownMenu ? "show" : ""} dropdownMenuData={item.dropdownMenu} />
                </th>
              );
            }
            return (
              <th className="table_head_column" key={item.value}>{item.value}</th>
            );
          })
        )}
      </tr>
    </thead>
  );
};

GridTableHead.propTypes = {
  children: PropTypes.any,
};

GridTableHead.defaultProps = {
  children: '',
};

export default GridTableHead;
