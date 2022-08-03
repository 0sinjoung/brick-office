import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCrossSmall } from 'assets/svg/icon/icon_cross_small.svg';
import './style.scss';

/** Basic text Field - text field | small cancle button
 * @placeholderText : placeholder text
 */
const BasicTextField = React.forwardRef(({ placeholderText }, ref) => {
  const [showTextFieldDeleteButton, setShowTextFieldDeleteButton] = useState('');

  const handleKeyUpTextField = e => {
    const { value } = e.target;

    if (value) {
      setShowTextFieldDeleteButton('show');
    } else {
      setShowTextFieldDeleteButton('');
    }
  };

  const handleClickDeleteTextField = () => {
    ref.current.focus();
    ref.current.value = '';
    setShowTextFieldDeleteButton('');
  };

  const handleFocusTextField = () => {
    if (ref.current.value) {
      setShowTextFieldDeleteButton('show');
    }
  };

  const handleBlurTextField = () => {
    setShowTextFieldDeleteButton('');
  };

  return (
    <div className="basic_text_field_box">
      <input
        type="text"
        name="basic_text_field"
        className="basic_text_field"
        ref={ref}
        placeholder={placeholderText}
        onKeyUp={handleKeyUpTextField}
        onFocus={handleFocusTextField}
        onBlur={handleBlurTextField}
        spellCheck="false"
        autoComplete="off"
      />
      <button type="button" className={`text_field_delete_button ${showTextFieldDeleteButton}`} onClick={handleClickDeleteTextField}>
        <IconCrossSmall />
      </button>
    </div>
  );
});

BasicTextField.propTypes = {
  placeholderText: PropTypes.string,
};

BasicTextField.defaultProps = {
  placeholderText: '',
};
BasicTextField.displayName = 'BasicTextField';

export default BasicTextField;
