import Link from "next/link";
import React from "react";
interface Props {
  img: string;
  text: string;
}

export default function Cards({ img, text }: Props) {
  return (
    <>
      <div className="h-auto relative rounded-xl overflow-hidden">
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/ladieshaat-4fffd.appspot.com/o/${img}?alt=media&token=be38e17e-643b-49e2-908d-cf0f1864690b`}
          className="w-full h-auto"
          alt="Oversized "
        />
        <div className="w-96 h-full bg-black bg-gradient-to-b from-transparent to-black absolute z-20"></div>
        <div className="font-medium text-lg lg:text-2xl lg:font-bold absolute bottom-2 text-white leading-5 ml-4 mb-4 z-30 pr-10">
          {text}
        </div>
      </div>
    </>
  );
}
