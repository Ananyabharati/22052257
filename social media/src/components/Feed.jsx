import { useEffect, useState } from "react";
import { fetchUsers, fetchUserPosts } from "../utils/api";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getFeedPosts = async () => {
      const users = await fetchUsers();
      let allPosts = [];

      for (let userId in users.users) {
        const posts = await fetchUserPosts(userId);
        allPosts = [...allPosts, ...posts.posts];
      }

      allPosts.sort((a, b) => b.id - a.id);
      setPosts(allPosts);
    };

    getFeedPosts();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-4">Live Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className="mb-3 p-2 border-b">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
