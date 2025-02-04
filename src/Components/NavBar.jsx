import { useState } from "react";

const NavBar = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleIconClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <nav className="h-[70px] bg-primary flex justify-between items-center px-[15px]">
      <h1 className="text-tertiary text-[22px] font-[700]">Issue Tracker</h1>
      <div className="relative z-10">
        <svg
          onClick={handleIconClick}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M1 5H22"
            stroke="#393D46"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1 12H22"
            stroke="#393D46"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M11.5 19H22"
            stroke="#393D46"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        {showButtons && (
          <div className="absolute top-8 right-0 flex flex-col space-y-2">
            <button className="bg-secondary text-tertiary py-1 px-2 rounded">
              Login
            </button>
            <button className="bg-secondary text-tertiary py-1 px-2 rounded">
              Register
            </button>
            <button className="bg-secondary text-tertiary py-1 px-2 rounded">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
