import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 상담 분류 chip
 * @children : chip text
 */
const AdviseFieldChip = ({ children }) => {
  let chipStyle;
  
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
    <div className="advise_field_color_chip" style={chipStyle}>
      #{children}
    </div>
  );
};

AdviseFieldChip.propTypes = {
  children: PropTypes.any,
};

AdviseFieldChip.defaultProps = {
  children: '',
};

export default AdviseFieldChip;
