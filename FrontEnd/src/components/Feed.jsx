import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

const Feed = () => {
  return (
    <>
      <div className="w-[60%] border border-gray-300">
        <CreatePost />
        <Tweet />
      </div>
    </>
  );
};

export default Feed;
