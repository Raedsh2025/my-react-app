import CartItem from "./CartItem";

export default function CartItems({ items }) {
  if (!items.length) {
    return (
      <div className="rounded-xl border border-[#DCE6FA] bg-white px-5 py-16 text-center">
        <h3 className="mb-3 text-lg font-bold text-[#101D3B]">
          Your cart is empty
        </h3>

        <p className="text-sm text-[#8495B3]">
          Discover our collection and find something you love.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl px-4 sm:px-5">
      <div className="hidden min-h-16 grid-cols-[1fr_1.5fr_1fr_0.7fr] items-center gap-4 border-b border-[#E7EDF8] text-sm font-semibold text-[#7385A5] md:grid">
        <span>Items</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
      </div>

      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}