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
            Workout Wizz – Terms of Use
          </h1>

          <p className="text-lg text-slate-600 font-medium">
            <strong className="text-slate-900">Last Updated:</strong> 27 Oct
            2025
          </p>

          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Welcome to <strong className="text-slate-900">Workout Wizz!</strong>{" "}
            These Terms of Use ("Terms") govern your use of our mobile
            application (the "App") and related services provided by Workout
            Wizz ("we," "us," or "our"). By downloading, accessing, or using
            Workout Wizz, you agree to these Terms.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              1. Use of the App
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Workout Wizz is intended for personal fitness tracking and
              exercise guidance. You agree to use the App only for lawful
              purposes and in accordance with these Terms. You must be at least
              13 years old (or the minimum legal age in your region) to create
              an account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              2. User Accounts
            </h2>
            <div className="space-y-3 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                To access certain features, you may need to create an account.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your
                login credentials and for all activity under your account.
              </p>
              <p>
                You can delete your account at any time via email request:{" "}
                <a
                  href="mailto:support@workoutwizz.com"
                  className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
                >
                  support@workoutwizz.com
                </a>
                .
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              3. Subscriptions and Payments
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Workout Wizz offers optional{" "}
                <strong className="text-slate-900">
                  auto-renewable subscriptions
                </strong>{" "}
                for premium features.
              </p>
              <ul className="space-y-3 text-lg text-slate-600 leading-relaxed font-medium list-disc list-inside">
                <li>
                  Payment is processed through{" "}
                  <strong className="text-slate-900">Apple's App Store</strong>{" "}
                  on iOS devices and through{" "}
                  <strong className="text-slate-900">
                    Google Play Billing
                  </strong>{" "}
                  on Android devices.
                </li>
                <li>
                  We <strong className="text-slate-900">do not</strong> collect
                  or store your payment details.
                </li>
                <li>
                  Subscriptions automatically renew unless cancelled at least 24
                  hours before the end of the current period.
                </li>
                <li>
                  You can manage or cancel your subscription in your device
                  account settings:
                  <ul className="ml-8 mt-2 space-y-2">
                    <li>
                      <strong className="text-slate-900">iOS:</strong> Settings
                      → Apple ID → Subscriptions
                    </li>
                    <li>
                      <strong className="text-slate-900">Android:</strong>{" "}
                      Google Play → Profile → Payments & Subscriptions
                    </li>
                  </ul>
                </li>
                <li>
                  Prices, durations, and benefits are displayed clearly in the
                  App before you subscribe.
                </li>
              </ul>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                If you use the same Workout Wizz account across devices, your
                active subscription status may be synchronized through our
                backend once verified with Apple or Google.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Subscription access is platform-specific, and purchases must be
                made through the respective store.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              4. Intellectual Property
            </h2>
            <div className="space-y-3 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                All content, trademarks, graphics, and software within Workout
                Wizz are owned or licensed by us and protected by applicable
                laws.
              </p>
              <p>
                You may not copy, modify, distribute, or exploit any part of the
                App without written permission.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              5. Health Disclaimer
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Workout Wizz is designed to assist your fitness routine, but it is{" "}
              <strong className="text-slate-900">
                not a medical application
              </strong>
              . Always consult a qualified healthcare professional before
              starting any new exercise program. Use the App at your own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              6. Termination
            </h2>
            <div className="space-y-3 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                We may suspend or terminate your account if you violate these
                Terms or misuse the App.
              </p>
              <p>
                You may also delete your account at any time within the App.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              7. Limitation of Liability
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              To the maximum extent permitted by law, Workout Wizz and its
              affiliates shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of the App.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              8. Contact Us
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              If you have any questions about these Terms, please contact us at:{" "}
              <a
                href="mailto:support@workoutwizz.com"
                className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
              >
                support@workoutwizz.com
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
