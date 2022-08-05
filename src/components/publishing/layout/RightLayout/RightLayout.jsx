import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/publishing/layout/RightLayout/Header/Header';
import MainContent from 'components/publishing/layout/RightLayout/MainContent/MainContent';
import Snackbars from 'components/publishing/layout/RightLayout/Snackbars/Snackbars';
import './RightLayout.scss';

const RightLayout = () => {
  return (
    <div className="right_layout_wrap">
      <Header />
      <MainContent />
      <Snackbars />
    </div>
  );
};

export default RightLayout;
