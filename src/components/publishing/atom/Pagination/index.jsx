import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconPainationFirst } from 'assets/svg/icon/icon_pagination_first.svg';
import { ReactComponent as IconPainationPrev } from 'assets/svg/icon/icon_pagination_prev.svg';
import './style.scss';

/** 페이지네이션
 * @pageNumber : 
 */
const Pagination = ({ pageNumber }) => {
  const handleGoToPaginationIndex = () => {
    console.log("go to pagination's index");
  };
  const handleClickMovePaginationArrowButton = () => {
    console.log("click pagination's arrow button");
  };
  if (pageNumber === "1") {
    return (
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
    );
  } else {
    return (
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
    );
  }
};

Pagination.propTypes = {
  pageNumber: PropTypes.string,
};

Pagination.defaultProps = {
  children: '',
};

export default Pagination;
