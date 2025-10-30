"use client";

import { FC } from "react";

const PrivacyPolicy: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Privacy Policy
        </h1>

        <p className="text-lg text-slate-600 font-medium">
          <strong className="text-slate-900">Last Updated:</strong> 27 Oct 2025
        </p>

        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          <strong className="text-slate-900">Workout Wizz</strong> respects your
          privacy. This policy explains how we handle your information when you
          use our mobile app.
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
            <li>In anonymised/aggregated form for research and improvements</li>
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
  );
};

export default PrivacyPolicy;
