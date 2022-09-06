import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCrossTiny } from 'assets/svg/icon/icon_cross_tiny.svg';
import './style.scss';

/** Basic Search Text Field - text field | small cancle button | search button
 * @placeholderText : placeholder text
 * @handleClickSearchButton : 검색 버튼 클릭 함수
 */
const BasicSearchTextField = React.forwardRef(({ placeholderText, handleClickSearchButton }, ref) => {
  const [showTextFieldDeleteButton, setShowTextFieldDeleteButton] = useState('');
  const [searchButtonStyle, setSearchButtonStyle] = useState('');

  const handleKeyUpTextField = e => {
    const { value } = e.target;

    if (value) {
      setShowTextFieldDeleteButton('show');
      setSearchButtonStyle('active');
    } else {
      setShowTextFieldDeleteButton('');
      setSearchButtonStyle('focus');
    }
  };

  const handleClickDeleteTextField = () => {
    ref.current.focus();
    ref.current.value = '';
    setShowTextFieldDeleteButton('');
    setSearchButtonStyle('focus');
  };

  const handleFocusTextField = () => {
    if (ref.current.value) {
      setShowTextFieldDeleteButton('show');
      setSearchButtonStyle('active');
    } else {
      setSearchButtonStyle('focus');
    }
  };

  const handleBlurTextField = () => {
    setShowTextFieldDeleteButton('');
    setSearchButtonStyle('');
  };

  return (
    <div className="basic_search_text_field_box">
      <input
        type="text"
        name="basic_search_text_field"
        className="basic_search_text_field"
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

BasicSearchTextField.propTypes = {
  placeholderText: PropTypes.string,
  handleClickSearchButton: PropTypes.func,
};

BasicSearchTextField.defaultProps = {
  placeholderText: '',
  handleClickSearchButton: () => {},
};
BasicSearchTextField.displayName = 'BasicSearchTextField';

export default BasicSearchTextField;
