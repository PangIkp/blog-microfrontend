import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="">
      <h1 className="bg-blue-500 text-white p-4 rounded">
        Remote App
      </h1>
      <p className="text-sm text-red-500 mt-2">
        This text is styled with plain Tailwind CSS only.
      </p>
    </header>
  );
};

export default Header;
