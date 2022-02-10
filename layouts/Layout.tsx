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
      <div className="max-w-6xl mx-auto flex px-4 h-screen">{children}</div>
    </div>
  );
}

export default Layout;
