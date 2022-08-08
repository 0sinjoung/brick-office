import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCrossSmall } from 'assets/svg/icon/icon_cross_small.svg';
import './style.scss';

/** 삭제 가능한 chip
 * @children : chip text
 * @chipStyle : inline style로 스타일 변경
 */
const DeletableChip = ({ children, chipStyle, handleDelete }) => {
  const [isDeleteChip, setIsDeleteChip] = useState(false);
  const handleClickDeleteButton = () => {
    handleDelete(children);
    setIsDeleteChip(true);
  }
  return (
    <div className={`deletable_chip ${isDeleteChip ? '' : 'show'}`} style={chipStyle}>
      <span className="deletable_chip_text">{children}</span>
      <button type='button' className="deletable_chip_delete_button" onClick={handleClickDeleteButton}>
        <IconCrossSmall />
      </button>
    </div>
  );
};

DeletableChip.propTypes = {
  children: PropTypes.string,
  chipStyle: PropTypes.object,
  handleDelete: PropTypes.func,
};

DeletableChip.defaultProps = {
  children: '',
  chipStyle: {},
  handleDelete: () => {},
};

export default DeletableChip;
