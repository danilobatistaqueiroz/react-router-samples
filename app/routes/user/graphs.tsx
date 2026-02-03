import { Link, Outlet, useMatches } from "react-router";

export default function Graphs() {
  const matches = useMatches();
  console.log(matches);
  const parentMatch = matches.find((match) => match.id === 'routes/user/graphs');
  console.log(parentMatch);
  return (
    <div id="graphs">
      <Link to="/">← Go to demo</Link>
      <h1>dashboard graphs:</h1>
      <div>
        pizza:
      </div>
      <div>
        ranking:
      </div>
    </div>
  );
}
