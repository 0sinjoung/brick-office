import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCheckbox } from 'assets/svg/icon/icon_checkbox.svg';
import './style.scss';

/** Checkbox
 * @defaultChecked : 체크 상태
 * @checkboxId : input checkbox id - id 중복 불가!!!
 * @onClick : param => bool, click시 실행 함수. 
 */
const Checkbox = ({ defaultChecked, checkboxId, onClick }) => {
  const refCheckbox = useRef(null);
  const [isCurrentChecked, setIsCurrentChecked] = useState(defaultChecked);
  const handleClickCheckbox = () => {
    const currentChecked = refCheckbox.current.checked;
    setIsCurrentChecked(currentChecked);
    onClick(currentChecked);
  };

  return (
    <div className="checkbox">
      <input 
        type="checkbox"
        data-checkbox-toggle
        id={checkboxId} 
        name={checkboxId} 
        className="checkbox_input" 
        onChange={() => handleClickCheckbox()} 
        ref={refCheckbox} 
        checked={isCurrentChecked}
      />
      <label data-checkbox-toggle-label htmlFor={checkboxId} className="checkbox_label">
        <IconCheckbox />
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  checkboxId: PropTypes.string,
};

Checkbox.defaultProps = {
  defaultChecked: true,
  checkboxId: '',
};

export default Checkbox;
