
import { Link } from "react-router-dom";
import { useCart } from "@/Store/use-cart";
import OrderPreview from "./OrderPreview";
import ShippingInformation from "./ShippingInformation";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";

export default function Checkout() {
  const cart = useCart((state) => state.cart);

  const totalPrice = cart.reduce(
    (total, product) =>
      total + Number(product.price) * (product.quantity || 1),
    0
  );

  return (
    <main className="min-h-screen w-full bg-[#EEF2FB] px-4 py-12 text-[#101D3B] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-2xl font-semibold text-gray-900">Checkout</h1>

        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <Link to="/cart" className="hover:text-black">
            My Cart
          </Link>
          <span>/</span>
          <span className="text-gray-900">Checkout</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-5">
          <ShippingInformation />
          <PaymentMethod />
          </div>

          <div className="space-y-5">
            <OrderPreview cart={cart} />
            <OrderSummary totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </main>
  );
}
