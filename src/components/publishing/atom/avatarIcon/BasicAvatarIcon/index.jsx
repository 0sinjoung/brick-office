import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** Basic Avatar Icon
 * @avatarImage : avatar icon image src
 * @avatarStyle : inline style로 아바타 스타일 변경
 */
const BasicAvatarIcon = ({ avatarImage, avatarStyle }) => {
  return (
    <div className="avatar_icon_image_box" style={avatarStyle}>
      <img className="avatar_icon_image" src={avatarImage} alt="avatar icon" />
    </div>
  );
};

BasicAvatarIcon.propTypes = {
  avatarImage: PropTypes.string,
  avatarStyle: PropTypes.object,
};

BasicAvatarIcon.defaultProps = {
  avatarImage: '',
  avatarStyle: {},
};

export default BasicAvatarIcon;
