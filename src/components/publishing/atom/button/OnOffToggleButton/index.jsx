import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** On Off Toggle Button
 * @defaultChecked : 체크 상태
 * @toggleId : input checkbox id - id 중복 불가!!!
 * @onClick : param => bool, click시 실행 함수. 
 */

const OnOffToggleButton = ({ defaultChecked, toggleId, onClick }) => {
  const refCheckbox = useRef(null);
  const [isCurrentChecked, setIsCurrentChecked] = useState(defaultChecked);
  const handleClickCheckbox = () => {
    const currentChecked = refCheckbox.current.checked;
    setIsCurrentChecked(currentChecked);
    onClick(currentChecked);
  };
  return (
    <div className="on_off_toggle">
      <input
        type="checkbox"
        data-onoff-toggle
        name={toggleId}
        id={toggleId}
        className="on_off_toggle_checkbox-input"
        onChange={() => handleClickCheckbox()}
        ref={refCheckbox}
        checked={isCurrentChecked}
      />
      <label data-onoff-toggle-label className="on_off_toggle_label" for={toggleId} />
    </div>
  );
};

OnOffToggleButton.propTypes = {
  defaultChecked: PropTypes.bool,
  toggleId: PropTypes.string,
  onClick: PropTypes.func,
};

OnOffToggleButton.defaultProps = {
  defaultChecked: true,
  toggleId: '',
  onClick: () => {},
};

export default OnOffToggleButton;
