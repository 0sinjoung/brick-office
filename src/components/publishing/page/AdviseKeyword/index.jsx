import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg'
import { ReactComponent as IconEdit } from 'assets/svg/icon/icon_edit.svg'
import { ReactComponent as IconSetting } from 'assets/svg/icon/icon_setting.svg'
import { ReactComponent as IconFileExtensionXlsx } from 'assets/svg/icon/fileUpload/icon_file_extension_xlsx.svg'
import { ReactComponent as IconExelTemplate } from 'assets/svg/icon/fileUpload/icon_exel_template.svg'
import { ReactComponent as IconFileAdd } from 'assets/svg/icon/fileUpload/icon_file_add.svg'
import { ReactComponent as IconTriangleWarning } from 'assets/svg/icon/icon_triangle_warning.svg'
import IconButton from 'components/publishing/atom/button/IconButton';
import KeyboardShortcutChip from 'components/publishing/atom/chip/KeyboardShortcutChip';
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

/** 상담 키워드 페이지
 * @children : children
 */

const AdviseKeyword = ({ children }) => {
  /* 0. 공통 - 토스트 메시지 */
  const [toastMessageData, setToastMessageData] = useState({
    isShow: false,
    icon: '',
    message: '',
  });

  /* 1. 테이블 탑 섹션 */
  /* 1-1. 상담 키워드 만들기 버튼 | 모달 */
  const refMakeAdviseKeywordTextField = useRef(null);
  const [isShowMakeAdviseKeywordModal, setIsShowMakeAdviseKeywordModal] = useState(false);
  const [isDimMakeAdviseKeywordButton, setIsDimMakeAdviseKeywordButton] = useState(true);
  const [isShowAdviseKeywordDropdown, setIsShowAdviseKeywordDropdown] = useState(false);
  const adviseKeywordShortcutDropdownData = [
    { value: '0', isSelect: false },
    { value: '1', isSelect: false },
    { value: '2', isSelect: false },
    { value: '3', isSelect: false },
    { value: '4', isSelect: false },
    { value: '5', isSelect: false },
    { value: '6', isSelect: false },
    { value: '7', isSelect: false },
    { value: '8', isSelect: false },
    { value: '9', isSelect: false },
    { value: '단축키 없음', isSelect: false },
  ];

  const handleShowMakeAdviseKeywordModal = () => {
    console.log('상담 키워드 만들기 모달 show');
    setIsShowMakeAdviseKeywordModal(true);
  };
  const handleHideMakeAdviseKeywordModal = () => {
    console.log('상담 키워드 만들기 모달 hide');
    setIsShowMakeAdviseKeywordModal(false);
  };
  const handleMakeAdviseKeyword = () => {
    console.log('상담 키워드 만들기!');
    handleHideMakeAdviseKeywordModal();
  }
  
  /* 1-1-2. 상담 키워드 만들기 모달 컴포넌트 */
  const displayMakeAdviseKeywordModal = () => {
    return (
      <FullScreenDim>
        <div className="make_advise_keyword_modal_container">
          <div className="make_advise_keyword_modal_head">
            <div className="make_advise_keyword_modal_title_box">
              <h3 className="make_advise_keyword_modal_title">상담 키워드 만들기</h3>
            </div>
          </div>
          <div className="make_advise_keyword_text_field_box">
            <h4 className="make_advise_keyword_modal_subtitle">상담 키워드</h4>
            <div className="advise_keyword_text_field_box">
              <div className="advise_keyword_text_field">
                <ValidationTextField
                placeholderText="상담 키워드를 작성해 주세요.(공백 불가 10자 이하)"
                validationErrorText="글자, 숫자, 하이픈( - ) 및 언더바 ( _ )만 입력할 수 있습니다."
                ref={refMakeAdviseKeywordTextField}
                />
              </div>
              <div className="advise_keyword_make_shortcut_dropdown">
                <DropdownToggle isOpenDropdown={isShowAdviseKeywordDropdown} setIsOpenDropdown={setIsShowAdviseKeywordDropdown}>
                  단축키
                </DropdownToggle>
                <div className={`dropdown_menu ${isShowAdviseKeywordDropdown ? 'show' : ''}`}>
                  <ul className="dropdown_lists">
                    {adviseKeywordShortcutDropdownData.map(item => {
                      return (
                        <li className="dropdown_list" key={item.value}>
                          <button type="button" className="dropdown_button" onClick={item.handleClick}>
                            <KeyboardShortcutChip>{item.value}</KeyboardShortcutChip>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="make_advise_keyword_text_editor_box">
            <h4 className="make_advise_keyword_modal_subtitle">자동 완성 문장</h4>
            <BasicTextEditor placeholderText="상담 키워드를 작성해 주세요. (공백 포함 1,500자 이하)" />
            <p className="mac_os_keyboard_shortcut_infomation">MacOS에서는 단축키 사용 시, ‘Ctrl’ key 대신 ‘Command’ key를 사용하세요.(임시)</p>
          </div>
          <div className="basic_confirm_modal_buttons_box">
            <OutlineButton handleClick={handleHideMakeAdviseKeywordModal}>취소</OutlineButton>
            <SolidButton handleClick={handleMakeAdviseKeyword} isDim={isDimMakeAdviseKeywordButton}>만들기</SolidButton>
          </div>
        </div>
      </FullScreenDim>
    );
  };

  /* 1-2. 엑셀 템플릿 드롭다운 | 모달  */
  /* 1-2-1. 엑셀 업로드 */
  const [isExelTemplateUploadModal, setIsExelTemplateUploadModal] = useState(false);
  const [isExelTemplateUploadConfirmModal, setIsExelTemplateUploadConfirmModal] = useState(false);
  const [isDimUploadAdviseKeywordExelTemplateButton, setIsDimUploadAdviseKeywordExelTemplateButton] = useState(true);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [isFileUploadError, setIsFileUploadError] = useState(true);
  const FILE_NAME = '상담키워드 파일 파일명 길게 오는 경우 확인 파일명 길게 오는 경우 확인';
  const FILE_SIZE_UNIT = '10KB';
  

  const handleShowExelTemplateUploadModal = () => {
    setIsExelTemplateUploadModal(true);
  };
  const handleHideExelTemplateUploadModal = () => {
    setIsExelTemplateUploadModal(false);
  };
  const handleUploadAdviseKeyword = () => {
    setIsExelTemplateUploadModal(false);
    setIsExelTemplateUploadConfirmModal(true);
    setIsFileSelected(false);
    setIsDimUploadAdviseKeywordExelTemplateButton(true);
    console.log('엑셀 템플릿 업로드 버튼 클릭 -> 컨펌 모달');
  }
  const handleUploadAdviseKeywordFromExelTemplateFile = () => {
    setIsExelTemplateUploadConfirmModal(false);
    console.log('엑셀 템플릿 파일 -> 상담 키워드 업로드');
  }
  const handleCancleConfirmModal = () => {
    setIsExelTemplateUploadConfirmModal(false);
  }
  const handleClickExelTemplateFileDownload = () => {
    console.log('엑셀 템플릿 파일 다운로드');
  };
  const handleClickExelTemplateFileSelect = () => {
    console.log('엑셀 템플릿 파일 선택하기');
    setIsFileSelected(true);
    setIsDimUploadAdviseKeywordExelTemplateButton(false);
  };
  const handleDeleteAttachments = () => {
    console.log('엑셀 템플릿 파일 삭제');
    setIsFileSelected(false);
    setIsDimUploadAdviseKeywordExelTemplateButton(true);
  };

  /* 1-2-1-1. 엑셀 업로드 모달 컴포넌트 */
  const displayAddFileArea = () => {
    if (isFileSelected) {
      return (
        <div className={`upload_advise_keyword_add_file_template_outline_box ${isFileUploadError ? "error" : ""}`}>
          <div className="upload_advise_keyword_add_file_template">
            <div className="add_file_template_thumnail_box">
              <IconFileExtensionXlsx />
            </div>
            <div className="add_file_template_contents">
              <p className="add_file_template_title">{FILE_NAME}.xlsx
              </p>
              <p className="add_file_template_text">
                <span className={`add_file_template_unit ${isFileUploadError ? "" : "show"}`}>{FILE_SIZE_UNIT}</span>
                <span className={`add_file_template_error_text ${isFileUploadError ? "show" : ""}`}>동일한 상담 키워드가 존재해요.</span>
              </p>
              <p className="add_file_template_text">Excel 스프레드시트</p>
            </div>
            <div className="add_file_template_delete_button">
              <DeleteCircleButton handleDelete={handleDeleteAttachments} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div role="button" tabIndex={0} onClick={handleClickExelTemplateFileSelect}className="upload_advise_keyword_add_file_standby">
        <div className="file_add_icon_box">
          <IconFileAdd />
        </div>
        <p className="upload_advise_keyword_add_file_description">업로드할 파일을 여기로 끌어다 놓으세요. 또는 </p>
        <span className="upload_advise_keyword_add_file_select_text" >파일 선택하기</span>
      </div>
    );
  }

  const displayExelTemplateUploadModal = () => {
    return (
      <FullScreenDim>
        <div className="upload_advise_keyword_modal_container">
          <div className="upload_advise_keyword_modal_head">
            <div className="upload_advise_keyword_modal_title_box">
              <h3 className="upload_advise_keyword_modal_title">상담 키워드 업로드하기</h3>
            </div>
          </div>
          <div className="upload_advise_keyword_exel_template_download_button_box">
            <p className="exel_template_download_button_description">
            대량의 상담 키워드를 한번에 업로드할 수 있어요.<br />
            아래의 엑셀 템플릿을 다운로드 받고, 템플릿에 상담 키워드를 작성해서 업로드해주세요.
            </p>
            <OutlineButton handleClick={handleClickExelTemplateFileDownload}>
              <IconExelTemplate />
              엑셀 템플릿 다운로드
            </OutlineButton>
          </div>
          <div className="upload_advise_keyword_add_file_area">
            {displayAddFileArea()}
          </div>
          <div className="upload_advise_keyword_warning_box">
            <div className='upload_advise_keyword_warning_icon_box'>
              <IconTriangleWarning />
            </div>
            <div className="upload_advise_keyword_warning_descriptions">
              <h4 className='warning_title'>주의사항</h4>
              <p className="warning_emphasis">상담 키워드 업로드 시, 기존에 등록된 상담 키워드는 삭제되므로 주의해 주세요.</p>
              <p>엑셀 파일(.xls .xlsx)만 업로드할 수 있습니다.</p>
              <p>파일 내에 동일한 상담 키워드가 있으면, 업로드되지 않습니다.</p>
            </div>
          </div>
          <div className="basic_confirm_modal_buttons_box">
            <OutlineButton handleClick={handleHideExelTemplateUploadModal}>취소</OutlineButton>
            <SolidButton handleClick={handleUploadAdviseKeyword} isDim={isDimUploadAdviseKeywordExelTemplateButton}>업로드</SolidButton>
          </div>
        </div>
      </FullScreenDim>
    );
  };
  

  /* 1-2-2. 엑셀 다운로드 */
  const handleExelTemplateUploadModal = () => {
    console.log('엑셀 다운로드 📂 -> 스낵바 표시!');
  };

  /* 1-2-3. 엑셀 템플릿 드롭다운 */
  const [isShowExelTemplateDropdown, setIsShowExelTemplateDropdown] = useState(false);
  const exelTemplateData = [
    { value: '엑셀 업로드', isSelect: false, handleClick: handleShowExelTemplateUploadModal},
    { value: '엑셀 다운로드', isSelect: false, handleClick: handleExelTemplateUploadModal}
  ];
  

  /* 1-3. 검색 결과 */
  // 0건이면 아예 표시하지 않음(공통UI 참조, SEARCH_RESULT_COUNT=0이면 사라짐)
  const SEARCH_RESULT_COUNT = 0; 

  /* 1-4. 검색 드롭다운 | 텍스트 필드 */
  /* 1-4-1. 검색 드롭다운 */
  const handleClickDropdownMenuItem = menuItem => {
    console.log(menuItem, '클릭됨!');
  };
  const refAdviseKeywordSearchTextField = React.createRef();
  const handleSearchAdviseKeywordTable = () => {
    console.log('상담 키워드 테이블 검색');
  };
  const adviseKeywordTableSearchData = [
    { value: '전체', isSelect: true },
    { value: '상담 키워드', isSelect: false },
    { value: '자동 완성 문장', isSelect: false },
  ];

  /* 2. 테이블 메인 섹션 */
  /* 2-1. 테이블 - 헤드 */
  const [isShowTableHeadAdivseKeywordDropdown, setIsShowTableHeadAdivseKeywordDropdown] = useState(false);
  const [isShowTableHeadAutoComplateSentenceDropdown, setIsShowTableHeadAutoComplateSentenceDropdown] = useState(false);
  const [isShowTableHeadLastUpdateDropdown, setIsShowTableHeadLastUpdateDropdown] = useState(false);
  
  const handleSortingRowData = () => {
    console.log('row data sorting!');
  };

  const tableHeadDropdownData = [
    { value: '오름차순 정렬', isSelect: false, handleClick: handleSortingRowData},
    { value: '내림차순 정렬', isSelect: false, handleClick: handleSortingRowData}
  ];
  
  /* 2-2. 테이블 - 바디 */
  const [adviseKeywordData, setAdviseKeywordData] = useState([
    {
      adviseKeywordText: '/일이삼사오육칠팔구십',
      autoComplateText: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: '',
      lastUpdateDate: '2022.08.02',
      isSettingButtonSelected: false,
      
    },
    {
      adviseKeywordText: '/상담키워드는',
      autoComplateText: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: '1',
      lastUpdateDate: '2022.08.02',
      isSettingButtonSelected: false,
    },
    {
      adviseKeywordText: '/열글자까지',
      autoComplateText: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: '2',
      lastUpdateDate: '2022.08.02',
      isSettingButtonSelected: false,
    },
    {
      adviseKeywordText: '/띄어쓰기불가',
      autoComplateText: '온라인 주문 시 신용카드 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: '3',
      lastUpdateDate: '2022.08.02',
      isSettingButtonSelected: false,
    },
    {
      adviseKeywordText: '/샘플1',
      autoComplateText: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: '4',
      lastUpdateDate: '2022.08.02',
      isSettingButtonSelected: false,
    },
    {
      adviseKeywordText: '/샘플2',
      autoComplateText: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: '5',
      lastUpdateDate: '2022.08.02',
      isSettingButtonSelected: false,
    },
    {
      adviseKeywordText: '/샘플3',
      autoComplateText: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: '6',
      lastUpdateDate: '2022.08.02',
      isSettingButtonSelected: false,
    },
    {
      adviseKeywordText: '/샘플4',
      autoComplateText: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: '7',
      lastUpdateDate: '2022.08.02',
      isSettingButtonSelected: false,
    },
    {
      adviseKeywordText: '/샘플5',
      autoComplateText: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: '8',
      lastUpdateDate: '2022.08.02',
      isSettingButtonSelected: false,
    },
    {
      adviseKeywordText: '/샘플6',
      autoComplateText: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: '9',
      lastUpdateDate: '2022.08.02',
      isSettingButtonSelected: false,
    },
  ]);
  
  const handleToggleEditDropdownMenu = idx => {
    const currentAdviseKeywordData = [...adviseKeywordData];
    currentAdviseKeywordData.map(item => item.isSettingButtonSelected = false);
    currentAdviseKeywordData[idx].isSettingButtonSelected = true;
    setAdviseKeywordData(currentAdviseKeywordData);
  };
  
  const ROW_DATA_COUNT = 0;
  const displayAdviseKeywordRowData = () => {
    /* 2-2-1. 상담 키워드 로우 데이터 - 없음 */
    if (ROW_DATA_COUNT === 0) {
      return (
        <tr className="advise_keyword_no_data_found">
          <td data-table className="advise_keyword_no_data_found_box">
            <NoDataFound>상담 키워드를 만들어 주세요.</NoDataFound>
              {/* <NoDataFound>
              앗! 검색 결과가 없어요. <br />
              다른 검색어를 입력해 주세요.
              </NoDataFound> */}
          </td>
        </tr>
      );
    }

    /* 2-2-2. 상담 키워드 로우 데이터 */
    return (
      adviseKeywordData.map((item, idx) => {
        return (
          <tr className="table_row" key={item.adviseKeywordText}>
            <td data-table>{idx + 1}</td>
            <td data-table>
              <span>{item.adviseKeywordText}</span>
              <button type='button' className="row_edit_button" onClick={() => handleShowEditAdviseKeywordModal(idx)}>
                <IconEdit />
                수정
              </button>
            </td>
            <td data-table data-type="ellipsis">{item.autoComplateText}</td>
            <td data-table>
              <KeyboardShortcutChip>{item.adviseKeywordShorcutKey}</KeyboardShortcutChip>
            </td>
            <td data-table>{item.lastUpdateDate}</td>
            <td data-table data-type="edit">
              <div className="row_data_edit_icon_button_box">
                <IconButton buttonClassName="small" handleClick={() => handleToggleEditDropdownMenu(idx)}>
                  <IconSetting />
                </IconButton>
                {/* 2-2-2-1. 로우 데이터 수정 버튼 - 드롭다운 */}
                <DropdownMenu showDropdownMenu={item.isSettingButtonSelected ? "show" : ""} dropdownMenuData={rowDataSettingButtonData} />
              </div>
            </td>
          </tr>
        );
      })
    );
  };

  /* 2-2-2-1. 로우 데이터 수정 버튼 - 드롭다운 */
  /* 상담 키워드 편집하기 모달 */
  const [isShowEditAdviseKeywordModal, setIsShowEditAdviseKeywordModal] = useState(false);
  const handleShowEditAdviseKeywordModal = idx => {
    setIsShowEditAdviseKeywordModal(true);
  }
  const handleHideEditAdviseKeywordModal = () => {
    setIsShowEditAdviseKeywordModal(false);
  }
  const handleEditAdviseKeyword = () => {
    console.log('상담 키워드 편집하기!');
    handleHideEditAdviseKeywordModal();
    setToastMessageData({ ...toastMessageData, isShow: true, message: '상담 키워드 편집을 완료했어요.' });
    setTimeout(() => setToastMessageData({ isShow: false, icon: '', message: '' }), 3000);
  };
  
  /* 상담 키워드 삭제하기 확인 모달 */
  const [isShowRowDataDeleteConfirmModal, setIsShowRowDataDeleteConfirmModal] = useState(false);
  const handleShowDeleteRowDataConfirmModal = e => {
    setIsShowRowDataDeleteConfirmModal(true);
  };
  const handleCloseDeleteRowDataConfirmModal = () => {
    setIsShowRowDataDeleteConfirmModal(false);
  };
  const handleDeleteRowData = () => {
    console.log('row data 삭제!');
    handleCloseDeleteRowDataConfirmModal();
    setToastMessageData({ ...toastMessageData, isShow: true, message: '상담 키워드를 삭제했어요.' });
    setTimeout(() => setToastMessageData({ isShow: false, icon: '', message: '' }), 3000);
  };
  
  const rowDataSettingButtonData = [
    { value: '수정', isSelect: false, handleClick: handleShowEditAdviseKeywordModal},
    { value: '삭제', isSelect: false, handleClick: handleShowDeleteRowDataConfirmModal}
  ];

  const displayEditAdviseKeywordModal = () => {
    return (
      <FullScreenDim>
        <div className="make_advise_keyword_modal_container">
          <div className="make_advise_keyword_modal_head">
            <div className="make_advise_keyword_modal_title_box">
              <h3 className="make_advise_keyword_modal_title">상담 키워드 편집하기</h3>
            </div>
          </div>
          <div className="make_advise_keyword_text_field_box">
            <h4 className="make_advise_keyword_modal_subtitle">상담 키워드</h4>
            <div className="advise_keyword_text_field_box">
              <div className="advise_keyword_text_field">
                <ValidationTextField
                placeholderText="상담 키워드를 작성해 주세요.(공백 불가 10자 이하)"
                validationErrorText="글자, 숫자, 하이픈( - ) 및 언더바 ( _ )만 입력할 수 있습니다."
                ref={refMakeAdviseKeywordTextField}
                />
              </div>
              <div className="advise_keyword_make_shortcut_dropdown">
                <DropdownToggle isOpenDropdown={isShowAdviseKeywordDropdown} setIsOpenDropdown={setIsShowAdviseKeywordDropdown}>
                  단축키
                </DropdownToggle>
                <div className={`dropdown_menu ${isShowAdviseKeywordDropdown ? 'show' : ''}`}>
                  <ul className="dropdown_lists">
                    {adviseKeywordShortcutDropdownData.map(item => {
                      return (
                        <li className="dropdown_list" key={item.value}>
                          <button type="button" className="dropdown_button" onClick={item.handleClick}>
                            <KeyboardShortcutChip>{item.value}</KeyboardShortcutChip>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="make_advise_keyword_text_editor_box">
            <h4 className="make_advise_keyword_modal_subtitle">자동 완성 문장</h4>
            <BasicTextEditor placeholderText="상담 키워드를 작성해 주세요. (공백 포함 1,500자 이하)" />
            {/* 아래 문구 MacOS 에서만 표시 */}
            <p className="mac_os_keyboard_shortcut_infomation">MacOS에서는 단축키 사용 시, ‘Ctrl’ key 대신 ‘Command’ key를 사용하세요.</p>
          </div>
          <div className="basic_confirm_modal_buttons_box">
            <OutlineButton handleClick={handleHideEditAdviseKeywordModal}>취소</OutlineButton>
            <SolidButton handleClick={handleEditAdviseKeyword}>편집하기</SolidButton>
          </div>
        </div>
      </FullScreenDim>
    );
  };


  return (
    <div className="contents_wrap">
      <main className="page_wrap full">
        <div className="advise_keyword_section_wrap">
          {/* 1. 테이블 탑 섹션 */}
          <section className="advise_keyword_table_top_section">
            <div className="advise_keyword_table_top_buttons_box">
              {/* 1-1. 상담 키워드 만들기 버튼 | 모달 */}
              <div className="make_advise_keyword_button_box">
                <SolidButton buttonClassName="small" handleClick={handleShowMakeAdviseKeywordModal}>상담 키워드 만들기</SolidButton>
                {/* 1-1-2. 상담 키워드 만들기 모달 컴포넌트 */}
                {isShowMakeAdviseKeywordModal ? displayMakeAdviseKeywordModal() : ''}
              </div>
              {/* 1-2. 엑셀 템플릿 드롭다운 | 모달 */}
              <div className="exel_template_dropdown_container">
                <DropdownToggle isOpenDropdown={isShowExelTemplateDropdown} setIsOpenDropdown={setIsShowExelTemplateDropdown}>
                  <IconExelTemplate />엑셀 템플릿</DropdownToggle>
                <DropdownMenu showDropdownMenu={isShowExelTemplateDropdown ? "show" : ""} dropdownMenuData={exelTemplateData} />
                {/* 1-2-1. 엑셀 업로드 */}
                {/* 1-2-1-1. 엑셀 업로드 모달 컴포넌트 */}
                {isExelTemplateUploadModal ? displayExelTemplateUploadModal() : ''}
                <BasicConfirmModal
                  showModal={isExelTemplateUploadConfirmModal ? 'show' : ""}
                  titleText="상담 키워드를 업로드할까요?"
                  actionButtonText="업로드"
                  handleAction={handleUploadAdviseKeywordFromExelTemplateFile}
                  handleClose={handleCancleConfirmModal}
                >{'업로드 시 현재에 등록되어 있는 상담 키워드는 \n 모두 사라지고 엑셀에 등록된 내용으로 덮어씌워집니다.'}
                </BasicConfirmModal>
              </div>
            </div>
            <div className="advise_keyword_table_top_search_box">
              {/* 1-3. 검색 결과 */}
              <div className={`search_result_text_box ${SEARCH_RESULT_COUNT === 0 ? '' : 'show' }`}>
                <p className="search_result_text">총 <span className="search_result_count">{`${SEARCH_RESULT_COUNT} 건`}</span>을 찾았어요.</p>
              </div>
              {/* 1-4. 검색 드롭다운 | 텍스트 필드 */}
              <div className="advise_keyword_search_dropdown_container">
                <BasicTextDropdown defaultToggleText="전체"
                  dropdownMenuData={adviseKeywordTableSearchData}
                  handleClickMenuItem={handleClickDropdownMenuItem}></BasicTextDropdown>
              </div>
              <div className="advise_keyword_search_text_field">
                <OutlineSearchTextField
                  ref={refAdviseKeywordSearchTextField}
                  placeholderText="입력해 주세요."
                  handleClickSearchButton={handleSearchAdviseKeywordTable}
                />
              </div>
            </div>
          </section>
          {/* 2. 테이블 메인 섹션 */}
          <section className="advise_keyword_table_section">
            <div className="advise_keyword_table_wrap">
              <table className="table_container">
                {/* 2-1. 테이블 - 헤드 */}
                <thead className="table_head">
                  <tr className="table_row">
                    <th className="table_header" data-type="numeric">NO</th>
                    <th className="table_header dropdown" data-type="text-short">
                      <DropdownToggle isOpenDropdown={isShowTableHeadAdivseKeywordDropdown} setIsOpenDropdown={setIsShowTableHeadAdivseKeywordDropdown}>상담 키워드</DropdownToggle>
                      <DropdownMenu showDropdownMenu={isShowTableHeadAdivseKeywordDropdown ? "show" : ""} dropdownMenuData={tableHeadDropdownData} />
                    </th>
                    <th className="table_header dropdown" data-type="text-long">
                      <DropdownToggle isOpenDropdown={isShowTableHeadAutoComplateSentenceDropdown} setIsOpenDropdown={setIsShowTableHeadAutoComplateSentenceDropdown}>자동 완성 문장</DropdownToggle>
                      <DropdownMenu showDropdownMenu={isShowTableHeadAutoComplateSentenceDropdown ? "show" : ""} dropdownMenuData={tableHeadDropdownData} />
                    </th>
                    <th className="table_header" data-type="text-short">단축키</th>
                    <th className="table_header dropdown" data-type="text-short">
                      <DropdownToggle isOpenDropdown={isShowTableHeadLastUpdateDropdown} setIsOpenDropdown={setIsShowTableHeadLastUpdateDropdown}>마지막 수정 날짜</DropdownToggle>
                      <DropdownMenu showDropdownMenu={isShowTableHeadLastUpdateDropdown ? "show" : ""} dropdownMenuData={tableHeadDropdownData} />
                    </th>
                    <th className="table_header" data-type="button" />
                  </tr>
                </thead>
                {/* 2-2. 테이블 - 바디 */}
                <tbody className="table_body">
                  {displayAdviseKeywordRowData()}
                </tbody>
              </table>
              {isShowEditAdviseKeywordModal ? displayEditAdviseKeywordModal() : ''}
              <BasicConfirmModal
                showModal={isShowRowDataDeleteConfirmModal ? 'show' : ""}
                titleText="상담 키워드를 삭제할까요?"
                actionButtonText="삭제하기"
                handleAction={handleDeleteRowData}
                handleClose={handleCloseDeleteRowDataConfirmModal}
              >삭제한 상담 키워드는 복원되지 않습니다.
              </BasicConfirmModal>
            </div>
          </section>
          {/* 3. 테이블 바텀 섹션 */}
          <section className="advise_keyword_bottom_section">
            <Pagination pageNumber={1} />
          </section>
          <ToastMessage showToast={toastMessageData.isShow ? 'show' : ''} iconStyle={toastMessageData.icon}>
            {toastMessageData.message}
          </ToastMessage>
        </div>
      </main>
    </div>
  );
};

AdviseKeyword.propTypes = {
  children: PropTypes.any,
};

AdviseKeyword.defaultProps = {
  children: '',
};

export default AdviseKeyword;
