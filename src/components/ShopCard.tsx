import { FaStar } from "react-icons/fa6";

interface ShopCardProps {
  imgSrc: string;
  title: string;
  price: string;
}

const ShopCard = ({ imgSrc, title, price }: ShopCardProps) => {
  return (
    <div className="p-2 min-w-[200px] bg-white rounded-lg shadow-md">
      <img
        className="w-full h-40 object-cover rounded-xl"
        src={imgSrc}
        alt={title}
      />
      <div className="mt-2">
        <h2 className="text-sm font-medium text-gray-700 truncate">{title}</h2>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-semibold text-gray-900">{price}</span>
          <div className="flex">
            <FaStar className="text-sm text-yellow-400" />
            <FaStar className="text-sm text-yellow-400" />
            <FaStar className="text-sm text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
