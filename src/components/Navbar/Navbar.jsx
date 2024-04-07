import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/career"}>Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 p-0 flex justify-between ">
      <div className="md:navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex gap-2 flex-1">
        {/* <a className="">Button</a> */}
        <FaCircleUser className="text-5xl" />
        <img src="" alt="" />
        <button className="font-semibold text-xl lg:px-10 px-6 py-3 bg-dark text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
