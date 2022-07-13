import React from 'react';
import TopLayout from 'components/publishing/layout/TopLayout/TopLayout';
import LeftLayout from 'components/publishing/layout/LeftLayout/LeftLayout';
import RightLayout from 'components/publishing/layout/RightLayout/RightLayout';
import './layout.scss';

const Layout = () => {
  return (
    <>
      {/* <TopLayout /> */}
      <div className="main_contents_layout_wrap">
        <LeftLayout />
        <RightLayout />
      </div>
    </>
  );
};

export default Layout;
