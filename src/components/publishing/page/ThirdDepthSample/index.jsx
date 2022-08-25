import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 3 depth layout sample page
 * @children : children
 */
const ThirdDepthSample = ({ children }) => {
  return (
    <>
      <div className="third_depth_area">
        <div className="third_depth_area_sample_menu">멤버 관리</div>
        <div className="third_depth_area_sample_menu breadscrumb">가입 관리</div>
        <div className="third_depth_area_sample_menu">메뉴 접근 설정</div>
        <div className="third_depth_area_sample_menu">채널 정보</div>
      </div>
      <div className="contents_wrap">
        <main className="page_wrap">
          <div className="third_depth_main_contents">3 depth 메인 컨텐츠 영역</div>
        </main>
      </div>
    </>
  );
};

ThirdDepthSample.propTypes = {
  children: PropTypes.any,
};

ThirdDepthSample.defaultProps = {
  children: '',
};

export default ThirdDepthSample;
