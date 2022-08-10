import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 디폴트 사이즈 medium : height 36px
 * @children : 버튼 내용
 * @handleClick : 버튼 클릭 이벤트
 * @buttonClassName : disable | dim | size - big(50) | large(42) | small(32) | tiny(28) 
 * @buttonStyle : inline style로 버튼 스타일 변경
 */
const OutlineButton = ({ children, handleClick, buttonClassName, buttonStyle, isDim }) => {
  const handleButtonClick = () => {
    if (isDim) {
      return;
    }
    handleClick();
  };
  return (
    <>
      <button type="button" className={`outline_button ${buttonClassName} ${isDim ? 'dim' : ''}`} onClick={handleButtonClick} style={buttonStyle}>
        <span className="button_contents">{children}</span>
        <span className="button_dim"/>
      </button>
    </>
  );
};

OutlineButton.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func,
  buttonClassName: PropTypes.string,
  buttonStyle: PropTypes.object,
  isDim: PropTypes.bool,
};

OutlineButton.defaultProps = {
  children: '',
  handleClick: () => {},
  buttonClassName: '',
  buttonStyle: {},
  isDim: false,
};

export default OutlineButton;
