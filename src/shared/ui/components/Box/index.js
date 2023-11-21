import "./style.scss";

import Rounded from "shared/ui/components/Rounded";

export default function Box(props) {
  const className = `box ${props.className}`;

  function clickHandler(e) {
    if (props.onClick) props.onClick();
  }

  return (
    <Rounded className={className} onClick={clickHandler}>
      {props.children}
    </Rounded>
  );
}
