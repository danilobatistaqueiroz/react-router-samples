import { Link, useMatches } from "react-router";
import Breadcrumbs from "./breadcrumb";

export const handle = {
  breadcrumb: () => <Link to="/home">Home</Link>,
};

export default function Home() {
  return (
    <div>
      <Breadcrumbs/>
      <p id="index-page">
        This is a demo for React Router.
        <br />
        Check out{" "}
        <a href="https://reactrouter.com">
          the docs at reactrouter.com
        </a>
        .
      </p>
    </div>
  );
}