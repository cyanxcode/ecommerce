import Link from "next/link";
import { IoArrowBack, IoBagOutline } from "react-icons/io5";
import Item from "./Item";
export default function List() {
  return (
    <>
      <div className="w-full h-16 flex items-center gap-12 justify-between border-b border-zinc-300 px-10 ">
        <Link href="/">
          <IoArrowBack size={25} />
        </Link>
        <Link href="/cart">
          <IoBagOutline size={30} />
        </Link>
      </div>

      <h2 className="text-3xl font-semibold m-10">Oversized Tshirts</h2>
      <div className="grid gap-10 grid-col">
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
}
