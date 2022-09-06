import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCrossTiny } from 'assets/svg/icon/icon_cross_tiny.svg';
import { ReactComponent as IconExclamation } from 'assets/svg/icon/icon_exclamation.svg';
import './style.scss';

/** Validation Text Field - text field | small cancle button
 * @placeholderText : placeholder text
 * @validationErrorText : validation error text // outlineStyle = "error"
 * @defaultValue : default value
 * @isDimed : boolean
 * @onChange : text field value change 감지
 * @isValid : boolean
 */

const ValidationTextField = React.forwardRef(({ placeholderText,validationErrorText, defaultValue, isDimed, onChange, isValid }, ref) => {
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

  const handleChange = () => {
    onChange(ref.current.value);
  };

  return (
    <>
      <div className={`validation_text_field_border_box ${outlineStyle} ${isValid ? '' : 'error'} ${isDimed ? 'dim' : ''}`}>
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
            defaultValue={defaultValue}
            onChange={handleChange}
          />
          <button type="button" className={`text_field_delete_button ${showTextFieldDeleteButton}`} onClick={handleClickDeleteTextField}>
            <IconCrossTiny />
          </button>
        </div>
      </div>
      <div className={`validation_error_text_box ${isValid ? '' : 'show'}`}>
        <div className="validation_error_text">{validationErrorText}</div>
      </div>
    </>
  );
});

ValidationTextField.propTypes = {
  placeholderText: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  isValid: PropTypes.bool
};

ValidationTextField.defaultProps = {
  placeholderText: '',
  defaultValue: '',
  onChange: () => {},
  isValid: true,
};

export default ValidationTextField;
