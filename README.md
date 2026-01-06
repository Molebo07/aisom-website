# Aisom Corporate Website

A modern, high-performance marketing site for Aisom - a strategic consulting and intelligent software company.

## 🚀 Overview

This website showcases Aisom's services and solutions with a clean, enterprise aesthetic featuring black & white base palette with electric blue accents. Built with Next.js, TypeScript, and TailwindCSS.

## ✨ Features

- **Modern Design**: Clean, high-end enterprise aesthetic inspired by Palantir Foundry and Gotham
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth Framer Motion animations throughout
- **Forms**: Validated contact and email subscription forms
- **SEO Optimized**: Meta tags, OpenGraph, sitemap, and robots.txt
- **Accessibility**: ARIA labels, proper contrast, and semantic HTML
- **Performance**: Optimized for fast loading and excellent Core Web Vitals

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom theme
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with navigation/footer
│   ├── page.tsx           # Homepage
│   ├── about/
│   ├── ethos/
│   ├── products/
│   └── contact/
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── WhyChooseUs.tsx    # Value propositions
│   ├── Solutions.tsx      # Product showcase
│   ├── EmailSubscription.tsx # Newsletter signup
│   └── FinalCTA.tsx       # Call-to-action
└── globals.css           # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Electric Blue (#3b82f6, #2563eb)
- **Neutral**: Black (#000000) and White (#FFFFFF)
- **Gray Scale**: Custom gray palette for text and backgrounds

### Typography
- **Font Family**: Inter (system font fallback)
- **Hierarchy**: Large hero text, clear section headings, readable body text

### Components
- **Buttons**: Primary (blue) and secondary (outlined) variants
- **Cards**: Clean cards with subtle shadows and hover effects
- **Forms**: Accessible forms with validation feedback

## 🏗 Installation & Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aisom-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Start production server**
   ```bash
   npm start
   ```

## 📄 Pages

- **/** - Homepage with hero, about, solutions, and CTA
- **/about** - Detailed about page
- **/ethos** - Company values and principles
- **/products** - Certara and Forge product details
- **/contact** - Contact form page

## 🔧 Configuration

### TailwindCSS
Custom theme with Aisom brand colors and extended spacing/utilities in `tailwind.config.ts`

### SEO
- Meta tags and OpenGraph data in each page
- Sitemap.xml and robots.txt in `/public`
- Structured data ready for implementation

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Other Platforms
The built application in `/out` can be deployed to:
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

Copyright © 2025 Aisom. All rights reserved.

## 📞 Contact

For questions about this project, please contact the development team.

---

Built with ❤️ for Aisom's mission to bridge business strategy and software execution.
