import Enjoy from "@/components/Enjoy/Enjoy";
import CustomerStories from "@/components/Customer-Stories/Customer-Stories";

function AboutPage() {
  return (
    <main className="min-h-screen pt-8">
      <section className="container mx-auto px-4">
        <p className="text-sm uppercase tracking-[0.2em] text-[#C900C1]">
          About us
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold">
          Furniture that makes everyday life feel better
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          We bring together thoughtful design, durable materials, and accessible
          prices to help you create a home that reflects your style.
        </p>
      </section>
      <Enjoy />
      <CustomerStories />
    </main>
  );
}

export default AboutPage;
