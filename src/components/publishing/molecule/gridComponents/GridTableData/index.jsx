import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** Grid Table - Data
 * @children : children
 * @dataType : ellipsis | edit(icon button)
 */


const GridTableData = ({ children, dataType }) => {
  return (
    <td className="table_data" data-type={dataType}>
      {children}
    </td>
  );
};

GridTableData.propTypes = {
  children: PropTypes.any,
  dataType: PropTypes.string,
};

GridTableData.defaultProps = {
  children: '',
  dataType: '',
};

export default GridTableData;
