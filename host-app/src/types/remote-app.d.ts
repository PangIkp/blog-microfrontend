declare module 'remote_app/Button' {
  import React from 'react';
  interface ButtonProps {
    text: string;
    to?: string;
    onClick?: () => void;
    LinkComponent?: React.ElementType;
    className?: string;
    type?: "button" | "submit" | "reset"; 
  }
  const Button: React.FC<ButtonProps>;
  export default Button;
}
declare module 'remote_app/Header' {
  const Header: React.FC;
  export default Header;
}

declare module "remote_app/Navbar" {
  import React from "react";

  interface NavbarProps {
    LinkComponent?: React.ElementType;
    user?: { name: string } | null;
  }

  const Navbar: React.ComponentType<NavbarProps>;
  export default Navbar;
}

declare module "remote_app/Footer" {
  import React from "react";

  const Footer: React.FC;
  export default Footer;
}

declare module "remote_app/Input" {
  import React from "react";

  interface InputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string;
  }

  const Input: React.FC<InputProps>;
  export default Input;
}

declare module "remote_app/BlogCard" {
  import React from "react";
  interface BlogCardProps {
    id: number;
    title: string;
    excerpt: string;
    LinkComponent: React.ElementType;
  }
  const BlogCard: React.FC<BlogCardProps>;
  export default BlogCard;
}