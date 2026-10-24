import { ArrowUpRight } from "lucide-react";
import categoryOne from "@/assets/Rectangle 1.svg";
import categoryTwo from "@/assets/Rectangle 3.svg";
import categoryThree from "@/assets/Rectangle 4.svg";
import categoryFour from "@/assets/Rectangle 11.svg";
import categoryFive from "@/assets/Rectangle 12.svg";

const categories = [
  { name: "Sofas", count: 42, image: categoryOne },
  { name: "Chairs", count: 64, image: categoryTwo },
  { name: "Tables", count: 38, image: categoryThree },
  { name: "Storage", count: 27, image: categoryFour },
  { name: "Lighting", count: 31, image: categoryFive },
];

export default function ShopCategories() {
  return (
    <section className="bg-white px-6 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#C900C1]">Shop by category</p>
            <h2 className="mt-1 text-2xl font-semibold">Start with the room in mind</h2>
          </div>
          <p className="max-w-xs text-right text-[10px] leading-4 text-[#7D899F]">
            From statement seating to the small details that pull a space together.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <a href="#catalog" key={category.name} className="group min-w-0">
              <div className="relative overflow-hidden rounded-xl">
                <img src={category.image} alt={category.name} className="h-24 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-28" />
                <span className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#101D3B]">
                  <ArrowUpRight size={13} />
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-semibold">{category.name}</span>
                <span className="text-[9px] text-[#7D899F]">{category.count} pieces</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
