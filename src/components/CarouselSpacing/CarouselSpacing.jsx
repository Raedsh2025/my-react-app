import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar.jsx";
import { carouselData } from "./CarouselSpacing-data.js";

import { Card, CardContent, CardFooter } from "../ui/card.jsx";

export function CarouselSpacing() {
  return (
    <Carousel className="container relative  rounded-0! shadow-none!  w-full h-124  gap-4">
      <CarouselContent className=" gap-">
        {carouselData.map((data) => (
          <CarouselItem
            key={data.id}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <Card className="w-auto h-124 overflow-hidden bg-white shadow-[0px_4px_4px_0px_#D3DAEB] rounded-none ">
              {/* Image */}
              <img
                src={data.image}
                alt={data.title}
                className="w-auto h-63 object-cover rounded-none!"
              />

              {/* Content */}
              <CardContent className="w-auto h-30 mx-auto flex flex-col gap-4 p-32px">
                <p>Furniture</p>
                <h3 className="text-xl font-semibold">{data.title}</h3>

                <p className="mt-1 text-sm text-gray-500">{data.category}</p>
                <CardFooter className="w-auto h-10 flex items-center gap-4 p-0 ">
                  <Avatar>
                    <AvatarImage
                      src={data.avatar}
                      alt={data.name}
                      className="grayscale"
                    />
                    <AvatarFallback>{data.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="text-sm font-medium">{data.name}</p>
                    <p className="text-sm text-gray-500">{data.date}</p>
                  </div>
                </CardFooter>
              </CardContent>

              {/* Footer */}
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

    < div className="absolute -bottom-20 right-0 flex items-center gap-4">
  <CarouselPrevious className="static translate-x-0 translate-y-0" />
  <CarouselNext className="static translate-x-0 translate-y-0" />
</div>
    </Carousel>
  );
}
