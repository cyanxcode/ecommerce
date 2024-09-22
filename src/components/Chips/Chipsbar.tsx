import Chips from "./Chips";

export default function Chipsbar() {
  return (
    <>
      <div className="flex gap-4 m-6 overflow-x-auto scrollbar h-12">
        <Chips next="Mens">Mens</Chips>
        <Chips next="Womens">Womens</Chips>
        <Chips next="Kids">Kids</Chips>
        <Chips next="Coorporate">Coorporate Products</Chips>
      </div>
    </>
  );
}
