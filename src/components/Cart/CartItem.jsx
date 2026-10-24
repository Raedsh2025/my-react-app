
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartItem({ item }) {
  if (!item) return null;

  const product = item.product ?? item;

  return (
    <article className="grid grid-cols-[100px_minmax(0,1fr)] gap-4 border-b border-[#E7EDF8] py-5 sm:grid-cols-[140px_minmax(0,1fr)] md:grid-cols-[1fr_1.5fr_1fr_0.7fr] md:items-center">
      {/* Product Image */}
      <div>
        <img
          src={product.imageUrl || "/images/placeholder.jpg"}
          alt={product.name || "Product"}
          className="h-[110px] w-full rounded-xl object-cover sm:h-[130px]"
        />
      </div>

      {/* Product Information */}
      <div className="min-w-0">
        <h3 className="mb-2 text-base font-bold text-[#101D3B]">
          {product.name} 
        </h3>
        

        <p className="text-sm leading-6 text-[#8495B3]">
          {product.description || "No description available"}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-2">
        <Trash2 size={17} />
        <button
          type="button"
          disabled
          aria-label="Decrease quantity"
          className="flex h-8 w-8 items-center justify-center rounded-md border border-[#DCE6FA] text-[#7183A4] disabled:opacity-50"
        >
          <Minus size={14} />
        </button>

        <span className="min-w-6 text-center text-sm font-semibold">
          {item.quantity ?? 1}
        </span>

        <button
          type="button"
          disabled
          aria-label="Increase quantity"
          className="flex h-8 w-8 items-center justify-center rounded-md border border-[#DCE6FA] text-[#7183A4] disabled:opacity-50"
        >
          <Plus size={14} />
        </button>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between gap-3 md:block">
        <strong className="text-lg font-bold text-[#101D3B]">
          $
          {(
            Number(product.price) * (item.quantity ?? 1)
          ).toFixed(2)}
        </strong>

        <button
          type="button"
          disabled
          aria-label="Remove product"
          className="text-[#8495B3] disabled:opacity-50"
        >
          
        </button>
      </div>
    </article>
  );
}
