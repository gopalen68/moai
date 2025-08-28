import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoI18n from "@/components/SeoI18n";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SeoI18n />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
