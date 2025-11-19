# 🌟 NoortoLearn

**NoortoLearn** is a modern, multilingual online learning platform designed to help you master digital marketing and e-commerce. Built with React and styled with the elegant Noor color palette, it provides a seamless learning experience across three specialized tracks.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646cff.svg)

## ✨ Features

- 🌍 **Multilingual Support** - Full support for English, French, and Arabic (with RTL layout)
- 🌓 **Dark/Light Mode** - Beautiful theme toggle with persistent preferences
- 📱 **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- 🎨 **Noor Theme** - Custom color palette (#11110e to #bd915a) for an elegant look
- 🚀 **Fixed Navbar** - Smooth navigation with backdrop blur effect
- 🎯 **Three Learning Tracks**:
  - E-commerce Fundamentals
  - Google Ads Mastery
  - Meta Ads Professional

## 🎓 Course Tracks

### 1. E-commerce Fundamentals
Learn to build and grow successful online stores with comprehensive training in product selection, store setup, marketing, and scaling strategies.

### 2. Google Ads Mastery
Master Google Ads from basics to advanced strategies. Learn campaign creation, keyword research, optimization techniques, and how to maximize ROI.

### 3. Meta Ads Professional
Become an expert in Facebook and Instagram advertising. Master audience targeting, creative strategies, campaign optimization, and analytics.

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: React Icons (Feather Icons & Simple Icons)
- **Language**: JavaScript (ES6+)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed on your machine

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Noortolearn
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Noortolearn/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   │   ├── Navbar.jsx      # Navigation bar (fixed)
│   │   ├── Overview.jsx    # Platform overview page
│   │   ├── Courses.jsx     # Courses listing page
│   │   ├── CourseCard.jsx  # Individual course card
│   │   ├── ComingSoon.jsx  # Coming soon placeholder
│   │   ├── ThemeToggle.jsx # Dark/light mode toggle
│   │   └── LanguageSwitcher.jsx # Language selector
│   ├── App.jsx         # Main app component
│   ├── App.css         # App-specific styles
│   ├── index.css       # Global styles & animations
│   └── main.jsx        # Entry point
├── index.html          # HTML template (includes Tailwind CDN)
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## 🎨 Color Palette (Noor Theme)

The platform uses a custom "Noor" color palette:

- `--noor-900`: #11110e (Darkest)
- `--noor-800`: #342d24
- `--noor-700`: #7c6c5b
- `--noor-600`: #7d5a34
- `--noor-500`: #bd915a (Gold accent)

## 🌐 Supported Languages

- 🇬🇧 **English** (en)
- 🇫🇷 **French** (fr)
- 🇸🇦 **Arabic** (ar) - with RTL support

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📝 Component Overview

### Main Components

- **App.jsx** - Main application with routing, theme management, and translations
- **Navbar.jsx** - Fixed navigation bar with section links
- **Overview.jsx** - Landing page explaining the platform
- **Courses.jsx** - Course listing with three tracks
- **CourseCard.jsx** - Individual course card with "Coming Soon" status
- **ComingSoon.jsx** - Placeholder for Progress and Profile sections
- **ThemeToggle.jsx** - Sun/moon icon for dark/light mode switching
- **LanguageSwitcher.jsx** - Dropdown for language selection

## 🎯 Roadmap

- [ ] Add course content and lessons
- [ ] Implement user authentication
- [ ] Add progress tracking functionality
- [ ] Build user profile management
- [ ] Create interactive quizzes
- [ ] Add video lessons support
- [ ] Implement certificate generation

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please reach out through the platform.

---

**Built with ❤️ using React + Vite**
