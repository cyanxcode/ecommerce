import Cards from "@/components/Category/Cards";
import Link from "next/link";
import { IoArrowBack, IoBagOutline } from "react-icons/io5";

export default function Category() {
  return (
    <>
      <div className="w-full h-16 flex items-center gap-12 justify-between border-b border-zinc-300 px-10 ">
        <Link href="/">
          <IoArrowBack size={25} />
        </Link>
        <Link href="/cart">
          <IoBagOutline size={30} />
        </Link>
      </div>{" "}
      <h2 className="text-3xl font-semibold m-10">Mens</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-auto-fill-200 justify-evenly gap-10 flex-wrap px-10">
        <Cards img="images/BLACK.jpg" text="Oversized Tshirt" />
        <Cards img="images/BLACK.jpg" text="Oversized Tshirt" />
        <Cards img="images/BLACK.jpg" text="Oversized Tshirt" />
        <Cards img="images/BLACK.jpg" text="Oversized Tshirt" />
        <Cards img="images/BLACK.jpg" text="Oversized Tshirt" />
      </div>
    </>
  );
}
