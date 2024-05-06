import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header className="bg-slate-800">
        <div className="text-center py-5">
          <h1 className="text-4xl font-extrabold text-white">
            Product Management
          </h1>
        </div>
      </header>

      <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow">
        <Outlet />
      </main>
    </>
  );
}
