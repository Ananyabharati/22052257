import Feed from "../components/Feed";
import { useNavigate } from "react-router-dom";

const LiveFeed = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Live Feed</h1>
      <Feed />
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => navigate("/")}
      >
        Go to Top Users
      </button>
    </div>
  );
};

export default LiveFeed;
