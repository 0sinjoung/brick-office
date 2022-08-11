import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 채팅 리스트 Dim - 채팅 상담 | 챗봇 상담 사용
 * @children : dim text
 * @isDim : true | false
 */
const ChatListDim = ({ children, isDim }) => {
  return (
    <div className={`chat_list_dim ${isDim ? 'show' : ''}`}>
      <div className="chat_list_dim_text_box">
        <div className="chat_list_dim_text">{children}</div>
      </div>
    </div>
  );
};

ChatListDim.propTypes = {
  children: PropTypes.string,
  isDim: PropTypes.bool,
};

ChatListDim.defaultProps = {
  children: '',
  isDim: false,
};

export default ChatListDim;
