
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-content py-4 text-center shadow-inner">
      <p>
        &copy; {new Date().getFullYear()} RetroBlog. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
