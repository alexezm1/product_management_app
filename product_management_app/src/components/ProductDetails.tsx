import { Form, useFetcher, useNavigate } from "react-router-dom";
import { formatCurrency } from "../helpers/utils";
import { Product } from "../types";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const fetcher = useFetcher();
  const isAvailable = product.availability;
  const isHidden = product.hidden;
  const navigate = useNavigate();

  return (
    <>
      <tr className="border-b ">
        <td className="p-2 text-lg text-gray-800">{product.name}</td>
        <td className="p-2 text-lg text-gray-800">
          {formatCurrency(product.price)}
        </td>
        <td className="p-2 text-lg text-gray-800">
          <fetcher.Form method="POST">
            <button
              type="submit"
              name="availability"
              className={` rounded-lg w-full p-2 uppercase font-bold text-xs border border-black ${
                isAvailable ? "text-black" : "text-red-500"
              }`}
              value={product.availability.toString()}
            >
              {isAvailable ? "Available" : "Not Available"}
            </button>
            <input type="hidden" name="id" value={product.id} />
          </fetcher.Form>
        </td>
        <td className="p-2 text-lg text-gray-800">
          <fetcher.Form method="POST">
            <button
              type="submit"
              name="hidden"
              className={` rounded-lg w-full p-2 uppercase font-bold text-xs border border-black ${
                isHidden ? " text-red-500 " : " text-black"
              }`}
              value={product.hidden.toString()}
            >
              {isHidden ? "Hidden" : "Not Hidden"}
            </button>
            <input type="hidden" name="id" value={product.id} />
          </fetcher.Form>
        </td>
        <td className="p-2 text-lg text-gray-800 ">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => navigate(`/products/${product.id}/edit`)}
              className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs"
            >
              Edit
            </button>
            <Form
              className="w-full"
              method="POST"
              action={`products/${product.id}/delete`}
              onSubmit={(e) => {
                if (!confirm("Delete?")) {
                  e.preventDefault();
                }
              }}
            >
              <input
                className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs"
                type="submit"
                value={"Delete"}
              />
            </Form>
          </div>
        </td>
      </tr>
    </>
  );
}
