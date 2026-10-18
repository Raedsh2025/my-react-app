import BreadcrumbBasic from "@/components/Breadcrumb/BreadcrumbBasic";
import { Bookmark } from "lucide-react";
import { Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductGallery from "@/components/ProductGallery/ProductGallery";
import ProductInfo from "@/components/ProductInfo/ProductInfo";
import FrequentlyBought from "@/components/FrequentlyBought/FrequentlyBought";
import { useParams } from "react-router-dom";
import { useProduct } from "@/hooks/use-products";
function ProductDetails() {
  const [active, setActive] = useState("Product Info");
  const { productId } = useParams();
  const { data: product, isLoading, isError } = useProduct(productId);

  if (isLoading && !product) {
    return (
      <main className="container mx-auto min-h-screen px-4 py-20">
        Loading product...
      </main>
    );
  }

  if (isError && !product) {
    return (
      <main className="container mx-auto min-h-screen px-4 py-20 text-red-600">
        Unable to load this product.
      </main>
    );
  }

  if (!product) {
    return (
      <main className="container mx-auto min-h-screen px-4 py-20">
        Product not found.
      </main>
    );
  }

  return (
    <main
      id="product-details-page"
      className="container mx-auto min-h-screen px-4 py-8 sm:px-6 lg:py-12"
    >
      <div id="product-details">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <BreadcrumbBasic productName={product.title} />
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Save product"
              className="rounded-full p-2 text-gray-600 transition hover:bg-white hover:text-[#C900C1] focus-visible:outline-2 focus-visible:outline-[#C900C1]"
            >
              <Bookmark size={20} />
            </button>
            <button
              type="button"
              aria-label="Share product"
              className="rounded-full p-2 text-gray-600 transition hover:bg-white hover:text-[#C900C1] focus-visible:outline-2 focus-visible:outline-[#C900C1]"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <section
          id="image-content"
          className="grid items-start gap-8 rounded-3xl bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-12"
        >
          <div className="min-w-0">
            <ProductGallery product={product} />
          </div>
          <div className="min-w-0 border-t border-gray-100 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <ProductInfo product={product} />
          </div>
        </section>

        <section id="product-info" className="mt-10">
          <div className="flex flex-wrap gap-3">
            {["Product Info", "Description", "Feedback"].map((tab) => (
              <Button
                key={tab}
                onClick={() => setActive(tab)}
                className={
                  active === tab
                    ? "rounded-full bg-black text-white hover:bg-black"
                    : "rounded-full bg-gray-200 text-black hover:bg-gray-300"
                }
              >
                {tab}
              </Button>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl bg-white p-6">
          {active === "Product Info" && (
            <p className="text-gray-600">
              {product.description ||
                "A carefully selected piece for a comfortable, modern home."}
            </p>
          )}
          {active === "Description" && (
            <p className="text-gray-600">
              Category: {product.category}. Designed with everyday comfort and
              lasting style in mind.
            </p>
          )}
          {active === "Feedback" && (
            <p className="text-gray-600">
              Customer feedback will appear here after your purchase.
            </p>
          )}
        </section>

        <div id="R B T">
          <FrequentlyBought />
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
