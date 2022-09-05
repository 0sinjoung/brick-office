import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCheckbox } from 'assets/svg/icon/icon_checkbox.svg';
import './style.scss';

/** Checkbox
 * @isChecked : 체크 상태
 * @checkboxName : input checkbox name
 */
const Checkbox = ({ isChecked, checkboxName }) => {
  const refCheckbox = useRef(null);
  const [isCurrentChecked, setIsCurrentChecked] = useState(isChecked);
  const handleClickCheckbox = () => {
    setIsCurrentChecked(refCheckbox.current.checked);
  };

  return (
    <div className="checkbox">
      <input type="checkbox" id="brick_checkbox" name={checkboxName} className="checkbox_input" onChange={() => handleClickCheckbox()} ref={refCheckbox} checked={isCurrentChecked}/>
      <label htmlFor="brick_checkbox" className="checkbox_label">
        <IconCheckbox />
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  checkboxName: PropTypes.string,
};

Checkbox.defaultProps = {
  isChecked: true,
  checkboxName: '',
};

export default Checkbox;
