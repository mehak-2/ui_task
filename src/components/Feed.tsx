import FeedCard from "./FeedCard";
import ShopCard from "./ShopCard";

interface FeedData {
  profile: string;
  name: string;
  id: string;
  desc: string;
  imgSrc: string;
  like: string;
  comments: string;
  share: string;
}

const feedData: FeedData[] = [
  {
    profile:
      "https://images.unsplash.com/photo-1707857041612-89f7d82efb38?q=80&w=2216&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lara Leones",
    id: "@thewallart",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More",
    imgSrc:
      "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: "9.8k",
    comments: "5.2k",
    share: "4.2k",
  },

  {
    profile:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Thomas J.",
    id: "@thecustomcreater",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More",
    imgSrc:
      "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: "9.8k",
    comments: "5.2k",
    share: "4.2k",
  },
];

const shopCards = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=2790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Wall Decor Framed Painting",
    price: "$199",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=2549&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Wall Decor Framed Painting",
    price: "$199",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1577083639236-0f560d3d771c?q=80&w=2867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Wall Decor Framed Painting",
    price: "$199",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664013263421-91e3a8101259?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Wall Decor Framed Painting",
    price: "$199",
  },
];

const Feed = () => {
  return (
    <div className="flex flex-col w-full py-2">
      <div className="flex flex-col w-full py-2">
        {feedData.map((feed, index) => (
          <FeedCard
            key={index}
            profile={feed.profile}
            name={feed.name}
            id={feed.id}
            desc={feed.desc}
            imgSrc={feed.imgSrc}
          />
        ))}
      </div>

      <div className="w-full gap-3 overflow-x-scroll scroll-x flex flex-row">
        {shopCards.map((feed, index) => (
          <ShopCard
            key={index}
            title={feed.title}
            price={feed.price}
            imgSrc={feed.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
