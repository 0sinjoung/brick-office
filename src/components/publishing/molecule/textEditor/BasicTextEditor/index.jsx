import React, { useState, useRef, useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { ReactComponent as IconTextBold } from 'assets/svg/icon/textEditor/icon_text_bold.svg';
import { ReactComponent as IconTextItalic } from 'assets/svg/icon/textEditor/icon_text_italic.svg';
import { ReactComponent as IconTextUnderline } from 'assets/svg/icon/textEditor/icon_text_underline.svg';
import { ReactComponent as IconTextColor } from 'assets/svg/icon/textEditor/icon_text_color.svg';
import { ReactComponent as IconTextBackground } from 'assets/svg/icon/textEditor/icon_text_background.svg';
import { ReactComponent as IconEmojiPannel } from 'assets/svg/icon/textEditor/icon_emoji_pannel.svg';
import 'react-quill/dist/quill.snow.css';
import './style.scss';

const MAX_LENGTH = 1500;

class Counter {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.container = document.querySelector(options.container);
    quill.on('text-change', this.update.bind(this));
    quill.on('text-change', function (delta, old, source) {
      if (quill.getLength() > MAX_LENGTH) {
        quill.deleteText(MAX_LENGTH, quill.getLength());
      }
    });
    this.update();
  }

  calculate() {
    let text = this.quill.getText();
    return (text.length - 1);
  }

  update() {
    var length = this.calculate();
    var label = this.options.unit;
    this.container.innerText = length.toLocaleString() + label;
  }
}

Quill.register('modules/counter', Counter);

const CustomBasicToolbar = () => {
  const handleCustomEmoji = () => {
    console.log('open custom emoji pannel');
  };

  return (
    <div className="custom_basic_toolbar">
      <div className="custom_basic_toolbar_buttons_box">
        <div className="custom_basic_toolbar_button_box text_bold" data-text-editor-toolbar-tooltip="text_bold">
          <button type="button" className="ql-bold" />
          <IconTextBold />
        </div>
        <div className="custom_basic_toolbar_button_box text_italic" data-text-editor-toolbar-tooltip="text_italic">
          <button type="button" className="ql-italic" />
          <IconTextItalic />
        </div>
        <div className="custom_basic_toolbar_button_box text_underline" data-text-editor-toolbar-tooltip="text_underline">
          <button type="button" className="ql-underline" />
          <IconTextUnderline />
        </div>
        <div className="custom_basic_toolbar_button_box text_color" data-text-editor-toolbar-tooltip="text_color">
          <select className="ql-color" defaultValue="#161D24" />
          <IconTextColor />
        </div>
        <div className="custom_basic_toolbar_button_box text_background" data-text-editor-toolbar-tooltip="text_background">
          <select className="ql-background" defaultValue="#ffffff" />
          <IconTextBackground />
        </div>
        <div className="custom_basic_toolbar_button_box emoji" data-text-editor-toolbar-tooltip="emoji">
          <button type="button" className="emoji_pannel_button" onClick={handleCustomEmoji} />
          <IconEmojiPannel />
        </div>
      </div>
      <div className="custom_basic_toolbar_text_counter" />
    </div>
  );
};

const BasicTextEditor = ({ placeholderText, ...rest }) => {
  const refReactQuill = useRef(null);
  const [value, setValue] = useState('');

  const modules = {
    toolbar: {
      container: ".custom_basic_toolbar",
    },
    counter: {
      container: '.custom_basic_toolbar_text_counter',
      unit: '/1,500자'
    }
  };
  const formats = useMemo(
    () => ([
    'bold',
    'italic',
    'underline',
    'color',
    'background',
  ]), []);

  const handleClickTextArea = () => {
    refReactQuill.current?.focus();
  };
  const handleKeyUpTextArea = () => {};

  return (
    <div className="text_editor_container">
      <div className="text_editor_scrolling_container" role="button" tabIndex={0} onKeyUp={handleKeyUpTextArea} onClick={handleClickTextArea}>
        <ReactQuill ref={(el) => {
          if (el !== null) {
            refReactQuill.current = el;
          }
        }} className="basic_quill" modules={modules} formats={formats} theme="snow" placeholder={placeholderText} onChange={setValue} value={value} scrollingContainer=".text_editor_scrolling_container"/>
      </div>
      <CustomBasicToolbar />
    </div>
  );
};

export default BasicTextEditor;