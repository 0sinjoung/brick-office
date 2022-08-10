import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 전체화면 Dim
 * @children : contents
 */
const FullScreenDim = ({ children }) => {
  return <div className="full_screen_dim">{children}</div>;
};

FullScreenDim.propTypes = {
  children: PropTypes.any,
};

FullScreenDim.defaultProps = {
  children: '',
};

export default FullScreenDim;
