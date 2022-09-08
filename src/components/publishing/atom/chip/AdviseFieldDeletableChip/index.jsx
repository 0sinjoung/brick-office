import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCrossSmall } from 'assets/svg/icon/icon_cross_small.svg';
import './style.scss';

/** 상담 분류 chip - 삭제 가능
 * @children : chip text
 */
const AdviseFieldDeletableChip = ({ children, isChecked, handleDelete}) => {
  let chipStyle;
  const [isShowChip, setIsShowChip] = useState(isChecked);
  const handleClickDeleteButton = e => {
    e.stopPropagation();
    handleDelete(children);
    setIsShowChip(false);
  };

  if (children === 'A/S') chipStyle = { backgroundColor: '#ECEDEF' };
  if (children === '결제') chipStyle = { backgroundColor: '#FCEBDB' };
  if (children === '고객 관리') chipStyle = { backgroundColor: '#D9E7FF' };
  if (children === '교환 반품 환불') chipStyle = { backgroundColor: '#F4EFFA' };
  if (children === '기타') chipStyle = { backgroundColor: '#E0E5EE' };
  if (children === '배송') chipStyle = { backgroundColor: '#E1F5EA' };
  if (children === '상품') chipStyle = { backgroundColor: '#D8F0F8' };
  if (children === '시스템') chipStyle = { backgroundColor: '#FEECEB' };
  if (children === '주문') chipStyle = { backgroundColor: '#EDF2FF' };
  if (children === '프로모션') chipStyle = { backgroundColor: '#EFF8DC' };
  if (children === '회원') chipStyle = { backgroundColor: '#FFECC9' };

  return (
    <div className={`advise_field_color_deletable_chip ${isShowChip ? 'show' : ''}`} style={chipStyle}>
      <span className="advise_field_color_deletable_chip_text">#{children}</span>
      <button type="button" className="advise_field_color_deletable_chip_button" onClick={e => handleClickDeleteButton(e)}>
        <IconCrossSmall />
      </button>
    </div>
  );
};

AdviseFieldDeletableChip.propTypes = {
  children: PropTypes.any,
};

AdviseFieldDeletableChip.defaultProps = {
  children: '',
};

export default AdviseFieldDeletableChip;
