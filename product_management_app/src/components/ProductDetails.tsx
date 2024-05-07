import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../helpers/utils";
import { Product } from "../types";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
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
          {isAvailable ? "Available" : "Not Available"}
        </td>
        <td className="p-2 text-lg text-gray-800">
          {isHidden ? "Hidden" : "Not Hidden"}
        </td>
        <td className="p-2 text-lg text-gray-800 ">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => navigate(`/products/${product.id}/edit`)}
              className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs"
            >
              Edit
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
