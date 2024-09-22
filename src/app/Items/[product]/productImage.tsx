import Image from "next/image";
interface Props {
  images?: string[];
}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
export default function ProductImage({ images }: Props) {
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
          {images &&
            images.map((image) => {
              return (
                <>
                  <CarouselItem className="aspect-square" key={image}>
                    <Image
                      src={`https://firebasestorage.googleapis.com/v0/b/ladieshaat-4fffd.appspot.com/o/${image}?alt=media&token=be38e17e-643b-49e2-908d-cf0f1864690b`}
                      className=""
                      alt="Oversized "
                      width={100}
                      height={100}
                    ></Image>
                  </CarouselItem>
                </>
              );
            })}
        </CarouselContent>
      </Carousel>
    </>
  );
}
