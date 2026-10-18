import { Button } from "../ui/button";
import { BadgeCustomColors } from "../BadgeCustomColors/BadgeCustomColors";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/Store/use-cart";
import { useProducts } from "@/hooks/use-products";
import { Link } from "react-router-dom";


export function CardImage() {
  const addToCart = useCart((state) => state.addToCart);
  const { data: products = [], isLoading, isError } = useProducts();

  return (
    <div>
      {isLoading && <p className="py-8 text-gray-500">Loading products...</p>}
      {isError && <p className="py-8 text-red-600">Could not load products.</p>}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="w-auto h-auto border-0! shadow-none! ">
      <Link to={`/product/${product.id}`} aria-label={`View ${product.title}`}>
        <img src={product.image} alt={product.title} className="h-1/2 w-full object-cover " />
      </Link>
      <CardContent className="pt-8 px-0!">
        <CardHeader className="p-0!">
        <CardTitle className="text-lg font-bold flex flex-col items-start gap-2">
          <Link to={`/product/${product.id}`} className="hover:text-[#C900C1]">{product.title}</Link>
          <BadgeCustomColors />
        </CardTitle>
        </CardHeader>
      </CardContent>
      <CardFooter className="flex items-center justify-between  p-0">
        <span className="text-xl font-bold slashed-zero tabular-nums" > ${product.price.toFixed(2)} </span>
        <Button variant="cardbutton" onClick={() => addToCart(product)}> Add to </Button>
      </CardFooter>
    </Card>
    ))}
      </div>
    </div>
  );
}
