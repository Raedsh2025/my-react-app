import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/Rectangle 14.png";

export default function ShopHero({ search, onSearchChange }) {
  return (
    <section className="border-b border-[#E1E7F2] bg-[#EEF2FB]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:px-8 lg:grid-cols-2 lg:px-16 lg:py-16">
        <div>
          <nav className="mb-5 flex items-center gap-2 text-xs text-[#8090AB]">
            <Link to="/" className="hover:text-[#C900C1]">Home</Link>
            <span>/</span>
            <span className="text-[#C900C1]">Shop</span>
          </nav>
          <h1 className="max-w-md text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Furniture for every <span className="relative">way you live.
              <span className="absolute -bottom-3 left-0 h-1 w-24 rounded-full bg-[#C900C1]" />
            </span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-6 text-[#6D7890]">
            Thoughtful shapes, inviting textures, and modern pieces made to feel
            at home from day one.
          </p>
          <form
            className="mt-6 flex h-10 max-w-md items-center gap-2 rounded-md border border-[#CAD3E3] bg-white px-3"
            onSubmit={(event) => event.preventDefault()}
          >
            <Search size={15} className="text-[#101D3B]" />
            <label htmlFor="shop-search" className="sr-only">Search products</label>
            <input
              id="shop-search"
              name="search"
              type="search"
              placeholder="Search chairs, tables, sofas..."
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-[#8C98AD]"
            />
            <span className="rounded bg-[#F2F4F8] px-2 py-1 text-[9px] text-[#7D899F]">⌘ K</span>
          </form>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          <img src={heroImage} alt="Comfortable modern sofa" className="h-56 w-full object-cover sm:h-64" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] text-[#6D365F]">
            The soft living edit
          </span>
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-xl font-medium">Comfort, considered.</h2>
            <p className="mt-1 text-[10px]">Explore 180 lounge-worthy pieces</p>
          </div>
        </div>
      </div>
    </section>
  );
}
