"use client";
import Cards from "@/components/Category/Cards";
import Link from "next/link";
import { db, app } from "@/lib/firebase";

import { useSearchParams } from "next/navigation";
import { IoArrowBack, IoBagOutline } from "react-icons/io5";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Category() {
  const searchParams = useSearchParams();

  const title = searchParams.get("group");
  const [collections, setCollections] = useState<any>([]);
  const [docData, setDocData] = useState(null);

  useEffect(() => {
    getCollections();
  }, []);
  const getCollections = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));

    const productData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const filteredData = productData.filter(
      (x: any) => x.group == title?.toLowerCase()
    );
    setCollections(filteredData);
  };
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
      <h2 className="text-3xl font-semibold m-10">{title}</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-auto-fill-200 justify-evenly gap-10 flex-wrap px-10">
        {collections.map((group: any) => {
          return (
            <Link key={group.id} href={`/${group.url}?type=${group.title}`}>
              <Cards img="images/BLACK.jpg" key={group.id} text={group.title} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
