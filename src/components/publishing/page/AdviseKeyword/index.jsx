import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg'
import { ReactComponent as IconEdit } from 'assets/svg/icon/icon_edit.svg'
import { ReactComponent as IconSetting } from 'assets/svg/icon/icon_setting.svg'
import IconButton from 'components/publishing/atom/button/IconButton';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import BasicTextEditor from 'components/publishing/molecule/textEditor/BasicTextEditor';
import NoDataFound from 'components/publishing/atom/NoDataFound';
import Pagination from 'components/publishing/atom/Pagination';
import BasicTextDropdown from 'components/publishing/molecule/dropdown/BasicTextDropdown';
import OutlineSearchTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineSearchTextField';
import './style.scss';

/** 상담 키워드 페이지
 * @children : children
 */
const AdviseKeyword = ({ children }) => {
  /* 1. 테이블 탑 섹션 */
  /* 1-1. 상담 키워드 만들기 모달 */
  const [isShowMakeAdviseKeywordModal, setIsShowMakeAdviseKeywordModal] = useState(false);
  const handleShowMakeAdviseKeywordModal = () => {
    console.log('상담 키워드 만들기');
    setIsShowMakeAdviseKeywordModal(true);
  };
  /* 1-2. 엑셀 템플릿 모달 */
  const exelTemplateData = [
    { value: '엑셀 업로드', isSelect: false },
    { value: '엑셀 다운로드', isSelect: false },
  ];
  const handleClickDropdownMenuItem = value => {
    console.log(value, '선택됨');
  };
  
  /* 1-3. 검색 결과 */
  const SEARCH_RESULT_COUNT = 9; //0건이면 아예 표시하지 않음(공통UI 참조)

  /* 1-4. 검색 드롭다운 | 텍스트 필드 */
  const refAdviseKeywordSearchTextField = React.createRef();
  const handleSearchAdviseKeywordTable = () => {
    console.log('상담 키워드 테이블 검색');
  };
  const adviseKeywordTableSearchData = [
    { value: '전체', isSelect: true },
    { value: '상담 키워드', isSelect: false },
    { value: '자동 완성 문장', isSelect: false },
  ];


  /* 2-2. 테이블 - 행 */
  const LAST_UPDATE_DATE = "2022.08.02";
  const ADVISE_KEYWORD_SHORCUT = "-"; //0~9까지
  const handleToggleEditDropdownMenu = () => {
    console.log('드롭다운 메뉴보기');
  };
  
  return (
    <div className="contents_wrap">
      <main className="page_wrap full">
        <div className="advise_keyword_section_wrap">
          {/* 1. 테이블 탑 섹션 */}
          <section className="advise_keyword_table_top_section">
            <div className="advise_keyword_table_top_buttons_box">
              {/* 1-1. 상담 키워드 만들기 모달 */}
              <div className="make_advise_keyword_button_box">
                <SolidButton buttonClassName="small" handleClick={handleShowMakeAdviseKeywordModal}>상담 키워드 만들기</SolidButton>
              </div>
              {/* 1-2. 엑셀 템플릿 모달 */}
              <div className="exel_template_dropdown_container">
                <BasicTextDropdown defaultToggleText="엑셀 템플릿"
                  dropdownMenuData={exelTemplateData}
                  handleClickMenuItem={handleClickDropdownMenuItem}></BasicTextDropdown>
              </div>
            </div>
            <div className="advise_keyword_table_top_search_box">
              {/* 1-3. 검색 결과 */}
              <div className="search_result_text_box">
                <p className="search_result_text">총 <span className="search_result_count">{`${SEARCH_RESULT_COUNT} 건`}</span>을 찾았어요.</p>
              </div>
              {/* 1-4. 검색 드롭다운 | 텍스트 필드 */}
              <div className="advise_keyword_dropdown_container">
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
            {/* <div className="table_wrap"> */}
            <table className="table_wrap">
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
              <tbody className="table_body">
                <tr className="table_row">
                  <td>1</td>
                  <td>
                    <span>/일이삼사오육칠팔구십</span>
                    <button type='button' className="row_edit_button">
                      <IconEdit />
                      수정
                    </button>
                  </td>
                  <td data-type="ellipsis">온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능</td>
                  <td>{ADVISE_KEYWORD_SHORCUT}</td>
                  <td>{LAST_UPDATE_DATE}</td>
                  <td data-type="edit">
                    <div className="row_data_edit_icon_button_box">
                      <IconButton buttonClassName="small" handleClick={handleToggleEditDropdownMenu}>
                        <IconSetting />
                      </IconButton>
                    </div>
                  </td>
                </tr>
                <tr className="table_row">
                  <td>1</td>
                  <td>
                    <span>/일이삼사오육칠팔구십</span>
                    <button type='button' className="row_edit_button">
                      <IconEdit />
                      수정
                    </button>
                  </td>
                  <td data-type="ellipsis">온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능</td>
                  <td>{ADVISE_KEYWORD_SHORCUT}</td>
                  <td>{LAST_UPDATE_DATE}</td>
                  <td data-type="edit">
                    <div className="row_data_edit_icon_button_box">
                      <IconButton buttonClassName="small" handleClick={handleToggleEditDropdownMenu}>
                        <IconSetting />
                      </IconButton>
                    </div>
                  </td>
                </tr>
                <tr className="table_row">
                  <td>1</td>
                  <td>
                    <span>/일이삼사오육칠팔구십</span>
                    <button type='button' className="row_edit_button">
                      <IconEdit />
                      수정
                    </button>
                  </td>
                  <td data-type="ellipsis">온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능</td>
                  <td>{ADVISE_KEYWORD_SHORCUT}</td>
                  <td>{LAST_UPDATE_DATE}</td>
                  <td data-type="edit">
                    <div className="row_data_edit_icon_button_box">
                      <IconButton buttonClassName="small" handleClick={handleToggleEditDropdownMenu}>
                        <IconSetting />
                      </IconButton>
                    </div>
                  </td>
                </tr>
                <tr className="table_row">
                  <td>1</td>
                  <td>
                    <span>/일이삼사오육칠팔구십</span>
                    <button type='button' className="row_edit_button">
                      <IconEdit />
                      수정
                    </button>
                  </td>
                  <td data-type="ellipsis">온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능</td>
                  <td>{ADVISE_KEYWORD_SHORCUT}</td>
                  <td>{LAST_UPDATE_DATE}</td>
                  <td data-type="edit">
                    <div className="row_data_edit_icon_button_box">
                      <IconButton buttonClassName="small" handleClick={handleToggleEditDropdownMenu}>
                        <IconSetting />
                      </IconButton>
                    </div>
                  </td>
                </tr>
                <tr className="table_row">
                  <td>1</td>
                  <td>
                    <span>/일이삼사오육칠팔구십</span>
                    <button type='button' className="row_edit_button">
                      <IconEdit />
                      수정
                    </button>
                  </td>
                  <td data-type="ellipsis">온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능</td>
                  <td>{ADVISE_KEYWORD_SHORCUT}</td>
                  <td>{LAST_UPDATE_DATE}</td>
                  <td data-type="edit">
                    <div className="row_data_edit_icon_button_box">
                      <IconButton buttonClassName="small" handleClick={handleToggleEditDropdownMenu}>
                        <IconSetting />
                      </IconButton>
                    </div>
                  </td>
                </tr>
                <tr className="table_row">
                  <td>1</td>
                  <td>
                    <span>/일이삼사오육칠팔구십</span>
                    <button type='button' className="row_edit_button">
                      <IconEdit />
                      수정
                    </button>
                  </td>
                  <td data-type="ellipsis">온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능</td>
                  <td>{ADVISE_KEYWORD_SHORCUT}</td>
                  <td>{LAST_UPDATE_DATE}</td>
                  <td data-type="edit">
                    <div className="row_data_edit_icon_button_box">
                      <IconButton buttonClassName="small" handleClick={handleToggleEditDropdownMenu}>
                        <IconSetting />
                      </IconButton>
                    </div>
                  </td>
                </tr>
                <tr className="table_row">
                  <td>1</td>
                  <td>
                    <span>/일이삼사오육칠팔구십</span>
                    <button type='button' className="row_edit_button">
                      <IconEdit />
                      수정
                    </button>
                  </td>
                  <td data-type="ellipsis">온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능</td>
                  <td>{ADVISE_KEYWORD_SHORCUT}</td>
                  <td>{LAST_UPDATE_DATE}</td>
                  <td data-type="edit">
                    <div className="row_data_edit_icon_button_box">
                      <IconButton buttonClassName="small" handleClick={handleToggleEditDropdownMenu}>
                        <IconSetting />
                      </IconButton>
                    </div>
                  </td>
                </tr>
                <tr className="table_row">
                  <td>1</td>
                  <td>
                    <span>/일이삼사오육칠팔구십</span>
                    <button type='button' className="row_edit_button">
                      <IconEdit />
                      수정
                    </button>
                  </td>
                  <td data-type="ellipsis">온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능</td>
                  <td>{ADVISE_KEYWORD_SHORCUT}</td>
                  <td>{LAST_UPDATE_DATE}</td>
                  <td data-type="edit">
                    <div className="row_data_edit_icon_button_box">
                      <IconButton buttonClassName="small" handleClick={handleToggleEditDropdownMenu}>
                        <IconSetting />
                      </IconButton>
                    </div>
                  </td>
                </tr>
                <tr className="table_row">
                  <td>1</td>
                  <td>
                    <span>/일이삼사오육칠팔구십</span>
                    <button type='button' className="row_edit_button">
                      <IconEdit />
                      수정
                    </button>
                  </td>
                  <td data-type="ellipsis">온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능</td>
                  <td>{ADVISE_KEYWORD_SHORCUT}</td>
                  <td>{LAST_UPDATE_DATE}</td>
                  <td data-type="edit">
                    <div className="row_data_edit_icon_button_box">
                      <IconButton buttonClassName="small" handleClick={handleToggleEditDropdownMenu}>
                        <IconSetting />
                      </IconButton>
                    </div>
                  </td>
                </tr>
                <tr className="table_row">
                  <td>1</td>
                  <td>
                    <span>/일이삼사오육칠팔구십</span>
                    <button type='button' className="row_edit_button">
                      <IconEdit />
                      수정
                    </button>
                  </td>
                  <td data-type="ellipsis">온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능</td>
                  <td>{ADVISE_KEYWORD_SHORCUT}</td>
                  <td>{LAST_UPDATE_DATE}</td>
                  <td data-type="edit">
                    <div className="row_data_edit_icon_button_box">
                      <IconButton buttonClassName="small" handleClick={handleToggleEditDropdownMenu}>
                        <IconSetting />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* 3. 테이블 바텀 섹션 */}
          <section className="advise_keyword_bottom_section">
            <Pagination pageNumber="1" />
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
