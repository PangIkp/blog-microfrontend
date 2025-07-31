import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogCard from "remote_app/BlogCard";
import Button from "remote_app/Button";
import { getAllPosts } from "../api/blog";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getAllPosts();
        setPosts(response);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="min-h-screen bg-base-100 px-6 py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Latest Posts</h1>
        <Button
          text="Write a Blog"
          to="/blogform"
          LinkComponent={Link}
          className="btn-error"
        />
      </div>

      {loading ? (
        <p className="text-center text-primary">Loading...</p>
      ) : error ? (
        <p className="text-center text-error">{error}</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.content}
              LinkComponent={Link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
