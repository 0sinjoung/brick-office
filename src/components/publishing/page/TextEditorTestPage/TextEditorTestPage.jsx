import React from 'react';
import PropTypes from 'prop-types';
import TextEditor from 'components/publishing/molecule/TextEditor';
import './TextEditorTestPage.scss';

const TextEditorTestPage = ({ children }) => {
  return (
    <div className="text_editor_wrap">
      <h1 className="text_editor_title">TEXT EDITOR</h1>
      <div className="text_editor_box">
        <TextEditor placeholder="edit text..."/>
      </div>
    </div>
  );
};

TextEditorTestPage.propTypes = {
  children: PropTypes.any,
};

TextEditorTestPage.defaultProps = {
  children: '',
};

export default TextEditorTestPage;
