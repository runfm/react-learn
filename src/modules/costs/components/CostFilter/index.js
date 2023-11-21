import * as txt from '../../constants/labels'

export default function CostFilter(props) {
  function yearChangeHandler(e) {
    if(props.onChange){
        props.onChange(e.target.value)
    }
  }

  return (
    <div className="cost-filter">
      <span>{txt.YEAR_FILTER_CHOOSE}</span>
      <select className="cost-filter-selector" value={props.value} onChange={yearChangeHandler}>
        {props.options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
