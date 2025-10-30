"use client";

import { FC } from "react";

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header: FC = () => {
  const openWaitlist = () => {
    window.open("https://tally.so/r/mJWr7J", "_blank");
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Workout Wizz
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Pricing
            </a>
            <Button
              className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 font-semibold"
              onClick={openWaitlist}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
