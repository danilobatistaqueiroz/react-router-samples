import { Link, Outlet, useMatches } from "react-router";

export default function Info() {
  const matches = useMatches();
  console.log(matches);
  const parentMatch = matches.find((match) => match.id === 'routes/info');
  console.log(parentMatch);
  return (
    <div id="info">
      <Link to="/">← Go to demo</Link>
      <h1>informations about me:</h1>
      <div>
        status:
      </div>
      <div>
        ranking:
      </div>
    </div>
  );
}
