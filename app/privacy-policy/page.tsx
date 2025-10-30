"use client";

import { Zap } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Workout Wizz
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="/terms-of-use"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-lg text-slate-600 font-medium">
            <strong className="text-slate-900">Last Updated:</strong> 27 Oct
            2025
          </p>

          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            <strong className="text-slate-900">Workout Wizz</strong> respects
            your privacy. This policy explains how we handle your information
            when you use our mobile app.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              What We Collect
            </h2>
            <ul className="space-y-3 text-lg text-slate-600 leading-relaxed font-medium list-disc list-inside">
              <li>
                <strong className="text-slate-900">Account info:</strong> name,
                email, profile details
              </li>
              <li>
                <strong className="text-slate-900">Camera access:</strong> used
                only to analyse your exercise form in real time; videos are
                usually processed on your device and not stored
              </li>
              <li>
                <strong className="text-slate-900">Usage data:</strong> device
                type, app activity, errors, analytics
              </li>
              <li>
                <strong className="text-slate-900">Payment info:</strong> if you
                subscribe to premium features
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              How We Use It
            </h2>
            <ul className="space-y-3 text-lg text-slate-600 leading-relaxed font-medium list-disc list-inside">
              <li>To provide exercise tracking and real-time feedback</li>
              <li>To improve and personalise your workouts</li>
              <li>To process payments and subscriptions</li>
              <li>To maintain and secure our services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Sharing
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We <strong className="text-slate-900">do not sell</strong> your
              data. We only share with:
            </p>
            <ul className="space-y-3 text-lg text-slate-600 leading-relaxed font-medium list-disc list-inside">
              <li>Service providers (hosting, payments, analytics)</li>
              <li>Legal authorities, if required</li>
              <li>
                In anonymised/aggregated form for research and improvements
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Your Choices
            </h2>
            <ul className="space-y-3 text-lg text-slate-600 leading-relaxed font-medium list-disc list-inside">
              <li>
                You can request access, correction, or deletion of your data
              </li>
              <li>
                You can withdraw camera permissions anytime (but some features
                won't work)
              </li>
              <li>
                You can request that to remove your account and personal data be
                removed via email:{" "}
                <a
                  href="mailto:support@workoutwizz.com"
                  className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
                >
                  support@workoutwizz.com
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Security
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We use industry-standard safeguards to protect your data, but no
              system is 100% secure.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-black text-white tracking-tight">
                  Workout Wizz
                </span>
              </div>
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
                    href="/#features"
                    className="hover:text-white transition-colors font-medium"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/#pricing"
                    className="hover:text-white transition-colors font-medium"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/#how-it-works"
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
                  <a
                    href="/privacy-policy"
                    className="hover:text-white transition-colors font-medium"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-use"
                    className="hover:text-white transition-colors font-medium"
                  >
                    Terms of Use
                  </a>
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
    </div>
  );
}
