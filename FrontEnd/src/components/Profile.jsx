import Avatar from "react-avatar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="w-[50%] border-l border-r border-gray-200 ">
        <div>
          <div className="flex items-center py-2">
            <Link
              to="/"
              className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <IoIosArrowRoundBack size="24px" />
            </Link>
            <div className="ml-2">
              <h1 className="font-bold text-lg">Sonu Kumar</h1>
              <p className="text-gray-500 text-sm">10 Post</p>
            </div>
          </div>
          <img
            src="https://www.mainstreethost.com/wp-content/uploads/2013/07/5-free-twitter-headers-east-coast-city-skylines-9.jpg"
            alt="Banner"
          />
          <div className="absolute top-[260Px] ml-5 border-4 boreder-white rounded-full">
            <Avatar
              src="https://pbs.twimg.com/profile_images/1637148657215471616/NZjVm47l_400x400.jpg"
              size="120"
              round={true}
            />
          </div>
          <div className="text-right m-4 ">
            <button className="px-4 py-1 rounded-full  border border-gray-400 hover:bg-gray-200">
              Edit Profile
            </button>
          </div>
          <div className="m-4">
            <h1 className="font-bold font-xl">Sonu</h1>
            <p>@Sonu</p>
          </div>
          <div className="m-4 text-sm">
            <p>
              🌐 Web Developer | React JS | Java Script | HTML | CSS | Tailwind
              | Designer | Figma | ✨ Transforming Ideas into Engaging Digital
              Experiences ✨
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
