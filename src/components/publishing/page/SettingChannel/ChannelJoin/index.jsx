import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconLink } from 'assets/svg/icon/icon_link.svg'
import { ReactComponent as IconSetting } from 'assets/svg/icon/icon_setting.svg'
import IconButton from 'components/publishing/atom/button/IconButton';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import OutlineButton from 'components/publishing/atom/button/OutlineButton';
import FullScreenDim from 'components/publishing/atom/dim/FullScreenDim';
import Pagination from 'components/publishing/atom/Pagination';
import DropdownMenu from 'components/publishing/molecule/dropdown/DropdownMenu';
import ToastMessage from 'components/publishing/atom/ToastMessage';
import BasicTextDropdown from 'components/publishing/molecule/dropdown/BasicTextDropdown';
import OutlineSearchTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineSearchTextField';
import GridTable from 'components/publishing/molecule/gridComponents/GridTable';
import GridTableHead from 'components/publishing/molecule/gridComponents/GridTableHead';
import GridTableBody from 'components/publishing/molecule/gridComponents/GridTableBody';
import GridTableRow from 'components/publishing/molecule/gridComponents/GridTableRow';
import GridTableData from 'components/publishing/molecule/gridComponents/GridTableData';
import GridTableNoDataFound from 'components/publishing/molecule/gridComponents/GridTableNoDataFound';
import './style.scss';

/** 채널 운영 설정 - (2) 가입 관리 
 * @children : children
 */

const channelJoinColumnData = [
  {
    value: '이름', 
    isDropdown: true,
    isShownDropdownMenu: false, 
    dropdownMenu: [
      {value: '오름차순 정렬', onClick: () => console.log('오름차순 정렬')},
      {value: '내림차순 정렬', onClick: () => console.log('내림차순 정렬')},
    ],
  },
  {
    value: '이메일', 
    isDropdown: true,
    isShownDropdownMenu: false, 
    dropdownMenu: [
      {value: '오름차순 정렬', onClick: () => console.log('오름차순 정렬')},
      {value: '내림차순 정렬', onClick: () => console.log('내림차순 정렬')},
    ],
  },
  {
    value: '가입 신청일', 
    isDropdown: true,
    isShownDropdownMenu: false, 
    dropdownMenu: [
      {value: '오름차순 정렬', onClick: () => console.log('오름차순 정렬')},
      {value: '내림차순 정렬', onClick: () => console.log('내림차순 정렬')},
    ],
  },
  {
    value: '가입 신청 수락', 
    isDropdown: false, 
  },
];

const channelJoinMockUpData = [
  {
    channelMemberId: 1,
    channelMemberName: '김다이김다이김다이김다이김다이김다이',
    channelMemberEmail: 'testtesttest1111@gmail.com',
    channelMemberIsAdmin: true,
    channelMemberJoinDate: '2023.01.20',
    isEditButtonSelected: false,
  },
  {
    channelMemberId: 2,
    channelMemberName: '김다이',
    channelMemberEmail: 'testtesttest1111@gmail.com',
    channelMemberIsAdmin: true,
    channelMemberJoinDate: '2023.01.20',
    isEditButtonSelected: false,
  },
  {
    channelMemberId: 3,
    channelMemberName: '김다이',
    channelMemberEmail: 'testtesttest1111@gmail.com',
    channelMemberIsAdmin: true,
    channelMemberJoinDate: '2023.01.20',
    isEditButtonSelected: false,
  },
  {
    channelMemberId: 4,
    channelMemberName: '김다이',
    channelMemberEmail: 'testtesttest1111@gmail.com',
    channelMemberIsAdmin: true,
    channelMemberJoinDate: '2023.01.20',
    isEditButtonSelected: false,
  },
  {
    channelMemberId: 5,
    channelMemberName: '김다이',
    channelMemberEmail: 'testtesttest1111@gmail.com',
    channelMemberIsAdmin: true,
    channelMemberJoinDate: '2023.01.20',
    isEditButtonSelected: false,
  },
  {
    channelMemberId: 6,
    channelMemberName: '김다이',
    channelMemberEmail: 'testtesttest1111@gmail.com',
    channelMemberIsAdmin: true,
    channelMemberJoinDate: '2023.01.20',
    isEditButtonSelected: false,
  },
  {
    channelMemberId: 7,
    channelMemberName: '김다이',
    channelMemberEmail: 'testtesttest1111@gmail.com',
    channelMemberIsAdmin: true,
    channelMemberJoinDate: '2023.01.20',
    isEditButtonSelected: false,
  },
  {
    channelMemberId: 8,
    channelMemberName: '김다이',
    channelMemberEmail: 'testtesttest1111@gmail.com',
    channelMemberIsAdmin: true,
    channelMemberJoinDate: '2023.01.20',
    isEditButtonSelected: false,
  },
  {
    channelMemberId: 9,
    channelMemberName: '김다이',
    channelMemberEmail: 'testtesttest1111@gmail.com',
    channelMemberIsAdmin: true,
    channelMemberJoinDate: '2023.01.20',
    isEditButtonSelected: false,
  },
  {
    channelMemberId: 10,
    channelMemberName: '김다이',
    channelMemberEmail: 'testtesttest1111@gmail.com',
    channelMemberIsAdmin: true,
    channelMemberJoinDate: '2023.01.20',
    isEditButtonSelected: false,
  },
];

