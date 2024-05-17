import Layout from "../../globals/components/Layout";
import Card from "../../globals/components/card/Card";
import HighlightsProduct from "../../globals/components/highlightProduct/HighlightsProduct";

import img1 from "/img1.webp";
import img2 from "/img2.webp";
import img3 from "/img3.jpeg";
import img4 from "/img4.jpeg";
import img5 from "/img5.webp";

const images = [img1, img2, img3, img4, img5];


const Home = () => {
  return (
    <Layout>
      <div className="heroContainer flex mx-auto max-w-screen-xl gap-2">
        <div className="category md:w-[15%] border-[1px] rounded-lg border-slate-500">
          <ul className="p-2">
            <li className="cursor-pointer ">Women's Fashion</li>
            <li className="cursor-pointer ">Health & Beauty</li>
            <li className="cursor-pointer ">Men's Fashion</li>
            <li className="cursor-pointer ">Watches & Accesories</li>
            <li className="cursor-pointer ">Electronic Devices</li>
            <li className="cursor-pointer ">Electronic Accessories</li>
            <li className="cursor-pointer ">Groceries & Pets</li>
            <li className="cursor-pointer ">Home & Lifestyle</li>
          </ul>
        </div>
        <div className="heroProduct w-full flex-1 border-[1px] rounded-lg border-slate-500">
          <HighlightsProduct imageUrls={images} />
        </div>
      </div>

      <div className="flex mx-auto max-w-screen-xl flex-col gap-4 mb-6">
        <h1 className="text-center">Top Products</h1>
        <div className="products mx-auto flex gap-4 flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
