import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** 단축키 chip
 * @children : number string
 */
const KeyboardShortcutChip = ({ children }) => {
  if (children === '') {
    return (
      <div className="keyboard_shortcut_chip">-</div>
    )
  } 
  if (children === '단축키 없음') {
    return (
      <div className="keyboard_shortcut_chip">단축키 없음</div>
    )
  } 

  return (
    <div className="keyboard_shortcut_chip">
      <span className="default_shortcut">Ctrl</span>
      <span> + </span> 
      <span className="default_shortcut">{children}</span>
    </div>
  );
};

KeyboardShortcutChip.propTypes = {
  children: PropTypes.string,
};

KeyboardShortcutChip.defaultProps = {
  children: '',
};

export default KeyboardShortcutChip;
