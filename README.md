# Nord AI - AI Solutions Agency Website

A modern, responsive website for Nord AI, an artificial intelligence solutions agency. Built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Live Demo

Deploy this website to Vercel: [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nordai-agency)

## ✨ Features

- **Modern React Architecture**: Component-based structure with TypeScript
- **Bilingual Support**: English and Ukrainian translations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Carousels**: Case studies showcase with real ROI data
- **AI-focused Content**: AI strategy, custom agents, automation, and proven outcomes
- **Contact & Callback Widgets**: Interactive forms with floating callback widget
- **Fast Loading**: Vite-powered development and optimized production builds

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Hero/               # Landing section
│   │   ├── Services/           # Problem-solution cards
│   │   ├── Approach/           # 4-step methodology
│   │   ├── CaseStudies/        # ROI carousel (8 cases)
│   │   ├── Community/          # Coming soon section
│   │   ├── Team/               # AI + Human hybrid team
│   │   ├── Contact/            # Contact form
│   │   ├── Navigation/         # Header navigation
│   │   ├── Footer/             # Footer section
│   │   └── CallbackWidget/     # Floating callback button
│   ├── translations/
│   │   ├── en.json            # English translations
│   │   └── ua.json            # Ukrainian translations
│   ├── hooks/                 # Custom React hooks
│   ├── styles/                # Global styles
│   └── App.tsx                # Main app component
├── public/                    # Static assets
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🛠️ Development

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/nordai-agency.git
   cd nordai-agency
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Access at:** `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
2. **Go to [Vercel](https://vercel.com)**
3. **Import your repository**
4. **Vercel will auto-detect Vite and configure:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Click "Deploy"**

### Deploy to Netlify

1. **Push your code to GitHub**
2. **Go to [Netlify](https://netlify.com)**
3. **Import from Git**
4. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Click "Deploy Site"**

## 🎨 Customization

### Update Translations
Edit translation files in `src/translations/`:
- `en.json` - English content
- `ua.json` - Ukrainian content

### Modify Components
All components are in `src/components/`. Each section has its own folder:
- `Hero/` - Landing section with CTA
- `Services/` - Problem-solution cards
- `Approach/` - 4-step methodology
- `CaseStudies/` - ROI carousel with 8 real cases
- `Community/` - Coming soon waitlist
- `Team/` - AI + Human hybrid team showcase
- `Contact/` - Contact form

### Style Changes
- Global styles: `src/styles/globals.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles use Tailwind utility classes

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact

For questions or customizations, contact: nordgaimer.ivan@gmail.com

---

🚀 **Generated with [Claude Code](https://claude.ai/code)**

Co-Authored-By: Claude <noreply@anthropic.com>