import Link from "next/link";
import React from "react";
interface Props {
  img: string;
  text: string;
}

export default function Cards({ img, text }: Props) {
  return (
    <>
      <Link href="/category/2">
        <div className="h-auto relative rounded-xl overflow-hidden">
          <img src={img} className="w-full h-auto" alt="Oversized " />
          <div className="w-96 h-full bg-black bg-gradient-to-b from-transparent to-black absolute z-20"></div>
          <div className="font-medium text-lg lg:text-2xl lg:font-bold absolute bottom-2 text-white leading-5 ml-4 mb-4 z-30 pr-10">
            {text}
          </div>
        </div>
      </Link>
    </>
  );
}
