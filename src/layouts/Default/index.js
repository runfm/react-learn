import {
  Link,
  Outlet,
  NavLink,
  useLoaderData,
} from "react-router-dom";
import "./style.scss";

export function DefaultLayout(props) {
  const { uids } = useLoaderData();
  return (
    <div className="layout-default">
      <header>
        <Link to="/costs">Costs</Link>
        <Link to="/about">About</Link>
        <hr />
        {uids.map((u) => (
          <NavLink key={u} to={`/uid/${u}`}>{`uid: ${u}`}</NavLink>
        ))}
      </header>
      <main>{<Outlet />}</main>
      <footer>footer</footer>
    </div>
  );
}
