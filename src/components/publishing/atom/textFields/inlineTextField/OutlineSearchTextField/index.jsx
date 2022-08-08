import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCrossTiny } from 'assets/svg/icon/icon_cross_tiny.svg';
import './style.scss';

/** Outline search Text Field - outline text field | small cancle button | search button
 * @placeholderText : placeholder text
 * @handleClickSearchButton : 검색 버튼 클릭 함수
 */
const OutlineSearchTextField = React.forwardRef(({ placeholderText, handleClickSearchButton }, ref) => {
  const [outlineStyle, setOutlineStyle] = useState('');
  const [showTextFieldDeleteButton, setShowTextFieldDeleteButton] = useState('');
  const [searchButtonStyle, setSearchButtonStyle] = useState('');

  const handleKeyUpTextField = e => {
    const { value } = e.target;
    setOutlineStyle('focus');

    if (value) {
      setShowTextFieldDeleteButton('show');
      setSearchButtonStyle('active');
    } else {
      setShowTextFieldDeleteButton('');
      setSearchButtonStyle('focus');
    }
  };

  const handleClickDeleteTextField = () => {
    ref.current.value = '';
    ref.current.focus();
    setShowTextFieldDeleteButton('');
    setOutlineStyle('focus');
    setSearchButtonStyle('focus');
  };

  const handleFocusTextField = e => {
    const { value } = e.target;
    setOutlineStyle('focus');
    setSearchButtonStyle('focus');

    if (value) {
      setShowTextFieldDeleteButton('show');
      setSearchButtonStyle('active');
    }
  };

  const handleBlurTextField = () => {
    setShowTextFieldDeleteButton('');
    setSearchButtonStyle('');
    setOutlineStyle('');
  };

  return (
    <div className={`outline_search_text_field_box ${outlineStyle}`}>
      <input
        type="text"
        name="outline_search_text_field"
        className="outline_search_text_field"
        ref={ref}
        placeholder={placeholderText}
        onKeyUp={handleKeyUpTextField}
        onFocus={handleFocusTextField}
        onBlur={handleBlurTextField}
        spellCheck="false"
        autoComplete="off"
      />
      <button type="button" className={`text_field_delete_button ${showTextFieldDeleteButton}`} onClick={handleClickDeleteTextField}>
        <IconCrossTiny />
      </button>
      <button type="button" className={`text_field_search_action_button ${searchButtonStyle}`} onClick={handleClickSearchButton}>
        검색
      </button>
    </div>
  );
});

OutlineSearchTextField.propTypes = {
  placeholderText: PropTypes.string,
  handleClickSearchButton: PropTypes.func,
};

OutlineSearchTextField.defaultProps = {
  placeholderText: '',
  handleClickSearchButton: () => {},
};
OutlineSearchTextField.displayName = 'OutlineSearchTextField';

export default OutlineSearchTextField;
