import { useState } from "react";

import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constent";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [uName, setuName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function loginSignupHandler() {
    setLogin(!isLogin);
  }

  //  login form  submitHandler fn

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login
      try {
        const res = await axios.post(
          `${USER_API_ENDPOINT}/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        // console.log(res);
        dispatch(getUser(res?.data?.user));
        if (res.data.success) {
          navigate("/");
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.success(error.res.data.message);
      }
    } else {
      // singUp
      try {
        const res = await axios.post(
          `${USER_API_ENDPOINT}/register`,
          {
            name,
            uName,
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        // console.log(res);
        if (res.data.success) {
          setLogin(true);
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.success(error.res.data.message);
      }
    }
  };

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex items-center justify-evenly w-[80%]">
          <div>
            <img
              className="ml-5"
              width={"220px"}
              src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.jpg"
              alt="Logo"
            />
          </div>
          <div>
            <div className="my-5">
              <h1 className="font-bold text-6xl">Happening now.</h1>
            </div>
            <h1 className="mt-4  mb-2 text-2xl font-bold ">
              {" "}
              {isLogin ? "Login" : "Singup"}
            </h1>
            <form onSubmit={submitHandler} className="flex flex-col w-[60%]">
              {!isLogin && (
                <>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="outline-blue-500 border border-gray-800 px-3 py-1 font-semibold rounded-full my-1"
                  />

                  <input
                    value={uName}
                    onChange={(e) => setuName(e.target.value)}
                    type="text"
                    placeholder="UserName"
                    className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"
                  />
                </>
              )}

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"
              />
              <button className="bg-[#1D9BF0] boredr-none py-2 rounded-full text-lg text-white my-4">
                {isLogin ? "Login" : "Create Account"}
              </button>

              <h1>
                {isLogin
                  ? "Do not have an account "
                  : "Already have an account? "}
                <span
                  onClick={loginSignupHandler}
                  className="font-bold text-blue-600 cursor-pointer"
                >
                  {isLogin ? "Singup" : "Login"}
                </span>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
