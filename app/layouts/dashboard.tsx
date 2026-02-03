import { Link, Outlet, useMatches } from "react-router";
import Breadcrumbs from "../routes/breadcrumb";

export const handle = {
  breadcrumb: () => <Link to="/dashboard">Dashboard</Link>,
};

export default function Dashboard() {
  return (
    <div>
      <Breadcrumbs/>
      <p id="index-page">
        Dashboard
        <br />
        Check out{" "}
        <a href="https://reactrouter.com">reactrouter</a>
        .
      </p>
      <Outlet/>
    </div>
  );
}