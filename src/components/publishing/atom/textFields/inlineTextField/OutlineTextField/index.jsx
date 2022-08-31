import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCrossTiny } from 'assets/svg/icon/icon_cross_tiny.svg';
import './style.scss';

/** Outline Text Field - text field | small cancle button
 * @placeholderText : placeholder text
 */
const OutlineTextField = React.forwardRef(({ placeholderText }, ref) => {
  const [outlineStyle, setOutlineStyle] = useState('');
  const [showTextFieldDeleteButton, setShowTextFieldDeleteButton] = useState('');

  const handleChangeTextField = e => {
    const { value } = e.target;

    if (value) {
      setShowTextFieldDeleteButton('show');
    } else {
      setShowTextFieldDeleteButton('');
    }
    setOutlineStyle('focus');
  };

  const handleClickDeleteTextField = () => {
    ref.current.focus();
    ref.current.value = '';
    setShowTextFieldDeleteButton('');
    setOutlineStyle('focus');
  };

  const handleFocusTextField = () => {
    setOutlineStyle('focus');
    if (ref.current.value) {
      setShowTextFieldDeleteButton('show');
    }
  };

  const handleBlurTextField = () => {
    setShowTextFieldDeleteButton('');
    setOutlineStyle('');
  };

  return (
    <div className={`outline_text_field_border_box ${outlineStyle}`}>
      <div className="outline_text_field_box">
        <input
          type="text"
          name="outline_text_field"
          className="outline_text_field"
          ref={ref}
          placeholder={placeholderText}
          onKeyUp={handleChangeTextField}
          onFocus={handleFocusTextField}
          onBlur={handleBlurTextField}
          spellCheck="false"
          autoComplete="off"
        />
        <button type="button" className={`text_field_delete_button ${showTextFieldDeleteButton}`} onClick={handleClickDeleteTextField}>
          <IconCrossTiny />
        </button>
      </div>
    </div>
  );
});

OutlineTextField.propTypes = {
  placeholderText: PropTypes.string,
};

OutlineTextField.defaultProps = {
  placeholderText: '',
};

export default OutlineTextField;