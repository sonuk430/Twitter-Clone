import Feed from "./Feed";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-between w-[80%] m-auto">
        <LeftSideBar />
        <Outlet />
        {/* <Feed /> */}
        <RightSideBar />
      </div>
    </>
  );
};

export default Home;
