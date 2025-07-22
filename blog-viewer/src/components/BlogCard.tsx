import React from "react";
import { useTranslation } from "react-i18next";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  LinkComponent: React.ElementType;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, excerpt, LinkComponent }) => {
  const { t } = useTranslation();

  return (
    <div className="card bg-base-200 shadow-md p-6">
      <h2 className="card-title text-lg text-primary">{title}</h2>
      <p className="text-base-content mt-2">{excerpt}</p>
      <div className="mt-4 flex justify-end">
        <LinkComponent
          to={`/posts/${id}`}
          className="text-primary hover:underline cursor-pointer"
        >
          {t("readMore")} &gt;
        </LinkComponent>
      </div>
    </div>
  );
};

export default BlogCard;
