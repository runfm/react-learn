import { NavLink, Outlet, useLocation, useLoaderData } from "react-router-dom";
import "./style.scss";

export function TestLayout(props) {
  const location = useLocation();
  const { uids } = useLoaderData();
  return (
    <div className="layout-test">
      <header>
        <NavLink to="/costs">Costs</NavLink>
        <NavLink to="/about">About</NavLink>
        <hr />
        {uids.map((u) => (
          <NavLink key={u} to={`/uid/${u}`}>{`uid: ${u}`}</NavLink>
        ))}
      </header>
      <main>{<Outlet />}</main>
      <footer>{`this is test layout. u are in ${location.pathname} location`}</footer>
    </div>
  );
}
