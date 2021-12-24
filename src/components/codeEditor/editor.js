import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2-react-17";
import * as style from "./codeEditor.module.css";

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={style.editorContainer}>
      <div className={style.editorTitle}>{displayName}</div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className={style.codeMirrorWrapper}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
