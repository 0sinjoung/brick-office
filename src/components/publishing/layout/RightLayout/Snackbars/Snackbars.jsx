import React from 'react';
import Snackbar from 'components/publishing/molecule/Snackbar';
import './Snackbars.scss';

const Snackbars = () => {
  return (
    <div className="snackbars">
      <div className="snackbars_wrap">
        {/* <Snackbar snackbarTitle="알림 타이틀1" showBrickIcon="">
          김양양양양김양양양양김양양양양김양양양양님이 상담사 변경 요청을 수락하였습니다. 스낵바 너비는 고정, 높이는 가변. 브릭 아이콘 없는 케이스 있음
        </Snackbar>
        <Snackbar snackbarTitle="알림 타이틀2" showBrickIcon="show">
          최신 알림은 하단에서 추가되며 갯수는 총 3개까지 올 수 있으며, 3개 초과시 오래된 알림 삭제
        </Snackbar>
        <Snackbar snackbarTitle="알림 메시지" showBrickIcon="show">
          김제니님이 상담사 변경 요청을 수락했어요.
        </Snackbar> */}
      </div>
    </div>
  );
};

export default Snackbars;
