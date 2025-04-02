import { useEffect, useState } from "react";
import { fetchUsers, fetchUserPosts } from "../utils/api";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data.users);
      
      let userPostCounts = {};
      for (let userId in data.users) {
        const posts = await fetchUserPosts(userId);
        userPostCounts[userId] = posts.posts.length;
      }

      const sortedUsers = Object.entries(userPostCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      setTopUsers(sortedUsers);
    };

    getUsers();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-4">Top Users</h2>
      <ul>
        {topUsers.map(([userId, count]) => (
          <li key={userId} className="p-2 border-b">
            {users[userId]} - {count} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
