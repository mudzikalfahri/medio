import Header from "@components/Header";
import { ReactNode } from "react";

type ILayoutProps = {
  children: ReactNode;
  meta?: ReactNode;
};

function Layout({ children, meta }: ILayoutProps) {
  return (
    <div className="bg-white text-gray-800">
      {meta}
      <Header />
      {children}
    </div>
  );
}

export default Layout;
