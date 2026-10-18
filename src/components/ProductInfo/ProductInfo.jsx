import { useState } from "react";
import { useCart } from "@/Store/use-cart";

function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCart((state) => state.addToCart);
  const addProductToCart = () => {
    for (let index = 0; index < quantity; index += 1) addToCart(product);
  };

  return (
    <div className="flex flex-col gap-5">

      {/* Product Name */}
      <h1 className="text-3xl font-semibold text-gray-900">
        {product.title}
      </h1>

      {/* Description */}
      <p className="text-sm leading-6 text-gray-500">
        {product.description || `${product.title} is designed for comfort and modern living.`}
      </p>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>

        <span className="text-base text-gray-400 line-through">
          ${(product.price * 1.2).toFixed(2)}
        </span>
      </div>

      {/* Reviews and Sales */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-gray-500">(150 Reviews)</span>
        </div>

        <span className="text-gray-500">Sold 100</span>
      </div>

      {/* Stock Status */}
      <div>
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          In Stock
        </span>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-3 border-y border-gray-200 py-5">

        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-2xl">🚚</span>
          <span className="text-sm font-medium">Free Delivery</span>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-2xl">📦</span>
          <span className="text-sm font-medium">Free Delivery</span>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-2xl">🔒</span>
          <span className="text-sm font-medium">Secure Transaction</span>
        </div>

      </div>

      {/* Quantity and Buttons */}
      <div className="flex flex-wrap items-center gap-3">

        <div className="flex h-12 items-center border border-gray-300">
          <button type="button" className="px-3 text-lg" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>

          <span className="px-3">{quantity}</span>

          <button type="button" className="px-3 text-lg" onClick={() => setQuantity((value) => value + 1)}>+</button>
        </div>

        <button type="button" onClick={addProductToCart} className="h-12 flex-1 bg-black px-5 text-sm font-medium text-white transition hover:bg-gray-800">
          Add To Cart
        </button>

      </div>

      {/* Buy Now */}
      <button className="h-12 w-full border border-black text-sm font-medium text-black transition hover:bg-gray-100">
        Buy Now
      </button>

    </div>
  );
}

export default ProductInfo;
