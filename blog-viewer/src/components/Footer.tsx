
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-content py-6 text-center shadow-inner mt-12">
      <p>
        &copy; {new Date().getFullYear()} RetroBlog. สงวนลิขสิทธิ์.
      </p>
    </footer>
  );
};

export default Footer;
