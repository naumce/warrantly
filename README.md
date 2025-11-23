# 🌐 Warranty Tracker - Landing Page

Modern, responsive landing page for Warranty Tracker mobile app built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Hero Section** - Eye-catching hero with gradient backgrounds and app preview
- ✅ **Features Section** - Showcase AI-powered features with icons
- ✅ **Pricing Section** - Lifetime pricing tiers with highlighted plan
- ✅ **FAQ Section** - Expandable frequently asked questions
- ✅ **Footer** - Links, social media, and legal pages
- ✅ **Fully Responsive** - Mobile-first design
- ✅ **Animated** - Smooth animations and transitions
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Fast Performance** - Next.js 14 App Router

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 🎨 Customization

### Colors
The landing page uses a purple/pink gradient theme matching the mobile app. Edit in `tailwind.config.ts`:

```typescript
// Main gradient colors
from-purple-600 to-pink-600   // Primary gradient
from-purple-400 to-pink-400   // Text gradient
```

### Content
Edit the components in `/components`:
- `Hero.tsx` - Main hero section
- `Features.tsx` - Features grid
- `Pricing.tsx` - Pricing tiers
- `FAQ.tsx` - FAQ items
- `Footer.tsx` - Footer links

### App Store Links
Update download buttons in `Hero.tsx`:
```typescript
// Line ~46
<a href="YOUR_APP_STORE_LINK">📲 Download on App Store</a>
<a href="YOUR_PLAY_STORE_LINK">🤖 Get it on Google Play</a>
```

## 🚀 Deployment to Vercel

### Quick Deploy
```bash
npm install -g vercel
vercel
```

### Connect Custom Domain
1. Go to Vercel dashboard → Project Settings → Domains
2. Add `warrantytracker.app`
3. Update DNS settings to point to Vercel

**DNS Configuration:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Environment Variables (Optional)
Add in Vercel dashboard if you need analytics:
- `NEXT_PUBLIC_GA_ID` - Google Analytics
- `NEXT_PUBLIC_POSTHOG_KEY` - PostHog analytics

## 📱 Adding App Screenshots

Replace the placeholder in `Hero.tsx` (line ~100) with real screenshots:

```tsx
<img 
  src="/screenshots/app-preview.png" 
  alt="Warranty Tracker App"
  className="rounded-2xl shadow-2xl"
/>
```

Add screenshots to `/public/screenshots/`

## 🎯 SEO Optimization

Metadata is configured in `app/layout.tsx`. Update:
- Title
- Description
- Keywords
- Open Graph images
- Twitter cards

## 📊 Analytics (Optional)

Add Google Analytics or PostHog:

```bash
npm install @next/third-parties
```

In `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Deployment](https://vercel.com/docs)
- [Lucide Icons](https://lucide.dev)

## 📝 TODO

- [ ] Add real app screenshots
- [ ] Connect to App Store & Play Store links
- [ ] Add Google Analytics
- [ ] Create blog section (optional)
- [ ] Add testimonials (when available)
- [ ] Connect to actual API for user count

## 📧 Support

For questions or issues, contact: support@warrantytracker.app

---

**Built with ❤️ for Warranty Tracker**
