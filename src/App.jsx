import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./components/SearchResults";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="search/:query" element={<SearchResults />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
