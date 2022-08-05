import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** Onair avatar icon
 * @avatarImage : avatar icon image src
 * @onair : '' - light off || 'onair' - green light
 * @avatarStyle : inline style로 아바타 스타일 변경
 */
const OnairAvatarIcon = ({ avatarImage, onair, avatarStyle }) => {
  return (
    <div className={`onair_avatar_icon_image_box ${onair}`} style={avatarStyle}>
      <img className="onair_avatar_icon_image" src={avatarImage} alt="avatar icon" />
    </div>
  );
};

OnairAvatarIcon.propTypes = {
  avatarImage: PropTypes.string,
  onair: PropTypes.string,
  avatarStyle: PropTypes.object,
};

OnairAvatarIcon.defaultProps = {
  avatarImage: '',
  onair: '',
  avatarStyle: {},
};

export default OnairAvatarIcon;
