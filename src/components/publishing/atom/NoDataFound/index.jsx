import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 데이터 없음, 검색 결과 없음 상황에 띄워주는 화면
 * @children : 결과에 대한 설명
 */
const NoDataFound = ({ children }) => {
  return (
    <div className="no_data_found_box">
      <img alt="no data found" className="no_data_found_image" src="https://cdn.brickchat.dev/assets/img/icon_brick_error.png" />
      <p className="no_data_found_description">{children}</p>
    </div>
  );
};

NoDataFound.propTypes = {
  children: PropTypes.node,
};

NoDataFound.defaultProps = {
  children: '',
};

export default NoDataFound;
