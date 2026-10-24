
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getProducts } from "@/api/products";
import { useCart } from "@/Store/use-cart";

export default function YouMayLike() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", "you-may-like"],
    queryFn: getProducts,
  });

  const addToCart = useCart((state) => state.addToCart);

  // يدعم استجابات API التي تعيد مصفوفة مباشرة أو داخل products أو data
  const products = Array.isArray(data)
    ? data
    : Array.isArray(data?.products)
      ? data.products
      : Array.isArray(data?.data)
        ? data.data
        : [];

  if (isLoading) {
    return (
      <section className="py-10">
        <h2 className="mb-6 text-2xl font-bold text-[#101D3B]">
          You May Like
        </h2>

        <p className="text-sm text-[#8495B3]">
          Loading products...
        </p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-10">
        <h2 className="mb-6 text-2xl font-bold text-[#101D3B]">
          You May Like
        </h2>

        <p className="text-sm text-red-500">
          Failed to load recommended products.
        </p>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className=" container mx-auto py-10">
      <h2 className="mb-6 text-2xl font-bold text-[#101D3B]">
        You May Like
      </h2>

      <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <article
            key={product.id}
            className="card min-w-0 overflow-hidden bg-white"
          >
            <Link to={`/product-details/${product.id}`}>
              <img
                src={product.imageUrl || "/images/placeholder.jpg"}
                alt={product.name}
                className="h-[220px]  object-cover"
              />
            </Link>

            <div className="p-4">
              <Link to={`/product-details/${product.id}`}>
                <h3 className="mb-3 line-clamp-2 min-h-12 font-semibold text-[#101D3B]">
                  {product.name}
                </h3>
              </Link>

              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-[#101D3B]">
                  ${Number(product.price).toFixed(2)}
                </span>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="rounded-md bg-[#101D3B] px-3 py-2 text-sm text-white transition hover:bg-[#24365D]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

