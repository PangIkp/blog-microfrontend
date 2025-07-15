import React from "react";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  LinkComponent: React.ElementType;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, excerpt, LinkComponent }) => {
  return (
    <div className="card bg-base-200 shadow-md p-6">
      <h2 className="card-title text-lg text-primary">{title}</h2>
      <p className="text-base-content mt-2">{excerpt}</p>
      <div className="mt-4 flex justify-end">
        <LinkComponent
          to={`/posts/${id}`}
          className="text-primary hover:underline cursor-pointer"
          aria-label={`Read more about ${title}`}
        >
          Read More &gt;
        </LinkComponent>
      </div>
    </div>
  );
};

export default BlogCard;
