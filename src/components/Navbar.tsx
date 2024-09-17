import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="w-full h-16 flex items-center justify-between border-b border-zinc-300 px-10">
        <h2 className="text-xl font-bold">Ladies Haat</h2>
        <div className="flex gap-8">
          <Link href="/cart">
            <IoBagOutline size={30} />
          </Link>
        </div>
      </nav>
    </>
  );
}
