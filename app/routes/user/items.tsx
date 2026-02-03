import { Link, Outlet, useMatches } from "react-router";

export default function Items() {
  const matches = useMatches();
  console.log(matches);
  const parentMatch = matches.find((match) => match.id === 'routes/user/items');
  console.log(parentMatch);
  return (
    <div id="items">
      <Link to="/">← Go to demo</Link>
      <h1>dashboard items:</h1>
      <div>
        items
      </div>
    </div>
  );
}
