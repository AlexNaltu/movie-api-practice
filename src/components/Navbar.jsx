import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <h1 className="text-red-600 text-xl sm:text-4xl font-bold cursor-pointer">NETFLIX</h1>
      <div className="text-white text-xs sm:text-base">
        <button className=" pr-4">Sign In</button>
        <button className="bg-red-600 px-6 py-4 rounded-md cursor-pointer">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
