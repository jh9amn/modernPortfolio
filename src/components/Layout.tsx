import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}
const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 ${className}`}>{children}</div>;
};

export default Layout;
