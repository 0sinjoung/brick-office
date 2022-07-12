import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/**
 * @children : tag text
 * @tagStyle : inline style로 스타일 변경
 */
const OutlineTag = ({ children, tagStyle }) => {
  return (
    <div className="outline_tag" style={tagStyle}>
      {children}
    </div>
  );
};

OutlineTag.propTypes = {
  children: PropTypes.any,
  tagStyle: PropTypes.object,
};

OutlineTag.defaultProps = {
  children: '',
  tagStyle: {},
};

export default OutlineTag;
