import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const dummyPosts = [
  {
    id: 1,
    title: "The Power of Simplicity",
    author: "Jane Doe",
    category: "Design",
    date: "2025-07-21",
    content: [
      "In a world filled with noise and complexity, simplicity stands out.",
      "This post explores how embracing minimalism in design can improve usability and create more delightful experiences.",
      "We will walk through real-world examples from popular products and examine what makes them work."
    ],
  },
  {
    id: 2,
    title: "Microfrontend Architecture in 2025",
    author: "John Smith",
    category: "Engineering",
    date: "2025-07-20",
    content: [
      "Microfrontends are transforming the way we build scalable frontend applications.",
      "This article shares patterns, challenges, and solutions when using module federation with modern frameworks like Vite and React.",
      "Let’s dive into how teams are structuring applications to support autonomy and speed."
    ],
  },
];

const PostDetail: React.FC = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const post = dummyPosts.find((p) => p.id === Number(id));

  if (!post) return <p className="text-center mt-6">{t("postNotFound")}</p>;

  return (
    <div className="p-6 mt-20 max-w-3xl mx-auto">
      <div className="mb-4 text-sm text-base-content/70">
        <span>{t("category")}: <span className="font-semibold">{post.category}</span></span> ·{" "}
        <span>{t("author")}: {post.author}</span> ·{" "}
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>

      <h1 className="text-3xl font-bold text-primary mb-6">{post.title}</h1>

      {post.content.map((paragraph, idx) => (
        <p key={idx} className="mb-4 text-base-content leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default PostDetail;
