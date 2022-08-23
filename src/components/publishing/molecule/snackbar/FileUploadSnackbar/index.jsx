import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/publishing/atom/button/IconButton';
import { ReactComponent as IconFileUploadConfirmCircle } from 'assets/svg/icon/fileUpload/icon_file_upload_confirm_circle.svg';
import { ReactComponent as IconFileUploadErrorCircle } from 'assets/svg/icon/fileUpload/icon_file_upload_error_circle.svg';
import { ReactComponent as IconFileExtensionXlsxTiny } from 'assets/svg/icon/fileUpload/icon_file_extension_xlsx_tiny.svg';
import { ReactComponent as IconCross } from 'assets/svg/icon/icon_cross.svg';
import './style.scss';

/** 파일 업로드 스낵바
 * @fileUploadState : 'loading' || 'complate' || 'error'
 * @fileExtension : 'xlsx' ...
 */
const FileUploadSnackbar = ({ fileName, fileExtension, fileUploadState }) => {
  const [hideSnackbar, setHideSnackbar] = useState('');
  const handleCloseSnackbar = () => {
    setHideSnackbar('hide');
  };
  let snackbarTitleText;
  const displayExtensionIcon = () => {
    if (fileExtension === 'xlsx') {
      return (
        <IconFileExtensionXlsxTiny />
      );
    }
  };
  const displaySnackbarTitle = () => {
    if (fileUploadState === 'loading') snackbarTitleText='업로드 중입니다.';
    if (fileUploadState === 'complate') snackbarTitleText='업로드를 완료했어요.';
    if (fileUploadState === 'error') snackbarTitleText='업로드에 실패했어요.';

    return (
      <h5 className="file_upload_snackbar_title">
        {snackbarTitleText}
      </h5>
    )
  };
  const displayUploadingIcon = () => {
    if (fileUploadState === 'loading') {
      return (
        <div className="snackbar_upload_spinner show" />
      )
    }
    if (fileUploadState === 'complate') {
      return (
        <IconFileUploadConfirmCircle />
      )
    }
    return (
      <IconFileUploadErrorCircle />
    )
  };

  return (
    <div className={`file_upload_snackbar_container ${hideSnackbar}`}>
      <div className="file_upload_snackbar_head">
        <div className="file_upload_snackbar_title_box">
          {displaySnackbarTitle()}
        </div>
        <div className={`file_upload_snackbar_close_button_box ${fileUploadState === 'loading' ? 'loading' : ''}`}>
          <IconButton buttonClassName="tiny" handleClick={handleCloseSnackbar}>
            <IconCross />
          </IconButton>
        </div>
      </div>
      <div className="file_upload_snackbar_contents">
        <div className={`file_upload_snackbar_extension_icon_box ${fileUploadState === 'loading' ? 'loading' : ''}`}>{displayExtensionIcon()}</div>
        <div className="file_upload_snackbar_file_name">{fileName}.{fileExtension}</div>
        <div className="file_upload_snackbar_state_icon_box">
          {displayUploadingIcon()}
        </div>
      </div>
    </div>
  );
};

FileUploadSnackbar.propTypes = {
  snackbarTitle: PropTypes.string,
  showBrickIcon: PropTypes.string,
  children: PropTypes.any,
};

FileUploadSnackbar.defaultProps = {
  snackbarTitle: '',
  showBrickIcon: '',
  children: '',
};

export default FileUploadSnackbar;
