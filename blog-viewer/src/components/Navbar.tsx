// remote_app/src/components/Navbar.tsx

import React from "react";

interface NavbarProps {
  LinkComponent?: React.ElementType;
}

const Navbar: React.FC<NavbarProps> = ({ LinkComponent = "a" }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary text-primary-content px-6 py-4 flex justify-between items-center shadow-md z-50">
      <div className="text-2xl font-bold">RetroBlog</div>
      <ul className="flex space-x-6">
        <li><LinkComponent to="/" className="text-primary-content hover:underline">Home</LinkComponent></li>
        <li><LinkComponent to="/posts" className="text-primary-content hover:underline">Posts</LinkComponent></li>
        <li><LinkComponent to="/about" className="text-primary-content hover:underline">About</LinkComponent></li>
        <li><LinkComponent to="/contact" className="text-primary-content hover:underline">Contact</LinkComponent></li>
      </ul>
    </nav>
  );
};

export default Navbar;
