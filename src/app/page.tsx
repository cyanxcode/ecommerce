import Stack from "@/components/Category/Stack";
import Chipsbar from "@/components/Chips/Chipsbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Item from "@/components/Slider/Item";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Chipsbar />
      <div className=" m-10">
        <Slider>
          <Item />
          <Item />
          <Item />
        </Slider>
      </div>
      <h2 className="text-2xl font-bold mx-10">Men's Categories</h2>
      <div className="mt-5">
        <Slider>
          <Stack />
          <Stack />
          <Stack />
        </Slider>
      </div>
      <h2 className="text-2xl font-bold mx-10 mt-10">Women's Categories</h2>
      <div className="mt-5">
        <Slider>
          <Stack />
          <Stack />
          <Stack />
        </Slider>
      </div>
      <Footer></Footer>
    </>
  );
}
