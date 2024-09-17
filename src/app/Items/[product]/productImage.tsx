import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
export default function ProductImage() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full sm:w-[18rem] md:w-[24rem] cursor-grab"
      >
        <CarouselContent className="">
          <CarouselItem className="bg-blue-500 aspect-square">
            <img src="images/BLACK.jpg" className="" alt="Oversized " />
          </CarouselItem>
          <CarouselItem className="bg-red-500 aspect-square">
            <img src="images/BLACK.jpg" className="" alt="Oversized " />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
}
