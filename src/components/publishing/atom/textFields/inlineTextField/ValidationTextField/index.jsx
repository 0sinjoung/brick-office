import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCrossTiny } from 'assets/svg/icon/icon_cross_tiny.svg';
import { ReactComponent as IconExclamation } from 'assets/svg/icon/icon_exclamation.svg';
import './style.scss';

/** Validation Text Field - text field | small cancle button
 * @placeholderText : placeholder text
 * @validationErrorText : validation error text // outlineStyle = "error"
 * @handleValidation : validation f
 */
const ValidationTextField = React.forwardRef(({ placeholderText,validationErrorText, handleValidation }, ref) => {
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
    <>
      <div className={`validation_text_field_border_box ${outlineStyle}`}>
        <div className="validation_text_field_box">
          <input
            type="text"
            name="validation_text_field"
            className="validation_text_field"
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
      <div className={`validation_error_text_box ${outlineStyle}`}>
        <div className="icon_error_circle_box">
          <IconExclamation />
        </div>
        <p className="validation_error_text">{validationErrorText}</p>
      </div>
    </>
  );
});

ValidationTextField.propTypes = {
  placeholderText: PropTypes.string,
};

ValidationTextField.defaultProps = {
  placeholderText: '',
};

export default ValidationTextField;
