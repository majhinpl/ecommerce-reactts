import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react";

type ImageSliderProps = {
  imageUrls: string[];
};

const HighlightsProduct = ({ imageUrls }: ImageSliderProps) => {
  const { imageIndex, setImageIndex } = useState(0);
  return (
    <div className="w-full overflow-hidden relative">
      <img src={imageUrls[imageIndex]} alt="" />
      <button>
        <ArrowBigLeft />
      </button>
      <button>
        <ArrowBigRight />
      </button>
    </div>
  );
};

export default HighlightsProduct;
