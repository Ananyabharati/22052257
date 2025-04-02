import UserList from "../components/UserList";
import { useNavigate } from "react-router-dom";

const TopUsers = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      <UserList />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => navigate("/trending")}
      >
        Go to Trending Posts
      </button>
    </div>
  );
};

export default TopUsers;
