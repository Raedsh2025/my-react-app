import { Link } from "react-router-dom";
import { useCart } from "@/Store/use-cart";

function CartPage() {
  const cart = useCart((state) => state.cart);
  const removeFromCart = useCart((state) => state.removeFromCart);

  return (
    <main className="container mx-auto min-h-screen px-4 py-16">
      <h1 className="text-4xl font-bold">Your cart</h1>
      {cart.length === 0 ? (
        <div className="mt-10 rounded-2xl bg-white p-8 text-center">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link to="/shop" className="mt-5 inline-block rounded-full bg-black px-6 py-3 text-white">
            Browse collection
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-4">
          {cart.map((product, index) => (
            <div key={`${product.id}-${index}`} className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <div>
                <h2 className="font-semibold">{product.title}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
              <button type="button" onClick={() => removeFromCart(product.id)} className="text-sm text-[#C900C1]">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default CartPage;
