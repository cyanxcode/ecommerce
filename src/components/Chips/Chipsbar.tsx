import Chips from "./Chips";

export default function Chipsbar() {
  return (
    <>
      <div className="flex gap-4 m-6 overflow-x-auto scrollbar h-10">
        <Chips>Mens</Chips>
        <Chips>Womens</Chips>
        <Chips>Kids</Chips>
        <Chips>Oversized</Chips>
        <Chips>Bottom</Chips>
        <Chips>Shoes</Chips>
      </div>
    </>
  );
}
