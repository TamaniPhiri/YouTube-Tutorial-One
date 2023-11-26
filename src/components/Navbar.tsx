import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-full flex items-center py-4 border-b border-gray-800 justify-between relative px-4 md:px-10">
      <div>Logo</div>
      <div className=" lg:flex hidden gap-8">
        <a href="">link 1</a>
        <a href="">link 2</a>
      </div>
      <button onClick={() => setOpen(!open)} className=" lg:hidden flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={`absolute lg:hidden h-screen top-[100%] ${
          open ? "right-0" : "-right-full"
        } w-2/3 border border-gray-600 flex flex-col duration-300`}
      >
        <div className=" flex flex-col gap-4">
          <a href="">link 1</a>
          <a href="">link 2</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
