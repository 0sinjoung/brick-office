import React from 'react';
import PropTypes from 'prop-types';
import BasicTextEditor from 'components/publishing/molecule/textEditor/BasicTextEditor';
import './TextEditorTestPage.scss';

const TextEditorTestPage = ({ children }) => {
  return (
    <div className="text_editor_page_wrap">
      <h1 className="text_editor_title">TEXT EDITOR</h1>
      <div className="text_editor_wrap">
        <BasicTextEditor placeholder="edit text..."/>
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
