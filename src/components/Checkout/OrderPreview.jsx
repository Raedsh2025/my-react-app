export default function OrderPreview({ cart }) {
  return (
    <section className="px-0 py-1">
      <h2 className="mb-6 text-base font-semibold">Order Preview</h2>

      <div className="mb-2 hidden grid-cols-[100px_minmax(0,1fr)_60px_65px] gap-4 text-[9px] text-gray-500 sm:grid">
        <span>Items</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
      </div>

      {cart.length === 0 ? (
        <p className="py-6 text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-3">
          {cart.map((product, index) => (
            <div
              key={product.id ?? index}
              className="grid grid-cols-[90px_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[100px_minmax(0,1fr)_60px_65px]"
            >
              <img
                src={product.imageUrl || "/images/placeholder.jpg"}
                alt={product.name || "Product"}
                className="h-[60px] w-[90px] rounded-lg object-cover"
              />

              <div className="min-w-0">
                <h3 className="truncate text-[10px] font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-[7px] leading-3 text-gray-500">
                  {product.description || "The Modern Soft Chair boasts a harmonious design."}
                </p>
              </div>

              <span className="text-[10px] text-gray-700">
                <span className="sm:hidden">Qty: </span>
                {product.quantity || 1}
              </span>

              <span className="text-[10px] font-medium text-gray-900">
                ${(Number(product.price) * (product.quantity || 1)).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
