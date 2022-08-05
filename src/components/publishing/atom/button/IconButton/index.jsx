import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 디폴트 아이콘 버튼 스타일 38x38
 * @children : svg icon component
 * @handleClick : 버튼 클릭 이벤트
 * @buttonClassName : 'small' 32x32 || 'tiny' 24x24
 * @buttonStyle : inline style로 버튼 스타일 변경
 */
const IconButton = ({ children, handleClick, buttonClassName, buttonStyle }) => {
  return (
    <button type="button" className={`icon_button ${buttonClassName}`} onClick={handleClick} style={buttonStyle}>
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func,
  buttonClassName: PropTypes.string,
  buttonStyle: PropTypes.object,
};

IconButton.defaultProps = {
  children: '',
  handleClick: () => {},
  buttonClassName: '',
  buttonStyle: {},
};

export default IconButton;
