# 🏥 Mak-Med Modern Medical Clinic

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0-9146FF?style=for-the-badge&logo=framer)

## 📋 Overview

A cutting-edge website for a modern medical clinic, featuring a professional, accessible design with premium UX/UI elements. This project demonstrates advanced frontend development techniques including responsive design, animations, and interactive components.

![Mak-Med Preview](https://via.placeholder.com/800x400?text=Mak-Med+Preview)

## ✨ Features

- 🧩 **Component-Based Architecture** - Modular, reusable components for maintainable code
- 📱 **Fully Responsive Design** - Perfect display on all device sizes from mobile to desktop
- 🌈 **Modern UI Elements** - Clean, medical-themed interface with subtle animations
- 🤖 **AI Avatar Integration** - Placeholder for AI doctor interface
- 📲 **Telegram Bot Integration** - Dedicated section for patient communication
- 🗺️ **Interactive Map** - Location integration with contact information
- 📝 **Dynamic Forms** - Interactive contact forms with validation
- 🎨 **Healthcare-Oriented Design** - Professional color scheme and imagery

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework for server-side rendering and static site generation
- **TypeScript** - Type-safe JavaScript for better developer experience
- **TailwindCSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Animation library for React
- **Lucide Icons** - Beautiful icon collection

### UI Components
- **Shadcn UI** - Accessible UI component system
- **React Hook Form** - Form validation and handling

## 🗂️ Project Structure

```
src/
├── app/                  # Next.js application code
│   ├── components/       # Reusable UI components
│   │   ├── InteractiveHeader.tsx   # Modern sticky header with Telegram integration
│   │   ├── HeroSection.tsx         # Hero section with AI avatar placeholder 
│   │   ├── ServicesSection.tsx     # Medical services with card layout
│   │   ├── AdvantagesSection.tsx   # Clinic advantages with Telegram bot
│   │   ├── TestimonialsSection.tsx # Patient testimonials slider
│   │   └── ContactSection.tsx      # Contact form with map integration
│   ├── layout.tsx        # Main application layout
│   └── page.tsx          # Main page component
├── components/           # Shared UI components library
│   └── ui/               # Base UI elements (buttons, inputs, etc.)
├── styles/               # Global styles
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mak-med.git
cd mak-med

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🔧 Customization

The website is designed to be easily customizable:

- Update services in `ServicesSection.tsx`
- Modify contact information in `ContactSection.tsx`
- Change color scheme by adjusting Tailwind classes

## 📊 Educational Context

This project was developed as part of the "Нейрохищник" (NeuroHunter) advanced frontend development course. The course focuses on practical application of modern web technologies and AI integration techniques for creating professional, production-ready applications.

The project demonstrates proficiency in:

- Modern React patterns and hooks
- Advanced CSS techniques with Tailwind
- Accessible UI development
- Animation and interaction design
- Integration with external services (maps, messaging)

## 📝 License

MIT

---

🔗 **[View Live Demo](https://mak-med-demo.vercel.app)** | 📧 **Contact: [info@mak-med.com](mailto:info@mak-med.com)**
