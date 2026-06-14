import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          Chandana<span className="text-purple-500">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <FaBars className="md:hidden text-xl" />
      </div>
    </nav>
  );
}

export default Navbar;