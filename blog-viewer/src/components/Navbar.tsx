import React from "react";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  LinkComponent?: React.ElementType;
  user?: { name: string } | null;
}

const languageLabels: Record<string, string> = {
  en: "EN",
  th: "ไทย",
};

const Navbar: React.FC<NavbarProps> = ({ LinkComponent = "a", user }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLangLabel = languageLabels[i18n.language] || "EN";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary text-primary-content px-6 py-4 flex items-center shadow-md z-50">
      <div className="flex items-center flex-shrink-0">
        <div className="text-2xl font-bold">RetroBlog</div>
      </div>

      <ul className="flex space-x-6 flex-grow justify-center">
        <li>
          <LinkComponent
            to="/"
            className="text-primary-content hover:underline"
          >
            {t("home")}
          </LinkComponent>
        </li>
        <li>
          <LinkComponent
            to="/posts"
            className="text-primary-content hover:underline"
          >
            {t("posts")}
          </LinkComponent>
        </li>
        <li>
          <LinkComponent
            to="/about"
            className="text-primary-content hover:underline"
          >
            {t("about")}
          </LinkComponent>
        </li>
        <li>
          <LinkComponent
            to="/contact"
            className="text-primary-content hover:underline"
          >
            {t("contact")}
          </LinkComponent>
        </li>
      </ul>

      <div className="flex items-center space-x-6 flex-shrink-0">
        {user ? (
          <LinkComponent to="/profile" className="flex items-center space-x-2">
            <FaUserCircle size={24} />
            <span>{user.name}</span>
          </LinkComponent>
        ) : (
          <LinkComponent
            to="/login"
            className="btn btn-outline btn-sm text-primary-content hover:bg-primary hover:text-primary-content"
          >
            {t("login")}
          </LinkComponent>
        )}

        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-sm btn-outline flex items-center space-x-2"
          >
            <span>{currentLangLabel}</span>
            <FaChevronDown className="w-3 h-3" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-20"
          >
            <li>
              <button
                className="text-black"
                onClick={() => changeLanguage("en")}
              >
                {t("english")}
              </button>
            </li>
            <li>
              <button
                className="text-black"
                onClick={() => changeLanguage("th")}
              >
                {t("thai")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
