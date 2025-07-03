import React, { Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import PostsPage from "./pages/Posts";

const RemoteButton = React.lazy(() => import("remote_app/Button"));
const RemoteNavbar = React.lazy(() => import("remote_app/Navbar"));

const Loading = () => <div className="skeleton w-32 h-12"></div>;
const LoadingNavbar = () => <div className="p-4">Loading menu...</div>;

const HomeContent = () => (
  <div className="flex flex-col md:flex-row items-center justify-between py-40 px-20 relative overflow-hidden px-0 max-w-full mx-0">
    {/* Left Text */}
    <div className="w-full md:w-1/2 z-10 px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6 text-primary">
        สร้างเว็บบล็อกที่<br />
        ควรค่าแก่การแบ่งปัน
      </h1>
      <p className="text-lg text-base-content mb-8">
        เปลี่ยนประกายความคิดของคุณให้เป็นรูปธรรมด้วยข้อความบล็อกฟรี
        รองรับการจัดการได้ทั้งจากเดสก์ท็อปและอุปกรณ์พกพา
      </p>

      <Suspense fallback={<Loading />}>
        <RemoteButton text="เขียนบล็อก" onClick={() => alert("ไปเขียนบล็อกกัน!")} />
      </Suspense>
    </div>

    {/* Right Image */}
    <div className="w-full md:w-1/2 mt-10 md:mt-0 relative px-8">
      <img
        src="https://nestify.io/wp-content/webp-express/webp-images/uploads/2023/11/image-190.png.webp"
        alt="Blog Preview"
        className="w-full"
      />
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100 w-screen">
      <Suspense fallback={<LoadingNavbar />}>
        <RemoteNavbar LinkComponent={Link} />
      </Suspense>

      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/posts" element={<PostsPage />} />
        {/* เพิ่ม route อื่น ๆ ได้ตามต้องการ */}
      </Routes>
    </div>
  );
};

export default App;
