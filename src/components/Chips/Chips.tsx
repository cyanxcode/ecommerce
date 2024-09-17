import Link from "next/link";

interface Props {
  children: string;
  next: string;
}
export default function Chips({ children, next }: Props) {
  return (
    <>
      <Link href={`/category?group=${next}`}>
        <div className="rounded-[4rem] h-8 px-10 border border-zinc-400 text-zinc-400 grid place-content-center">
          {children}
        </div>
      </Link>
    </>
  );
}
