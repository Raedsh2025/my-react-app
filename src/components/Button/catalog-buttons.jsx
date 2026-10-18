import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// const categories = [
//   "All Furniture",
//   "Bedroom",
//   "Living Room",
//   "Home Office",
//   "Dining Table",
//   "More",
// ];

export default function CatalogButtons() {
  const [active, setActive] = useState("All Furniture");
  const getCategory = async () => {
    const response = await axios.get(
      `https://test-backend.abdulrahman-hares.com/api/categories`,
    );
    return response.data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategory(),
  });
  return (
    <div className="flex gap-3 flex-wrap ">
      {data?.map((category) => (
        <Button
          key={category.id}
          onClick={() => {
            setActive(category.name);
          }}
          className={
            active === category.name
              ? "rounded-full bg-black text-white hover:bg-black"
              : "rounded-full bg-gray-200 text-black hover:bg-gray-300"
          }
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
