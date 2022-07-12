import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss';

/** 3 depth layout sample page
 * @children : children
 */
const ThirdDepthSample = ({ children }) => {
  return (
    <>
      <div className="third_depth_area">3 depth 영역</div>
      <div className="contents_wrap">
        <main className="page_wrap">3 depth layout sample</main>
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
