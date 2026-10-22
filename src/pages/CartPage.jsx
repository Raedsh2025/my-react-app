import { Link } from "react-router-dom";
import { useCart } from "@/Store/use-cart";
function CartPage() {
  const cart = useCart((state) => state.cart);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const totalPrice = cart.reduce(
    (total, product) => total + Number(product.price),
    0
  );

  return (
    <main className="min-h-screen bg-[#EEF2FB] px-4 py-12 text-[#101D3B] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-3 text-sm text-gray-500">
          <Link to="/" className="transition hover:text-black">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#101D3B]">My Cart</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Your Cart
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Review your selected products before checkout.
            </p>
          </div>

          <span className="rounded-full bg-white px-4 py-2 text-sm font-medium">
            {cart.length} {cart.length === 1 ? "item" : "items"}
          </span>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="rounded-xl bg-white px-6 py-16 text-center shadow-sm">
            <h2 className="text-xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-500">
              Explore our collection and find something you love.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-block bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          /* Cart Content */
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            {/* Cart Items */}
            <div className="space-y-4">
              {cart.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="flex flex-wrap items-center justify-between gap-4 bg-white p-5 shadow-sm sm:flex-nowrap"
                >
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-lg font-semibold">
                      {product.title ?? product.name}
                    </h2>

                    <p className="mt-2 text-gray-500">
                      ${Number(product.price).toFixed(2)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(product.id)}
                    className="text-sm font-medium text-[#C900C1] transition hover:text-[#92008D]"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <aside className="bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">
                Order Summary
              </h2>

              <div className="mt-6 flex items-center justify-between border-b border-gray-100 pb-4 text-sm">
                <span className="text-gray-500">Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex items-center justify-between py-4">
                <span className="font-medium">Total</span>
                <span className="text-xl font-bold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                className="mt-3 w-full bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/shop"
                className="mt-4 block text-center text-sm text-gray-500 transition hover:text-black"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

export default CartPage;