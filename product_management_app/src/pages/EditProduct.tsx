import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import Error from "../components/Error";
import { Product } from "../types";

const availabilityOptions = [
  { name: "Available", value: true },
  { name: "Not Available", value: false },
];

const hiddenOptions = [
  { name: "Hidden", value: true },
  { name: "Not Hidden", value: false },
];

export default function EditProduct() {
  const error = useActionData() as string;
  const product = useLoaderData() as Product;
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-800">Edit Products</h2>
        <Link
          to={"/"}
          className="rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Go Back
        </Link>
      </div>

      <Form className="mt-10" method="PUT">
        {error && <Error>{error}</Error>}
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Product Name:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Product Name"
            name="name"
            defaultValue={product.name}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Price:
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Product Price"
            name="price"
            defaultValue={product.price}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="availability">
            Availability:
          </label>
          <select
            id="availability"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="availability"
            defaultValue={product?.availability.toString()}
          >
            {availabilityOptions.map((option) => (
              <option key={option.name} value={option.value.toString()}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="hidden">
            Hidden:
          </label>
          <select
            id="hidden"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="hidden"
            defaultValue={product?.hidden.toString()}
          >
            {hiddenOptions.map((option) => (
              <option key={option.name} value={option.value.toString()}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Update Product"
        />
      </Form>
    </>
  );
}
