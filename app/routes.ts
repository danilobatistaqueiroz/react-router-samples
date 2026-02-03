import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  layout("layouts/sidebar.tsx", [
    index("routes/home.tsx"),
    route("products", "routes/guest/products.tsx"),
    route(
      "products/:productId", 
      "routes/guest/product-details.tsx"
    ),
    route("contacts/:contactId", "routes/guest/contact.tsx"),
    route(
      "contacts/:contactId/edit",
      "routes/guest/edit-contact.tsx",
    ),
    route(
      "contacts/:contactId/destroy",
      "routes/guest/destroy-contact.tsx",
    ),
  ]),
  ...prefix("dashboard", [
    index("routes/user/graphs.tsx"),
    layout("layouts/dashboard.tsx", [
      route("info", "routes/user/info.tsx"),
      route("items", "routes/user/items.tsx"),
    ]),
  ]),
  route("about", "routes/about.tsx"),
  route("*", "routes/catchall.tsx")
] satisfies RouteConfig;
