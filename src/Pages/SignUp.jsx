export const SignUp = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[375px] bg-secondary flex flex-col md:w-[768px] 2xl:w-[1536px] 2xl:flex-row ">
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
              Join the Tracker Issue community! Create <br /> your account today
              to start managing your <br /> issues and collaborating with others
              <br />
              seamlessly.
            </p>
          </div>
          <div className="bg-secondary w-[100%] h-[80px] rounded-[100%] absolute top-[224px] md:top-[340px] 2xl:w-[130px] 2xl:h-[1024px] 2xl:top-0 2xl:left-[644px]"></div>
        </div>
        <div className="px-[35px] py-[15px] md:px-[70px] flex flex-col 2xl:justify-center 2xl:w-[829px]">
          <h1 className="text-tertiary font-[800] text-[24px] text-center mt-[35px] md:text-[40px] 2xl:text-[48px]">
            Register
          </h1>
          <form action="">
            {/* Input for Name */}
            <div className="mt-[65px] mb-[30px] 2xl:mt-[117px] 2xl:mb-[52px]">
              <label
                htmlFor="name"
                className="text-[20px] text-tertiary font-[700] md:text-[32px] 2xl:text-[40px]"
              >
                Name
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-[100%] h-[35px] border-0 border-b-[2px] border-primary bg-secondary text-[18px] outline-none pt-2 md:text-[24px] md:h-[40px] 2xl:text-[30px] 2xl:mt-[12px] 2xl:pb-[8px] 2xl:border-b-[3px]"
              />
            </div>
            {/* Input for Email */}
            <div className="my-[30px] md:my-[39px] 2xl:my-[52px]">
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
              />
            </div>
            {/* Input for Password */}
            <div className="my-[30px] md:my-[39px] 2xl:my-[52px]">
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
              />
            </div>
            {/* Input for Checkbox Remember */}
            <div className="flex items-center">
              <input
                type="checkbox"
                className="border-[2px] border-primary border-solid md:w-[18px] md:h-[18px] 2xl:w-[22px] 2xl:h-[22px]"
              />
              <label
                htmlFor="remember"
                className="text-[12px] font-[600] text-tertiary ml-[10px] md:text-[20px] 2xl:text-[24px]"
              >
                Remember password
              </label>
            </div>
            {/* Button */}
            <button className="w-[100%] h-[40px] font-[600] bg-primary rounded-[30px] p-[10px] gap[10px] border-none text-secondary mt-[41px] mb-[36px] md:h-[60px] md:mb-[73px] md:text-[24px] 2xl:mt-[52px] 2xl:mb-[72px]">
              Register
            </button>
            {/* Anchor Already Account */}
            <p className="text-tertiary text-[12px] font-[500] text-center md:text-[20px] 2xl:text-[24px]">
              Already Registered ?{" "}
              <a href="" className="text-primary decoration-none">
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
