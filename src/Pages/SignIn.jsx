import axios from "axios";
import { useState } from "react";

export default function SignIn() {
  // State for login data
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login.email && login.password) {
      try {
        const response = await axios.post(
          "http://localhost:1337/api/auth/local",
          {
            identifier: login.email,
            password: login.password,
          }
        );
        // Add the token
        localStorage.setItem("token", response.data.jwt);
      } catch (er) {
        console.error("There was an error registering!", er);
      }
    }

    // reset form on Submit data
    resetForm();
  };

  const resetForm = () => {
    setLogin({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[375px] bg-secondary flex flex-col md:w-[768px] 2xl:w-[1536px] 2xl:flex-row">
        <div className="bg-primary h-[266px] flex justify-center items-center relative md:h-[378px] 2xl:w-[706px] 2xl:h-[1024px]">
          <div className="flex flex-col">
            {/* Image */}
            <img
              className="w-[266px] h-[200px] mb-6 md:w-[427px] md:h-[350px] 2xl:w-[570px] 2xl:h-[460px]"
              src="../../public/logo.png"
              alt="Logo"
            />
            {/* Welcome Paragraph */}
            <p className="hidden 2xl:block text-[25px] text-white font-[500] text-center leading-[32px] relative bottom-[90px]">
              Welcome to the Tracker Issue app! <br /> Log in now to efficiently
              manage your <br /> issues and engage with other users.
            </p>
          </div>
          <div className="bg-secondary w-[100%] h-[80px] rounded-[100%] absolute top-[224px] md:top-[340px] 2xl:w-[130px] 2xl:h-[1024px] 2xl:top-0 2xl:left-[644px]"></div>
        </div>
        <div className="px-[35px] py-[15px] md:px-[70px] flex flex-col 2xl:justify-center 2xl:w-[829px]">
          <h1 className="text-tertiary font-[800] text-[24px] text-center mt-[35px] md:text-[40px] 2xl:text-[48px]">
            Sign In
          </h1>
          {/* Form data */}
          <form onSubmit={handleSubmit}>
            {/* Input for Email */}
            <div className="mb-[30px] md:mt-[63px] md:mb-[40px] 2xl:mt-[137px]">
              <label
                htmlFor="email"
                className="text-[20px] text-tertiary font-[700] md:text-[32px] 2xl:text-[40px]"
              >
                Email
              </label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[100%] h-[35px] border-0 border-b-[2px] border-primary bg-secondary text-[18px] outline-none pt-2 md:text-[24px] md:h-[40px] 2xl:text-[30px] 2xl:mt-[12px] 2xl:pb-[8px] 2xl:border-b-[3px]"
                name="email"
                value={login.email}
                onChange={handleChange}
              />
            </div>
            {/* Input for Password */}
            <div className="mt-[30px] mb-[22px] md:mb-[27px] 2xl:mt-[58px] 2xl:mb-[30px]">
              <label
                htmlFor="password"
                className="text-[20px] text-tertiary font-[700] md:text-[32px] 2xl:text-[40px]"
              >
                Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-[100%] h-[35px] border-0 border-b-[2px] border-primary bg-secondary text-[18px] outline-none pt-2 md:text-[24px] md:h-[40px] 2xl:text-[30px] 2xl:mt-[12px] 2xl:pb-[8px] 2xl:border-b-[3px]"
                name="password"
                value={login.password}
                onChange={handleChange}
              />
            </div>
            {/* Forget Password */}
            <p className="text-[12px] font-[600] text-right md:text-[20px] 2xl:text-[24px]">
              <a href="" className="text-tertiary ">
                Forgot password?
              </a>
            </p>
            {/* Button */}
            <button
              type="submit"
              className="w-[100%] h-[40px] font-[600] bg-primary rounded-[30px] p-[10px] gap[10px] border-none text-secondary mt-[41px] mb-[135px] md:h-[60px] md:text-[24px] md:mb-[210px] 2xl:mt-[58px] 2xl:mb-[252px] st1-hover"
            >
              Sign In
            </button>
            {/* Anchor Register */}
            <p className="text-tertiary text-[12px] font-[500] text-center md:text-[20px] 2xl:text-[24px]">
              Don’t have account ?{" "}
              <a href="" className="text-primary decoration-none">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
