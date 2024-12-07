import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Portfolio from "./components/Portfolio";
import { CiSearch } from "react-icons/ci";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const App = () => {
  return (
    <div className="bg-gray-200 px-12 pt-4 flex flex-col  items-center min-h-screen">
      <nav className="sticky top-0 z-20 gap-3 w-full flex sm:flex-row flex-col justify-center sm:justify-normal w-full">
        <div className=" rounded-xl h-16 overflow-hidden m-1 w-1/4 bg-green-400">
          <img
            width=""
            src="https://images.unsplash.com/photo-1733411676590-951bda1c25b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="bg-white flex items-center px-6 text-xl justify-between rounded-xl m-1 w-2/4">
          <div className="flex w-4/5 ">
            <CiSearch className="mt-1 text-3xl" />
            <input
              className="flex items-center w-full  p-1 font-thin outline-none"
              type="text"
              placeholder="search"
            />
          </div>
          <div className="w-1/7 flex gap-1 items-center font-thin">
            <HiAdjustmentsHorizontal />
            <h1>Filters</h1>
          </div>
        </div>
        <div className="rounded-xl m-1 bg-main  w-1/4 flex justify-center items-center">
          <button className="!text-white">Become a seller</button>
        </div>
      </nav>

      <main className="gap-3 w-full flex  ">
        <div className="hidden sm:block sticky top-10 mt-2 rounded-xl pt-3 bg-white h-16  m-1 w-1/4">
          <SideBar />
        </div>
        <div className="flex items-center text-xl overflow-hidden justify-between rounded-xl mx-1 w-2/4">
          <Feed />
        </div>
        <div className="hidden sm:block sticky top-10 h-16 rounded-xl m-1 mt-2  w-1/4  ">
          <Portfolio />
        </div>
      </main>

      <div></div>
    </div>
  );
};

export default App;
