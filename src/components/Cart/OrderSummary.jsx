import { LockKeyhole, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderSummary({
  totalItems,
  totalPrice,
}) {
  return (
    <aside className="rounded-xl    p-5 sm:p-7">
      <h2 className="mb-8 text-2xl font-bold text-[#101D3B]">
        Order Summary
      </h2>

      <div className="mb-5 flex items-center justify-between gap-3 text-sm text-[#405271]">
        <span>Total Items</span>

        <span className="font-medium text-[#101D3B]">
          {totalItems}
        </span>
      </div>

      <div className="mb-5 flex items-center justify-between gap-3 text-sm text-[#405271]">
        <span>Subtotal</span>

        <span className="font-medium text-[#101D3B]">
          ${Number(totalPrice).toFixed(2)}
        </span>
      </div>

      <div className="mb-5 h-px bg-[#DCE6FA]" />

      <div className="mb-7 flex items-center justify-between gap-3">
        <strong className="text-lg font-bold text-[#101D3B]">
          Total
        </strong>

        <strong className="text-2xl font-bold text-[#101D3B]">
          ${Number(totalPrice).toFixed(2)}
        </strong>
      </div>

      <Link
        to="/checkout"
        aria-disabled={totalItems === 0}
        onClick={(event) => {
          if (totalItems === 0) {
            event.preventDefault();
          }
        }}
        className="mb-3 flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#0D1B36] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#20385F] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <LockKeyhole size={18} />
        Go to Checkout
      </Link>

      <Link
        to="/"
        className="flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl border border-[#A9BEE5] px-4 py-3 text-sm font-bold text-[#405E91] transition hover:bg-[#EAF0FD]"
      >
        <ArrowRight size={19} />
        Continue Shopping
      </Link>
    </aside>
  );
}