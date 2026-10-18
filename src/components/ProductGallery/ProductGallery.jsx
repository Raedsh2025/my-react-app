
import { useState } from "react";
import productgallery_1 from "../../assets/product-galery.svg";
import productgallery_2 from "../../assets/product-galery2.svg";
import productgallery_3 from "../../assets/product-galery3.svg";
import productgallery_4 from "../../assets/product-galery4.svg";
function ProductGallery({ product }) {
  const images = [
    product?.image,
    productgallery_1,
    productgallery_2,
    productgallery_3,
    productgallery_4,
  ].filter(Boolean);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4 sm:flex-row">

      {/* الصور الصغيرة على اليسار */}
      <div className="order-2 flex max-w-full gap-3 overflow-x-auto sm:order-1 sm:flex-col">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`h-20 w-20 overflow-hidden border-2 ${
              selectedImage === image
                ? "border-black"
                : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt="Product thumbnail"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* الصورة الكبيرة على اليمين */}
      <div className="order-1 aspect-square min-w-0 flex-1 overflow-hidden rounded-2xl bg-gray-100 sm:order-2">
        <img
          src={selectedImage}
          alt="Selected product"
          className="h-full w-full object-cover"
        />
      </div>

    </div>
  );
}

export default ProductGallery;
