import Collection from "@/components/Collection/Collection";

function ShopPage() {
  return (
    <main className="min-h-screen pt-8">
      <section className="container mx-auto px-4">
        <p className="text-sm uppercase tracking-[0.2em] text-[#C900C1]">
          Our catalog
        </p>
        <h1 className="mt-3 text-4xl font-bold">Shop furniture for every room</h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Explore our carefully selected collection of comfortable, modern pieces
          designed to make your home feel like yours.
        </p>
      </section>
      <Collection />
    </main>
  );
}

export default ShopPage;
