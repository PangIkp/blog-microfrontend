import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface NavbarProps {
  LinkComponent?: React.ElementType;
  user?: { name: string } | null;
}

const Navbar: React.FC<NavbarProps> = ({ LinkComponent = "a", user }) => {
  console.log("Navbar received user:", user);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary text-primary-content px-6 py-4 flex justify-between items-center shadow-md z-50">
      <div className="text-2xl font-bold">RetroBlog</div>
      <ul className="flex space-x-6">
        <li>
          <LinkComponent
            to="/"
            className="text-primary-content hover:underline"
          >
            Home
          </LinkComponent>
        </li>
        <li>
          <LinkComponent
            to="/posts"
            className="text-primary-content hover:underline"
          >
            Posts
          </LinkComponent>
        </li>
        <li>
          <LinkComponent
            to="/about"
            className="text-primary-content hover:underline"
          >
            About
          </LinkComponent>
        </li>
        <li>
          <LinkComponent
            to="/contact"
            className="text-primary-content hover:underline"
          >
            Contact
          </LinkComponent>
        </li>
      </ul>

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
          Login
        </LinkComponent>
      )}
    </nav>
  );
};

export default Navbar;
