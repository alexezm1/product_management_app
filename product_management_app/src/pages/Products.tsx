import { Link, useLoaderData } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import type { Products } from "../types";

export default function Products() {
  const products = useLoaderData() as Products;
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-800">Products</h2>
        <Link
          to={"/products/new"}
          className="rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Add Product
        </Link>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Availability</th>
              <th className="p-2 text-left">Hidden</th>
              <th className="p-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
