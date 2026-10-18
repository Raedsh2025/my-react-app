import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-[#C900C1]">404</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <Link to="/" className="mt-6 rounded-full bg-black px-6 py-3 text-white">
        Back home
      </Link>
    </main>
  );
}

export default NotFoundPage;
