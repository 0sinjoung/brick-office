import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCrossTiny } from 'assets/svg/icon/icon_cross_tiny.svg';
import './style.scss';

/** 삭제 원형 버튼
 * @handleDelete : 버튼 클릭 이벤트
 */
const DeleteCircleButton = ({ handleDelete }) => {
  return (
    <button type="button" className="delete_circle_button" onClick={handleDelete}>
      <IconCrossTiny />
    </button>
  );
};

DeleteCircleButton.propTypes = {
  handleDelete: PropTypes.func,
};

DeleteCircleButton.defaultProps = {
  handleDelete: () => {},
};

export default DeleteCircleButton;
