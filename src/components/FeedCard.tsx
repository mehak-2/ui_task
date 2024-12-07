import { CiMenuKebab } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoMdShareAlt } from "react-icons/io";

interface FeedCardProps {
  profile: string;
  name: string;
  id: string;
  desc: string;
  imgSrc: string;
}

const FeedCard = ({ profile, name, id, desc, imgSrc }: FeedCardProps) => {
  return (
    <div className="mb-3 mt- bg-white  rounded-xl p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="overflow-hidden rounded-xl w-12 h-12">
            <img
              width="60"
              height="40"
              className="rounded-xl"
              src={profile}
              alt={`${name}'s profile`}
            />
          </div>
          <div>
            <h1 className="font-light">{name}</h1>
            <h2 className="font-extralight text-gray-400 text-sm">{id}</h2>
          </div>
        </div>
        <div>
          <CiMenuKebab />
        </div>
      </div>

      <div className="mt-4 tracking-tighter">
        <p className="text-sm">
          {desc} <span className="text-pink-400">Read more</span>
        </p>
      </div>

      <div className="my-4">
        <img src={imgSrc} alt={`${name}'s post`} className="rounded-xl mt-4" />
      </div>
      <hr />
      <div className="flex gap-3 mt-2">
        <h2 className="flex items-center gap-1 text-gray-600">
          <CiHeart />
          9.8k
        </h2>
        <h2 className="flex items-center gap-1 text-gray-600">
          <IoChatbubbleOutline />
          9.1k
        </h2>
        <h2 className="flex items-center gap-1 text-gray-600">
          <IoMdShareAlt />
          6.1k
        </h2>
      </div>
    </div>
  );
};

export default FeedCard;
