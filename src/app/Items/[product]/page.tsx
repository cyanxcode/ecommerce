import Link from "next/link";
import ProductImage from "./productImage";
import { IoArrowBack, IoBagOutline } from "react-icons/io5";
export default function Product() {
  return (
    <>
      <div className="w-full h-16 flex items-center gap-12 justify-between border-b border-zinc-300 px-10 text-2xl font-semibold">
        <Link href="/">
          <IoArrowBack size={25} />
        </Link>
        <Link href="/cart">
          <IoBagOutline size={30} />
        </Link>
      </div>
      <ProductImage />
    </>
  );
}
