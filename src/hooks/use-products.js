import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { products as localProducts } from "@/components/CardImage/card-date";

const PRODUCTS_URL = "https://test-backend.abdulrahman-hares.com/api/products";

const normalizeProduct = (product) => ({
  ...product,
  title: product.title ?? product.name,
  image: product.image ?? product.imageUrl,
  category: product.category?.name ?? product.category ?? "Furniture",
  price: Number(product.price),
});

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(PRODUCTS_URL);
      return response.data.map(normalizeProduct);
    },
    placeholderData: localProducts,
  });
}

export function useProduct(productId) {
  return useQuery({
    queryKey: ["products", productId],
    queryFn: async () => {
      const response = await axios.get(`${PRODUCTS_URL}/${productId}`);
      return normalizeProduct(response.data);
    },
    enabled: Boolean(productId),
    placeholderData: () => {
      const localProduct = localProducts.find(
        (product) => String(product.id) === String(productId),
      );
      return localProduct ? normalizeProduct(localProduct) : undefined;
    },
  });
}
