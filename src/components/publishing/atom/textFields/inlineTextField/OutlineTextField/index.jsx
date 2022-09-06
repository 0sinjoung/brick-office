import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCrossTiny } from 'assets/svg/icon/icon_cross_tiny.svg';
import './style.scss';

/** Outline Text Field - text field | small cancle button
 * @placeholderText : placeholder text
 * @defaultValue : default value
 * @isDimed : boolean
 * @onChange : text field value change 감지 
 */
const OutlineTextField = React.forwardRef(({ placeholderText, defaultValue, isDimed, onChange }, ref) => {
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
    <div className={`outline_text_field_border_box ${outlineStyle} ${isDimed ? 'dim' : ''}`}>
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
          defaultValue={defaultValue}
          onChange={handleChange}
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
  defaultValue: PropTypes.string,
  isDimed: PropTypes.bool,
  onChange: PropTypes.func,
};

OutlineTextField.defaultProps = {
  placeholderText: '',
  defaultValue: '',
  isDimed: false,
  onChange: () => {},
};

export default OutlineTextField;
