"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Smartphone,
  Users,
  Zap,
  Target,
  Star,
} from "lucide-react";

export default function WorkoutWizardLanding() {
  const openDemoVideo = () => {
    window.open("https://www.ktvu.com/video/1413508", "_blank");
  };

  const openWaitlist = () => {
    window.open("https://tally.so/r/mJWr7J", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* App Store Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          Workout Wizz is coming soon to iOS and Android app stores!
          <a
            href="https://tally.so/r/mJWr7J"
            className="underline ml-2 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the waitlist
          </a>
        </p>
      </div>

      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 font-medium">
                  AI-Powered Fitness Coach
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight">
                  Your Personal
                  <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                    {" "}
                    AI Fitness{" "}
                  </span>
                  Trainer
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  Real-time form analysis using computer vision. Perfect your
                  workout technique with instant feedback, designed specifically
                  for students and fitness beginners.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg px-8 font-semibold"
                  onClick={openWaitlist}
                >
                  Join Waitlist
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 font-semibold"
                  onClick={openDemoVideo}
                >
                  Watch Demo
                </Button>
              </div>

              {/* App Store Coming Soon */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="text-sm text-slate-600 mb-2 font-medium">
                  Coming soon to app stores
                </div>
                <div className="flex space-x-4">
                  <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    <span>App Store</span>
                  </div>
                  <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <span>Google Play</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-medium">No equipment needed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-medium">Works in dorm rooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-medium">Student-friendly pricing</span>
                </div>
              </div>
            </div>

            {/* Phone Mockup Frames */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Main App Screenshot - Form Analysis */}
                <div className="relative">
                  <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      <img
                        src="/images/wrong-form.png"
                        alt="Workout Wizz showing real-time form correction with joint tracking and 'bend your knees more' feedback"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg whitespace-nowrap">
                    <span className="text-sm font-semibold text-slate-900">
                      Real-time Form Analysis
                    </span>
                  </div>
                </div>

                {/* Secondary App Screenshot - Correct Form */}
                <div className="relative mt-8">
                  <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      <img
                        src="/images/correct-form.png"
                        alt="Workout Wizz showing correct form confirmation with green checkmark and joint tracking"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg whitespace-nowrap">
                    <span className="text-sm font-semibold text-slate-900">
                      Instant Feedback
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-green-500 rounded-full p-3 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              The Problem Students Face
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Most students want to exercise more but struggle with proper
              guidance and intimidating gym environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 bg-white rounded-lg p-6 text-center space-y-4">
              <div className="text-4xl font-black text-red-600">76%</div>
              <div className="text-slate-900 font-semibold">
                Want to exercise more but lack guidance
              </div>
            </div>
            <div className="border border-slate-200 bg-white rounded-lg p-6 text-center space-y-4">
              <div className="text-4xl font-black text-orange-600">64%</div>
              <div className="text-slate-900 font-semibold">
                Feel uncomfortable in campus gyms
              </div>
            </div>
            <div className="border border-slate-200 bg-white rounded-lg p-6 text-center space-y-4">
              <div className="text-4xl font-black text-yellow-600">78%</div>
              <div className="text-slate-900 font-semibold">
                Quit due to uncertainty about proper technique
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              How Workout Wizz Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Advanced computer vision technology analyzes your form in
              real-time and provides instant feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Exercise",
                description:
                  "Select from our library of beginner-friendly exercises",
                icon: Target,
              },
              {
                step: "2",
                title: "AI Detects Joints",
                description:
                  "Computer vision identifies key body joints and positioning",
                icon: Smartphone,
              },
              {
                step: "3",
                title: "Analyze Angles",
                description:
                  "Algorithm calculates angles between joints for proper form",
                icon: Zap,
              },
              {
                step: "4",
                title: "Get Feedback",
                description:
                  "Receive instant visual and audio form corrections",
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 border border-slate-200 bg-white rounded-lg p-6"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full mx-auto flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-black text-slate-900 shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Built for Students, By Students
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Everything you need to build a consistent, effective workout
              routine from your dorm room.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Form Correction",
                description:
                  "Get instant feedback on your exercise form with computer vision technology",
                icon: Target,
                color: "from-blue-600 to-blue-700",
              },
              {
                title: "No Equipment Needed",
                description:
                  "Perfect for dorm rooms and small spaces - bodyweight exercises only",
                icon: Smartphone,
                color: "from-green-600 to-green-700",
              },
              {
                title: "Social Features",
                description:
                  "Connect with classmates, share progress, and workout together",
                icon: Users,
                color: "from-purple-600 to-purple-700",
              },
              {
                title: "Gamified Challenges",
                description:
                  "Study break workouts and achievement systems to keep you motivated",
                icon: Star,
                color: "from-yellow-600 to-yellow-700",
              },
              {
                title: "Student-Friendly Pricing",
                description:
                  "Affordable plans designed specifically for student budgets",
                icon: CheckCircle,
                color: "from-red-600 to-red-700",
              },
              {
                title: "Campus Integration",
                description:
                  "Partner with university rec centers and fitness programs",
                icon: Zap,
                color: "from-indigo-600 to-indigo-700",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 font-medium">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              The Numbers Don't Lie
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium">
              Students are ready for a fitness solution designed specifically
              for them.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "19.9M", label: "College students in the US" },
              {
                number: "92%",
                label: "Own smartphones capable of running our app",
              },
              {
                number: "78%",
                label: "Report interest in fitness apps for students",
              },
              {
                number: "46%",
                label: "YoY growth in student fitness app spending",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="text-5xl md:text-6xl font-black text-white">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Simple, Student-Friendly Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Start free, upgrade when you're ready. No long-term commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-slate-200">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">Free</h3>
                  <div className="text-4xl font-black text-slate-900">
                    $0
                    <span className="text-lg text-slate-600 font-medium">
                      /month
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Basic exercises library",
                    "Form correction for popular movements",
                    "Limited daily sessions",
                    "Basic progress tracking",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">
                    Premium
                  </h3>
                  <div className="text-4xl font-black text-slate-900">
                    $5
                    <span className="text-lg text-slate-600 font-medium">
                      /month
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Full exercise library",
                    "Advanced form analysis",
                    "Unlimited sessions",
                    "Social features & challenges",
                    "Detailed progress analytics",
                    "Campus group discounts",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Join thousands of students who are already improving their workout
            form and building healthy habits with Workout Wizz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg px-8 font-semibold"
              onClick={openWaitlist}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-12">
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
