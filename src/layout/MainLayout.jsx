// src/layouts/MainLayout.jsx

import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/main/footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop ";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop></ScrollToTop>
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
