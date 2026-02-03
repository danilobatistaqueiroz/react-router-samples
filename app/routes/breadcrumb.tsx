import { useMatches } from "react-router";

export default function Breadcrumbs() {
  let matches = useMatches();
  console.log(matches);
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.breadcrumb))
    .map((match) => match.handle.breadcrumb(match.data));

  return (
    <div>
      <p>BreadCrumbs</p>
      <ol>
        {crumbs.map((crumb, index) => (
          <li key={index}>{crumb}</li>
        ))}
      </ol>
    </div>
  );
}