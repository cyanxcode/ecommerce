import Image from "next/image";
interface Props {
  title: string;
  price: number;
  images: string[];
}

/* eslint-disable */
export default function Item({ title, price, images }: Props) {
  return (
    <>
      <div className="flex flex-col w-full sm:w-56 aspect-[3/4]">
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/ladieshaat-4fffd.appspot.com/o/${images[0]}?alt=media&token=be38e17e-643b-49e2-908d-cf0f1864690b`}
          alt={images[0]}
          className="w-full aspect-square bg-gray-200 object-cover"
          width={100}
          height={100}
        ></Image>
        <img />
        <div className="px-2 mt-2">
          <h2 className="text-xl font-medium">{title}</h2>
          <h2 className="text-2xl font-semibold">Rs {price}/-</h2>
        </div>
      </div>
    </>
  );
}
