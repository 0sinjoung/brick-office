import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCrossTiny } from 'assets/svg/icon/icon_cross_tiny.svg';
import './style.scss';

/** 미니 로딩 스피너 : 푸터 첨부 파일 영역 사용
 * @showSpinner : '' | 'show'
 */
const MiniLoadingSpinner = ({ showSpinner }) => {
  return <div className={`mini_loading_spinner ${showSpinner}`} />;
};

MiniLoadingSpinner.propTypes = {
  showSpinner: PropTypes.string,
};

MiniLoadingSpinner.defaultProps = {
  showSpinner: '',
};

export default MiniLoadingSpinner;
