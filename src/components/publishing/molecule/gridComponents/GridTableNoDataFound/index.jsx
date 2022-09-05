import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NoDataFound from 'components/publishing/atom/NoDataFound';
import './style.scss';

/** Grid Table - No Data Found
 * @children : 문구
 */


const GridTableNoDataFound = ({ children }) => {
  return (
    <tr className="table_data no_data_found">
      <td  className="table_no_data_found_box" data-type="no_data_found">
        <NoDataFound>
          {children}
        </NoDataFound>
      </td>
    </tr>
  );
};

GridTableNoDataFound.propTypes = {
  children: PropTypes.string,
};

GridTableNoDataFound.defaultProps = {
  children: '',
};

export default GridTableNoDataFound;
