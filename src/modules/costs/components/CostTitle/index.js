import { useState } from "react";
import "./style.scss";

import * as txt from "../../constants/labels";

export default function CostTitle(props) {
  const [title, setTitle] = useState(props.value);

  const [editable, setEditable] = useState(false);

  function textChangeHandler(e) {
    setTitle(e.target.value);
  }

  function titleClickHandler(e) {
    if (!editable) setEditable(true);
  }

  function saveClickHandler(e) {
    if (props.onChange) {
      props.onChange(title);
    }

    setEditable(false);
  }

  function cancelClickHandler(e) {
    setTitle(props.value);
    setEditable(false);
  }

  let content;

  if (editable) {
    content = (
      <div className="cost-title-editor">
        <input type="text" value={title} onChange={textChangeHandler} />
        <button onClick={saveClickHandler}>{txt.BTN_SAVE}</button>
        <button onClick={cancelClickHandler}>{txt.BTN_CANCEL}</button>
      </div>
    );
  } else {
    content = <div className="cost-title-header">{title}</div>;
  }

  return (
    <div className="cost-title" onClick={titleClickHandler}>
      {content}
    </div>
  );
}
