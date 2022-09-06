import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** Grid Table
 * @children : children
 * @gridClassName : grid table class name
 */

const GridTable = ({ children, gridClassName }) => {
  return (
    <div className={`table_wrap ${gridClassName}`}>
      <table className="table_container">
        {children}
      </table>
    </div>
  );
};

GridTable.propTypes = {
  children: PropTypes.any,
};

GridTable.defaultProps = {
  children: '',
};

export default GridTable;
