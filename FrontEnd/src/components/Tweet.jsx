import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <>
      <div className="border-b border-gray-200 ">
        <div>
          <div className="flex p-4">
            <Avatar
              src="https://pbs.twimg.com/profile_images/1637148657215471616/NZjVm47l_400x400.jpg"
              size="40"
              round={true}
            />
            <div className="ml-2 w-full">
              <div className="flex items-center ">
                <h1 className="font-bold ">Sonu</h1>
                <p className="text-gray-500 text-sm ml-1">@Sonu . 1m</p>
              </div>
              <div>
                <p>Hello Developer lets </p>
              </div>
              <div className="flex justify-between my-3">
                <div className="flex items-center  ">
                  <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                    <FaRegComment size="20px" />
                  </div>
                  <p>0</p>
                </div>
                <div className="flex items-center">
                  <div className="p-2 hover:bg-pink-200 rounded-full cursor-pointer">
                    <CiHeart size="24px" />
                  </div>
                  <p>0</p>
                </div>
                <div className="flex items-center">
                  <div className="p-2 hover:bg-orange-200 rounded-full cursor-pointer">
                    <CiBookmark size="24px" />
                  </div>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
