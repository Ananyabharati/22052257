import TrendingPosts from "../components/TrendingPosts";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
      <TrendingPosts />
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => navigate("/feed")}
      >
        Go to Live Feed
      </button>
    </div>
  );
};

export default Trending;
