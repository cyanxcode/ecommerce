import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="w-full h-16 flex items-center justify-between border-b border-zinc-300 px-10">
        <Link href="/">
          <h2 className="text-xl font-bold">Ladies Haat</h2>
        </Link>
        <div className="flex gap-8 collapse md:visible">
          <Link href="/event">
            <div className="text-md font-medium text-zinc-600">Event</div>
          </Link>
          <Link href="/">
            <div className="text-md font-medium text-zinc-600">Catalog</div>
          </Link>
          <Link href="/">
            <div className="text-md font-medium text-zinc-600">
              Our Services
            </div>
          </Link>
          <Link href="/">
            <div className="text-md font-medium text-zinc-600">About</div>
          </Link>
          <Link href="/">
            <div className="text-md font-medium text-zinc-600">Contact Us</div>
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="/cart">
            <IoBagOutline size={30} />
          </Link>
        </div>
      </nav>
    </>
  );
}
