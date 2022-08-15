import React from 'react';
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import './style.scss';

// 사용하고 싶은 옵션, 나열 되었으면 하는 순서대로 나열
const toolbarOptions = [
  // ["link", "image", "video"],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
]; 


// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "background",
  "color",
  // "link",
  // "image",
  // "video",
];

const modules = {
  toolbar: {
    container: ".quill_editor_toolbar",
  },
  // handlers: {
  //   image: imageHandler,
  // },
};

const TextEditor = ({ placeholder, value, ...rest }) => {
  // const [value, setValue] = useState('');
  return (
    <><div id="toolbar">
      <button className="ql-bold" />
    </div><div id="editor"></div></>
  );
};

export default TextEditor;