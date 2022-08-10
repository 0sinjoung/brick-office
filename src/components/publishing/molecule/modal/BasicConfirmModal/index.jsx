import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FullScreenDim from 'components/publishing/atom/dim/FullScreenDim';
import OutlineButton from 'components/publishing/atom/button/OutlineButton';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import './style.scss';

/** 베이직 컨펌 모달 - 취소 | 확인 투버튼 스타일
 * @titleText : 모달 title text
 * @children : 모달 description text
 * @showModal : className으로 'show' || ''
 * @actionButtonText : 모달 action button text || '확인'
 * @handleAction : 확인시 실행할 비즈니스 로직 함수
 * @handleClose : 모달 닫는 함수
 */
const BasicConfirmModal = ({ titleText, children, showModal, actionButtonText, handleAction, handleClose }) => {
  return (
    <div className={`basic_confirm_modal_wrap ${showModal}`}>
      <FullScreenDim>
        <div className="basic_confirm_modal_container">
          <div className="basic_confirm_modal_contents_box">
            <h6 className="basic_confirm_modal_contents_title">{titleText}</h6>
            <p className="basic_confirm_modal_contents_description">{children}</p>
          </div>
          <div className="basic_confirm_modal_buttons_box">
            <OutlineButton handleClick={handleClose}>취소</OutlineButton>
            <SolidButton handleClick={handleAction}>{actionButtonText || '확인'}</SolidButton>
          </div>
        </div>
      </FullScreenDim>
    </div>
  );
};

BasicConfirmModal.propTypes = {
  showModal: PropTypes.string,
  titleText: PropTypes.string,
  children: PropTypes.string,
  actionButtonText: PropTypes.string,
  handleClose: PropTypes.func,
  handleAction: PropTypes.func,
};

BasicConfirmModal.defaultProps = {
  showModal: '',
  titleText: '',
  children: '',
  actionButtonText: '',
  handleClose: () => {},
  handleAction: () => {},
};

export default BasicConfirmModal;
