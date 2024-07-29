import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";

const RightSideBar = () => {
  return (
    <>
      <div className="w-[25%]">
        <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none  ">
          <CiSearch size="20px" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none px-2"
          />
        </div>
        <div className="p-4 bg-gray-100 rounded-2xl my-3">
          <h1 className="font-bold text-lg ">Who to follow</h1>
          <div className="flex items-center justify-between my-3">
            <div className="flex">
              <div>
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1637148657215471616/NZjVm47l_400x400.jpg"
                  size="40"
                  round={true}
                />
              </div>
              <div className="ml-2 ">
                <h1 className="font-bold">Sonu</h1>
                <p className="text-sm">@Sonu</p>
              </div>
              <div>
                <button className="px-4 py-1 bg-black text-white rounded-full">
                  Profile
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between my-3">
            <div className="flex">
              <div>
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1637148657215471616/NZjVm47l_400x400.jpg"
                  size="40"
                  round={true}
                />
              </div>
              <div className="ml-2 ">
                <h1 className="font-bold">Sonu</h1>
                <p className="text-sm">@Sonu</p>
              </div>
              <div>
                <button className="px-4 py-1 bg-black text-white rounded-full">
                  Profile
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between my-3">
            <div className="flex">
              <div>
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1637148657215471616/NZjVm47l_400x400.jpg"
                  size="40"
                  round={true}
                />
              </div>
              <div className="ml-2 ">
                <h1 className="font-bold">Sonu</h1>
                <p className="text-sm">@Sonu</p>
              </div>
              <div>
                <button className="px-4 py-1 bg-black text-white rounded-full">
                  Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
