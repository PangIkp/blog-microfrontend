import React, { Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import PostsPage from "./pages/Posts";
import BlogForm from "./pages/BlogForm";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/Register";

const RemoteButton = React.lazy(() => import("remote_app/Button"));
const RemoteNavbar = React.lazy(() => import("remote_app/Navbar"));
const RemoteFooter = React.lazy(() => import("remote_app/Footer"));

const Loading = () => <div className="skeleton w-32 h-12"></div>;
const LoadingNavbar = () => <div className="p-4">Loading menu...</div>;
const LoadingFooter = () => <div className="p-4">Loading footer...</div>;

const HomeContent = () => (
  <div className="flex flex-col md:flex-row items-center justify-between py-40 px-20 relative overflow-hidden px-0 max-w-full mx-0">
    {/* Left Text */}
    <div className="w-full md:w-1/2 z-10 px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6 text-primary">
        Create a blog
        <br />
        worth sharing
      </h1>
      <p className="text-lg text-base-content mb-8">
        Turn your ideas into meaningful content with free blogging tools. Fully
        accessible on both desktop and mobile devices.
      </p>

      <Suspense fallback={<Loading />}>
        <RemoteButton text="Write a Blog" to="/blogform" LinkComponent={Link} />
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
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={<LoadingNavbar />}>
        <RemoteNavbar LinkComponent={Link} />
      </Suspense>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/blogform" element={<BlogForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>

      <Suspense fallback={<LoadingFooter />}>
        <div>
          <RemoteFooter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
