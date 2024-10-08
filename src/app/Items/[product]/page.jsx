"use client";
import Link from "next/link";
import ProductImage from "./productImage";
import { IoArrowBack, IoBagOutline } from "react-icons/io5";
import Sizes from "./Sizes";
import Footer from "@/components/Footer";

import { useSearchParams } from "next/navigation";
export default function Product() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
    const data = JSON.parse(id);
    const title = data.title;
    const price = data.price;
    const description = data.description;
    const type = data.type;
    const fabric = data.fabric;
    const color = data.color;
    const images = data.images;

  return (
    <>
      <div className="w-full cursor-default h-16 flex items-center gap-12 justify-between border-b border-zinc-300 px-10 text-2xl font-semibold">
        <Link href="/">
          <IoArrowBack size={25} />
        </Link>
        <Link href="/cart">
          <IoBagOutline size={30} />
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row sm:mt-10 w-full md:justify-evenly md:gap-20">
        <ProductImage images={images} />
        <div className="flex flex-col p-10 gap-2">
          <h2 className="text-3xl font-medium">{title}</h2>
          <h2 className="text-2xl font-medium text-zinc-700">Rs {price}/-</h2>
          <div className="text-xl font-semibold text-zinc-700 mt-5">
            Select Size
          </div>
          <div className="flex gap-4">
            <Sizes size="S" clicked={false}></Sizes>
            <Sizes size="M" clicked={false}></Sizes>
            <Sizes size="L" clicked={false}></Sizes>
            <Sizes size="XL" clicked={false}></Sizes>
            <Sizes size="XXL" clicked={false}></Sizes>
          </div>
          <div className="w-[90%] cursor-pointer rounded-full bg-blue-500 h-12 text-center text-white font-bold pt-3 self-center mt-10">
            Add To Cart
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mx-8 sm:mx-20 mt-20">Description</h2>
        <p className="text-lg font-medium mx-5 sm:mx-32 mt-10">{description}</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold mx-8 sm:mx-20 mt-20">Details</h2>
        <div className="w-full flex justify-center mt-5">
          <table className="w-[90%] border-2 rounded-xl border-zinc-300 text-md">
            <tbody>
              <tr className="h-12 bg-zinc-100">
                <td className="h-12 px-4 py-2 border-r-2 border-gray-300 font-medium">
                  Type
                </td>
                <td className="h-12 px-4 py-2 border-r-2 border-gray-300">
                  {type}
                </td>
              </tr>
              <tr className="h-12 bg-gray-300">
                <td className="h-12 px-4 py-2 border-r-2 border-gray-300 font-medium">
                  Fabric
                </td>
                <td className="h-12 px-4 py-2 border-r-2 border-gray-300">
                  {fabric}
                </td>
              </tr>
              <tr className="h-12 bg-zinc-100">
                <td className="h-12 px-4 py-2 border-r-2 border-gray-300 font-medium">
                  Color
                </td>
                <td className="h-12 px-4 py-2 border-r-2 border-gray-300">
                  {color}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
