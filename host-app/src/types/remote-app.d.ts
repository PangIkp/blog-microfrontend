declare module 'remote_app/Button' {
  import React from 'react';
  interface ButtonProps {
    text: string;
    to?: string;
    onClick?: () => void;
    LinkComponent?: React.ElementType;
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
  }

  const Navbar: React.ComponentType<NavbarProps>;
  export default Navbar;
}