import { useEffect } from "react";
import Layout from "../../globals/components/Layout";
import Card from "../../globals/components/card/Card";
import HighlightsProduct from "../../globals/components/highlightProduct/HighlightsProduct";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Categories from "../categories/Categories";
import { fetchProducts } from "../../store/productSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { status, product } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(product);
  return (
    <Layout>
      <Categories />
      <HighlightsProduct />

      <div className="flex mx-auto max-w-screen-xl flex-col gap-4 mb-6">
        <h1 className="text-center">Top Products</h1>
        <div className="products mx-auto flex gap-4 flex-wrap">
          {product.length > 0 &&
            product.map((pd) => {
              return <Card key={pd.id} data={pd} />;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
