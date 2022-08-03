import React, { useState, useRef } from 'react';
import { ReactComponent as IconEdit } from 'assets/svg/icon/icon_edit.svg';
import { ReactComponent as IconEllipsis } from 'assets/svg/icon/icon_ellipsis.svg';
import { ReactComponent as IconDropdownArrow } from 'assets/svg/icon/icon_dropdown_arrow.svg';
import { ReactComponent as IconCross } from 'assets/svg/icon/icon_cross.svg';
import { ReactComponent as IconPainationFirst } from 'assets/svg/icon/icon_pagination_first.svg';
import { ReactComponent as IconPainationPrev } from 'assets/svg/icon/icon_pagination_prev.svg';
import OutlineTag from 'components/publishing/atom/tag/OutlineTag';
import IconButton from 'components/publishing/atom/button/IconButton';
import OutlineButton from 'components/publishing/atom/button/OutlineButton';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import AdviseFieldChip from 'components/publishing/atom/chip/AdviseFieldChip';
import OutlineSearchTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineSearchTextField';
import NoDataFound from 'components/publishing/atom/NoDataFound';
import './ChatAdviseInformationSection.scss';

/** 채팅 상담 정보 영역
 */
const ChatAdviseInformationSection = () => {
  const refAdviseMemoTextField = useRef();
  const CUSTOMER_INFO = {
    group_name: '고객그룹명',
    name: '김다영',
    phone: '010-2222-3333',
    email: 'heyheyheyheyheyday@naver.com',
  };
  const ADVISE_INFO = {
    advise_start: '2022-06-02 오후 11:59',
    advise_end: '진행중',
    memo: '메모를입력하고있음메메모를입력하고있음메메모를입력하메모를입력하고있음메메모를입력하고있음메메모를입력하메모를입력  하고있음메메모를입력하고있음메메모를입력하메모를입력하고있음메메모를입력하고있음메메모를입력하',
    advise_fields: ['교환 반품 환불', '고객 관리', 'A/S', '결제', '회원', '상품', '시스템', '주문', '기타', '프로모션', '배송'],
    // advise_fields: ['교환 반품 환불', '고객 관리'],
  };

  /* pagination */
  const handleGoToPaginationIndex = () => {
    console.log("go to pagination's index");
  };
  const handleClickMovePaginationArrowButton = () => {
    console.log("click pagination's arrow button");
  };

  const [adviseFieldsCount, setAdviseFieldCount] = useState(ADVISE_INFO.advise_fields.length >= 3 ? 'over' : '');
  const showAdviseFields = () => {
    if (adviseFieldsCount === 'over') {
      return (
        <div className="chat_advise_information_content">
          <div className="advise_field_chip_item">
            <AdviseFieldChip>{ADVISE_INFO.advise_fields[0]}</AdviseFieldChip>
          </div>
          <div className="advise_field_chip_item">
            <AdviseFieldChip>{ADVISE_INFO.advise_fields[1]}</AdviseFieldChip>
          </div>
          <div className="advise_field_more">
            <OutlineTag buttonClassName="tiny outline">
              <IconEllipsis />
            </OutlineTag>
          </div>
        </div>
      );
    }
    return (
      <div className="chat_advise_information_content">
        {ADVISE_INFO.advise_fields.map((item, idx) => {
          return (
            <div className="advise_field_chip_item" key={idx}>
              <AdviseFieldChip>{item}</AdviseFieldChip>
            </div>
          );
        })}
      </div>
    );
  };

  const [viewMoreAdviseInformationPannel, setViewMoreAdviseInformationPannel] = useState(false);
  const handleToggleViewMoreAdviseInformation = () => {
    setViewMoreAdviseInformationPannel(!viewMoreAdviseInformationPannel);

    if (!viewMoreAdviseInformationPannel) {
      setAdviseFieldCount('all');
    } else {
      setAdviseFieldCount(ADVISE_INFO.advise_fields.length >= 3 ? 'over' : '');
    }
  };

  const [showEditChatAdviseInformationPannel, setShowEditChatAdviseInformationPannel] = useState('');
  const handleShowEditChatAdvisePannel = () => {
    setShowEditChatAdviseInformationPannel('show');
  };
  const handleHideEditChatAdvisePannel = () => {
    setShowEditChatAdviseInformationPannel('');
  };
  const handleSaveEditChatAdviseContents = () => {
    console.log('상담 내용 편집 저장 후 닫기');
    setShowEditChatAdviseInformationPannel('');
  };

  const [characterCountNumber, setCharacterCountNumber] = useState(0);
  const countTextFieldCharacter = () => {
    const countNumber = refAdviseMemoTextField.current.value.length;
    setCharacterCountNumber(countNumber);
  };

  const handleOpenAdviseFieldSelectBox = () => {
    console.log('상담분야 셀렉트 박스 오픈');
  };

  /* 3. 상담요약 | 주문내역 탭 */
  const [isCurrentTabChatAdviseSummary, setIsCurrentTabChatAdviseSummary] = useState(true);
  const handleTabChatAdviseSummary = () => {
    setIsCurrentTabChatAdviseSummary(true);
  };
  const handleTabCustomerOrderLists = () => {
    setIsCurrentTabChatAdviseSummary(false);
  };

  /* 3-1. 상담요약 - 기획: 상담행동정보 p.121 참조 */
  const SUMMARY_TIME = '오후 12:55';
  const showChatAdviseSummaryTab = () => {
    return (
      <div className="chat_advise_summary_container">
        <ul className="chat_advise_summary_lists">
          {/* flex-direction: column-reverse로 쌓임. */}
          <li className="chat_advise_summary_list">
            <div className="chat_advise_summary_time">{SUMMARY_TIME}</div>
            <div className="chat_advise_summary_contents">
              <div className="chat_advise_delimiter_image_box">
                <img className="chat_advise_delimiter_image chatbot" alt="chatbot" src="https://cdn.brickchat.dev/assets/icon/brick_chat_icon_blue.png" />
              </div>
              <p className="chat_advise_summary_description">챗봇 상담 시작</p>
            </div>
          </li>
          <li className="chat_advise_summary_list">
            <div className="chat_advise_summary_time">{SUMMARY_TIME}</div>
            <div className="chat_advise_summary_contents">
              <div className="chat_advise_delimiter_image_box">
                <img className="chat_advise_delimiter_image chatbot" alt="chatbot" src="https://cdn.brickchat.dev/assets/icon/brick_chat_icon_blue.png" />
              </div>
              <p className="chat_advise_summary_description">상담사 연결 요청</p>
            </div>
          </li>
          <li className="chat_advise_summary_list">
            <div className="chat_advise_summary_time">{SUMMARY_TIME}</div>
            <div className="chat_advise_summary_contents">
              <div className="chat_advise_delimiter_image_box">
                <img className="chat_advise_delimiter_image adviser" alt="adviser" src="https://cdn.brickchat.dev/assets/icon/brick_chat_icon_white.png" />
              </div>
              <p className="chat_advise_summary_description">상담사 상담 시작</p>
            </div>
          </li>
          <li className="chat_advise_summary_list">
            <div className="chat_advise_summary_time">{SUMMARY_TIME}</div>
            <div className="chat_advise_summary_contents">
              <div className="chat_advise_delimiter_image_box">
                <img className="chat_advise_delimiter_image adviser" alt="adviser" src="https://cdn.brickchat.dev/assets/icon/brick_chat_icon_white.png" />
              </div>
              <p className="chat_advise_summary_description">상담사 변경 수락(상담분야상담분야상담분야상담분야)길게오는경우</p>
            </div>
          </li>
        </ul>
      </div>
    );
  };

  /* 3-2. 주문내역 */
  const refSearchOrderNumberTextField = React.createRef();
  const ORDER_NUMBER = '20220620-0000016';
  const handleSearchCustomerOrderList = () => {
    console.log('주문번호 검색');
  };

  const showCustomerOrderListsTab = () => {
    return (
      <div className="customer_order_lists_container">
        <div className="customer_order_lists_search_text_field_box">
          <label className="customer_order_lists_label">주문번호</label>
          <OutlineSearchTextField
            placeholderText="주문번호를 입력해 주세요."
            ref={refSearchOrderNumberTextField}
            handleClickSearchButton={handleSearchCustomerOrderList}
          />
        </div>
        <div className="customer_order_lists_contents">
          {/* 3-2-1. 주문내역 없는 경우 (검색 결과 없는 경우 포함) */}
          {/* <div className="customer_order_lists_contents_no_data_found_box">
            <NoDataFound>주문내역이 없습니다.</NoDataFound>
          </div> */}
          {/* 3-2-2. 주문내역 테이블 */}
          <ul className="customer_order_lists">
            <li className="customer_order_list_item">
              <div className="customer_order_number">주문번호 [{ORDER_NUMBER}]</div>
              <div className="customer_order_list_table_box">
                <table className="customer_order_list_table">
                  <thead className="customer_order_list_table_heading">
                    <tr>
                      <th className="customer_order_table_heading">결제방법</th>
                      <th className="customer_order_table_heading">결제상태</th>
                      <th className="customer_order_table_heading">총 결제금액</th>
                      <th className="customer_order_table_heading">주문상태</th>
                    </tr>
                  </thead>
                  <tbody className="customer_order_list_table_body">
                    <tr>
                      <td className="customer_order_table_data">무통장 입금</td>
                      <td className="customer_order_table_data">결제완료</td>
                      <td className="customer_order_table_data payment">55,000</td>
                      <td className="customer_order_table_data">배송 대기</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li className="customer_order_list_item">
              <div className="customer_order_number">주문번호 [{ORDER_NUMBER}]</div>
              <div className="customer_order_list_table_box">
                <table className="customer_order_list_table">
                  <thead className="customer_order_list_table_heading">
                    <tr>
                      <th className="customer_order_table_heading">결제방법</th>
                      <th className="customer_order_table_heading">결제상태</th>
                      <th className="customer_order_table_heading">총 결제금액</th>
                      <th className="customer_order_table_heading">주문상태</th>
                    </tr>
                  </thead>
                  <tbody className="customer_order_list_table_body">
                    <tr>
                      <td className="customer_order_table_data">무통장 입금</td>
                      <td className="customer_order_table_data">결제완료</td>
                      <td className="customer_order_table_data payment">150,000</td>
                      <td className="customer_order_table_data">배송 대기</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li className="customer_order_list_item">
              <div className="customer_order_number">주문번호 [{ORDER_NUMBER}]</div>
              <div className="customer_order_list_table_box">
                <table className="customer_order_list_table">
                  <thead className="customer_order_list_table_heading">
                    <tr>
                      <th className="customer_order_table_heading">결제방법</th>
                      <th className="customer_order_table_heading">결제상태</th>
                      <th className="customer_order_table_heading">총 결제금액</th>
                      <th className="customer_order_table_heading">주문상태</th>
                    </tr>
                  </thead>
                  <tbody className="customer_order_list_table_body">
                    <tr>
                      <td className="customer_order_table_data">무통장 입금</td>
                      <td className="customer_order_table_data">결제완료</td>
                      <td className="customer_order_table_data payment">9,999,999</td>
                      <td className="customer_order_table_data">배송 대기</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li className="customer_order_list_item">
              <div className="customer_order_number">주문번호 [{ORDER_NUMBER}]</div>
              <div className="customer_order_list_table_box">
                <table className="customer_order_list_table">
                  <thead className="customer_order_list_table_heading">
                    <tr>
                      <th className="customer_order_table_heading">결제방법</th>
                      <th className="customer_order_table_heading">결제상태</th>
                      <th className="customer_order_table_heading">총 결제금액</th>
                      <th className="customer_order_table_heading">주문상태</th>
                    </tr>
                  </thead>
                  <tbody className="customer_order_list_table_body">
                    <tr>
                      <td className="customer_order_table_data">무통장 입금</td>
                      <td className="customer_order_table_data">결제완료</td>
                      <td className="customer_order_table_data payment">12,000,000</td>
                      <td className="customer_order_table_data">배송 대기</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  /* 3-2-3. 상세 주문내역 모달 */
  const PRODUCT_IMAGE_SAMPLE = 'https://cdn.brickchat.dev/assets/img/sample/sample_template_product.png';
  const [isShowDetailCustomerOrderListModal, setIsShowDetailCustomerOrderListModal] = useState(false);
  const handleShowDetailCustomerOrderListModal = () => {
    setIsShowDetailCustomerOrderListModal(true);
  };
  const handleHideDetailCustomerOrderListModal = () => {
    setIsShowDetailCustomerOrderListModal(false);
  };

  const showDetailCustomerOrderListModal = () => {
    return (
      <div className="fullpage_modal">
        <div className="detail_customer_order_list_modal_container">
          <div className="detail_customer_order_list_modal_head">
            <div className="detail_customer_order_list_modal_title_box">
              <h3 className="detail_customer_order_list_modal_title">상세 주문내역</h3>
              <p className="detail_customer_order_list_modal_description">
                기본적으로 최근 1개월간의 자료가 조회되며, 1개월이 지난 주문내역은 조회가 불가능합니다.
              </p>
            </div>
            <div className="detail_customer_order_list_modal_close_button_box">
              <IconButton className="tiny" handleClick={handleHideDetailCustomerOrderListModal}>
                <IconCross />
              </IconButton>
            </div>
          </div>
          <div className="detail_customer_order_list_modal_selectbox_toggle_container">
            <div className="detail_customer_order_list_modal_selectbox_toggle_box">
              <button type="button" className="detail_customer_order_list_modal_selectbox_toggle_button">
                <span className="detail_customer_order_list_modal_selectbox_toggle_button_text">주문상태</span>
                <span className="detail_customer_order_list_modal_selectbox_toggle_button_icon">
                  <IconDropdownArrow />
                </span>
              </button>
            </div>
          </div>
          {/* 3-2-3-1. 상세 주문내역 리스트 - 없음 */}
          {/* <div className="detail_customer_order_no_data_found_box">
            <NoDataFound>주문내역이 없습니다.</NoDataFound>
          </div> */}
          {/* 3-2-3-2. 상세 주문내역 리스트 */}
          <div className="detail_customer_order_lists_box">
            <ul className="detail_customer_order_lists">
              <li className="detail_customer_order_list">
                <h4 className="detail_customer_order_list_title">2022-05-27 [주문번호 : 20220620-00000016] / 주문 2건</h4>
                <div className="detail_customer_order_list_contents_box">
                  <div className="detail_customer_order_list_contents_item">
                    <div className="detail_customer_order_image_box">
                      <img src={PRODUCT_IMAGE_SAMPLE} alt="order product" className="detail_customer_order_image" />
                    </div>
                    <div className="detail_customer_order_description">
                      <div className="customer_order_product_title">아디다스 이지 슬라이드 퓨어 슬라이드 퓨어퓨(재발매 버전)</div>
                      <div className="customer_order_product_information_box">
                        <div className="customer_order_product_information order_number">
                          <div className="customer_order_product_information_label">주문번호</div>
                          <div className="customer_order_product_information_contents">20220620-00000016</div>
                        </div>
                        <div className="customer_order_product_information order_state">
                          <div className="customer_order_product_information_label">주문상태</div>
                          <div className="customer_order_product_information_contents">
                            <OutlineTag>입금전취소</OutlineTag>
                          </div>
                        </div>
                        <div className="customer_order_product_information product_option">
                          <div className="customer_order_product_information_label">옵션</div>
                          <div className="customer_order_product_information_contents">color = 브라운</div>
                        </div>
                        <div className="customer_order_product_information order_quantity">
                          <div className="customer_order_product_information_label">주문수량</div>
                          <div className="customer_order_product_information_contents">
                            <span className="order_quantity_number">1</span>
                            <span className="order_quantity_unit">개</span>
                          </div>
                        </div>
                        <div className="customer_order_product_information product_amount">
                          <div className="customer_order_product_information_label">제품금액</div>
                          <div className="customer_order_product_information_contents">
                            <span className="product_amount_number">177,000</span>
                            <span className="product_amount_unit">원</span>
                          </div>
                        </div>
                        <div className="customer_order_product_information order_date">
                          <div className="customer_order_product_information_label">결제날짜</div>
                          <div className="customer_order_product_information_contents">-</div>
                        </div>
                        <div className="customer_order_product_information payment_method">
                          <div className="customer_order_product_information_label">결제방법</div>
                          <div className="customer_order_product_information_contents">
                            <OutlineTag>무통장입금</OutlineTag>
                          </div>
                        </div>
                        <div className="customer_order_product_information payment_state">
                          <div className="customer_order_product_information_label">결제상태</div>
                          <div className="customer_order_product_information_contents">
                            <OutlineTag>결제대기</OutlineTag>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detail_customer_order_list_contents_item">
                    <div className="detail_customer_order_image_box">
                      <img src={PRODUCT_IMAGE_SAMPLE} alt="order product" className="detail_customer_order_image" />
                    </div>
                    <div className="detail_customer_order_description">
                      <div className="customer_order_product_title">아디다스 이지 슬라이드 퓨어 슬라이드 퓨어퓨(재발매 버전)</div>
                      <div className="customer_order_product_information_box">
                        <div className="customer_order_product_information order_number">
                          <div className="customer_order_product_information_label">주문번호</div>
                          <div className="customer_order_product_information_contents">20220620-00000016</div>
                        </div>
                        <div className="customer_order_product_information order_state">
                          <div className="customer_order_product_information_label">주문상태</div>
                          <div className="customer_order_product_information_contents">
                            <OutlineTag>입금전취소</OutlineTag>
                          </div>
                        </div>
                        <div className="customer_order_product_information product_option">
                          <div className="customer_order_product_information_label">옵션</div>
                          <div className="customer_order_product_information_contents">color = 브라운</div>
                        </div>
                        <div className="customer_order_product_information order_quantity">
                          <div className="customer_order_product_information_label">주문수량</div>
                          <div className="customer_order_product_information_contents">
                            <span className="order_quantity_number">1</span>
                            <span className="order_quantity_unit">개</span>
                          </div>
                        </div>
                        <div className="customer_order_product_information product_amount">
                          <div className="customer_order_product_information_label">제품금액</div>
                          <div className="customer_order_product_information_contents">
                            <span className="product_amount_number">177,000</span>
                            <span className="product_amount_unit">원</span>
                          </div>
                        </div>
                        <div className="customer_order_product_information order_date">
                          <div className="customer_order_product_information_label">결제날짜</div>
                          <div className="customer_order_product_information_contents">-</div>
                        </div>
                        <div className="customer_order_product_information payment_method">
                          <div className="customer_order_product_information_label">결제방법</div>
                          <div className="customer_order_product_information_contents">
                            <OutlineTag>무통장입금</OutlineTag>
                          </div>
                        </div>
                        <div className="customer_order_product_information payment_state">
                          <div className="customer_order_product_information_label">결제상태</div>
                          <div className="customer_order_product_information_contents">
                            <OutlineTag>결제대기</OutlineTag>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="detail_customer_order_list">
                <h4 className="detail_customer_order_list_title">2022-05-27 [주문번호 : 20220620-00000016] / 주문 1건</h4>
                <div className="detail_customer_order_list_contents_box">
                  <div className="detail_customer_order_list_contents_item">
                    <div className="detail_customer_order_image_box">
                      <img src={PRODUCT_IMAGE_SAMPLE} alt="order product" className="detail_customer_order_image" />
                    </div>
                    <div className="detail_customer_order_description">
                      <div className="customer_order_product_title">아디다스 이지 슬라이드 퓨어 슬라이드 퓨어퓨(재발매 버전)</div>
                      <div className="customer_order_product_information_box">
                        <div className="customer_order_product_information order_number">
                          <div className="customer_order_product_information_label">주문번호</div>
                          <div className="customer_order_product_information_contents">20220620-00000016</div>
                        </div>
                        <div className="customer_order_product_information order_state">
                          <div className="customer_order_product_information_label">주문상태</div>
                          <div className="customer_order_product_information_contents">
                            <OutlineTag>입금전취소</OutlineTag>
                          </div>
                        </div>
                        <div className="customer_order_product_information product_option">
                          <div className="customer_order_product_information_label">옵션</div>
                          <div className="customer_order_product_information_contents">color = 브라운</div>
                        </div>
                        <div className="customer_order_product_information order_quantity">
                          <div className="customer_order_product_information_label">주문수량</div>
                          <div className="customer_order_product_information_contents">
                            <span className="order_quantity_number">1</span>
                            <span className="order_quantity_unit">개</span>
                          </div>
                        </div>
                        <div className="customer_order_product_information product_amount">
                          <div className="customer_order_product_information_label">제품금액</div>
                          <div className="customer_order_product_information_contents">
                            <span className="product_amount_number">177,000</span>
                            <span className="product_amount_unit">원</span>
                          </div>
                        </div>
                        <div className="customer_order_product_information order_date">
                          <div className="customer_order_product_information_label">결제날짜</div>
                          <div className="customer_order_product_information_contents">-</div>
                        </div>
                        <div className="customer_order_product_information payment_method">
                          <div className="customer_order_product_information_label">결제방법</div>
                          <div className="customer_order_product_information_contents">
                            <OutlineTag>무통장입금</OutlineTag>
                          </div>
                        </div>
                        <div className="customer_order_product_information payment_state">
                          <div className="customer_order_product_information_label">결제상태</div>
                          <div className="customer_order_product_information_contents">
                            <OutlineTag>결제대기</OutlineTag>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  /* 4. 상담 지식사전 패널 */
  const refSearchKMSKnowledgeRecommandTextField = React.createRef();
  const refSearchChatbotKnowledgeRecommandTextField = React.createRef();
  const handleSearchKMSKnowledgeRecommand = () => {
    console.log('KMS 지식 검색');
  };
  const handleSearchChatbotKnowledgeRecommand = () => {
    console.log('챗봇 지식 검색');
  };
  const [isShowKMSPannel, setIsShowKMSPannel] = useState(false);
  const handleShowkKMSPannel = () => {
    setIsShowKMSPannel(true);
  };
  const handleHidekKMSPannel = () => {
    setIsShowKMSPannel(false);
  };

  /* KMS 지식 추천 | 챗봇 지식 추천 탭 */
  const [isCurrentTabKMSKnowledgeRecommand, setIsCurrentTabKMSKnowledgeRecommand] = useState(true);
  const handleTabKMSKnowledgeRecommand = () => {
    setIsCurrentTabKMSKnowledgeRecommand(true);
  };
  const handleTabChatbotKnowledgeRecommand = () => {
    setIsCurrentTabKMSKnowledgeRecommand(false);
  };
  const handleCopyRecommandSentence = () => {
    console.log('🥕답변 붙여넣기');
  };

  /* 4-1. KMS 지식 추천 탭 */
  const showKMSKnowledgeRecommandTab = () => {
    return (
      <div className="knowledge_recommand_container KMS">
        <div className="knowledge_recommand_search_text_field_box KMS">
          <OutlineSearchTextField
            placeholderText="KMS 지식 검색하기"
            ref={refSearchKMSKnowledgeRecommandTextField}
            handleClickSearchButton={handleSearchKMSKnowledgeRecommand}
          />
        </div>
        {/* 상담 지식 사전 버튼 클릭으로 접근했을 경우 | 검색 결과 없을 경우 문구 달라짐 */}
        <div className="knowledge_recommand_search_no_data_found_box">
          <NoDataFound>KMS 지식을 검색해주세요.</NoDataFound>
          {/* <NoDataFound>검색 결과가 없습니다.</NoDataFound> */}
        </div>
        {/* KMS 지식 리스트 */}
        {/* <ul className="knowledge_recommand_lists KMS">
          <li className="knowledge_recommand_list KMS">
            <div className="knowledge_recommand_contents KMS">
              <div className="knowledge_recommand_title KMS">
                포장 <span className="highlight">선물</span> 신청은 어떻게 하면 되나요
              </div>
              <div className="knowledge_recommand_sentence_scroll_area KMS">
                <div className="knowledge_recommand_sentence KMS">주문배송란에 선물포장 기입</div>
              </div>
              <div className="copy_recommand_sentence_button_box">
                <SolidButton handleClick={handleCopyRecommandSentence}>답변 붙여넣기</SolidButton>
              </div>
            </div>
          </li>
          <li className="knowledge_recommand_list KMS">
            <div className="knowledge_recommand_contents KMS">
              <div className="knowledge_recommand_title KMS">
                포장 <span className="highlight">선물</span> 신청은 어떻게 하면 되나요
              </div>
              <div className="knowledge_recommand_sentence_scroll_area KMS">
                <div className="knowledge_recommand_sentence KMS">주문배송란에 선물포장 기입해주시면 선물 포장이가능 합니다. 단, 선물포장 시 5000원 비용이</div>
              </div>
              <div className="copy_recommand_sentence_button_box">
                <SolidButton handleClick={handleCopyRecommandSentence}>답변 붙여넣기</SolidButton>
              </div>
            </div>
          </li>
          <li className="knowledge_recommand_list KMS">
            <div className="knowledge_recommand_contents KMS">
              <div className="knowledge_recommand_title KMS">
                포장 <span className="highlight">선물</span> 신청은 어떻게 하면 되나요
              </div>
              <div className="knowledge_recommand_sentence_scroll_area KMS">
                <div className="knowledge_recommand_sentence KMS">
                  주문배송란에 선물포장 기입해주시면 선물 포장이가능 합니다. 단, 선물포장 시 5000원 비용이 발생하므로, 아래 계좌로 입금해주세요.
                </div>
              </div>
              <div className="copy_recommand_sentence_button_box">
                <SolidButton handleClick={handleCopyRecommandSentence}>답변 붙여넣기</SolidButton>
              </div>
            </div>
          </li>
          <li className="knowledge_recommand_list KMS">
            <div className="knowledge_recommand_contents KMS">
              <div className="knowledge_recommand_title KMS">
                포장 <span className="highlight">선물</span> 신청은 어떻게 하면 되나요
              </div>
              <div className="knowledge_recommand_sentence_scroll_area KMS">
                <div className="knowledge_recommand_sentence KMS">
                  주문배송란에 선물포장 기입해주시면 선물 포장이가능 합니다. 단, 선물포장 시 5000원 비용이 발생하므로, 아래 계좌로 입금해주세요. 주문배송란에
                  선물포장 기입해주시면 선물 포장이가능 합니다. 단, 선물포장 시 5000원 비용이 발생하므로, 아래 계좌로 입금해주세요. 주문배송란에 선물포장
                  기입해주시면 선물 포장이가능 합니다. 단, 선물포장 시 5000원 비용이 발생하므로, 아래 계좌로 입금해주세요.
                </div>
              </div>
              <div className="copy_recommand_sentence_button_box">
                <SolidButton handleClick={handleCopyRecommandSentence}>답변 붙여넣기</SolidButton>
              </div>
            </div>
          </li>
        </ul> */}
        <div className="knowledge_recommand_pagination_box KMS">
          <div className="pagination">
            <button type="button" className="page_move_arrow_button go_to_first hide" onClick={handleClickMovePaginationArrowButton}>
              <IconPainationFirst />
            </button>
            <button type="button" onClick={handleClickMovePaginationArrowButton} className="page_move_arrow_button go_to_prev">
              <IconPainationPrev />
            </button>
            <div className="pagination_buttons_box">
              <ol className="pagination_button_lists">
                <li className="pagination_button_list">
                  <button type="button" onClick={handleGoToPaginationIndex} className="pagination_button breadscrumb">
                    1
                  </button>
                </li>
              </ol>
            </div>
            <button type="button" onClick={handleClickMovePaginationArrowButton} className="page_move_arrow_button go_to_next">
              <IconPainationPrev />
            </button>
            <button type="button" onClick={handleClickMovePaginationArrowButton} className="page_move_arrow_button go_to_last hide">
              <IconPainationFirst />
            </button>
          </div>
        </div>
      </div>
    );
  };

  /* 4-2. 챗봇 지식 추천 탭 */
  const showChatbotKnowledgeRecommandTab = () => {
    return (
      <div className="knowledge_recommand_container chatbot">
        <div className="knowledge_recommand_search_text_field_box chatbot">
          <OutlineSearchTextField
            placeholderText="챗봇 지식 검색하기"
            ref={refSearchChatbotKnowledgeRecommandTextField}
            handleClickSearchButton={handleSearchChatbotKnowledgeRecommand}
          />
        </div>
        <ul className="knowledge_recommand_lists chatbot">
          <li className="knowledge_recommand_list chatbot">
            <div className="knowledge_recommand_contents chatbot">
              <div className="knowledge_recommand_title chatbot">
                포장 <span className="highlight">선물</span> 신청은 어떻게 하면 되나요
              </div>
              <div className="knowledge_recommand_sentence_scroll_area chatbot">
                <div className="knowledge_recommand_sentence chatbot">주문배송란에 선물포장 기입</div>
              </div>
              <div className="copy_recommand_sentence_button_box">
                <SolidButton handleClick={handleCopyRecommandSentence}>답변 붙여넣기</SolidButton>
              </div>
            </div>
          </li>
          <li className="knowledge_recommand_list chatbot">
            <div className="knowledge_recommand_contents chatbot">
              <div className="knowledge_recommand_title chatbot">
                포장 <span className="highlight">선물</span> 신청은 어떻게 하면 되나요
              </div>
              <div className="knowledge_recommand_sentence_scroll_area chatbot">
                <div className="knowledge_recommand_sentence chatbot">
                  주문배송란에 선물포장 기입해주시면 선물 포장이가능 합니다. 단, 선물포장 시 5000원 비용이
                </div>
              </div>
              <div className="copy_recommand_sentence_button_box">
                <SolidButton handleClick={handleCopyRecommandSentence}>답변 붙여넣기</SolidButton>
              </div>
            </div>
          </li>
          <li className="knowledge_recommand_list chatbot">
            <div className="knowledge_recommand_contents chatbot">
              <div className="knowledge_recommand_title chatbot">
                포장 <span className="highlight">선물</span> 신청은 어떻게 하면 되나요
              </div>
              <div className="knowledge_recommand_sentence_scroll_area chatbot">
                <div className="knowledge_recommand_sentence chatbot">
                  주문배송란에 선물포장 기입해주시면 선물 포장이가능 합니다. 단, 선물포장 시 5000원 비용이 발생하므로, 아래 계좌로 입금해주세요.
                </div>
              </div>
              <div className="copy_recommand_sentence_button_box">
                <SolidButton handleClick={handleCopyRecommandSentence}>답변 붙여넣기</SolidButton>
              </div>
            </div>
          </li>
          <li className="knowledge_recommand_list chatbot">
            <div className="knowledge_recommand_contents chatbot">
              <div className="knowledge_recommand_title chatbot">
                포장 <span className="highlight">선물</span> 신청은 어떻게 하면 되나요
              </div>
              <div className="knowledge_recommand_sentence_scroll_area chatbot">
                <div className="knowledge_recommand_sentence chatbot">
                  주문배송란에 선물포장 기입해주시면 선물 포장이가능 합니다. 단, 선물포장 시 5000원 비용이 발생하므로, 아래 계좌로 입금해주세요. 주문배송란에
                  선물포장 기입해주시면 선물 포장이가능 합니다. 단, 선물포장 시 5000원 비용이 발생하므로, 아래 계좌로 입금해주세요. 주문배송란에 선물포장
                  기입해주시면 선물 포장이가능 합니다. 단, 선물포장 시 5000원 비용이 발생하므로, 아래 계좌로 입금해주세요.
                </div>
              </div>
              <div className="copy_recommand_sentence_button_box">
                <SolidButton handleClick={handleCopyRecommandSentence}>답변 붙여넣기</SolidButton>
              </div>
            </div>
          </li>
        </ul>
        <div className="knowledge_recommand_pagination_box chatbot">
          <div className="pagination">
            <button type="button" className="page_move_arrow_button go_to_first" onClick={handleClickMovePaginationArrowButton}>
              <IconPainationFirst />
            </button>
            <button type="button" onClick={handleClickMovePaginationArrowButton} className="page_move_arrow_button go_to_prev">
              <IconPainationPrev />
            </button>
            <div className="pagination_buttons_box">
              <ol className="pagination_button_lists">
                <li className="pagination_button_list">
                  <button type="button" onClick={handleGoToPaginationIndex} className="pagination_button breadscrumb">
                    1
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleGoToPaginationIndex} className="pagination_button">
                    2
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleGoToPaginationIndex} className="pagination_button">
                    3
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleGoToPaginationIndex} className="pagination_button">
                    4
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleGoToPaginationIndex} className="pagination_button">
                    5
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleGoToPaginationIndex} className="pagination_button">
                    6
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleGoToPaginationIndex} className="pagination_button">
                    7
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleGoToPaginationIndex} className="pagination_button">
                    8
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleGoToPaginationIndex} className="pagination_button">
                    9
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleGoToPaginationIndex} className="pagination_button">
                    10
                  </button>
                </li>
              </ol>
            </div>
            <button type="button" onClick={handleClickMovePaginationArrowButton} className="page_move_arrow_button go_to_next">
              <IconPainationPrev />
            </button>
            <button type="button" onClick={handleClickMovePaginationArrowButton} className="page_move_arrow_button go_to_last">
              <IconPainationFirst />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="chat_advise_information_section_wrap">
        <div className="chat_advise_information_container_wrap">
          {/* 1. 고객 정보 */}
          <div className="customer_profile_information_container">
            <div className="customer_profile_title_head">
              <div className="customer_profile_title_box">
                <h3 className="customer_profile_title">고객 정보</h3>
                <OutlineTag>{CUSTOMER_INFO.group_name}</OutlineTag>
              </div>
              {/* 추후 수정 버튼 추가될수 있음 
              <div className="edit_customer_profile_button_box">
                <IconButton buttonClassName="tiny">
                  <IconEdit />
                </IconButton>
              </div> */}
            </div>
            <div className="customer_profile_contents">
              <ul className="customer_profile_contents_lists">
                <li className="customer_profile_contents_list name">
                  <div className="customer_profile_label">이름</div>
                  <div className="customer_profile_information">{CUSTOMER_INFO.name}</div>
                </li>
                <li className="customer_profile_contents_list phone">
                  <div className="customer_profile_label">휴대폰 번호</div>
                  <div className="customer_profile_information">{CUSTOMER_INFO.phone}</div>
                </li>
                <li className="customer_profile_contents_list email">
                  <div className="customer_profile_label">이메일</div>
                  <div className="customer_profile_information">{CUSTOMER_INFO.email}</div>
                </li>
              </ul>
            </div>
          </div>
          {/* 2. 상담 정보 */}
          <div className={`chat_advise_information_container ${viewMoreAdviseInformationPannel ? 'open' : ''}`}>
            {/* 2-1. 상담 정보 - 기본 보기 */}
            <div className="chat_advise_information_contents_box">
              <div className="chat_advise_information_title_head">
                <h3 className="chat_advise_information_title">상담 정보</h3>
                <div className="edit_chat_advise_information_button_box">
                  <IconButton buttonClassName="tiny" handleClick={handleShowEditChatAdvisePannel}>
                    <IconEdit />
                  </IconButton>
                </div>
              </div>
              <div className="chat_advise_information_contents">
                <ul className="chat_advise_information_lists">
                  <li className="chat_advise_information_list advise_field">
                    <div className="chat_advise_information_label">상담 분야</div>
                    {showAdviseFields()}
                  </li>
                  <li className="chat_advise_information_list advise_start_time">
                    <div className="chat_advise_information_label">상담 시작 시간</div>
                    <div className="chat_advise_information_content">{ADVISE_INFO.advise_start}</div>
                  </li>
                  <li className="chat_advise_information_list advise_end_time">
                    <div className="chat_advise_information_label">상담 종료 시간</div>
                    <div className="chat_advise_information_content">{ADVISE_INFO.advise_end}</div>
                  </li>
                  <li className="chat_advise_information_list memo">
                    <div className="chat_advise_information_label">상담 메모</div>
                    <div className="chat_advise_information_content">{ADVISE_INFO.memo}</div>
                  </li>
                </ul>
              </div>
              <div className="chat_advise_information_view_more_button_box">
                <SolidButton buttonClassName="tiny" handleClick={handleToggleViewMoreAdviseInformation}>
                  {viewMoreAdviseInformationPannel ? '접기' : '더보기'}
                </SolidButton>
              </div>
            </div>
            {/* 2-2. 상담 정보 - 수정 패널 */}
            <div className={`edit_chat_advise_information_pannel ${showEditChatAdviseInformationPannel}`}>
              <div className="edit_chat_advise_information_title_flex_box">
                <h3 className="edit_chat_advise_information_title">상담 정보</h3>
              </div>
              <div className="edit_chat_advise_information_contents">
                <ul className="edit_chat_advise_information_lists">
                  <li className="edit_chat_advise_information_list advise_field">
                    <div className="edit_chat_advise_information_label">상담 분야</div>
                    {/* 2-2-1. 상담 분야 토글 셀렉트 박스 */}
                    <div role="button" className="edit_advise_field_toggle_button_box" onClick={handleOpenAdviseFieldSelectBox} tabIndex={0}>
                      <div className="advise_field_chips_area">
                        <AdviseFieldChip>결제</AdviseFieldChip>
                        <AdviseFieldChip>회원</AdviseFieldChip>
                        <AdviseFieldChip>주문</AdviseFieldChip>
                      </div>
                      <div className="dropdown_arrow_box">
                        <IconDropdownArrow />
                      </div>
                    </div>
                  </li>
                  <li className="edit_chat_advise_information_list advise_start_time">
                    <div className="edit_chat_advise_information_label">상담 시작 시간</div>
                    <div className="edit_chat_advise_information_content">{ADVISE_INFO.advise_start}</div>
                  </li>
                  <li className="edit_chat_advise_information_list advise_end_time">
                    <div className="edit_chat_advise_information_label">상담 종료 시간</div>
                    <div className="edit_chat_advise_information_content">{ADVISE_INFO.advise_end}</div>
                  </li>
                  <li className="edit_chat_advise_information_list memo">
                    <div className="edit_chat_advise_information_label">상담 메모</div>
                    {/* 2-2-2. 상담 분야 메모 박스 */}
                    <div className="edit_chat_advise_memo_box">
                      <textarea
                        className="edit_chat_advise_memo_text_field"
                        placeholder="메모를 입력해주세요"
                        rows="5"
                        maxLength="100"
                        ref={refAdviseMemoTextField}
                        onKeyUp={countTextFieldCharacter}
                        spellCheck="false"
                        autoComplete="off"
                      />
                    </div>
                    <div className="edit_chat_advise_memo_text_field_character_count_box">
                      <span>{characterCountNumber}</span>
                      <span>/100자</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="edit_chat_advise_information_buttons_box">
                <OutlineButton buttonClassName="small" handleClick={handleHideEditChatAdvisePannel}>
                  취소
                </OutlineButton>
                <SolidButton buttonClassName="small" handleClick={handleSaveEditChatAdviseContents}>
                  저장
                </SolidButton>
              </div>
            </div>
          </div>
          {/* 3. 상담요약 | 주문내역 탭 */}
          <div className="customer_chat_information_container">
            <div className="customer_chat_information_title_tabs_head">
              <div className="customer_chat_information_title_tabs">
                <button
                  type="button"
                  className={`customer_chat_information_title_tab_button chat_advise_summary ${isCurrentTabChatAdviseSummary ? 'active' : ''}`}
                  onClick={handleTabChatAdviseSummary}
                >
                  <span role="heading" aria-level="3" className="customer_chat_information_title">
                    상담요약
                  </span>
                </button>
                <button
                  type="button"
                  className={`customer_chat_information_title_tab_button customer_order_list ${isCurrentTabChatAdviseSummary ? '' : 'active'}`}
                  onClick={handleTabCustomerOrderLists}
                >
                  <span role="heading" aria-level="3" className="customer_chat_information_title">
                    주문내역
                  </span>
                </button>
              </div>
              <div className={`show_detail_customer_order_lists_button_box ${isCurrentTabChatAdviseSummary ? '' : 'show'}`}>
                <SolidButton buttonClassName="tiny" handleClick={handleShowDetailCustomerOrderListModal}>
                  상세 주문내역
                </SolidButton>
              </div>
            </div>
            {isCurrentTabChatAdviseSummary ? showChatAdviseSummaryTab() : showCustomerOrderListsTab()}
          </div>
          <button type="button" onClick={handleShowkKMSPannel}>
            상담지식사전
          </button>
          {/* 3-2-3. 상세 주문내역 전체화면 모달 */}
          {isShowDetailCustomerOrderListModal ? showDetailCustomerOrderListModal() : ''}
        </div>
      </section>
      {/* 4. 상담 지식사전 패널 섹션 */}
      <section className={`KMS_pannel_section_wrap ${isShowKMSPannel ? 'show' : ''}`}>
        <div className="KMS_pannel_main_title_head">
          <h2 className="KMS_pannel_main_title">상담 지식 사전</h2>
          <div className="KMS_pannel_section_close_button_box">
            <IconButton buttonClassName="tiny" handleClick={handleHidekKMSPannel}>
              <IconCross />
            </IconButton>
          </div>
        </div>
        <div className="KMS_pannel_sub_title_tabs">
          <button
            type="button"
            className={`KMS_pannel_sub_title_tab_button KMS_knowledge_recommand ${isCurrentTabKMSKnowledgeRecommand ? 'active' : ''}`}
            onClick={handleTabKMSKnowledgeRecommand}
          >
            <span role="heading" aria-level="3" className="KMS_pannel_sub_title">
              KMS 지식 추천
            </span>
          </button>
          <button
            type="button"
            className={`KMS_pannel_sub_title_tab_button chatbot_knowledge_recommand ${isCurrentTabKMSKnowledgeRecommand ? '' : 'active'}`}
            onClick={handleTabChatbotKnowledgeRecommand}
          >
            <span role="heading" aria-level="3" className="KMS_pannel_sub_title">
              챗봇 지식 추천
            </span>
          </button>
        </div>
        {isCurrentTabKMSKnowledgeRecommand ? showKMSKnowledgeRecommandTab() : showChatbotKnowledgeRecommandTab()}
      </section>
    </>
  );
};

export default ChatAdviseInformationSection;
