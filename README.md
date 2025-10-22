# Happy Hands Classes

Alanding page built with React, Vite, and Tailwind CSS.



## Tech Stack

- **React 18.3** - UI library
- **TypeScript** - Type-safe development
- **Vite 6.0** - Fast build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Icon library (Heart, Sparkles, Star, Users, CheckCircle2, Clock)
- **Poppins Font** - Google Fonts

## Project Structure

```
children-classes/
├── src/
│   ├── assets/
│   │   └── hero-kids-learning.jpg    # Main hero image
│   ├── components/
│   │   ├── Button.tsx                # Reusable button component
│   │   └── Card.tsx                  # Reusable card component
│   ├── App.tsx                       # Main application with all sections
│   ├── main.tsx                      # React entry point
│   ├── index.css                     # Tailwind imports and custom utilities
│   └── vite-env.d.ts                 # Vite type definitions
├── public/                           # Static assets
├── index.html                        # HTML template
├── tailwind.config.js                # Tailwind configuration with custom theme
├── vite.config.ts                    # Vite configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Project dependencies
└── README.md                         # This file
```

## Features

The landing page includes the following sections:

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **Why Kids Love Our Classes** - Three feature cards (Personalized Care, Fun & Engaging, Proven Results)
3. **Meet Your Expert Teacher** - Teacher bio and credentials
4. **What Your Child Will Learn** - 8 curriculum highlights
5. **Flexible Class Options** - Class format details (Small Groups, Convenient Times, Age-Appropriate)
6. **What Parents Say** - 2 testimonial cards with 5-star ratings
7. **CTA Section** - Call-to-action for booking a free trial
8. **Footer** - Contact information

## Design System

### Colors (HSL)
- **Primary**: `hsl(25 100% 63%)` - Warm orange
- **Secondary**: `hsl(95 35% 60%)` - Soft green
- **Accent**: `hsl(260 50% 65%)` - Purple
- **Background**: `hsl(35 50% 93%)` - Light warm beige
- **Foreground**: `hsl(25 35% 30%)` - Dark warm brown
- **Muted**: `hsl(35 40% 88%)` - Muted beige
- **Card**: `hsl(35 60% 98%)` - Almost white

### Custom Utilities
- `gradient-hero` - Gradient background for hero sections
- `gradient-card` - Gradient background for cards
- `shadow-soft` - Soft shadow with primary color tint
- `shadow-card` - Card-specific shadow

### Typography
- **Font Family**: Poppins (400, 500, 600, 700, 800)
- **Headings**: Bold by default

### Border Radius
- Default: `1.5rem` (24px)
- Cards: `rounded-3xl` (1.5rem)
- Buttons: `rounded-full`

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server (usually at http://localhost:5173)
npm run dev
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## Component Details

### Button Component
Located in `src/components/Button.tsx`
- Props: `size` ('default' | 'lg'), `variant` ('default' | 'outline' | 'secondary'), `className`, `onClick`
- Features: Hover scale animation, responsive sizing

### Card Component
Located in `src/components/Card.tsx`
- Props: `className`
- Base styles: `bg-card`, `rounded-3xl`, `p-8`


## Development Notes

- The page is fully responsive with mobile-first design
- All animations use Tailwind's transition utilities
- Color scheme matches the original Lovable project
- Font (Poppins) loaded from Google Fonts CDN
- Icons from Lucide React library

