import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <>
      <div className="w-[100%]">
        <div>
          <div className="flex items-center justify-between border border-gray-200">
            <div className="hover:bg-gray-200 w-full text-center yx-4 py-3">
              <h1 className="font-semibold text-gray-600 text-lg cursor-pointer">
                For you
              </h1>
            </div>
            <div className="hover:bg-gray-200 w-full text-center yx-4 py-3">
              <h1 className="font-semibold text-gray-600 text-lg cursor-pointer ">
                Following
              </h1>
            </div>
          </div>

          <div>
            <div className="flex items-center p-4">
              <div>
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1637148657215471616/NZjVm47l_400x400.jpg"
                  size="40"
                  round={true}
                />
              </div>
              <input
                type="text"
                placeholder="What is Happening"
                className="w-full outline-none border-none text-lg ml-2"
              />
            </div>

            <div className="flex items-center justify-between p-4 border-b border-gray-300">
              <div>
                <CiImageOn />
              </div>
              <button className="bg-[#1D9BF0] px-4 py-1 text-lg text-white border-none rounded-full">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
