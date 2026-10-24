import { Filter, Plus, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/use-products";
import { useCart } from "@/Store/use-cart";

const filterGroups = {
  Category: ["Sofas", "Chairs", "Tables", "Storage"],
  Room: ["Living room", "Dining room", "Bedroom"],
  Material: ["Upholstered", "Solid wood", "Metal"],
};

const getProductText = (product) =>
  [
    product.title,
    product.name,
    product.category,
    product.room,
    product.material,
    product.description,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

function ProductCard({ product }) {
  const addToCart = useCart((state) => state.addToCart);
  const image = product.image ?? product.imageUrl ?? "/images/placeholder.jpg";
  const title = product.title ?? product.name ?? "Furniture piece";

  return (
    <article className="min-w-0">
      <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-xl bg-white">
        <img src={image} alt={title} className="h-28 w-full object-cover transition duration-300 hover:scale-105 sm:h-32" />
      </Link>
      <div className="mt-2">
        <Link to={`/product/${product.id}`} className="line-clamp-1 text-[10px] text-[#63708A] hover:text-[#C900C1]">
          {title}
        </Link>
        <div className="mt-1 flex items-center justify-between gap-2">
          <span className="text-xs font-semibold">${Number(product.price).toFixed(0)}</span>
          <button type="button" onClick={() => addToCart(product)} className="rounded-full bg-[#DCE5FF] px-2 py-1 text-[8px] font-semibold text-[#53648D] hover:bg-[#C900C1] hover:text-white">
            <Plus size={9} className="mr-0.5 inline" /> Add to
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ShopCatalog({ search, onSearchChange }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortBy, setSortBy] = useState("featured");
  const { data: products = [], isLoading, isError } = useProducts();

  const visibleProducts = useMemo(() => products.filter((product) => {
    const title = (product.title ?? product.name ?? "").toLowerCase();
    const productText = getProductText(product);
    const activeGroups = Object.values(filterGroups).filter((values) =>
      values.some((value) => selectedFilters.includes(value)),
    );
    const matchesGroups = activeGroups.every((values) =>
      values
        .filter((value) => selectedFilters.includes(value))
        .some((value) => productText.includes(value.toLowerCase())),
    );

    return (
      title.includes(search.toLowerCase()) &&
      Number(product.price) <= maxPrice &&
      matchesGroups
    );
  }), [products, search, selectedFilters, maxPrice]);

  const sortedProducts = useMemo(() => {
    if (sortBy === "price-low") {
      return [...visibleProducts].sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortBy === "price-high") {
      return [...visibleProducts].sort((a, b) => Number(b.price) - Number(a.price));
    }

    return visibleProducts;
  }, [sortBy, visibleProducts]);

  const toggleFilter = (filter) => {
    setSelectedFilters((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter],
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setMaxPrice(2000);
  };

  return (
    <section id="catalog" className="px-6 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold">Shop all furniture</h2>
            <p className="mt-1 text-[10px] text-[#7D899F]">126 pieces designed for everyday living</p>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="rounded-full bg-[#FCE5FA] px-3 py-2 text-[#C900C1]">In stock ×</span>
            <label className="rounded-md bg-white px-3 py-2 text-[#65728A]">
              Sort by:{" "}
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="bg-transparent font-semibold outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </label>
          </div>
        </div>
        <div className="mt-7 grid gap-8 lg:grid-cols-[150px_minmax(0,1fr)]">
          <aside className="hidden rounded-xl bg-white p-4 lg:block">
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold">
              <Filter size={14} />
              Filters
              <button
                type="button"
                onClick={clearFilters}
                className="ml-auto text-[9px] text-[#C900C1]"
              >
                Clear all
              </button>
            </div>
            {Object.entries(filterGroups).map(([label, values]) => (
              <fieldset key={label} className="border-t border-[#E5EAF3] py-4">
                <legend className="mb-2 flex w-full justify-between text-[10px] font-semibold">{label}<span>≡</span></legend>
                <div className="space-y-2">
                  {values.map((value) => (
                    <label key={value} className="flex items-center gap-2 text-[9px] text-[#68758D]">
                      <input type="checkbox" checked={selectedFilters.includes(value)} onChange={() => toggleFilter(value)} className="accent-[#C900C1]" />
                      {value}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
            <div className="border-t border-[#E5EAF3] pt-4">
              <p className="text-[10px] font-semibold">Price range</p>
              <input
                type="range"
                min="0"
                max="2000"
                step="10"
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
                className="mt-3 w-full accent-[#C900C1]"
              />
              <div className="mt-1 flex justify-between text-[8px] text-[#7D899F]">
                <span>$0</span>
                <span>${maxPrice.toLocaleString()}</span>
              </div>
            </div>
          </aside>
          <div>
            <div className="mb-4 flex items-center gap-2 lg:hidden">
              <Search size={14} />
              <input value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search furniture..." className="w-full rounded-md border border-[#CAD3E3] bg-white px-3 py-2 text-xs outline-none" />
              <SlidersHorizontal size={16} />
            </div>
            {isLoading && <p className="py-8 text-sm text-[#7D899F]">Loading products...</p>}
            {isError && <p className="py-8 text-sm text-red-500">Could not load products.</p>}
            {!isLoading && !isError && (
              <>
                <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3">
                  {sortedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
                {sortedProducts.length === 0 && <p className="py-8 text-sm text-[#7D899F]">No furniture matches your filters.</p>}
                <div className="mt-8 flex items-center justify-between text-[10px] text-[#7D899F]">
                  <span>Showing 1–{sortedProducts.length} of {products.length} products</span>
                  <div className="flex gap-1"><button type="button" className="rounded-full bg-white px-2 py-1">←</button><button type="button" className="rounded-full bg-[#C900C1] px-2 py-1 text-white">1</button><button type="button" className="rounded-full bg-white px-2 py-1">2</button><button type="button" className="rounded-full bg-white px-2 py-1">3</button><button type="button" className="rounded-full bg-white px-2 py-1">→</button></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
