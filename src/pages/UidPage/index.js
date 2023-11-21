import './style.scss'

import { useLoaderData, useNavigate } from "react-router-dom";

export default function UidPage(props) {
  const { id } = useLoaderData();
  const navigate = useNavigate();

  let btnContent;
  if (id === '44') {
    btnContent = <button onClick={() => navigate('/costs', { replace: false })}>redirect</button>;
  }

  return (
    <div className="uid-page">
      <div className="uid-page-box">
        {btnContent}
        <span>{`dis is uid page: ${id}`}</span>
      </div>
    </div>
  );
}
