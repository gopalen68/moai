import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Always visible */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Always visible */}
      <Footer />
    </div>
  );
}
