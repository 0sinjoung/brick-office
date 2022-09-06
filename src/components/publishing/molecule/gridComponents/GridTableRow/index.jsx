import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** Grid Table - Row
 * @children : children
 */

const GridTableRow = ({ children }) => {
  return (
    <tr className="table_row">
      {children}
    </tr>
  );
};

GridTableRow.propTypes = {
  children: PropTypes.any,
};

GridTableRow.defaultProps = {
  children: '',
};

export default GridTableRow;