const ChannelJoin = ({ children }) => {
  /* 공통 - 토스트 메시지 */
  const [toastMessageData, setToastMessageData] = useState({
    isShow: false,
    icon: '',
    message: '',
  });
  
  /* 상세 모달 */
  /* (1) 멤버 초대하기 모달 */
  const [isShownInviteMemberModal, setIsShownInviteMemberModal] = useState(false);
  const handleShowInviteMemberModal = () => {
    setIsShownInviteMemberModal(true);
  };
  const handleHideInviteMemberModal = () => {
    setIsShownInviteMemberModal(false);
  };
  const handleCopyInviteMemberURL = () => {
    console.log('URL 복사!!');
    setToastMessageData({ ...toastMessageData, isShow: true, message: '멤버 초대를 위한 URL을 복사했어요.' });
    setTimeout(() => setToastMessageData({ isShow: false, icon: '', message: '' }), 3000);
  };

  const displayInviteMemberModal = () => {
    return (
      <FullScreenDim>
        <div className="invite_member_modal_container">
          <div className="invite_member_modal_head">
            <div className="invite_member_modal_title_box">
              <h3 className="invite_member_modal_title">채널 멤버 초대하기</h3>
            </div>
          </div>
          <div className="invite_member_description_box">
            <div className="invite_member_link_icon_box">
              <IconLink />
            </div>
            <div className="invite_member_description_text_box">
              <h4 className="invite_member_description_title">초대 URL</h4>
              <p className="invite_member_description_text">채널에 초대할 멤버에게 아래의 URL을 공유해 주세요.</p>
            </div>
          </div>
          <div className="invite_member_URL_box">
            <div className="invite_member_URL">https://invite.brickchat.co.kr/난수</div>
            <OutlineButton buttonClassName="tiny" handleClick={handleCopyInviteMemberURL}>URL 복사</OutlineButton>
          </div>
          <div className="invite_member_button_box">
            <SolidButton handleClick={handleHideInviteMemberModal}>닫기</SolidButton>
          </div>
        </div>
      </FullScreenDim>
    );
  };

  
  /* 1. 테이블 탑 섹션 */
  /* 1-2. 검색 결과 */
  // 0건이면 아예 표시하지 않음(공통UI 참조, SEARCH_RESULT_COUNT=0이면 사라짐)
  const SEARCH_RESULT_COUNT = 5; 

  /* 1-3. 검색 드롭다운 | 텍스트 필드 */
  const handleClickDropdownMenuItem = menuItem => {
    console.log(menuItem, '클릭됨!');
  };
  const refChannelJoinSearchTextField = React.createRef(null);
  const handleSearchChannelMemberTable = () => {
    console.log('멤버 가입 관리 테이블 검색');
  };
  const ChannelJoinTableSearchData = [
    { value: '전체', isSelect: true },
    { value: '이름', isSelect: false },
    { value: '이메일', isSelect: false },
  ];

  /* 2. 테이블 메인 섹션 */
  /* 테이블 데이터 */
  const [settingChannelJoinData, setSettingChannelJoinData] = useState([...channelJoinMockUpData]);

  
  /* 테이블 셀 컴포넌트 */
  /* (1) 가입 신청 수락 편집 */
  const IS_CURRENT_USER_CHANNEL_ADMIN = true;
  const handleToggleEditDropdownMenu = idx => {
    if (!IS_CURRENT_USER_CHANNEL_ADMIN) {
      return;
    }
    const currentSettingChannelJoinData = [...settingChannelJoinData];
    currentSettingChannelJoinData.map(item => item.isEditButtonSelected = false);
    currentSettingChannelJoinData[idx].isEditButtonSelected = true;
    setSettingChannelJoinData(currentSettingChannelJoinData);
  };

  /* 데이터 편집 버튼 */
  const handleAcceptJoinChannelMember = () => {
    console.log('채널 가입 신청 수락');
    setToastMessageData({ ...toastMessageData, isShow: true, message: '채널 가입 신청을 수락했어요.' });
    setTimeout(() => setToastMessageData({ isShow: false, icon: '', message: '' }), 3000);
  };
  const handleRefuseJoinChannelMember = () => {
    console.log('채널 가입 신청 거절');
    setToastMessageData({ ...toastMessageData, isShow: true, message: '채널 가입 신청을 거절했어요.' });
    setTimeout(() => setToastMessageData({ isShow: false, icon: '', message: '' }), 3000);
  };

  /* 데이터 편집 종류 */
  const rowDataEditButtonData = [
    { value: '수락하기', isSelect: false, handleClick: handleAcceptJoinChannelMember},
    { value: '거절하기', isSelect: false, handleClick: handleRefuseJoinChannelMember}
  ];
  const displayAdminEditTableCell = (item, idx) => {
    return (
      <div className={`row_data_edit_icon_button_box channel_join_edit_cell ${IS_CURRENT_USER_CHANNEL_ADMIN ? '' : 'member'}`}>
        <IconButton buttonClassName="small" handleClick={() => handleToggleEditDropdownMenu(idx)}>
          <IconSetting />
        </IconButton>
        <DropdownMenu showDropdownMenu={item.isEditButtonSelected ? "show" : ""} dropdownMenuData={rowDataEditButtonData} />
      </div>
    );
  };


  /* 로우 데이터 */
  const ROW_DATA_COUNT = 3;
  let NO_DATA_FOUND_STRING = '앗! 검색 결과가 없어요.\n다른 검색어를 입력해 주세요.';
  const displayChannelJoinMemberRowData = () => {
    /* 가입 관리 멤버 로우 데이터 - 없음 */
    if (ROW_DATA_COUNT === 0) {
      return (
        <GridTableNoDataFound>{NO_DATA_FOUND_STRING}</GridTableNoDataFound>
      );
    }

    /* 가입 관리 멤버 로우 데이터 */
    return (
      settingChannelJoinData.map((row, idx) => {
        return (
          <GridTableRow key={`${row.id}_${idx}`}>
            <GridTableData dataType="ellipsis">{row.channelMemberName}</GridTableData>
            <GridTableData>{row.channelMemberEmail}</GridTableData>
            <GridTableData>{row.channelMemberJoinDate}</GridTableData>
            <GridTableData dataType="edit">{displayAdminEditTableCell(row, idx)}</GridTableData>
          </GridTableRow>
        );
      })
    );
  };
  
  return (
    <>
      <div className="contents_wrap scroll">
        <main className="page_wrap full">
          <div className="channel_join_section_wrap">
            {/* 1. 테이블 탑 섹션 */}
            <section className="channel_join_table_top_section">
              <div className="channel_join_table_top_buttons_box">
                {/* 1-1. 멤버 초대하기 버튼 */}
                <div className="invite_join_button_box">
                  <SolidButton buttonClassName="small" handleClick={handleShowInviteMemberModal}>멤버 초대하기</SolidButton>
                </div>
              </div>
              <div className="channel_join_table_top_search_box">
                {/* 1-2. 검색 결과 */}
                <div className={`search_result_text_box ${SEARCH_RESULT_COUNT === 0 ? '' : 'show' }`}>
                  <p className="search_result_text">총 <span className="search_result_count">{`${SEARCH_RESULT_COUNT} 건`}</span>을 찾았어요.</p>
                </div>
                {/* 1-3. 검색 드롭다운 | 텍스트 필드 */}
                <div className="channel_join_search_dropdown_container">
                  <BasicTextDropdown defaultToggleText="전체"
                    dropdownMenuData={ChannelJoinTableSearchData}
                    handleClickMenuItem={handleClickDropdownMenuItem}></BasicTextDropdown>
                </div>
                <div className="channel_join_search_text_field">
                  <OutlineSearchTextField
                    ref={refChannelJoinSearchTextField}
                    placeholderText="입력해 주세요."
                    handleClickSearc멤버 가입 관리on={handleSearchChannelMemberTable}
                  />
                </div>
              </div>
            </section>
            {/* 2. 테이블 메인 섹션 */}
            <section className="channel_join_table_section">
              <GridTable gridClassName="channel_join_table">
                {/* 2-1. 테이블 - 헤드 */}
                <GridTableHead gridColumnData={channelJoinColumnData} />
                {/* 2-2. 테이블 - 바디 */}
                <GridTableBody>
                  {displayChannelJoinMemberRowData()}
                </GridTableBody>
              </GridTable>
            </section>
            {/* 3. 테이블 바텀 섹션 */}
            <section className="channel_join_bottom_section">
              <Pagination pageNumber={1} />
            </section>
            {/* 모달 */}
            {/* (1) 멤버 초대하기 모달 */}
            {isShownInviteMemberModal ? displayInviteMemberModal() : ''}
            <ToastMessage showToast={toastMessageData.isShow ? 'show' : ''} iconStyle={toastMessageData.icon}>
              {toastMessageData.message}
            </ToastMessage>
          </div>
        </main>
      </div>
    </>
  );
};

ChannelJoin.propTypes = {
  children: PropTypes.any,
};

ChannelJoin.defaultProps = {
  children: '',
};

export default ChannelJoin;
