# 🏋️ Workout Wizz

> Your Personal AI-Powered Fitness Trainer - Real-time form analysis using computer vision

**Workout Wizz** is a cutting-edge fitness application designed specifically for students and fitness beginners. Using advanced computer vision technology, it analyzes your workout form in real-time and provides instant feedback to help you exercise safely and effectively.

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)

## 🎯 Features

- **🎥 Real-time Form Correction** - Computer vision technology analyzes your exercise form and provides instant feedback
- **📱 No Equipment Needed** - Perfect for dorm rooms and small spaces with bodyweight exercises
- **👥 Social Features** - Connect with classmates, share progress, and workout together
- **🏆 Gamified Challenges** - Study break workouts and achievement systems to keep you motivated
- **💰 Student-Friendly Pricing** - Affordable plans designed specifically for student budgets
- **🏫 Campus Integration** - Partner with university rec centers and fitness programs

## 🚀 Tech Stack

- **Framework:** [Next.js 15.2](https://nextjs.org/) with App Router
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4.1](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** Tailwind CSS Animate
- **Package Manager:** pnpm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** v22.17.1 or higher
- **pnpm:** v10.20.0 or higher

## 🛠️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/workoutwizz.git
   cd workoutwizz
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## 📂 Project Structure

```
workoutwizz/
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Landing page
│   ├── privacy-policy/       # Privacy policy page
│   │   └── page.tsx
│   └── terms-of-use/         # Terms of use page
│       └── page.tsx
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts              # Utility functions
├── public/
│   └── images/               # Static images
├── styles/
│   └── globals.css           # Additional global styles
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🎨 Design System

- **Primary Colors:** Blue-600 to Green-500 gradient
- **Typography:** Inter font family
- **Font Weights:**
  - Regular: 400 (font-medium)
  - Semibold: 600 (font-semibold)
  - Bold: 700 (font-bold)
  - Black: 900 (font-black)
- **Border Radius:** 0.5rem default
- **Shadows:** Layered shadow system for depth

## 🌐 Pages

| Route             | Description                                  |
| ----------------- | -------------------------------------------- |
| `/`               | Landing page with features, pricing, and CTA |
| `/privacy-policy` | Privacy policy and data handling information |
| `/terms-of-use`   | Terms and conditions for app usage           |

## 📱 Features in Detail

### Real-time Form Analysis

The app uses computer vision to:

1. Detect body joints and positioning
2. Calculate angles between joints
3. Compare to proper form standards
4. Provide instant visual and audio feedback

### Student-Focused Design

- No equipment required - perfect for dorm rooms
- Affordable pricing starting at $0
- Social features to connect with classmates
- Study break workouts to fit busy schedules

## 🎯 Target Audience

- **19.9M** college students in the US
- **92%** own smartphones capable of running the app
- **78%** report interest in fitness apps for students
- **76%** want to exercise more but lack guidance

## 🔒 Privacy & Security

- No personal information collection required
- No sign-up or login needed
- Location data used only in real-time (not stored)
- Anonymous analytics for usage patterns only

## 🚀 Coming Soon

- iOS App Store release
- Android Google Play release
- Advanced form analysis features
- Campus group features
- Premium workout libraries

## 📧 Contact

For questions or feedback:

- **Email:** admin@workoutwizz.com
- **Waitlist:** [Join here](https://tally.so/r/mJWr7J)

## 📄 License

© 2025 Workout Wizz. All rights reserved.

---

**Built for students, by students** 💪
