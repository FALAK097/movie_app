import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search/${search}`);
      setSearch("");
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-4 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-2xl font-bold text-white">
          <Link to="/">MovieApp</Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/top-rated" className="text-white hover:text-gray-400">
                Top Rated
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className="text-white hover:text-gray-400">
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for movies..."
              className="px-4 py-2 text-white bg-gray-700 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 rounded-r hover:bg-blue-600"
            >
              Search
            </button>
          </form>
        </div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col p-4 space-y-4 bg-gray-800">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/top-rated"
                className="text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Top Rated
              </Link>
            </li>
            <li>
              <Link
                to="/upcoming"
                className="text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Upcoming
              </Link>
            </li>
            <li>
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for movies..."
                  className="px-4 py-2 text-white bg-gray-700 rounded-l focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 rounded-r hover:bg-blue-600"
                  onClick={toggleMenu}
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
