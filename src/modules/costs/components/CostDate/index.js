import { useState } from "react";
import "./style.scss";

import Box from "shared/ui/components/Box";

import { getMonthText, convertDate } from "./composables";

import * as txt from "../../constants/labels";

export default function CostDate(props) {
  const [date, setDate] = useState(props.date);
  const [editable, setEditable] = useState(false);

  function BoxClick() {
    if (!editable) setEditable(true);
  }

  function changeDateHandler(e) {
    const [year, month, day] = e.target.value.split("-");

    const newDate = new Date(year, month - 1, day);

    setDate(newDate);
  }

  function SaveDate() {
    setEditable(false);
    if (props.onChange) {
      props.onChange(date);
    }
  }

  function Cancel() {
    setDate(props.date);
    setEditable(false);
  }

  let content;

  if (editable) {
    content = (
      <div className="cost-date-editor">
        <input
          className="cost-date-editor-input"
          type="date"
          value={convertDate(date)}
          onChange={changeDateHandler}
        />
        <button className="cost-date-editor-save" onClick={SaveDate}>
          {txt.BTN_SAVE}
        </button>
        <button className="cost-date-editor-cancel" onClick={Cancel}>
          {txt.BTN_CANCEL}
        </button>
      </div>
    );
  } else {
    content = (
      <div className="cost-date-text">
        <div className="cost-date-text-day">{date.getDate()}</div>
        <div className="cost-date-text-month">{getMonthText(date)}</div>
        <div className="cost-date-text-year">{date.getFullYear()}</div>
      </div>
    );
  }

  return (
    <Box className="cost-date" onClick={BoxClick}>
      {content}
    </Box>
  );
}
