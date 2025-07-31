import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getPostById } from "../api/blog";

interface Post {
  id: string;
  title: string;
  author: string;
  category: string;
  date: string;
  content: string[];
  imageUrl?: string; 
}

const PostDetail: React.FC = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostById(id as string);
        setPost(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className="text-center mt-6">{t("loading")}</p>;
  if (error) return <p className="text-center mt-6 text-error">{error}</p>;
  if (!post) return <p className="text-center mt-6">{t("postNotFound")}</p>;

  const paragraphs = Array.isArray(post.content) ? post.content : [];

 return (
  <div className="p-6 mt-20 max-w-3xl mx-auto">
    <div className="mb-4 text-sm text-base-content/70">
      <span>
        {t("category")}: <span className="font-semibold">{post.category}</span>
      </span>{" "}
      · <span>{t("author")}: {post.author}</span> ·{" "}
      <span>{new Date(post.date).toLocaleDateString()}</span>
    </div>

    <h1 className="text-3xl font-bold text-primary mb-6">{post.title}</h1>

    {/* {post.imageUrl && ( */}
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-auto rounded-lg mb-6"
      />
    {/* )} */}

    {paragraphs.map((paragraph, idx) => (
      <p key={idx} className="mb-4 text-base-content leading-relaxed text-justify">
        {paragraph}
      </p>
    ))}
  </div>
);
}

export default PostDetail;
