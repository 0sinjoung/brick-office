import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconLink } from 'assets/svg/icon/icon_link.svg'
import { ReactComponent as IconCaution } from 'assets/svg/icon/icon_caution.svg'
import { ReactComponent as IconSetting } from 'assets/svg/icon/icon_setting.svg'
import { ReactComponent as IconFileExtensionXlsx } from 'assets/svg/icon/fileUpload/icon_file_extension_xlsx.svg'
import { ReactComponent as IconExelTemplate } from 'assets/svg/icon/fileUpload/icon_exel_template.svg'
import { ReactComponent as IconFileAdd } from 'assets/svg/icon/fileUpload/icon_file_add.svg'
import { ReactComponent as IconTriangleWarning } from 'assets/svg/icon/icon_triangle_warning.svg'
import { ReactComponent as IconCrossTiny } from 'assets/svg/icon/icon_cross_tiny.svg';
import IconButton from 'components/publishing/atom/button/IconButton';
import NewNotificationBadge from 'components/publishing/atom/notificationBadge/NewNotificationBadge';
import AdviseFieldChip from 'components/publishing/atom/chip/AdviseFieldChip';
import OutlineTag from 'components/publishing/atom/tag/OutlineTag';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import OutlineButton from 'components/publishing/atom/button/OutlineButton';
import DeleteCircleButton from 'components/publishing/atom/button/DeleteCircleButton';
import BasicTextEditor from 'components/publishing/molecule/textEditor/BasicTextEditor';
import FullScreenDim from 'components/publishing/atom/dim/FullScreenDim';
import NoDataFound from 'components/publishing/atom/NoDataFound';
import Pagination from 'components/publishing/atom/Pagination';
import DropdownToggle from 'components/publishing/molecule/dropdown/DropdownToggle';
import DropdownMenu from 'components/publishing/molecule/dropdown/DropdownMenu';
import BasicConfirmModal from 'components/publishing/molecule/modal/BasicConfirmModal';
import ToastMessage from 'components/publishing/atom/ToastMessage';
import BasicTextDropdown from 'components/publishing/molecule/dropdown/BasicTextDropdown';
import OutlineTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineTextField';
import ValidationTextField from 'components/publishing/atom/textFields/inlineTextField/ValidationTextField';
import OutlineSearchTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineSearchTextField';
import './style.scss';

/** 채널 운영 설정 - (1) 멤버 관리 
 * @children : children
 */

