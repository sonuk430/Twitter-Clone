import { useState } from "react";

const Login = () => {
  const [isLogin, setLogin] = useState(true);

  function loginSignupHandler() {
    setLogin(!isLogin);
  }

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
            <form className="flex flex-col w-[60%]">
              {!isLogin && (
                <>
                  <input
                    type="text"
                    placeholder="Name"
                    className="outline-blue-500 border border-gray-800 px-3 py-1 font-semibold rounded-full my-1"
                  />

                  <input
                    type="text"
                    placeholder="UserName"
                    className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"
                  />
                </>
              )}

              <input
                type="text"
                placeholder="Email"
                className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"
              />

              <input
                type="text"
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
