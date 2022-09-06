import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** Grid Table - Body
 * @children : children
 */

const GridTableBody = ({ children }) => {
  return (
    <tbody className="table_body">
      {children}
    </tbody>
  );
};

GridTableBody.propTypes = {
  children: PropTypes.any,
};

GridTableBody.defaultProps = {
  children: '',
};

export default GridTableBody;
