import {
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  redirect,
} from "react-router";

import appStylesHref from "./app.css?url";
import type { Route } from "./+types/root";
import { createEmptyContact } from "./api/contacts";

export default function App() {
  return <>
    <Outlet />
  </>;
}

// defines the HTTP headers to be sent with the response when server rendering
export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

//executa mutations
//https://reactrouter.com/start/framework/route-module
export async function action() {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

//apresenta o conteudo de HydrateFallback durante a execução de clientLoader, apos isso, apresenta o conteudo do componente.
export function HydrateFallback() {
  return (
    <div id="loading-splash">
      <div id="loading-splash-spinner" />
      <p>Loading, please wait...</p>
    </div>
  );
}

// ##################### Middleware ####################################
//executado antes e depois do documento, e data requests
// async function loggingMiddleware(
//   { request, context },
//   next,
// ) {
//   console.log(
//     `${new Date().toISOString()} ${request.method} ${request.url}`,
//   );
//   const start = performance.now();
//   await next(); // 👈 No Response returned
//   const duration = performance.now() - start;
//   console.log(
//     `logging middleware: ${new Date().toISOString()} (${duration}ms)`,
//   );
//   // ✅ No need to return anything
// }
// export const clientMiddleware = [loggingMiddleware];


// The Layout component is a special export for the root route.
// It acts as your document's "app shell" for all route components, HydrateFallback, and ErrorBoundary
// For more information, see https://reactrouter.com/explanation/special-files#layout-export
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={appStylesHref} />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// No lugar de apresentar o componente, apresenta o conteudo de ErrorBoundary quando ocorre um erro.
// The top most error boundary for the app, rendered when your app throws an error
// For more information, see https://reactrouter.com/start/framework/route-module#errorboundary
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main id="error-page">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
