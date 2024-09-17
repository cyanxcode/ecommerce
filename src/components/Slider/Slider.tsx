import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Item from "./Item";
interface Props {
  children: JSX.Element[];
}
export default function Slider({ children }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
    >
      <CarouselContent className="">{children}</CarouselContent>
    </Carousel>
  );
}
