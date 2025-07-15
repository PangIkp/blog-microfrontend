import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "remote_app/BlogCard";
import Button from "remote_app/Button";

const posts = [
  {
    id: 1,
    title: "เริ่มต้นสร้างบล็อกของคุณด้วย Microfrontend",
    excerpt:
      "Microfrontend ทำให้ระบบเว็บแยกส่วนได้ดีขึ้น พร้อมจัดการได้ง่ายทั้งฝั่ง dev และ deploy...",
  },
  {
    id: 2,
    title: "5 แนวคิดของการเขียนบล็อกที่ควรแชร์",
    excerpt: "จากประสบการณ์ตรง การเขียนบล็อกที่ดีควรมีองค์ประกอบเหล่านี้...",
  },
  {
    id: 3,
    title: "Tailwind CSS + DaisyUI กับธีม retro เท่ ๆ",
    excerpt:
      "ธีม retro ใน DaisyUI ทำให้เว็บไซต์ดูมีสไตล์ย้อนยุคทันสมัย ลองปรับใช้กับบล็อกของคุณดู...",
  },
];

const Posts: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100 px-6 py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Latest Posts</h1>
        <Button
          text="Write a Blog"
          to="/"
          LinkComponent={Link}
          className="btn-error"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            LinkComponent={Link}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
