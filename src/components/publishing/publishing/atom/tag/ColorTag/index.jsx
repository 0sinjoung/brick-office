import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/**
 * @children : tag text
 * @tagStyle : inline style로 스타일 변경
 */
const ColorTag = ({ children, tagStyle }) => {
  return (
    <div className="color_tag" style={tagStyle}>
      {children}
    </div>
  );
};

ColorTag.propTypes = {
  children: PropTypes.any,
  tagStyle: PropTypes.object,
};

ColorTag.defaultProps = {
  children: '',
  tagStyle: {},
};

export default ColorTag;