const ChannelMember = ({ children }) => {
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

  /* (2) 상담 분야 설정하기 모달 */
  const [isShownEditMemberAdviseFieldsModal, setIsShownEditMemberAdviseFieldsModal] = useState(false);
  const handleShowEditMemberAdviseFieldModal = () => {
    setIsShownEditMemberAdviseFieldsModal(true);
  }
  const handleHideEditMemberAdviseFieldModal = () => {
    setIsShownEditMemberAdviseFieldsModal(false);
  }
  const handleSaveAdivseFields = () => {
    console.log('상담 분야 편집 저장!');
    handleHideEditMemberAdviseFieldModal();
    // setToastMessageData({ ...toastMessageData, isShow: true, message: 'KMS 편집을 완료했어요.' });
    // setTimeout(() => setToastMessageData({ isShow: false, icon: '', message: '' }), 3000);
  };
  const ADVISER_NAME = "김다이김다이김다이김다이";
  const displayEditMemberAdviseFieldsModal = () => {
    return (
      <FullScreenDim>
        <div className="edit_member_advise_fields_modal_container">
          <div className="edit_member_advise_fields_modal_head">
            <div className="edit_member_advise_fields_modal_title_box">
              <h3 className="edit_member_advise_fields_modal_title">상담 분야 설정하기</h3>
              <div className="edit_member_name_box">{ADVISER_NAME} 담당 상담 분야</div>
            </div>
          </div>
          <div className="edit_member_advise_fields_dropdown_box">
            <div className="advise_fields_dropdown_toggle_button">
              <div className=""></div>
            </div>
            <div className="advise_fields_combo_dropdown_menu">
              <div className=""></div>
            </div>
          </div>
          <div className="edit_member_advise_fields_button_box">
            <OutlineButton handleClick={handleHideEditMemberAdviseFieldModal}>취소</OutlineButton>
            <SolidButton handleClick={handleSaveAdivseFields}>저장하기</SolidButton>
          </div>
        </div>
      </FullScreenDim>
    );
  };


  /* (3) 강제 탈퇴시키기 모달 */
  const [isShownResignModal, setIsShownResignModal] = useState(false);
  const handleShowResignModal = () => {
    setIsShownResignModal(true);
  }
  const handleHideResignModal = () => {
    setIsShownResignModal(false);
  }
  const handleResignMember = () => {
    console.log('강제 탈퇴시키기!');
    handleHideResignModal();
    // setToastMessageData({ ...toastMessageData, isShow: true, message: 'KMS 편집을 완료했어요.' });
    // setTimeout(() => setToastMessageData({ isShow: false, icon: '', message: '' }), 3000);
  };
  const displayResignMemberModal = () => {
    return (
      <FullScreenDim>
        <div className="resign_member_modal_container">
          <div className="resign_member_modal_head">
            <div className="resign_member_modal_title_box">
              <h3 className="resign_member_modal_title">강제 탈퇴시키기</h3>
              <div className="resign_member_name_box">
                <div className="resign_member_name">{ADVISER_NAME}</div> 
                <div className="resign_member_name_text">멤버를 탈퇴 처리할까요?</div>
              </div>
            </div>
          </div>
          <div className="resign_member_caution_box">
            <div className="caution_icon_box">
              <IconCaution />
            </div>
            <p className="caution_text">강제 탈퇴된 멤버는 멤버 초대로 다시 채널에 가입할 수 있어요.</p>
          </div>
          <div className="resign_member_button_box">
            <OutlineButton handleClick={handleHideResignModal}>취소</OutlineButton>
            <SolidButton handleClick={handleResignMember}>탈퇴시키기</SolidButton>
          </div>
        </div>
      </FullScreenDim>
    );
  };  
  
  /* 1. 테이블 탑 섹션 */
  /* 1-2. 검색 결과 */
  // 0건이면 아예 표시하지 않음(공통UI 참조, SEARCH_RESULT_COUNT=0이면 사라짐)
  const SEARCH_RESULT_COUNT = 8; 

  /* 1-3. 검색 드롭다운 | 텍스트 필드 */
  const handleClickDropdownMenuItem = menuItem => {
    console.log(menuItem, '클릭됨!');
  };
  const refChannelMemberSearchTextField = React.createRef(null);
  const handleSearchChannelMemberTable = () => {
    console.log('채널 멤버 테이블 검색');
  };
  const ChannelMemberTableSearchData = [
    { value: '전체', isSelect: true },
    { value: '이름', isSelect: false },
    { value: '닉네임', isSelect: false },
    { value: '이메일', isSelect: false },
  ];

  /* 2. 테이블 메인 섹션 */
  /* 2-1. 테이블 - 헤드 */
  const [isShowTableHeadKMSCategoryDropdown, setIsShowTableHeadKMSCategoryDropdown] = useState(false);
  const [isShowTableHeadKMSTitleDropdown, setIsShowTableHeadAutoComplateSentenceDropdown] = useState(false);
  const [isShowTableHeadKMSContentsDropdown, setIsShowTableHeadKMSContentsDropdown] = useState(false);
  const [isShowTableHeadLastUpdateDropdown, setIsShowTableHeadLastUpdateDropdown] = useState(false);
  
  const handleSortingRowData = () => {
    console.log('row data sorting!');
  };

  const tableHeadDropdownData = [
    { value: '오름차순 정렬', isSelect: false, handleClick: handleSortingRowData},
    { value: '내림차순 정렬', isSelect: false, handleClick: handleSortingRowData}
  ];
  
  /* 2-2. 테이블 - 바디 */
  /* 테이블 데이터 */
  const [settingChannelMemberData, setSettingChannelMemberData] = useState([
    {
      channelMemberId: 1,
      channelMemberIsNewMember: true,
      channelMemberProfileImage: 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile.png',
      channelMemberName: '김다이김다이김다이김다이김다이김다이',
      channelMemberNickname: '닉네임아홉글자까지',
      channelMemberEmail: 'testtesttest1111@gmail.com',
      channelMemberAdviseField: ['고객 관리', '교환 반품 환불', '프로모션', 'A/S', '주문'],
      channelMemberAdviseState: '업무 종료',
      channelMemberIsAdmin: true,
      channelMemberJoinDate: '2023.01.20',
      isEditButtonSelected: false,
    },
    {
      channelMemberId: 2,
      channelMemberIsNewMember: false,
      channelMemberProfileImage: 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile.png',
      channelMemberName: '김다이',
      channelMemberNickname: '아홉글자가최대',
      channelMemberEmail: 'testtesttest1111@gmail.com',
      channelMemberAdviseField: ['A/S'],
      channelMemberAdviseState: '업무 종료',
      channelMemberIsAdmin: false,
      channelMemberJoinDate: '2023.01.20',
      isEditButtonSelected: false,
    },
    {
      channelMemberId: 2,
      channelMemberIsNewMember: false,
      channelMemberProfileImage: 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile.png',
      channelMemberName: '김다이',
      channelMemberNickname: '아홉글자가최대',
      channelMemberEmail: 'testtesttest1111@gmail.com',
      channelMemberAdviseField: ['A/S', '결제', '고객 관리', '교환 반품 환불', '기타', '배송', '상품', '시스템', '주문', '프로모션', '회원'],
      channelMemberAdviseState: '업무 종료',
      channelMemberIsAdmin: false,
      channelMemberJoinDate: '2023.01.20',
      isEditButtonSelected: false,
    },
    {
      channelMemberId: 2,
      channelMemberIsNewMember: false,
      channelMemberProfileImage: 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile.png',
      channelMemberName: '김다이',
      channelMemberNickname: '아홉글자가최대',
      channelMemberEmail: 'testtesttest1111@gmail.com',
      channelMemberAdviseField: ['A/S', '결제', '고객 관리', '교환 반품 환불', '기타'],
      channelMemberAdviseState: '업무 종료',
      channelMemberIsAdmin: false,
      channelMemberJoinDate: '2023.01.20',
      isEditButtonSelected: false,
    },
    {
      channelMemberId: 2,
      channelMemberIsNewMember: false,
      channelMemberProfileImage: 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile.png',
      channelMemberName: '김다이',
      channelMemberNickname: '아홉글자가최대',
      channelMemberEmail: 'testtesttest1111@gmail.com',
      channelMemberAdviseField: ['A/S', '결제', '고객 관리', '교환 반품 환불', '기타'],
      channelMemberAdviseState: '업무 종료',
      channelMemberIsAdmin: false,
      channelMemberJoinDate: '2023.01.20',
      isEditButtonSelected: false,
    },
    {
      channelMemberId: 2,
      channelMemberIsNewMember: false,
      channelMemberProfileImage: 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile.png',
      channelMemberName: '김다이',
      channelMemberNickname: '아홉글자가최대',
      channelMemberEmail: 'testtesttest1111@gmail.com',
      channelMemberAdviseField: ['A/S', '결제', '고객 관리', '교환 반품 환불', '기타'],
      channelMemberAdviseState: '업무 종료',
      channelMemberIsAdmin: false,
      channelMemberJoinDate: '2023.01.20',
      isEditButtonSelected: false,
    },
    {
      channelMemberId: 2,
      channelMemberIsNewMember: false,
      channelMemberProfileImage: 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile.png',
      channelMemberName: '김다이',
      channelMemberNickname: '아홉글자가최대',
      channelMemberEmail: 'testtesttest1111@gmail.com',
      channelMemberAdviseField: ['A/S', '결제', '고객 관리', '교환 반품 환불', '기타'],
      channelMemberAdviseState: '업무 종료',
      channelMemberIsAdmin: false,
      channelMemberJoinDate: '2023.01.20',
      isEditButtonSelected: false,
    },
    {
      channelMemberId: 2,
      channelMemberIsNewMember: false,
      channelMemberProfileImage: 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile.png',
      channelMemberName: '김다이',
      channelMemberNickname: '아홉글자가최대',
      channelMemberEmail: 'testtesttest1111@gmail.com',
      channelMemberAdviseField: ['A/S', '결제', '고객 관리', '교환 반품 환불', '기타'],
      channelMemberAdviseState: '업무 종료',
      channelMemberIsAdmin: false,
      channelMemberJoinDate: '2023.01.20',
      isEditButtonSelected: false,
    },
    {
      channelMemberId: 2,
      channelMemberIsNewMember: false,
      channelMemberProfileImage: 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile.png',
      channelMemberName: '김다이',
      channelMemberNickname: '아홉글자가최대',
      channelMemberEmail: 'testtesttest1111@gmail.com',
      channelMemberAdviseField: ['A/S', '결제', '고객 관리', '교환 반품 환불', '기타'],
      channelMemberAdviseState: '업무 종료',
      channelMemberIsAdmin: false,
      channelMemberJoinDate: '2023.01.20',
      isEditButtonSelected: false,
    },
    {
      channelMemberId: 2,
      channelMemberIsNewMember: false,
      channelMemberProfileImage: 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile.png',
      channelMemberName: '김다이',
      channelMemberNickname: '아홉글자가최대',
      channelMemberEmail: 'testtesttest1111@gmail.com',
      channelMemberAdviseField: ['A/S', '결제', '고객 관리', '교환 반품 환불', '기타'],
      channelMemberAdviseState: '업무 종료',
      channelMemberIsAdmin: false,
      channelMemberJoinDate: '2023.01.20',
      isEditButtonSelected: false,
    },
  ]);

  /* 테이블 셀 컴포넌트 */
  /* (1) 이름 */
  const displayChannelMemberNameTableCell = item => {
    return (
      <div className="channel_member_name_cell_box">
        <div className="channel_member_profile_image_box">
          <img className="channel_member_image" src={item.channelMemberProfileImage} alt="채널 멤버 프로필" />
        </div>
        <div className="channel_member_name">{item.channelMemberName}</div>
        <div className="channel_member_new_badge_box">
          {item.channelMemberIsNewMember ? <NewNotificationBadge /> : ''}
        </div>
      </div>
    );
  };
  /* (2) 상담 분야 */
  const displayChannelMemberAdviseFieldTableCell = item => {
    const adviseFields = item.channelMemberAdviseField;
    if (adviseFields.length > 3) {
      return (
        <div className="channel_member_advise_field_cell_box">
          <div className="channel_member_advise_fields_box">
            <AdviseFieldChip>{adviseFields[0]}</AdviseFieldChip>
            <AdviseFieldChip>{adviseFields[1]}</AdviseFieldChip>
            <AdviseFieldChip>{adviseFields[2]}</AdviseFieldChip>
            <div className="channel_member_advise_fields_more_number_box">+{adviseFields.length - 3}</div>
          </div>
          <div className="channel_member_advise_fields_all_box">
            {
              adviseFields.map(field => {
                return (
                  <AdviseFieldChip>{field}</AdviseFieldChip>
                );
              })
            }
          </div>
        </div>
      );
    }

    return (
      <div className="channel_member_advise_field_cell_box">
        <div className="channel_member_advise_fields_box">
        {
          item.channelMemberAdviseField.map(field => {
            return (
              <AdviseFieldChip>{field}</AdviseFieldChip>
            );
          })
        }
        </div>
      </div>
    );
  };

  /* (3) 권한 */
  const displayChannelMemberAdminTableCell = item => {
    const memberState = item.channelMemberIsAdmin ? '관리자' : '멤버';
    return (
      <div className="channel_member_admin_cell_box">
        <OutlineTag>{memberState}</OutlineTag>
      </div>
    );
  };
  
  const handleToggleEditDropdownMenu = idx => {
    const currentKMSData = [...settingChannelMemberData];
    currentKMSData.map(item => item.isEditButtonSelected = false);
    currentKMSData[idx].isEditButtonSelected = true;
    setSettingChannelMemberData(currentKMSData);
  };
  
  const ROW_DATA_COUNT = 5;
  const displayChannelMemberRowData = () => {
    /* 채널 멤버 로우 데이터 - 없음 */
    if (ROW_DATA_COUNT === 0) {
      return (
        <tr className="channel_member_no_data_found">
          <td data-table className="channel_member_no_data_found_box">
            {/* <NoDataFound>KMS 지식을 만들어 주세요.</NoDataFound> */}
            <NoDataFound>
              앗! 검색 결과가 없어요. <br />
              다른 검색어를 입력해 주세요.
            </NoDataFound>
          </td>
        </tr>
      );
    }

    /* 채널 멤버 로우 데이터 */
    return (
      settingChannelMemberData.map((item, idx) => {
        return (
          <tr className="table_row" key={item.channelMemberId}>
            <td data-table>{displayChannelMemberNameTableCell(item)}</td>
            <td data-table>{item.channelMemberNickname}</td>
            <td data-table data-type="ellipsis">{item.channelMemberEmail}
            </td>
            <td data-table>{displayChannelMemberAdviseFieldTableCell(item)}</td>
            <td data-table>{item.channelMemberAdviseState}</td>
            <td data-table>{displayChannelMemberAdminTableCell(item)}</td>
            <td data-table>{item.channelMemberJoinDate}</td>
            <td data-table data-type="edit">
              <div className="row_data_edit_icon_button_box">
                <IconButton buttonClassName="small" handleClick={() => handleToggleEditDropdownMenu(idx)}>
                  <IconSetting />
                </IconButton>
                {/* 2-2-2-1. 로우 데이터 수정 버튼 - 드롭다운 */}
                <DropdownMenu showDropdownMenu={item.isEditButtonSelected ? "show" : ""} dropdownMenuData={rowDataEditButtonData} />
              </div>
            </td>
          </tr>
        );
      })
    );
  };

  

  
  
  /* 데이터 편집 버튼 */
  const rowDataEditButtonData = [
    { value: '상담 분야 설정하기', isSelect: false, handleClick: handleShowEditMemberAdviseFieldModal},
    { value: '강제 탈퇴시키기', isSelect: false, handleClick: handleShowResignModal}
  ];



  return (
    <>
      <div className="contents_wrap">
        <main className="page_wrap full">
          <div className="channel_member_section_wrap">
            {/* 1. 테이블 탑 섹션 */}
            <section className="channel_member_table_top_section">
              <div className="channel_member_table_top_buttons_box">
                {/* 1-1. 멤버 초대하기 버튼 */}
                <div className="invite_member_button_box">
                  <SolidButton buttonClassName="small" handleClick={handleShowInviteMemberModal}>멤버 초대하기</SolidButton>
                </div>
              </div>
              <div className="channel_member_table_top_search_box">
                {/* 1-2. 검색 결과 */}
                <div className={`search_result_text_box ${SEARCH_RESULT_COUNT === 0 ? '' : 'show' }`}>
                  <p className="search_result_text">총 <span className="search_result_count">{`${SEARCH_RESULT_COUNT} 건`}</span>을 찾았어요.</p>
                </div>
                {/* 1-3. 검색 드롭다운 | 텍스트 필드 */}
                <div className="channel_member_search_dropdown_container">
                  <BasicTextDropdown defaultToggleText="전체"
                    dropdownMenuData={ChannelMemberTableSearchData}
                    handleClickMenuItem={handleClickDropdownMenuItem}></BasicTextDropdown>
                </div>
                <div className="channel_member_search_text_field">
                  <OutlineSearchTextField
                    ref={refChannelMemberSearchTextField}
                    placeholderText="입력해 주세요."
                    handleClickSearchButton={handleSearchChannelMemberTable}
                  />
                </div>
              </div>
            </section>
            {/* 2. 테이블 메인 섹션 */}
            <section className="channel_member_table_section">
              <div className="channel_member_table_wrap">
                <table className="table_container">
                  {/* 2-1. 테이블 - 헤드 */}
                  <thead className="table_head">
                    <tr className="table_row">
                      <th className="table_header dropdown" data-type="text-short">
                        <DropdownToggle isOpenDropdown={isShowTableHeadKMSCategoryDropdown} setIsOpenDropdown={setIsShowTableHeadKMSCategoryDropdown}>이름</DropdownToggle>
                        <DropdownMenu showDropdownMenu={isShowTableHeadKMSCategoryDropdown ? "show" : ""} dropdownMenuData={tableHeadDropdownData} />
                      </th>
                      <th className="table_header dropdown" data-type="text-short">
                        <DropdownToggle isOpenDropdown={isShowTableHeadKMSTitleDropdown} setIsOpenDropdown={setIsShowTableHeadAutoComplateSentenceDropdown}>닉네임</DropdownToggle>
                        <DropdownMenu showDropdownMenu={isShowTableHeadKMSTitleDropdown ? "show" : ""} dropdownMenuData={tableHeadDropdownData} />
                      </th>
                      <th className="table_header dropdown" data-type="text-short">
                        <DropdownToggle isOpenDropdown={isShowTableHeadKMSContentsDropdown} setIsOpenDropdown={setIsShowTableHeadKMSContentsDropdown}>이메일</DropdownToggle>
                        <DropdownMenu showDropdownMenu={isShowTableHeadKMSContentsDropdown ? "show" : ""} dropdownMenuData={tableHeadDropdownData} />
                      </th>
                      <th className="table_header dropdown" data-type="text-short">
                        <DropdownToggle isOpenDropdown={isShowTableHeadKMSContentsDropdown} setIsOpenDropdown={setIsShowTableHeadKMSContentsDropdown}>상담 분야</DropdownToggle>
                        <DropdownMenu showDropdownMenu={isShowTableHeadKMSContentsDropdown ? "show" : ""} dropdownMenuData={tableHeadDropdownData} />
                      </th>
                      <th className="table_header dropdown" data-type="text-short">
                        <DropdownToggle isOpenDropdown={isShowTableHeadKMSContentsDropdown} setIsOpenDropdown={setIsShowTableHeadKMSContentsDropdown}>상담 상태</DropdownToggle>
                        <DropdownMenu showDropdownMenu={isShowTableHeadKMSContentsDropdown ? "show" : ""} dropdownMenuData={tableHeadDropdownData} />
                      </th>
                      <th className="table_header dropdown" data-type="text-short">
                        <DropdownToggle isOpenDropdown={isShowTableHeadKMSContentsDropdown} setIsOpenDropdown={setIsShowTableHeadKMSContentsDropdown}>권한</DropdownToggle>
                        <DropdownMenu showDropdownMenu={isShowTableHeadKMSContentsDropdown ? "show" : ""} dropdownMenuData={tableHeadDropdownData} />
                      </th>
                      <th className="table_header dropdown" data-type="text-short">
                        <DropdownToggle isOpenDropdown={isShowTableHeadLastUpdateDropdown} setIsOpenDropdown={setIsShowTableHeadLastUpdateDropdown}>채널 가입일</DropdownToggle>
                        <DropdownMenu showDropdownMenu={isShowTableHeadLastUpdateDropdown ? "show" : ""} dropdownMenuData={tableHeadDropdownData} />
                      </th>
                      <th className="table_header" data-type="button" />
                    </tr>
                  </thead>
                  {/* 2-2. 테이블 - 바디 */}
                  <tbody className="table_body">
                    {displayChannelMemberRowData()}
                  </tbody>
                </table>
                {/* <BasicConfirmModal
                  showModal={isShowRowDataDeleteConfirmModal ? 'show' : ""}
                  titleText="KMS 지식을 삭제할까요?"
                  actionButtonText="삭제하기"
                  handleAction={handleDeleteRowData}
                  handleClose={handleCloseDeleteRowDataConfirmModal}
                >삭제한 KMS 지식은 복원되지 않습니다.
                </BasicConfirmModal> */}
              </div>
            </section>
            {/* 3. 테이블 바텀 섹션 */}
            <section className="KMS_bottom_section">
              <Pagination pageNumber={1} />
            </section>
            {/* 모달 */}
            {/* (1) 멤버 초대하기 모달 */}
            {isShownInviteMemberModal ? displayInviteMemberModal() : ''}
            {/* (2) 상담 분야 설정하기 모달 */}
            {isShownEditMemberAdviseFieldsModal ? displayEditMemberAdviseFieldsModal() : ''}
            {/* (3) 강제 탈퇴시키기 모달 */}
            {isShownResignModal ? displayResignMemberModal() : ''}
            <ToastMessage showToast={toastMessageData.isShow ? 'show' : ''} iconStyle={toastMessageData.icon}>
              {toastMessageData.message}
            </ToastMessage>
          </div>
        </main>
      </div>
    </>
  );
};

ChannelMember.propTypes = {
  children: PropTypes.any,
};

ChannelMember.defaultProps = {
  children: '',
};

export default ChannelMember;
