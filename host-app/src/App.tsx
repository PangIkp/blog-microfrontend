import React, { Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import PostsPage from "./pages/Posts";
import BlogForm from "./pages/BlogForm";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/Register";
import ProfilePage from "./pages/Profile";
import useAuthStore from "./stores/useAuthStore";
import EditProfilePage from "./pages/EditProfile";
import PostDetail from "./pages/PostDetail";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import "./i18n";

const RemoteButton = React.lazy(() => import("remote_app/Button"));
const RemoteNavbar = React.lazy(() => import("remote_app/Navbar"));
const RemoteFooter = React.lazy(() => import("remote_app/Footer"));

const Loading = () => <div className="skeleton w-32 h-12"></div>;
const LoadingNavbar = () => <div className="p-4">Loading menu...</div>;
const LoadingFooter = () => <div className="p-4">Loading footer...</div>;

const HomeContent = () => {
  const { t } = useTranslation();

  // ใส่ fallback text กัน t() คืน undefined
  const homeTitle = t("homeTitle") || "Create a blog\nworth sharing";

  return (
    <>
      {/* ส่วนบน flex-row */}
      <div className="flex flex-col md:flex-row items-center justify-between py-40 px-20 relative overflow-hidden max-w-full mx-0">
        <div className="w-full md:w-1/2 z-10 px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6 text-primary">
            {homeTitle.split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i !== arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <p className="text-lg text-base-content mb-8">{t("homeDesc")}</p>

          <Suspense fallback={<Loading />}>
            <RemoteButton
              text={t("writeBlog", "Write a Blog")}
              to="/blogform"
              LinkComponent={Link}
            />
          </Suspense>
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative px-8">
          <img
            src="https://nestify.io/wp-content/webp-express/webp-images/uploads/2023/11/image-190.png.webp"
            alt="Blog Preview"
            className="w-full"
          />
        </div>
      </div>

      {/* ข้อความเพิ่มใหม่ ข้างนอก flex container ด้านบน */}
      <div className="px-8 py-32 bg-base-200 text-base-content text-center space-y-12">
        <h2 className="text-3xl font-bold text-primary">{t("exploreTitle")}</h2>
        <p className="max-w-xl mx-auto text-lg">{t("exploreParagraph1")}</p>
        <p className="max-w-xl mx-auto text-lg">{t("exploreParagraph2")}</p>
        <p className="max-w-xl mx-auto text-lg">{t("exploreParagraph3")}</p>
      </div>
    </>
  );
};

const App: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen flex flex-col">
        <Suspense fallback={<LoadingNavbar />}>
          <RemoteNavbar user={user} LinkComponent={Link} />
        </Suspense>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/blogform" element={<BlogForm />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<EditProfilePage />} />
            <Route path="/posts/:id" element={<PostDetail />} />

          </Routes>
        </main>

        <Suspense fallback={<LoadingFooter />}>
          <div>
            <RemoteFooter />
          </div>
        </Suspense>
      </div>
    </I18nextProvider>
  );
};

export default App;
