import Link from "next/link";

export default function Item() {
  return (
    <>
      <Link href="/Items/1">
        <div className="flex flex-col w-56 aspect-[3/4]">
          <img
            src="/public/images/BLACK.jpg"
            alt="Tshirt"
            className="w-full aspect-square bg-red-500"
          />
          <div className="px-2 mt-2">
            <h2 className="text-xl font-medium">Oversized Tshirt</h2>
            <h2 className="text-2xl font-semibold">Rs 299</h2>
          </div>
        </div>
      </Link>
    </>
  );
}
