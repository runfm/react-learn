import CostItem from "../CostItem";
import Rounded from "shared/ui/components/Rounded";
import CostFilter from "../CostFilter";

import "./style.scss";
import { useState } from "react";
import * as txt  from '../../constants/labels'

export default function Costs(props) {
  const [yearFilter, setYearFilter] = useState(getYears()[0]);

  function onCostChange(v) {
    if (props.onChange) {
      const idx = props.data.findIndex((d) => d.id === v.id);
      if (idx > -1) {
        const newList = [...props.data];
        newList[idx] = v;
        props.onChange(newList);
      }
    }
  }

  function newItemClickHandler() {
    if (props.onAdd) {
      props.onAdd();
    }
  }

  function yearChangeHandler(v) {
    setYearFilter(v);
  }

  function getYears() {
    let result = [txt.NO_YEAR_FILTER];

    if (props.data?.length) {
      const years = props.data.map((d) => d.date.getFullYear().toString());
      result.push(...years);
    }

    return Array.from(new Set(result));
  }

  function getVisibleItems() {
    if (yearFilter === txt.NO_YEAR_FILTER) {
      return props.data;
    } else {
      return props.data.filter(
        (d) => d.date.getFullYear().toString() === yearFilter
      );
    }
  }

  return (
    <Rounded className="costs" shadowed>
      <CostFilter
        value={yearFilter}
        options={getYears()}
        onChange={yearChangeHandler}
      />
      {getVisibleItems().map((c) => (
        <CostItem key={c.id} data={c} onChange={onCostChange} />
      ))}
      <button onClick={newItemClickHandler}>{txt.NEW_ITEM}</button>
    </Rounded>
  );
}
