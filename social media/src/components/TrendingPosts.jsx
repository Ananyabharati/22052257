import { useEffect, useState } from "react";
import { fetchUsers, fetchUserPosts, fetchPostComments } from "../utils/api";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const getTrendingPosts = async () => {
      const users = await fetchUsers();
      let allPosts = [];

      for (let userId in users.users) {
        const posts = await fetchUserPosts(userId);
        allPosts = [...allPosts, ...posts.posts];
      }

      let postCommentCounts = await Promise.all(
        allPosts.map(async (post) => {
          const comments = await fetchPostComments(post.id);
          return { ...post, commentCount: comments.comments.length };
        })
      );

      postCommentCounts.sort((a, b) => b.commentCount - a.commentCount);
      setTrendingPosts(postCommentCounts.slice(0, 3));
    };

    getTrendingPosts();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-4">Trending Posts</h2>
      {trendingPosts.map((post) => (
        <div key={post.id} className="mb-3 p-2 border-b">
          <p>{post.content}</p>
          <span className="text-sm text-gray-500">{post.commentCount} comments</span>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
