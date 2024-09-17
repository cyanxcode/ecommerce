interface Props {
  size: string;
  clicked: boolean;
}
export default function Sizes({ size }: Props) {
  return (
    <>
      <div className="px-5 py-2 rounded-xl border-2 border-white bg-zinc-200 cursor-pointer">
        {size}
      </div>
    </>
  );
}
