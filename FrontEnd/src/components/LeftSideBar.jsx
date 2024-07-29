import { CiHome } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { CiHashtag } from "react-icons/ci";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <>
      <div className="w-[20%]">
        <div>
          <img
            className="ml-4"
            width={"30px"}
            src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.jpg"
            alt="Logo"
          />
        </div>
        <div className="my-4">
          <Link
            to="/"
            className="flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer px-4 py-2"
          >
            <CiHome size="24px" />
            <h1 className="font-bold text-lg m-2">Home</h1>
          </Link>

          <div className="flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer px-4 py-2">
            <CiHashtag size="24px" />
            <h1 className="font-bold text-lg m-2">Explore</h1>
          </div>

          <div className="flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer px-4 py-2">
            <IoIosNotificationsOutline size="24px" />
            <h1 className="font-bold text-lg m-2">Notification</h1>
          </div>

          <Link
            to="/profile"
            className="flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer px-4 py-2"
          >
            <CiUser size="24px" />
            <h1 className="font-bold text-lg m-2">Profile</h1>
          </Link>

          <div className="flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer px-4 py-2">
            <CiBookmark size="24px" />
            <h1 className="font-bold text-lg m-2">Bookmark</h1>
          </div>

          <div className="flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer px-4 py-2">
            <IoIosLogOut size="24px" />
            <h1 className="font-bold text-lg m-2">LogOut</h1>
          </div>
          <button className="px-4 w-full  rounded-full py-2 border-none text-md bg-[#1D9BF0] text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
