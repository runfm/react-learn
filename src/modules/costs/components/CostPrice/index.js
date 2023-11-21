import { useState } from "react";

import Box from "shared/ui/components/Box";

import "./style.scss";

import * as txt from "../../constants/labels";

export default function CostPrice(props) {
  const [price, setPrice] = useState(props.value);

  const [editable, setEditable] = useState(false);

  function onNumberChangeHandler(e) {
    setPrice(e.target.value);
  }
  function onSaveClickHandler(e) {
    if (props.onChange) {
      props.onChange(price);
    }

    setEditable(false);
  }
  function onCancelClickHandler(e) {
    setPrice(props.value);
    setEditable(false);
  }
  function onPriceClickHandler(e) {
    if (!editable) setEditable(true);
  }

  let content;

  if (editable) {
    content = (
      <div className="cost-price-editor">
        <input type="number" value={price} onChange={onNumberChangeHandler} />
        <button onClick={onSaveClickHandler}>{txt.BTN_SAVE}</button>
        <button onClick={onCancelClickHandler}>{txt.BTN_CANCEL}</button>
      </div>
    );
  } else {
    content = <Box className="cost-price-text">${price}</Box>;
  }

  return (
    <div className="cost-price" onClick={onPriceClickHandler}>
      {content}
    </div>
  );
}
