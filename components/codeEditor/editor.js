import React from "react";
import { useState } from "react";
// import loadable from "@loadable/component";
import dynamic from "next/dynamic";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
// import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
// import { Controlled as ControlledEditor } from "react-codemirror2-react-17";
import * as style from "./editorApp.module.css";

// const CodeMirror = dynamic(() => import("react-codemirror2-react-17"), {
//   ssr: false,
// });

const CodeMirror = dynamic(
  () => {
    import("codemirror/mode/javascript/javascript");
    return import("react-codemirror2-react-17");
  },
  { ssr: false }
);
// const { ControlledEditor } = loadable(() =>
//   import("react-codemirror2-react-17")
// );

// let CodeMirror = null;
// if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
//   CodeMirror = require("react-codemirror2-react-17");
//   require("codemirror/mode/yaml/yaml");
//   require("codemirror/mode/dockerfile/dockerfile");
// }

export default function Editor(props) {
  const [code, setCode] = useState(null);
  const { language, displayName, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={style.editorContainer}>
      <div className={style.editorTitle}>{displayName}</div>
      {/*<ControlledEditor*/}
      {CodeMirror && (
        <CodeMirror
          onBeforeChange={(code) => setCode}
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
      )}
    </div>
  );
}
