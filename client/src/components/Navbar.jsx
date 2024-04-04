import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="top-0 flex justify-center items-center mt-6">
      <div className="flex justify-center items-center border-4 border-transparent rounded-full px-4 py-2 bg-black/15 hover:bg-black/40 duration-1000">
        <ul className="flex justify-center items-center gap-16">
          <li>
            <NavLink
              to="/"
              className="text-white text-lg font-semibold cursor-pointer"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className="text-white text-lg font-semibold cursor-pointer"
            >
              Build
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/templates"
              className="text-white text-lg font-semibold cursor-pointer"
            >
              Templates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white text-lg font-semibold cursor-pointer"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
