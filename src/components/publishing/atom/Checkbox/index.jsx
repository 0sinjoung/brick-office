import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCheckbox } from 'assets/svg/icon/icon_checkbox.svg';
import './style.scss';

/** 체크박스
 * @handleClick : 버튼 클릭 이벤트
 * @buttonClassName : 'small' 32x32 || 'tiny' 24x24
 * @buttonStyle : inline style로 버튼 스타일 변경
 */
const Checkbox = ({ children, handleClick, buttonClassName, buttonStyle }) => {
  const refCheckbox = useRef(null);
  const handleClickCheckbox = () => {
    console.log(refCheckbox.current.checked);
  };

  return (
    <div className="checkbox">
      <input type="checkbox" id="brick_checkbox" className="checkbox_input" onClick={handleClickCheckbox} ref={refCheckbox} />
      <label for="brick_checkbox" className="checkbox_label">
        <IconCheckbox />
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func,
  buttonClassName: PropTypes.string,
  buttonStyle: PropTypes.object,
};

Checkbox.defaultProps = {
  children: '',
  handleClick: () => {},
  buttonClassName: '',
  buttonStyle: {},
};

export default Checkbox;
