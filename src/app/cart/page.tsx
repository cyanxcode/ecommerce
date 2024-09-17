import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
export default function Cart() {
  return (
    <>
      <div className="w-full h-16 flex items-center gap-12 justify-start border-b border-zinc-300 px-5 text-2xl font-semibold">
        <Link href="/">
          <IoArrowBack size={25} />
        </Link>
        Cart
      </div>
      <div className="w-full h-[calc(100vh-5rem)] grid place-items-center text-2xl font-normal text-zinc-400">
        <div className="flex gap-2">
          <IoBagOutline size={30} />
          Your cart is empty
        </div>
      </div>
    </>
  );
}
