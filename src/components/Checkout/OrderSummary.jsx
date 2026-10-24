export default function OrderSummary({ totalPrice }) {
  const discount = totalPrice * 0.2;
  const deliveryFee = 4.24;
  const finalTotal = totalPrice - discount + deliveryFee;

  return (
    <section className="px-0 py-1">
      <h2 className="sr-only">Order Summary</h2>

      <div className="space-y-2 text-[10px]">
        <div className="mb-4 flex items-center justify-between text-xl font-semibold">
          <span>Total</span>
          <span>${finalTotal.toFixed(0)}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-medium">${totalPrice.toFixed(0)}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Discount (-20%)</span>
          <span className="font-medium text-gray-600">-${discount.toFixed(0)}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Delivery Fee</span>
          <span className="font-medium">${deliveryFee.toFixed(0)}</span>
        </div>

        <div className="mt-4 flex gap-2 border-t border-[#D9E0EE] pt-4">
          <form
            onSubmit={(event) => event.preventDefault()}
            className="flex min-w-0 flex-1 gap-2"
          >
            <input
              type="text"
              placeholder="Add promo code"
              className="min-w-0 flex-1 rounded-full border border-[#B7C2D8] bg-transparent px-4 py-2 text-[9px] outline-none focus:border-black"
            />
            <button
              type="submit"
              className="rounded-full bg-black px-5 py-2 text-[10px] font-medium text-white hover:bg-gray-800"
            >
              Apply
            </button>
          </form>
        </div>
        <button
          type="button"
          className="w-full rounded-full bg-black px-5 py-3 text-[10px] font-medium text-white transition hover:bg-gray-800"
        >
          Confirm your Pay
        </button>
      </div>
    </section>
  );
}
