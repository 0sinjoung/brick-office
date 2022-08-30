import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/publishing/atom/button/IconButton';
import { ReactComponent as IconFileUploadConfirmCircle } from 'assets/svg/icon/fileUpload/icon_file_upload_confirm_circle.svg';
import { ReactComponent as IconFileUploadErrorCircle } from 'assets/svg/icon/fileUpload/icon_file_upload_error_circle.svg';
import { ReactComponent as IconFileExtensionXlsxTiny } from 'assets/svg/icon/fileUpload/icon_file_extension_xlsx_tiny.svg';
import { ReactComponent as IconCross } from 'assets/svg/icon/icon_cross.svg';
import './style.scss';

/** 파일 업로드 스낵바
 * @fileName : 파일명 text
 * @isFileUpload : true || false: download
 * @fileState : 'loading' || 'complete' || 'error'
 * @fileExtension : 'xlsx' 이후 상황 추가 ...
 */
const FileUploadSnackbar = ({ fileName, isFileUpload, fileExtension, fileState }) => {
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
    if (fileState === 'loading') snackbarTitleText=' 중입니다.';
    if (fileState === 'complete') snackbarTitleText='를 완료했어요.';
    if (fileState === 'error') snackbarTitleText='에 실패했어요.';

    return (
      <h5 className="file_upload_snackbar_title">
        {isFileUpload ? '업로드' : '다운로드'}{snackbarTitleText}
      </h5>
    )
  };
  const displayUploadingIcon = () => {
    if (fileState === 'loading') {
      return (
        <div className="snackbar_upload_spinner show" />
      )
    }
    if (fileState === 'complete') {
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
        <div className={`file_upload_snackbar_close_button_box ${fileState === 'loading' ? 'loading' : ''}`}>
          <IconButton buttonClassName="tiny" handleClick={handleCloseSnackbar}>
            <IconCross />
          </IconButton>
        </div>
      </div>
      <div className="file_upload_snackbar_contents">
        <div className={`file_upload_snackbar_extension_icon_box ${fileState === 'complete' ? 'complete' : ''}`}>{displayExtensionIcon()}</div>
        <div className="file_upload_snackbar_file_name">{fileName}.{fileExtension}</div>
        <div className="file_upload_snackbar_state_icon_box">
          {displayUploadingIcon()}
        </div>
      </div>
    </div>
  );
};

FileUploadSnackbar.propTypes = {
  fileName: PropTypes.string,
  isFileUpload: PropTypes.bool,
  fileState: PropTypes.string,
  fileExtension: PropTypes.string,
};

FileUploadSnackbar.defaultProps = {
  fileName: '',
  isFileUpload: true,
  fileState: '',
  fileExtension: '',
};

export default FileUploadSnackbar;
