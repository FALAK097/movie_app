import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="p-4 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-2xl font-bold text-white">
          <Link to="/">MovieApp</Link>
        </div>
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
        <div>
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
      </div>
    </nav>
  );
};

export default Navbar;
