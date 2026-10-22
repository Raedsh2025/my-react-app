import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import CartPage from "@/pages/CartPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductDetails from "@/pages/ProductDetails";
import Category from "@/pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/home-furniture" element={<ShopPage />} />
        <Route path="/shop/living-room" element={<ShopPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;