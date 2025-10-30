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
            <strong className="text-slate-900">Effective Date:</strong> April
            24, 2025
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              1. Information We Do Not Collect
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We do not require you to sign up or log in. We do not collect any
              personally identifiable information such as your name, email
              address, or phone number.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              2. Location Data
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              With your permission, the app may access your device's location to
              show nearby support services and provide directions. Your location
              is only used in real-time and is not stored or shared with any
              third party.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              3. Analytics
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We may use anonymous analytics tools to understand general usage
              patterns (e.g., which services are frequently accessed), but this
              data is not linked to any personal identity.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              4. Data Security
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Since we do not collect personal data, the risk to your privacy is
              minimal. Nonetheless, we implement basic technical measures to
              secure app interactions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              5. Third-Party Services
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              The app may use third-party mapping services (e.g., Google Maps)
              to provide directions. Your interaction with these services is
              governed by their own privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              6. Children's Privacy
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              This app is intended for a general audience and is accessible to
              users of all ages, including minors, without registration.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              7. Changes to This Policy
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We may update this Privacy Policy occasionally. Changes will be
              posted in the app.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              8. Contact Us
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              If you have any questions or concerns about this policy, please
              contact us at:{" "}
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
