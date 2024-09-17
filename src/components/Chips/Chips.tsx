import Link from "next/link";

interface Props {
  children: string;
}
export default function Chips({ children }: Props) {
  return (
    <>
      <Link href="/category/2">
        <div className="rounded-[4rem] h-8 px-10 border border-zinc-400 text-zinc-400 grid place-content-center">
          {children}
        </div>
      </Link>
    </>
  );
}
