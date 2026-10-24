export default function ShippingInformation() {
  return (
    <section className="rounded-xl bg-white px-4 py-4 shadow-sm sm:px-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold">Shipping Information</h2>
        <button
          type="button"
          className="text-[10px] text-gray-500 underline underline-offset-2"
        >
          Change Address ✎
        </button>
      </div>

      <div className="space-y-1 text-[10px] leading-4 text-gray-500">
        <p>Mirpur-10, Road 14A</p>
        <p>Dhaka, Bangladesh</p>
        <p>01758187028</p>
      </div>
    </section>
  );
}
