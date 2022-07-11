import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 디폴트 사이즈 medium : height 36px
 * @children : svg icon component
 * @handleClick : 버튼 클릭 이벤트
 * @buttonClassName : 'big' 50 || 'large' 42 || 'small' 32 || 'tiny' 28
 * @buttonStyle : inline style로 버튼 스타일 변경
 */
const SolidButton = ({ children, handleClick, buttonClassName, buttonStyle }) => {
  return (
    <button type="button" className={`solid_button ${buttonClassName}`} onClick={handleClick} style={buttonStyle}>
      {children}
    </button>
  );
};

SolidButton.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func,
  buttonClassName: PropTypes.string,
  buttonStyle: PropTypes.object,
};

SolidButton.defaultProps = {
  children: '',
  handleClick: () => {},
  buttonClassName: '',
  buttonStyle: {},
};

export default SolidButton;
