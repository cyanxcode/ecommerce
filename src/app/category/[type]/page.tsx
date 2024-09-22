"use client";
import Link from "next/link";
import { IoArrowBack, IoBagOutline } from "react-icons/io5";
import Item from "./Item";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
export default function List() {
  const searchParams = useSearchParams();

  const title = searchParams.get("type");
  const tag = searchParams.get("tag");
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    const getProduct = async () => {
      const querySnapshot = await getDocs(collection(db, `${tag}`));

      const productData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productData);
    };
    getProduct();
  }, [tag]);

  /* eslint-disable */
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

      <h2 className="text-3xl font-semibold m-10">{title}</h2>

      <div className=" grid grid-cols-2 sm:grid-cols-auto-fill-200 justify-evenly gap-10 flex-wrap px-10">
        {products.map((x: any) => {
          return (
            <Link key={x} href={`/Items/${x.title}?id=${JSON.stringify(x)}`}>
              <Item title={x.title} price={x.price} images={x.images} />
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
