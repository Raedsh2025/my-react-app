import { ArrowRight } from "lucide-react";

export default function DesignBanner() {
  return (
    <section className="px-6 pb-14 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#09090B] via-[#151119] to-[#6E006E] px-7 py-7 text-white sm:flex-row sm:items-center">
        <div>
          <p className="text-[9px] uppercase tracking-wide text-[#E06BD9]">Complimentary design help</p>
          <h2 className="mt-2 max-w-md text-xl font-medium">A room that feels like you, with a little help from us.</h2>
          <p className="mt-2 text-[9px] text-white/70">Share your space and style. Our design team will build a furniture plan around both.</p>
        </div>
        <button type="button" className="flex items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 text-[10px] font-semibold text-[#101D3B]">
          Book a free consultation <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
