import React, { useState } from 'react';
import { ReactComponent as IconSetting } from 'assets/svg/icon/icon_setting.svg';
import { ReactComponent as IconArrowUpSmall } from 'assets/svg/icon/icon_arrow_up_small.svg';
import OutlineTag from 'components/publishing/atom/tag/OutlineTag';
import BasicAvatarIcon from 'components/publishing/atom/avatarIcon/BasicAvatarIcon';
import IconButton from 'components/publishing/atom/button/IconButton';
import './ChatbotScenario.scss';

/** 채팅 상담 - 챗봇 메시지 시나리오
 */
const ChatbotScenario = () => {
  const [isViewTypeHorizontal, setIsViewTypeHorizontal] = useState(true);
  const [showTemplateSliderButtonsBox, setShowTemplateSliderButtonsBox] = useState('show');
  

  /* Bot */
  const BOT_NAME = '브릭';
  const BOT_PROFILE_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_main_icon_blue.png';

  /* Name tag */
  const NAME_TAG_CHATBOT = 'BOT';

  /* Etc. */
  const CHAT_TIME = '오후 1:30';
  const DIVIDER_CASE1 = '2022-07-27';
  const TEMPLATE_SAMPLE_IMAGE = 'https://cdn.brickchat.dev/assets/img/sample/sample_template_image.png';
  const TEMPLATE_SAMPLE_PRODUCT = 'https://cdn.brickchat.dev/assets/img/sample/sample_template_product.png';
  const SLIDER_BUTTON_SHOW = 'show';

  const handleSearchKMS = () => {
    console.log('KMS 지식 검색');
  };
  const handleDeleteMessage = () => {
    console.log('메시지 삭제');
  };

  const handleMoveSlider = () => {
    console.log('slider move');
  };

  const handleClickBrickTemplateButton = e => {
    e.preventDefault();
    console.log('브릭 템플릿 클릭 이벤트 없음 - 기획서 참조');
  };

  const handleViewMore = e => {
    e.preventDefault();
    console.log('호스팅 템플릿 클릭 이벤트 없음 - 기획서 참조');
  };

  return (
    <>
      <div className="message_wrapper bot">
        <div className="avatar_container">
          <div className="chat_name_box">{BOT_NAME}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_CHATBOT}</OutlineTag>
          </div>
          <div className="avatar_box">
            <BasicAvatarIcon avatarImage={BOT_PROFILE_IMAGE} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">
              안녕하세요. <em className="highlight">고객</em>님의 쇼핑가이드, 브릭입니다.
              <p>반가워요. 문의하실 내용이 있다면,</p>
              <p>아래 버튼을 눌러주시거나</p>
              <p>메시지 입력창에 입력해주세요.</p>
            </div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="message_action_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconSetting />
              </IconButton>
            </div>
          </div>
        </div>
        {/* 1. 브릭 템플릿 */}
        {/* 1-2. 텍스트 버튼 */}
        <div className="brick_template_container text_button">
          <div className={`template_contents_box ${isViewTypeHorizontal ? 'horizontal' : ''}`}>
            <button type="button" className="brick_template_text_button" onClick={handleClickBrickTemplateButton}>
              <span className="brick_template_text_button_text">
                배송문의함배송문의함배송문의함배송문의함배송문의함배송문의함배송문의함배송문의함배송문의함배송문의함배송문의함배송문의함배송문의함
              </span>
            </button>
            <button type="button" className="brick_template_text_button" onClick={handleClickBrickTemplateButton}>
              <span className="brick_template_text_button_text">주문내역조회 바로가기</span>
            </button>
            <button type="button" className="brick_template_text_button" onClick={handleClickBrickTemplateButton}>
              <span className="brick_template_text_button_text">상품보기</span>
            </button>
            <button type="button" className="brick_template_text_button" onClick={handleClickBrickTemplateButton}>
              <span className="brick_template_text_button_text">배송조회</span>
            </button>
            <button type="button" className="brick_template_text_button" onClick={handleClickBrickTemplateButton}>
              <span className="brick_template_text_button_text">마이페이지</span>
            </button>
          </div>
        </div>
        {/* 1-3. 이미지 버튼 */}
        <div className="brick_template_container image_button">
          <div className={`template_contents_box ${isViewTypeHorizontal ? 'horizontal' : ''}`}>
            <div className={`template_slider_buttons_box ${showTemplateSliderButtonsBox}`}>
              <IconButton buttonClassName={`prev ${SLIDER_BUTTON_SHOW}`} handleClick={handleMoveSlider}>
                <IconArrowUpSmall />
              </IconButton>
              <IconButton buttonClassName={`next ${SLIDER_BUTTON_SHOW}`} handleClick={handleMoveSlider}>
                <IconArrowUpSmall />
              </IconButton>
            </div>
            <div className="slider">
              <div className="brick_template_image_button_article_box">
                <article className="brick_template_image_button_article">
                  <div className="image_button_article_image_background" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_IMAGE})` }} />
                  <div className="image_button_article_text_button_box">
                    <button type="button" className="image_button_article_text_button" onClick={handleClickBrickTemplateButton}>
                      이미지버튼
                    </button>
                  </div>
                </article>
                <article className="brick_template_image_button_article">
                  <div className="image_button_article_image_background" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_IMAGE})` }} />
                  <div className="image_button_article_text_button_box">
                    <button type="button" className="image_button_article_text_button" onClick={handleClickBrickTemplateButton}>
                      이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼이미지버튼
                    </button>
                  </div>
                </article>
                <article className="brick_template_image_button_article">
                  <div className="image_button_article_image_background" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_IMAGE})` }} />
                  <div className="image_button_article_text_button_box">
                    <button type="button" className="image_button_article_text_button" onClick={handleClickBrickTemplateButton}>
                      이미지 버튼
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/* 1-4. 이미지 */}
        <div className="brick_template_container image">
          <div className={`template_contents_box ${isViewTypeHorizontal ? 'horizontal' : ''}`}>
            <div className={`template_slider_buttons_box ${showTemplateSliderButtonsBox}`}>
              <IconButton buttonClassName={`prev ${SLIDER_BUTTON_SHOW}`} handleClick={handleMoveSlider}>
                <IconArrowUpSmall />
              </IconButton>
              <IconButton buttonClassName={`next ${SLIDER_BUTTON_SHOW}`} handleClick={handleMoveSlider}>
                <IconArrowUpSmall />
              </IconButton>
            </div>
            <div className="slider">
              <div className="brick_template_image_article_box">
                <article className="brick_template_image_article" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_IMAGE})` }} />
                <article className="brick_template_image_article" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_IMAGE})` }} />
                <article className="brick_template_image_article" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_IMAGE})` }} />
              </div>
            </div>
          </div>
        </div>
        {/* 1-5. 미디어 */}
        <div className="brick_template_container media">
          <div className="template_contents_box">
            <div className="brick_template_media_box">미디어 템플릿 위치</div>
          </div>
        </div>
        {/* 2. 호스팅 템플릿 */}
        {/* 2-1. 쿠폰 */}
        <div className="hosting_template_container coupon">
          <div className="template_contents_box horizontal">
            <div className={`template_slider_buttons_box ${showTemplateSliderButtonsBox}`}>
              <IconButton buttonClassName={`prev ${SLIDER_BUTTON_SHOW}`} handleClick={handleMoveSlider}>
                <IconArrowUpSmall />
              </IconButton>
              <IconButton buttonClassName={`next ${SLIDER_BUTTON_SHOW}`} handleClick={handleMoveSlider}>
                <IconArrowUpSmall />
              </IconButton>
            </div>
            <div className="slider">
              <div className="hosting_template_coupon_articles_box">
                <article className="hosting_template_coupon_article">
                  <div className="coupon_top">
                    <div className="coupon_label">
                      <span className="coupon_label_text">보유 중 쿠폰</span>
                    </div>
                    <div className="coupon_icon_box">
                      <span className="coupon_icon">🎉</span>
                    </div>
                  </div>
                  <div className="coupon_description_box">
                    <p className="coupon_title">크리스마스 프로모션프로모션프로모션</p>
                    <p className="coupon_price">5,000원</p>
                    <p className="coupon_use_date">
                      <span className="coupon_timestamp">2021.01.12</span> 까지 사용가능
                    </p>
                  </div>
                  <div className="coupon_view_more_button_box">
                    <button className="view_more_button" type="button" onClick={handleViewMore}>
                      <span className="view_more_button_text">상세보기</span>
                    </button>
                  </div>
                </article>
                <article className="hosting_template_coupon_article">
                  <div className="coupon_top">
                    <div className="coupon_label">
                      <span className="coupon_label_text">보유 중 쿠폰</span>
                    </div>
                    <div className="coupon_icon_box">
                      <span className="coupon_icon">🎉</span>
                    </div>
                  </div>
                  <div className="coupon_description_box">
                    <p className="coupon_title">크리스마스 프로모션프로모션프로모션</p>
                    <p className="coupon_price">5,000원</p>
                    <p className="coupon_use_date">
                      <span className="coupon_timestamp">2021.01.12</span> 까지 사용가능
                    </p>
                  </div>
                  <div className="coupon_view_more_button_box">
                    <button className="view_more_button" type="button" onClick={handleViewMore}>
                      <span className="view_more_button_text">상세보기</span>
                    </button>
                  </div>
                </article>
                <article className="hosting_template_coupon_article">
                  <div className="coupon_top">
                    <div className="coupon_label">
                      <span className="coupon_label_text">보유 중 쿠폰</span>
                    </div>
                    <div className="coupon_icon_box">
                      <span className="coupon_icon">🎉</span>
                    </div>
                  </div>
                  <div className="coupon_description_box">
                    <p className="coupon_title">크리스마스 프로모션프로모션프로모션</p>
                    <p className="coupon_price">5,000원</p>
                    <p className="coupon_use_date">
                      <span className="coupon_timestamp">2021.01.12</span> 까지 사용가능
                    </p>
                  </div>
                  <div className="coupon_view_more_button_box">
                    <button className="view_more_button" type="button" onClick={handleViewMore}>
                      <span className="view_more_button_text">상세보기</span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/* 2-2. 배송조회 */}
        <div className="hosting_template_container deliver">
          <div className="template_contents_box horizontal">
            <div className={`template_slider_buttons_box ${showTemplateSliderButtonsBox}`}>
              <IconButton buttonClassName={`prev ${SLIDER_BUTTON_SHOW}`} handleClick={handleMoveSlider}>
                <IconArrowUpSmall />
              </IconButton>
              <IconButton buttonClassName={`next ${SLIDER_BUTTON_SHOW}`} handleClick={handleMoveSlider}>
                <IconArrowUpSmall />
              </IconButton>
            </div>
            <div className="slider">
              <div className="hosting_template_deliver_articles_box">
                <article className="hosting_template_deliver_article">
                  <div className="deliver_top">
                    <span className="deliver_state_text">배송완료</span>
                  </div>
                  <div className="deliver_description_box">
                    <div className="deliver_thumnail_image_box" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_PRODUCT})` }} />
                    <div className="deliver_description_text_box">
                      <p className="product_title">아디다스 이지 슬라이드 퓨어 슬라이드 퓨어퓨(재발매 버전) 어디까지 길어지는거니</p>
                      <p className="product_price">
                        <span>177,000</span>
                        <span>원</span>
                      </p>
                      <span className="product_remaining">수량 1</span>
                    </div>
                  </div>
                  <ul className="deliver_option_lists">
                    <li className="deliver_option">
                      <span className="deliver_option_title">주문옵션</span>
                      <span className="deliver_option_description">화이트 (옵션1) / L(옵션2) 길어질수있음</span>
                    </li>
                    <li className="deliver_option">
                      <span className="deliver_option_title">주문일자</span>
                      <span className="deliver_option_description">2022년 1월 18일</span>
                    </li>
                    <li className="deliver_option">
                      <span className="deliver_option_title">주문번호</span>
                      <span className="deliver_option_description">20220118-0000214</span>
                    </li>
                  </ul>
                  <div className="deliver_view_more_button_box">
                    <button className="view_more_button" type="button" onClick={handleViewMore}>
                      <span className="view_more_button_text">상세보기</span>
                    </button>
                  </div>
                </article>
                <article className="hosting_template_deliver_article">
                  <div className="deliver_top">
                    <span className="deliver_state_text">배송완료</span>
                  </div>
                  <div className="deliver_description_box">
                    <div className="deliver_thumnail_image_box" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_PRODUCT})` }} />
                    <div className="deliver_description_text_box">
                      <p className="product_title">아디다스 이지 슬라이드 퓨어 슬라이드 퓨어퓨(재발매 버전) 어디까지 길어지는거니</p>
                      <p className="product_price">
                        <span>177,000</span>
                        <span>원</span>
                      </p>
                      <span className="product_remaining">수량 1</span>
                    </div>
                  </div>
                  <ul className="deliver_option_lists">
                    <li className="deliver_option">
                      <span className="deliver_option_title">주문옵션</span>
                      <span className="deliver_option_description">화이트 (옵션1) / L(옵션2) 길어질수있음</span>
                    </li>
                    <li className="deliver_option">
                      <span className="deliver_option_title">주문일자</span>
                      <span className="deliver_option_description">2022년 1월 18일</span>
                    </li>
                    <li className="deliver_option">
                      <span className="deliver_option_title">주문번호</span>
                      <span className="deliver_option_description">20220118-0000214</span>
                    </li>
                  </ul>
                  <div className="deliver_view_more_button_box">
                    <button className="view_more_button" type="button" onClick={handleViewMore}>
                      <span className="view_more_button_text">상세보기</span>
                    </button>
                  </div>
                </article>
                <article className="hosting_template_deliver_article">
                  <div className="deliver_top">
                    <span className="deliver_state_text">배송완료</span>
                  </div>
                  <div className="deliver_description_box">
                    <div className="deliver_thumnail_image_box" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_PRODUCT})` }} />
                    <div className="deliver_description_text_box">
                      <p className="product_title">아디다스 이지 슬라이드 퓨어 슬라이드 퓨어퓨(재발매 버전) 어디까지 길어지는거니</p>
                      <p className="product_price">
                        <span>177,000</span>
                        <span>원</span>
                      </p>
                      <span className="product_remaining">수량 1</span>
                    </div>
                  </div>
                  <ul className="deliver_option_lists">
                    <li className="deliver_option">
                      <span className="deliver_option_title">주문옵션</span>
                      <span className="deliver_option_description">화이트 (옵션1) / L(옵션2) 길어질수있음</span>
                    </li>
                    <li className="deliver_option">
                      <span className="deliver_option_title">주문일자</span>
                      <span className="deliver_option_description">2022년 1월 18일</span>
                    </li>
                    <li className="deliver_option">
                      <span className="deliver_option_title">주문번호</span>
                      <span className="deliver_option_description">20220118-0000214</span>
                    </li>
                  </ul>
                  <div className="deliver_view_more_button_box">
                    <button className="view_more_button" type="button" onClick={handleViewMore}>
                      <span className="view_more_button_text">상세보기</span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/* 2-3. 상품추천 */}
        <div className="hosting_template_container recommand">
          <div className="template_contents_box horizontal">
            <div className={`template_slider_buttons_box ${showTemplateSliderButtonsBox}`}>
              <IconButton buttonClassName={`prev ${SLIDER_BUTTON_SHOW}`} handleClick={handleMoveSlider}>
                <IconArrowUpSmall />
              </IconButton>
              <IconButton buttonClassName={`next ${SLIDER_BUTTON_SHOW}`} handleClick={handleMoveSlider}>
                <IconArrowUpSmall />
              </IconButton>
            </div>
            <div className="slider">
              <div className="hosting_template_recommand_articles_box">
                <article className="hosting_template_recommand_article">
                  <div className="recommand_thumnail_box">
                    <div className="recommand_thumnail_image_box" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_PRODUCT})` }} />
                  </div>
                  <div className="recommand_description_box">
                    <p className="product_title">아디다스 이지 슬라이드 퓨어 슬라이드 퓨어퓨(재발매 버전) 어디까지 길어지는거니</p>
                    <div className="product_price_box">
                      <div className="product_price current">
                        <p className="current_product_price">
                          <span>14,000</span>
                          <span>원</span>
                        </p>
                        <p className="discount_price show">
                          <span>6,000</span>
                          <span>원 할인</span>
                        </p>
                      </div>
                      <div className="product_price old show">
                        <p className="old_product_price">
                          <span>20,000</span>
                          <span>원</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="recommand_view_more_button_box">
                    <button className="view_more_button" type="button" onClick={handleViewMore}>
                      <span className="view_more_button_text">상세보기</span>
                    </button>
                  </div>
                </article>
                <article className="hosting_template_recommand_article">
                  <div className="recommand_thumnail_box">
                    <div className="recommand_thumnail_image_box" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_PRODUCT})` }} />
                  </div>
                  <div className="recommand_description_box">
                    <p className="product_title">아디다스 이지 슬라이드 퓨어 슬라이드 퓨어퓨(재발매 버전) 어디까지 길어지는거니</p>
                    <div className="product_price_box">
                      <div className="product_price current">
                        <p className="current_product_price">
                          <span>14,000</span>
                          <span>원</span>
                        </p>
                        <p className="discount_price show">
                          <span>6,000</span>
                          <span>원 할인</span>
                        </p>
                      </div>
                      <div className="product_price old show">
                        <p className="old_product_price">
                          <span>20,000</span>
                          <span>원</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="recommand_view_more_button_box">
                    <button className="view_more_button" type="button" onClick={handleViewMore}>
                      <span className="view_more_button_text">상세보기</span>
                    </button>
                  </div>
                </article>
                <article className="hosting_template_recommand_article">
                  <div className="recommand_thumnail_box">
                    <div className="recommand_thumnail_image_box" style={{ backgroundImage: `url(${TEMPLATE_SAMPLE_PRODUCT})` }} />
                  </div>
                  <div className="recommand_description_box">
                    <p className="product_title">아디다스 이지 슬라이드 퓨어 슬라이드 퓨어퓨(재발매 버전) 어디까지 길어지는거니</p>
                    <div className="product_price_box">
                      <div className="product_price current">
                        <p className="current_product_price">
                          <span>14,000</span>
                          <span>원</span>
                        </p>
                        <p className="discount_price show">
                          <span>6,000</span>
                          <span>원 할인</span>
                        </p>
                      </div>
                      <div className="product_price old show">
                        <p className="old_product_price">
                          <span>20,000</span>
                          <span>원</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="recommand_view_more_button_box">
                    <button className="view_more_button" type="button" onClick={handleViewMore}>
                      <span className="view_more_button_text">상세보기</span>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper loading">
        <div className="message_contents_box">
          <span className="loading_dot" />
          <span className="loading_dot" />
          <span className="loading_dot" />
        </div>
      </div>
    </>
  );
};

export default ChatbotScenario;
