import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../Services/API";

export default function SignIn() {
  // State for login data
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // Navigate to Different Routes
  const navigate = useNavigate();
  // State Modal
  const [message, setMessage] = useState("");

  // Handle data on Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login.email && login.password.length >= 8) {
      try {
        const response = await axios.post(`${API}/auth/local`, {
          identifier: login.email,
          password: login.password,
        });
        // Add the token
        localStorage.setItem("token", response.data.jwt);
        setMessage("Login successful!");
        // Redirect to the home page
        navigate("/");
      } catch (er) {
        console.error("There was an error registering!", er);
        setMessage("There was an error logging in!");
      }
    } else {
      setMessage(
        "Please enter a valid email and password (at least 8 characters)."
      );
    }

    // reset form on Submit data
    resetForm();
  };

  // Reset the form
  const resetForm = () => {
    setLogin({
      email: "",
      password: "",
    });
  };

  // Close a modal
  const closeModal = () => {
    setMessage("");
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
                required
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
                required
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
              <Link to={"/signUp"} className="text-primary decoration-none">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
      {message && (
        <div className="fixed inset-0 flex items-center justify-center bg-tertiary bg-opacity-50">
          <div className="bg-secondary p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Message</h2>
            <p>{message}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-primary text-secondary py-2 px-4 rounded border-none st2-hover"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
