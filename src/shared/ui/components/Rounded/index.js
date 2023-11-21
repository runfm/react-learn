import "./style.scss";

export default function Rounded(props) {
  let shadowed = props.shadowed ? "rounded--shadowed" : "";
  const className = `rounded ${props.className} ${shadowed}`;

  function click(e) {
    if (props.onClick) props.onClick();
  }

  return (
    <div className={className} onClick={click}>
      {props.children}
    </div>
  );
}
