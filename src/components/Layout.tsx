import NavBar from "./NavBar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main className="bg-[#f8f7f5] min-h-[calc(100vh-76px)] px-10 py-8">
        <div className="container md:mx-auto md:max-w-[850px]">{children}</div>
      </main>
    </>
  );
} 