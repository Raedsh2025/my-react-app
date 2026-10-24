import { Link } from "react-router-dom";
import { useCart } from "@/Store/use-cart";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

export default function Cart() {
  const cart = useCart((state) => state.cart);

  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price) * (item.quantity || 1),
    0
  );

  return (
    <section className=" min-h-screen bg-[#EEF2FB] px-4 py-10 text-[#101D3B] sm:px-6 lg:px-8">
      <div className="container mx-auto ">
        <nav className="mb-8 flex items-center gap-3 text-sm text-[#8192B0]">
          <Link to="/" className="hover:text-[#101D3B]">
            Home
          </Link>

          <span>/</span>

          <span className="font-semibold text-[#101D3B]">
            My Cart ({totalItems})
          </span>
        </nav>

        {cart.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
            <p className="text-lg font-semibold">
              Your cart is empty
            </p>

            <Link
              to="/"
              className="rounded-lg bg-[#101D3B] px-5 py-3 text-sm font-semibold text-white"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,2.1fr)_minmax(300px,0.95fr)]">
            <CartItems items={cart} />

            <OrderSummary
              totalItems={totalItems}
              totalPrice={totalPrice}
            />
          </div>
        )}
      </div>
    </section>
  );
}
