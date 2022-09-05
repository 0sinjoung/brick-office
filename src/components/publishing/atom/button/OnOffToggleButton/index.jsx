import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** On Off Toggle Button
 * @isChecked : 체크 상태
 * @checkboxName : input checkbox name
 */


const OnOffToggleButton = ({ isChecked, inputName }) => {
  const refCheckbox = useRef(null);
  const [isCurrentChecked, setIsCurrentChecked] = useState(isChecked);
  const handleClickCheckbox = () => {
    setIsCurrentChecked(refCheckbox.current.checked);
    console.log(isCurrentChecked);
  };
  return (
    <div className="on_off_toggle">
      <input
        type="checkbox"
        data-onoff-toggle
        name={inputName}
        className="on_off_toggle_checkbox-input"
        onChange={() => handleClickCheckbox()}
        ref={refCheckbox}
        checked={isCurrentChecked}
      />
      <label data-onoff-toggle-label className="on_off_toggle_label" />
    </div>
  );
};

OnOffToggleButton.propTypes = {
  isChecked: PropTypes.bool,
  checkboxName: PropTypes.string,
};

OnOffToggleButton.defaultProps = {
  isChecked: true,
  checkboxName: '',
};

export default OnOffToggleButton;
