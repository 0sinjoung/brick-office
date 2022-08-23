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
import ColorTag from 'components/publishing/atom/tag/ColorTag';
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
import BasicTextDropdown from 'components/publishing/molecule/dropdown/BasicTextDropdown';
import OutlineTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineTextField';
import OutlineSearchTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineSearchTextField';
import './style.scss';

/** 상담 키워드 페이지
 * @children : children
 */
const AdviseKeyword = ({ children }) => {
  /* 1. 테이블 탑 섹션 */
  /* 1-1. 상담 키워드 만들기 버튼|모달 */
  const refMakeAdviseKeywordTextField = useRef(null);
  const [isShowMakeAdviseKeywordModal, setIsShowMakeAdviseKeywordModal] = useState(false);
  const [isDimMakeAdviseKeywordButton, setIsDimMakeAdviseKeywordButton] = useState(true);
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

  // const AdviseKeywordDropdown = ({ defaultToggleText, dropdownMenuData, handleClickMenuItem }) => {
  //   const refBasicSelectbox = useRef(null);
  //   const [selectedItem, setSelectedItem] = useState(defaultToggleText);
  //   const [currentSelectBoxData, setCurrentSelectBoxData] = useState(dropdownMenuData);
  
  //   const handleSelectItem = e => {
  //     const currentSelectedItemValue = e.target.value;
  //     const newData = [...currentSelectBoxData];
  //     newData.forEach(item => {
  //       item.isSelect = false;
  //       if (item.value === currentSelectedItemValue) {
  //         item.isSelect = true;
  //       }
  //     });
  //     setSelectedItem(currentSelectedItemValue);
  //     setCurrentSelectBoxData([...newData]);
  //     handleClickMenuItem(currentSelectedItemValue);
  //     setIsOpenDropdown(false);
  //   };
  
  //   const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  //   const handleToggleDropdown = () => {
  //     setIsOpenDropdown(!isOpenDropdown);
  //   };
  
  //   const handleClickOutside = e => {
  //     const isInside = refBasicSelectbox.current.contains(e.target);
  //     if (!isInside) {
  //       setIsOpenDropdown(false);
  //     }
  //   };
  
  //   useEffect(() => {
  //     document.addEventListener('mousedown', handleClickOutside);
  //     return () => {
  //       document.removeEventListener('mousedown', handleClickOutside);
  //     };
  //   });
  
  //   return (
  //     <div className="basic_text_dropdown" ref={refBasicSelectbox}>
  //       <div role="button" tabIndex={0} className="basic_text_dropdown_toggle" onClick={handleToggleDropdown} onKeyUp={handleToggleDropdown}>
  //         <div className="dropdown_toggle_text">{selectedItem}</div>
  //         <div className={`dropdown_toggle_arrow ${isOpenDropdown ? 'open' : ''}`}>
  //           <IconDropdownArrow />
  //         </div>
  //       </div>
  //       <div className={`basic_text_dropdown_menu ${isOpenDropdown ? 'open' : ''}`}>
  //         <ul className="basic_text_dropdown_lists">
  //           {currentSelectBoxData.map(item => {
  //             return (
  //               <li className="basic_text_dropdown_list" key={item.value}>
  //                 <button type="button" value={item.value} className="basic_text_dropdown_button" onClick={handleSelectItem}>
  //                   <span className="dropdown_value">{item.text ? item.text : item.value}</span>
  //                 </button>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // };
  
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
                <OutlineTextField
                placeholderText="상담 키워드를 작성해 주세요.(공백 불가 10자 이하)"
                ref={refMakeAdviseKeywordTextField}
                />
              </div>
              <div className="advise_keyword_make_shortcut_dropdown">
                {/* {AdviseKeywordDropdown()} */}
              </div>
            </div>
          </div>
          <div className="make_advise_keyword_text_editor_box">
            <h4 className="make_advise_keyword_modal_subtitle">자동 완성 문장</h4>
            <BasicTextEditor placeholderText="상담 키워드를 작성해 주세요. (공백 포함 1,500자 이하)" />
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
  const [isFileUploadError, setIsFileUploadError] = useState(false);

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
  const FILE_NAME = '상담키워드 파일';
  const FILE_SIZE_UNIT = '10KB';
  
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
      <div className="upload_advise_keyword_add_file_standby">
        <div className="file_add_icon_box">
          <IconFileAdd />
        </div>
        <p className="upload_advise_keyword_add_file_description">업로드할 파일을 여기로 끌어다 놓으세요. 또는 </p>
        <button type="button" className="upload_advise_keyword_add_file_link" onClick={handleClickExelTemplateFileSelect}>파일 선택하기</button>
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

  /* 1-2-3. 드롭다운 */
  const [isShowExelTemplateDropdown, setIsShowExelTemplateDropdown] = useState(false);
  const exelTemplateData = [
    { value: '엑셀 업로드', isSelect: false, handleClick: handleShowExelTemplateUploadModal},
    { value: '엑셀 다운로드', isSelect: false, handleClick: handleExelTemplateUploadModal}
  ];

  /* 1-3. 검색 결과 */
  // 0건이면 아예 표시하지 않음(공통UI 참조)
  const SEARCH_RESULT_COUNT = 12; 

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



  /* 2-1. 테이블 - 헤드 */
  
  /* 2-2. 테이블 - 바디 */
  const handleToggleEditDropdownMenu = () => {
    console.log('드롭다운 메뉴보기');
  };

  const ROW_DATA_COUNT = 1;
  const ADVISE_KEYWORD_DATA = [
    {
      adviseKeywordText: '/일이삼사오육칠팔구십',
      autoComplateText: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: 5,
      lastUpdateDate: '2022.08.02',
    },
    {
      adviseKeywordText: '/십구팔칠육오사삼이일',
      autoComplateText: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
      adviseKeywordShorcutKey: 3,
      lastUpdateDate: '2022.08.02',
    },
  ];
  const displayAdviseKeywordRowData = () => {
    /* 2-2-1. 상담 키워드 로우 데이터 - 없음 */
    if (ROW_DATA_COUNT === 0) {
      return (
        <tr className="advise_keyword_no_data_found">
          <td data-table>
            <NoDataFound>상담 키워드를 만들어 주세요.</NoDataFound>
            {/* <NoDataFound>앗! 검색 결과가 없어요.</NoDataFound> */}
          </td>
        </tr>
      );
    }

    /* 2-2-2. 상담 키워드 로우 데이터 */
    return (
      ADVISE_KEYWORD_DATA.map((item, idx) => {
        return (
          <tr className="table_row" key={item.adviseKeywordText}>
            <td data-table>{idx + 1}</td>
            <td data-table>
              <span>{item.adviseKeywordText}</span>
              <button type='button' className="row_edit_button">
                <IconEdit />
                수정
              </button>
            </td>
            <td data-table data-type="ellipsis">{item.autoComplateText}</td>
            <td data-table>{item.adviseKeywordShorcutKey === 0 ? '-' : `
              ${item.adviseKeywordShorcutKey}
            `}</td>
            <td data-table>{item.lastUpdateDate}</td>
            <td data-table data-type="edit">
              <div className="row_data_edit_icon_button_box">
                <IconButton buttonClassName="small" handleClick={handleToggleEditDropdownMenu}>
                  <IconSetting />
                </IconButton>
              </div>
            </td>
          </tr>
        );
      })
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
                {isShowMakeAdviseKeywordModal ? displayMakeAdviseKeywordModal() : ''}
              </div>
              {/* 1-2. 엑셀 템플릿 드롭다운 | 모달 */}
              <div className="exel_template_dropdown_container">
                <DropdownToggle isOpenDropdown={isShowExelTemplateDropdown} setIsOpenDropdown={setIsShowExelTemplateDropdown}>
                  <IconExelTemplate />엑셀 템플릿</DropdownToggle>
                <DropdownMenu showDropdownMenu={isShowExelTemplateDropdown ? "show" : ""} dropdownMenuData={exelTemplateData}></DropdownMenu>
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
          {/* 2. 테이블 섹션 */}
          <section className="advise_keyword_table_section">
            <table className="table_wrap">
              {/* 2-1. 테이블 - 헤드 */}
              <thead className="table_head">
                <tr className="table_row">
                  <th className="table_header" data-type="numeric">NO</th>
                  <th className="table_header dropdown" data-type="text-short">
                    <div className="table_header_dropdown">
                      <div className="table_header_dropdown_button">
                        <div className="title">상담 키워드</div>
                        <div>
                          <IconDropdownArrow />
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className="table_header" data-type="text-long">자동 완성 문장</th>
                  <th className="table_header" data-type="text-short">단축키</th>
                  <th className="table_header" data-type="text-short">마지막 수정 날짜</th>
                  <th className="table_header" data-type="button" />
                </tr>
              </thead>
              {/* 2-2. 테이블 - 바디 */}
              <tbody className="table_body">
                {displayAdviseKeywordRowData()}
              </tbody>
            </table>
          </section>
          {/* 3. 테이블 바텀 섹션 */}
          <section className="advise_keyword_bottom_section">
            <Pagination pageNumber={1} />
          </section>
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
