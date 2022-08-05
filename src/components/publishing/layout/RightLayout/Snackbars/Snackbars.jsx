import React from 'react';
import Snackbar from 'components/publishing/molecule/Snackbar';
import './Snackbars.scss';

const Snackbars = () => {
  return (
    <div className="snackbars">
      <div className="snackbars_wrap">
        <ul className="snackbar_lists">
          <li className="snackbar_list">
            <Snackbar snackbarTitle="알림 메시지" showBrickIcon="show">
              김양양양양김양양양양김양양양양김양양양양님이 상담사 변경 요청을 수락하였습니다. 스낵바 너비는 고정이고 높이는 가변 입니다.
            </Snackbar>
          </li>
          <li className="snackbar_list">
            <Snackbar snackbarTitle="알림 메시지" showBrickIcon="show">
              김제니니니님이 상담사 변경 요청을 수락했어요.
            </Snackbar>
          </li>
          <li className="snackbar_list">
            <Snackbar snackbarTitle="알림 메시지" showBrickIcon="show">
              최신 알림은 아래에서 추가되며 갯수는 총 3개까지 올 수 있습니다.
            </Snackbar>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Snackbars;
