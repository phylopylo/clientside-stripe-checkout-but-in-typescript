import NavBar from "./NavBar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
} 