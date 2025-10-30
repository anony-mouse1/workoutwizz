"use client";

import { Zap } from "lucide-react";

export default function TermsOfUse() {
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
                href="/privacy-policy"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Terms and Conditions
          </h1>

          <p className="text-lg text-slate-600 font-medium">
            <strong className="text-slate-900">Effective Date:</strong> April
            24, 2025
          </p>

          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            By using the Essential Support Sourcing app ("App"), you agree to
            the following Terms and Conditions ("Terms"). Please read them
            carefully.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              1. Use of the App
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              The App provides access to information about support services
              (such as food, shelter, medical assistance) for individuals in
              need. The App is offered free of charge and without requiring user
              registration.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              2. Location Services
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Some features of the App may rely on your device's location to
              display nearby services. You may disable location access at any
              time through your device settings, though doing so may limit
              functionality.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              3. No Guarantees
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              While we strive to provide accurate and up-to-date information, we
              do not guarantee the availability, accuracy, or quality of listed
              services. We are not responsible for the operations of third-party
              service providers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              4. Intellectual Property
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              All content in the App (including listings, descriptions, and
              visuals) is owned by or licensed to us and may not be copied or
              reused without permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              5. Limitation of Liability
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              The App is provided "as is" without any warranties. We are not
              liable for any harm or loss resulting from your use of the App or
              from relying on the information it provides.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              6. Changes to the Terms
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We may revise these Terms at any time. Continued use of the App
              after updates constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              7. Governing Law
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              These Terms are governed by the laws of California.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              8. Contact Us
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              For any questions or concerns, please reach out to:{" "}
              <a
                href="mailto:admin@workoutwizz.com"
                className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
              >
                admin@workoutwizz.com
              </a>
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
