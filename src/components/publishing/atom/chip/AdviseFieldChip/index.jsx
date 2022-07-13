import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 상담 분류 chip
 * @children : tag text
 * @tagStyle : inline style로 스타일 변경
 */
const ColorChip = ({ children, tagStyle }) => {
  if (children === 'A/S') tagStyle = { backgroundColor: '#ECEDEF' };
  if (children === '결제') tagStyle = { backgroundColor: '#FCEBDB' };
  if (children === '고객 관리') tagStyle = { backgroundColor: '#D9E7FF' };
  if (children === '교환 반품 환불') tagStyle = { backgroundColor: '#F4EFFA' };
  if (children === '기타') tagStyle = { backgroundColor: '#E0E5EE' };
  if (children === '배송') tagStyle = { backgroundColor: '#E1F5EA' };
  if (children === '상품') tagStyle = { backgroundColor: '#D8F0F8' };
  if (children === '시스템') tagStyle = { backgroundColor: '#FEECEB' };
  if (children === '주문') tagStyle = { backgroundColor: '#EDF2FF' };
  if (children === '프로모션') tagStyle = { backgroundColor: '#EFF8DC' };
  if (children === '회원') tagStyle = { backgroundColor: '#FFECC9' };

  return (
    <div className="color_chip" style={tagStyle}>
      #{children}
    </div>
  );
};

ColorChip.propTypes = {
  children: PropTypes.any,
  tagStyle: PropTypes.object,
};

ColorChip.defaultProps = {
  children: '',
  tagStyle: {},
};

export default ColorChip;
