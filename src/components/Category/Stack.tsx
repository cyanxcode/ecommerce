import { CarouselItem } from "@/components/ui/carousel";
import Cards from "./Cards";
export default function Card() {
  return (
    <>
      <CarouselItem className="pl-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mx-5">
          <Cards img="BLACK.jpg" text="Oversized Tshirt" />
          <Cards img="BLACK.jpg" text="Oversized Tshirt" />
          <Cards img="BLACK.jpg" text="Oversized Tshirt" />
          <Cards img="BLACK.jpg" text="Oversized Tshirt" />
        </div>
      </CarouselItem>
    </>
  );
}
