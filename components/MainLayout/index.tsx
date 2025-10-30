"use client";

import { FC, PropsWithChildren } from "react";
// components
import Footer from "../footer";
import Header from "../header";
import Banner from "../banner";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Banner />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
