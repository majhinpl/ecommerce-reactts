import { Link } from "react-router-dom";
import { Product } from "../../types/productTypes";

interface CardProps {
  data: Product;
}

const Card: React.FC<CardProps> = ({ data }) => {
  console.log(data);

  return (
    <>
      <Link to={`/product/${data.id}`}>
        <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
          <img
            src={data?.productImageUrl}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              {data?.productName}
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              {data?.productDescription}
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Shop Now →
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
