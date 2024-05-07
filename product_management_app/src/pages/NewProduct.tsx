import { Form, Link, useActionData } from "react-router-dom";
import Error from "../components/Error";
import ProductForm from "../components/ProductForm";

export default function NewProduct() {
  const error = useActionData() as string;
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-800">Add Products</h2>
        <Link
          to={"/"}
          className="rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Go Back
        </Link>
      </div>

      <Form className="mt-10" method="POST">
        {error && <Error>{error}</Error>}
        <ProductForm />
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Create Product"
        />
      </Form>
    </>
  );
}
