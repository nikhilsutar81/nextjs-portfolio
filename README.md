# 🎨 Nikhil Sutar - Full-Stack Developer Portfolio

A modern, responsive portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **GSAP animations**. Features a dynamic admin panel for managing projects, skills, work experience, and contact requests.

## ✨ Features

- 🎭 **Smooth Animations** - GSAP scroll triggers and CSS animations
- 🎨 **Modern Design** - Gradient effects, hover states, and smooth transitions
- 📱 **Fully Responsive** - Mobile-first design approach
- 🔐 **Secure Admin Panel** - JWT authentication with bcryptjs
- 📧 **Contact Form** - Email notifications via Brevo SMTP
- 🖼️ **Image Management** - Cloudinary integration for image uploads
- 🗄️ **MongoDB Database** - Persistent data storage
- 🌙 **Dark Mode Support** - Theme switching capability
- 🚀 **Optimized Performance** - Server-side rendering with Next.js
- 📊 **SEO Friendly** - Automatic sitemap generation

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS
- **GSAP** - Advanced animations
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Node.js** - Runtime
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Brevo** - Email service

### Tools & Services
- **Cloudinary** - Image hosting
- **Vercel** - Deployment
- **GitHub** - Version control

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB Atlas account
- Cloudinary account
- Brevo account (for emails)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/nextjs-portfolio.git
   cd nextjs-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

## 🚀 Available Commands

```bash
npm run dev              # Start dev server
npm run build            # Create production build
npm start               # Run production build
npm run lint            # Run ESLint
npm run create-admin    # Create admin user
```

## 📁 Project Structure

```
src/
├── app/                    # App router pages
├── components/             # React components
├── hooks/                  # Custom hooks
├── lib/                    # Utilities
├── models/                 # Database schemas
└── types/                  # TypeScript types
```

## 🌐 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete deployment instructions.

Quick deploy to Vercel:
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

## 📄 License

MIT License - feel free to use for your own portfolio!

---

**Version:** 1.0.0 | **Last Updated:** February 27, 2026
