import { Link } from "react-router-dom";
import useCart from "@/hooks/useCart";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

export default function Cart() {
  const {
    data: cart,
    isLoading,
    isError,
    error,
  } = useCart();

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-[#EEF2FB]">
        <p className="text-sm text-[#7183A4]">
          Loading your cart...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 bg-[#EEF2FB]">
        <p className="text-sm text-red-500">
          {error?.message || "Failed to load your cart."}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="rounded-lg bg-[#101D3B] px-5 py-3 text-sm font-semibold text-white"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#EEF2FB] px-4 py-10 text-[#101D3B] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <nav className="mb-8 flex items-center gap-3 text-sm text-[#8192B0]">
          <Link to="/" className="hover:text-[#101D3B]">
            Home
          </Link>

          <span>/</span>

          <span className="font-semibold text-[#101D3B]">
            My Cart
          </span>
        </nav>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,2.1fr)_minmax(300px,0.95fr)]">
          <CartItems items={cart?.items ?? []} />

          <OrderSummary
            totalItems={cart?.totalItems ?? 0}
            totalPrice={cart?.totalPrice ?? 0}
          />
        </div>
      </div>
    </section>
  );
}