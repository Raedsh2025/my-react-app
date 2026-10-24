import { useState } from "react";
import ShopHero from "@/components/Shop/ShopHero";
import ShopCategories from "@/components/Shop/ShopCategories";
import ShopCatalog from "@/components/Shop/ShopCatalog";
import DesignBanner from "@/components/Shop/DesignBanner";

function ShopPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="bg-[#EEF2FB] text-[#101D3B]">
      <ShopHero search={search} onSearchChange={setSearch} />
      <ShopCategories />
      <ShopCatalog search={search} onSearchChange={setSearch} />
      <DesignBanner />
    </main>
  );
}

export default ShopPage;
