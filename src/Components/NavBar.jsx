import { useState } from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const NavBar = () => {
  // State to Show Buttons on Click
  const [showButtons, setShowButtons] = useState(false);
  // Navigate to Different Routes
  const navigate = useNavigate();

  // Handle Button Log out
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  return (
    <nav className="h-[70px] bg-primary flex justify-between items-center px-[15px]">
      <h1 className="text-tertiary text-[22px] font-[700]">Issue Tracker</h1>
      <div className="relative z-20">
        <motion.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: showButtons ? 180 : 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 260 }}
          onClick={() => setShowButtons(!showButtons)}
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
        </motion.svg>
        {showButtons && (
          <div className="bg-primary py-4 px-2 rounded shadow-lg shadow-tertiary absolute top-8 right-0 flex flex-col space-y-2">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary text-tertiary py-1 px-2 rounded hover:bg-tertiary hover:text-secondary"
              onClick={() => navigate("/")}
            >
              Home
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary text-tertiary py-1 px-2 rounded hover:bg-tertiary hover:text-secondary"
              onClick={() => navigate("/signin")}
            >
              SignIn
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary text-tertiary py-1 px-2 rounded hover:bg-tertiary hover:text-secondary"
              onClick={() => navigate("/signup")}
            >
              SignUp
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary text-tertiary py-1 px-2 rounded hover:bg-red-900 hover:text-secondary"
              onClick={handleLogout}
            >
              Logout
            </motion.button>
            {/* Switch Color Mode */}
            <ColorModeSwitch />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
