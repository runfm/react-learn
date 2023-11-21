import "./style.scss";

import CostDate from "../CostDate";
import CostTitle from "../CostTitle";
import CostPrice from "../CostPrice";

import Rounded from "shared/ui/components/Rounded";

export default function CostItem(props) {
  function onDateChange(v) {
    if (props.onChange) {
      const val = {
        ...props.data,
        date: v,
      };

      props.onChange(val);
    }
  }

  function onTitleChange(v) {
    if (props.onChange) {
      const val = {
        ...props.data,
        title: v,
      };

      props.onChange(val);
    }
  }

  function onPriceChange(v) {
    if (props.onChange) {
      const val = {
        ...props.data,
        price: v,
      };

      props.onChange(val);
    }
  }

  return (
    <Rounded className="cost-item" shadowed>
      <CostDate date={props.data.date} onChange={onDateChange} />
      <CostTitle value={props.data.title} onChange={onTitleChange} />
      <CostPrice value={props.data.price} onChange={onPriceChange} />
    </Rounded>
  );
}
