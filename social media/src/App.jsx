import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import TopUsers from "./pages/TopUsers";
import Trending from "./pages/Trending";
import LiveFeed from "./pages/LiveFeed";

function App() {
  return (
    <Router>
      <div className="p-4 bg-gray-800 text-white">
        <nav className="flex space-x-4">
          <Link to="/" className="hover:underline">Login</Link>
          <Link to="/top-users" className="hover:underline">Top Users</Link>
          <Link to="/trending" className="hover:underline">Trending</Link>
          <Link to="/feed" className="hover:underline">Live Feed</Link>
        </nav>
      </div>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/feed" element={<LiveFeed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
