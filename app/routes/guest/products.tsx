import { Link } from "react-router";
import type { Route } from "../../+types/root";
import Breadcrumbs from "../breadcrumb";
import { listProducts, type Product } from "../../api/products.server";

export async function loader({ params }: Route.LoaderArgs) {
  const products = await listProducts();
  return { products };
}

export const handle = {
  breadcrumb: () => <Link to="/home/products">Products</Link>,
};

export default function Products({loaderData}: Route.ComponentProps) {
  const { products } = loaderData;
  return (
    <div>
      <Breadcrumbs/>
      <h1>PRODUCTS</h1>
      <ol id="products">
      {products.map((product) => (
        <li key={product.id}><Link to={`/products/${product.id}`}>{product.name}</Link></li>
      ))}
      </ol>
    </div>
  )
}