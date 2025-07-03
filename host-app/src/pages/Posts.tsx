import React, { Suspense } from "react";
import { Link } from "react-router-dom";
const RemoteButton = React.lazy(() => import("remote_app/Button"));
const Loading = () => <div className="skeleton w-32 h-12">Loading...</div>;

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
      <h1 className="text-4xl font-bold text-primary mb-8">Latest Posts</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-200 shadow-md p-6">
            <h2 className="card-title text-lg text-primary">{post.title}</h2>
            <p className="text-base-content mt-2">{post.excerpt}</p>
            <div className="mt-4">
              <Suspense fallback={<Loading />}>
                <RemoteButton
                  text="Read More"
                  to={`/posts/${post.id}`}
                  LinkComponent={Link}
                />
              </Suspense>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
