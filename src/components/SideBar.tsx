import { CiHome } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { MdOutlineStars } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";


const SideBar = () => {
  return (
    <div className="bg-white flex flex-col gap-2 py-4 rounded-xl">
      <button className="flex gap-2 items-center  p-3 pl-10  border-l-2 border-main">
        <CiHome />
        Home
      </button>
      <button className="flex gap-2 items-center  p-3 pl-10 text-gray-400 border-l-2 border-transparent hover:border-main  ">
        <IoNotificationsOutline />
        Notification
      </button>
      <button className="flex gap-2 items-center  p-3 pl-10 text-gray-400 border-l-2 border-transparent hover:border-main  ">
        <CiHeart />
        Shop
      </button>
      <button className="flex gap-2 items-center  p-3 pl-10 text-gray-400 border-l-2 border-transparent hover:border-main  ">
        <MdOutlineLocalPostOffice />
        Conversation
      </button>
      <button className="flex gap-2 items-center  p-3 pl-10 text-gray-400 border-l-2 border-transparent hover:border-main  ">
        <BiWallet />
        Wallet
      </button>
      <button className="flex gap-2 items-center  p-3 pl-10 text-gray-400 border-l-2 border-transparent hover:border-main  ">
        <MdOutlineStars />
        Subscription
      </button>
      <button className="flex gap-2 items-center  p-3 pl-10 text-gray-400 border-l-2 border-transparent hover:border-main  ">
        <FiUser />
        My Profile
      </button>
      <button className="flex gap-2 items-center  p-3 pl-10 text-gray-400 border-l-2 border-transparent hover:border-main  ">
        <CiSettings />
        Settings
      </button>
    </div>
  );
}

export default SideBar