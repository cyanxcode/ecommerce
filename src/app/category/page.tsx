"use client";

import Cards from "@/components/Category/Cards";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { IoArrowBack, IoBagOutline } from "react-icons/io5";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAiYIhKKCEl8dBK9AVGRbpTyZS3U20BbXs",
  authDomain: "ladieshaat-4fffd.firebaseapp.com",
  projectId: "ladieshaat-4fffd",
  storageBucket: "ladieshaat-4fffd.appspot.com",
  messagingSenderId: "1025501390091",
  appId: "1:1025501390091:web:b6699bcaa3b3ac73732e0e",
  measurementId: "G-HVD73BN88C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default function Category() {
  const searchParams = useSearchParams();

  const title = searchParams.get("group");
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    getCollections();
  }, []);
  const getCollections = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));

    const productData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCollections(productData);
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
        {collections.map((group) => {
          return (
            <Link href={group.url}>
              <Cards img="images/BLACK.jpg" key={group.id} text={group.title} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
