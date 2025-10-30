"use client";

import { FC } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Workout Wizz
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium">
              Your personal AI-powered fitness trainer, designed specifically
              for students.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-tight">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors font-medium"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors font-medium"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors font-medium"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-tight">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="hover:text-white transition-colors font-medium"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <a
                  href="mailto:admin@workoutwizz.com"
                  className="hover:text-white transition-colors font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p className="font-medium">
            &copy; 2025 Workout Wizz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
