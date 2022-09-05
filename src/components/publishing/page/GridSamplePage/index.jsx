import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GridTable from 'components/publishing/molecule/gridComponents/GridTable';
import GridTableHead from 'components/publishing/molecule/gridComponents/GridTableHead';
import GridTableBody from 'components/publishing/molecule/gridComponents/GridTableBody';
import GridTableRow from 'components/publishing/molecule/gridComponents/GridTableRow';
import GridTableData from 'components/publishing/molecule/gridComponents/GridTableData';
import './style.scss';

/** Test page
 * @children : children
 */

const gridHeaderData = [
  {
    value: 'NO', 
    isDropdown: false, 
  },
  {
    value: '카테고리', 
    isDropdown: true,
    isShownDropdownMenu: false, 
    dropdownMenu: [
      {value: '오름차순 정렬', onClick: () => console.log('오름차순 정렬')},
      {value: '내림차순 정렬', onClick: () => console.log('내림차순 정렬')},
    ],
  },
  {
    value: '제목', 
    isDropdown: true,
    isShownDropdownMenu: false, 
    dropdownMenu: [
      {value: '오름차순 정렬', onClick: () => console.log('오름차순 정렬')},
      {value: '내림차순 정렬', onClick: () => console.log('내림차순 정렬')},
    ],
  },
  {
    value: '내용', 
    isDropdown: true,
    isShownDropdownMenu: false, 
    dropdownMenu: [
      {value: '오름차순 정렬', onClick: () => console.log('오름차순 정렬')},
      {value: '내림차순 정렬', onClick: () => console.log('내림차순 정렬')},
    ],
  },
  {
    value: '마지막 편집 날짜', 
    isDropdown: true,
    isShownDropdownMenu: false, 
    dropdownMenu: [
      {value: '오름차순 정렬', onClick: () => console.log('오름차순 정렬')},
      {value: '내림차순 정렬', onClick: () => console.log('내림차순 정렬')},
    ],
  },
  {
    value: 'hello', 
    isDropdown: false, 
  },
];

const gridRowData = [
  {
    id: 1,
    KMSCategoryText: '회원정보',
    KMSTitle: '탈퇴는 어떻게 하나요?',
    KMSContents: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
    lastUpdateDate: '2022.08.02',
    isSettingButtonSelected: false,
    
  },
  {
    id: 1,
    KMSCategoryText: '회원정보',
    KMSTitle: '탈퇴는 어떻게 하나요?',
    KMSContents: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
    lastUpdateDate: '2022.08.02',
    isSettingButtonSelected: false,
  },
  {
    id: 1,
    KMSCategoryText: '회원정보',
    KMSTitle: '탈퇴는 어떻게 하나요?',
    KMSContents: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
    lastUpdateDate: '2022.08.02',
    isSettingButtonSelected: false,
  },
  {
    id: 1,
    KMSCategoryText: '회원정보',
    KMSTitle: '탈퇴는 어떻게 하나요?',
    KMSContents: '온라인 주문 시 신용카드 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
    lastUpdateDate: '2022.08.02',
    isSettingButtonSelected: false,
  },
  {
    id: 1,
    KMSCategoryText: '회원정보',
    KMSTitle: '탈퇴는 어떻게 하나요?',
    KMSContents: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
    lastUpdateDate: '2022.08.02',
    isSettingButtonSelected: false,
  },
  {
    id: 1,
    KMSCategoryText: '회원정보',
    KMSTitle: '탈퇴는 어떻게 하나요?',
    KMSContents: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
    lastUpdateDate: '2022.08.02',
    isSettingButtonSelected: false,
  },
  {
    id: 1,
    KMSCategoryText: '회원정보',
    KMSTitle: '탈퇴는 어떻게 하나요?',
    KMSContents: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
    lastUpdateDate: '2022.08.02',
    isSettingButtonSelected: false,
  },
  {
    id: 1,
    KMSCategoryText: '회원정보',
    KMSTitle: '탈퇴는 어떻게 하나요?',
    KMSContents: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
    lastUpdateDate: '2022.08.02',
    isSettingButtonSelected: false,
  },
  {
    id: 1,
    KMSCategoryText: '회원정보',
    KMSTitle: '탈퇴는 어떻게 하나요?',
    KMSContents: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능 온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
    lastUpdateDate: '2022.08.02',
    isSettingButtonSelected: false,
  },
  {
    id: 1,
    KMSCategoryText: '회원정보',
    KMSTitle: '탈퇴는 어떻게 하나요?',
    KMSContents: '온라인 주문 시 신용카드 및 체크카드 결제 외에 네이버페이 결제 가능',
    lastUpdateDate: '2022.08.02',
    isSettingButtonSelected: false,
  },
];

const GridSamplePage = ({ children }) => {
  return (
    <>
      <div className="test">
        <GridTable gridClassName="KMS_table_wrap">
          <GridTableHead gridColumnData={gridHeaderData} />
          <GridTableBody>
            {
              gridRowData.map((row, idx) => {
                return (
                  <GridTableRow key={`${row.id}_${idx}`}>
                    <GridTableData>{idx+1}</GridTableData>
                    <GridTableData>{row.KMSCategoryText}</GridTableData>
                    <GridTableData>
                      <span>{row.KMSTitle}</span>
                      <button className="row_edit_button">편집</button>
                    </GridTableData>
                    <GridTableData dataType="ellipsis">{row.KMSContents}</GridTableData>
                    <GridTableData>{row.lastUpdateDate}</GridTableData>
                    <GridTableData>edit button</GridTableData>
                  </GridTableRow>
                );
              })
            }
          </GridTableBody>
        </GridTable>
      </div>
    </>
  );
};

GridSamplePage.propTypes = {
  children: PropTypes.any,
};

GridSamplePage.defaultProps = {
  children: '',
};

export default GridSamplePage;
