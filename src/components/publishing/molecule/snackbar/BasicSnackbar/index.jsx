import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/publishing/atom/button/IconButton';
import { ReactComponent as IconCross } from 'assets/svg/icon/icon_cross.svg';
import './style.scss';

/** 베이직 스낵바
 * @snackbarTitle : 스낵바 타이틀 텍스트
 * @showBrickIcon : 'show' || ''
 * @children : 스낵바 contents
 */
const BasicSnackbar = ({ snackbarTitle, showBrickIcon, children }) => {
  const [hideSnackbar, setHideSnackbar] = useState('');
  const handleCloseSnackbar = () => {
    setHideSnackbar('hide');
  };
  return (
    <div className={`snackbar_container ${hideSnackbar}`}>
      <div className="snackbar_head">
        <div className="snackbar_title_box">
          <div className={`snackbar_icon ${showBrickIcon}`}>
            <img className="snackbar_icon_image" alt="brick icon" src="https://cdn.brickchat.dev/assets/icon/brick_chat_icon_white.png" />
          </div>
          <h5 className="snackbar_title">{snackbarTitle}</h5>
        </div>
        <div className="snackbar_close_button_box">
          <IconButton buttonClassName="tiny" handleClick={handleCloseSnackbar}>
            <IconCross />
          </IconButton>
        </div>
      </div>
      <div className="snackbar_contents">{children}</div>
    </div>
  );
};

BasicSnackbar.propTypes = {
  snackbarTitle: PropTypes.string,
  showBrickIcon: PropTypes.string,
  children: PropTypes.any,
};

BasicSnackbar.defaultProps = {
  snackbarTitle: '',
  showBrickIcon: '',
  children: '',
};

export default BasicSnackbar;
