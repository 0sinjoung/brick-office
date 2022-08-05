import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconToastChecking } from 'assets/svg/icon/toast/icon_toast_checking.svg';
import { ReactComponent as IconToastWarning } from 'assets/svg/icon/toast/icon_toast_warning.svg';
import './style.scss';

/** 토스트 메시지
 * @showToast : 'show' || ''
 * @iconStyle : default - 'checking' || 경고일 경우 'warning'
 * @children : 토스트 메시지 문구
 */
const ToastMessage = ({ showToast, iconStyle, children }) => {
  return (
    <div className={'toast_message_container ' + showToast}>
      <div className={'toast_message_icon ' + iconStyle}>{iconStyle === 'warning' ? <IconToastWarning /> : <IconToastChecking />}</div>
      <div className="toast_message_text">{children}</div>
    </div>
  );
};

ToastMessage.propTypes = {
  showToast: PropTypes.string,
  iconStyle: PropTypes.string,
  children: PropTypes.string,
};

ToastMessage.defaultProps = {
  showToast: '',
  iconStyle: '',
  children: '',
};

export default ToastMessage;
