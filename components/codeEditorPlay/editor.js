import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import { Controlled as ControlledEditor } from "react-codemirror2-react-17";
import * as style from "./editorApp.module.css";
import cn from "classnames";

let modeLoaded = false;
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  require("codemirror/mode/javascript/javascript");
  require("codemirror/mode/xml/xml");
  require("codemirror/mode/css/css");
  modeLoaded = true;
}

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="flex grow basis-0 flex-col p-2">
      <div
        className={cn(
          "flex justify-between text-white rounded-t-lg py-2 pr-2 pl-4",
          style.editorTitle
        )}
      >
        {displayName}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="grow rounded-b-lg overflow-hidden text-left"
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