function FrequentlyBought() {
  const products = [
    {
      id: 1,
      name: "Comfortable Soft Chair",
      price: 40.0,
      image: "/images/chair-1.png",
    },
    {
      id: 2,
      name: "Comfortable Soft Chair",
      price: 40.0,
      image: "/images/chair-2.png",
    },
    {
      id: 3,
      name: "New Soft Chair",
      price: 20.0,
      image: "/images/chair-3.png",
    },
    {
      id: 4,
      name: "Modern Soft Chair",
      price: 40.0,
      image: "/images/chair-4.png",
    },
  ];

  return (
    <section className="mt-12 w-full">

      {/* Section Title */}
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Frequently Bought Together
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white"
          >

            {/* Product Image */}
            <div className="h-52 w-full overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-3 p-4">

              <h3 className="text-base font-medium text-gray-900">
                {product.name}
              </h3>

              <div className="flex items-center justify-between gap-2">

                <span className="text-lg font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>

                <button className="bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800">
                  Add to Cart
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default FrequentlyBought;
