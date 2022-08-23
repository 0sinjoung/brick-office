import React, { useState } from 'react';
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
  return (
    <div className="custom_basic_toolbar">
      <div className="custom_basic_toolbar_buttons_box">
        <div className="custom_basic_toolbar_button_box text_bold" data-text-editor-toolbar-tooltip="text_bold">
          <button className="ql-bold">
            <IconTextBold />
          </button>
        </div>
        <div className="custom_basic_toolbar_button_box text_bold" data-text-editor-toolbar-tooltip="text_italic">
          <button className="ql-italic">
            <IconTextItalic />
          </button>
        </div>
        <div className="custom_basic_toolbar_button_box text_bold" data-text-editor-toolbar-tooltip="text_underline">
          <button className="ql-underline">
            <IconTextUnderline />
          </button>
        </div>
        <div className="custom_basic_toolbar_button_box text_bold" data-text-editor-toolbar-tooltip="text_color">
          <button className="ql-color">
            <IconTextColor />
          </button>
        </div>
        <div className="custom_basic_toolbar_button_box text_bold" data-text-editor-toolbar-tooltip="text_background">
          <button className="ql-background">
            <IconTextBackground />
          </button>
        </div>
        <div className="custom_basic_toolbar_button_box text_bold" data-text-editor-toolbar-tooltip="emoji">
          <button className="ql-background">
            <IconEmojiPannel />
          </button>
        </div>
      </div>
      <div className="custom_basic_toolbar_text_counter" />
    </div>
  );
};

const BasicTextEditor = ({ placeholderText, ...rest }) => {
  const [value, setValue] = useState('');
  console.log(value);

  const modules = {
    toolbar: {
      container: ".custom_basic_toolbar",
    },
    counter: {
      container: '.custom_basic_toolbar_text_counter',
      unit: '/1,500자'
    }
  };

  return (
    <div className="text_editor_container">
      <div id="text_editor_scrolling_container">
        <ReactQuill className="basic_quill" modules={modules} theme="" placeholder={placeholderText ? placeholderText : "내용을 작성해 주세요. (공백 포함 1,500자 이하)"} onChange={setValue} value={value} scrollingContainer="#text_editor_scrolling_container"/>
      </div>
      <CustomBasicToolbar />
    </div>
  );
};

export default BasicTextEditor;