# Delita Advise - Project Documentation

## Project Overview

Delita Advise is a modern, professional website for a Swedish financial advisory firm based in Malmö. The site showcases their services in accounting, payroll, taxation, and business consultation, emphasizing digital presence, personal service, and long-term client relationships.

**Company:** Delita Advise (financial advisory/accounting bureau)
**Location:** Malmö, Sweden
**Target Audience:** Small to medium-sized businesses seeking accounting and financial advisory services

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI framework |
| **TypeScript** | Latest | Type safety |
| **Vite** | 6.2.0 | Build tool & dev server |
| **Tailwind CSS** | CDN | Styling framework |
| **Framer Motion** | Latest | Animations & transitions |
| **Lucide React** | Latest | Icon library |
| **Netlify** | - | Deployment platform |

---

## Project Structure

```
delita-advise/
├── components/              # React components (TSX)
│   ├── Navbar.tsx          # Navigation bar with mobile menu
│   ├── Hero.tsx            # Homepage hero section
│   ├── MainContent.tsx     # Homepage "Personlig service" section
│   ├── Services.tsx        # Service cards grid
│   ├── WhyChooseUs.tsx     # Feature cards ("Varför välja oss")
│   ├── About.tsx           # About page
│   ├── Contact.tsx         # Contact page with form
│   ├── Karriar.tsx         # Career/jobs page
│   ├── Login.tsx           # Partner login portals
│   ├── BookMeeting.tsx     # Meeting booking page
│   ├── Footer.tsx          # Site footer
│   ├── Loner.tsx           # Payroll service page
│   ├── Redovisning.tsx     # Accounting service page
│   ├── Radgivning.tsx      # Advisory service page
│   ├── Bolagsbildning.tsx  # Company formation page
│   └── Emissioner.tsx      # Emissions service page
├── Delita bilder/          # Image assets (organized by page)
│   ├── Hero/
│   ├── Tjänster/           # Service images (9 JPGs)
│   ├── Om oss/
│   └── Kontakt/
├── Images:Logos/           # Brand logos (4 PNG variants)
├── App.tsx                 # Main app with routing logic
├── index.tsx               # React entry point
├── index.html              # HTML template (Tailwind config here)
├── index.css               # Custom CSS (minimal)
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies & scripts
├── netlify.toml            # Netlify deployment config
└── metadata.json           # Project metadata
```

---

## Key Components

### Navigation & Layout
- **Navbar.tsx**: Responsive navigation with mobile menu overlay (React Portal)
- **Footer.tsx**: Site footer with partner logos, contact info, and copyright

### Homepage
- **Hero.tsx**: Full-screen hero with CTA
- **MainContent.tsx**: "Personlig service, långsiktiga relationer" section with image
- **Services.tsx**: 3 main service cards (Löner, Redovisning, Rådgivning)
- **WhyChooseUs.tsx**: 4 feature cards highlighting company values

### Pages
- **About.tsx**: Company mission, values, team section (currently hidden)
- **Contact.tsx**: Contact form, address, phone, email, opening hours
- **Karriar.tsx**: Career page with benefits and application info
- **Login.tsx**: Partner portal login buttons (Fortnox, Accountec)
- **Service Pages**: Loner.tsx, Redovisning.tsx, Radgivning.tsx, etc.

---

## Content Management

**All content is hard-coded in TSX component files.** There is no CMS.

### To Update Content:
1. Find the relevant component in `/components/`
2. Edit the JSX/TSX directly
3. For service cards, edit data arrays within components
4. Rebuild if needed: `npm run build`

### Images
- **Unsplash URLs**: Most images use Unsplash CDN with `?auto=format&fit=crop&q=80` parameters
- **Local Logos**: Brand logos stored in `/Images:Logos/`
- **Service Images**: Located in `/Delita bilder/Tjänster/`

---

## Styling System

### Tailwind CSS (CDN-based)
- Loaded via `<script src="https://cdn.tailwindcss.com">` in `index.html`
- Custom theme configured inline in `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        delita: {
          navy: '#E6DED1',    // Warm beige/cream (primary brand color)
          slate: '#f8fafc'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif']
      }
    }
  }
}
```

### Brand Colors
- **Primary**: `#E6DED1` (warm beige) - `bg-delita-navy`
- **Backgrounds**: `slate-50`, `slate-100`, `white`
- **Text**: `slate-600`, `slate-700`, `slate-900`

### Typography
- **Serif Font**: Cormorant Garamond (headlines, elegant feel)
- **Sans Font**: Inter (body text, clean and modern)

### Custom CSS
Minimal custom styles in `/index.css`:
- Mobile menu overlay styles
- Smooth scrolling
- Fixed positioning for mobile menu

---

## Routing

**Client-side routing** implemented in `App.tsx` using React state (no React Router).

### Routes:
- `/` - Homepage
- `/om-oss` - About page
- `/karriar` - Career page
- `/kontakt` - Contact page
- `/boka-mote` - Book meeting
- `/login` - Partner login portals
- `/tjanster/loner-medarbetare` - Payroll service
- `/tjanster/redovisning-beskattning` - Accounting service
- `/tjanster/radgivning` - Advisory service
- Additional service routes for Bolagsbildning, Emissioner

### Navigation Logic:
```typescript
const [currentRoute, setCurrentRoute] = useState('/');
const navigateTo = (path: string) => setCurrentRoute(path);
```

---

## Responsive Design

**Mobile-first approach** using Tailwind breakpoints:
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)

### Common Patterns:
```typescript
// Service cards: 1 col mobile, 2 col tablet, 3 col desktop
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8

// Contact cards: 1 col mobile, 2 col desktop
grid grid-cols-1 lg:grid-cols-2 gap-16

// Login portals: 1 col mobile, 2 col tablet, 3 col desktop
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
```

### Mobile Menu:
- Hidden on desktop (`hidden lg:flex`)
- Full-screen overlay on mobile using React Portal
- Custom CSS class `delita-mobile-menu` for styling

---

## Development

### Scripts:
```bash
npm run dev       # Start dev server (port 3003)
npm run build     # Build for production
npm run preview   # Preview production build locally
```

### Dev Server:
- Port: **3003** (configured in `vite.config.ts`)
- Hot module replacement enabled
- TypeScript type checking on save

### Environment:
- Environment variables can be added to `.env.local`
- Access via `import.meta.env.VITE_*`

---

## Deployment

**Platform**: Netlify (automatic deployment from Git repository)

### Configuration:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/`
- **Redirects**: Configured in `netlify.toml` for client-side routing

### Build Output:
- Production assets compiled to `/dist/`
- Assets optimized and minified
- Source maps generated for debugging

---

## Brand Guidelines

### Company Name
- **Official Name**: "Delita Advise" (NOT "Delita Advise AB")
- Always remove "AB" from all text references

### Messaging
- **Primary Focus**: "Digital närvaro" (digital presence)
- **NOT**: "Lokal närvaro" (local presence)
- **Taglines**:
  - "Personlig service, långsiktiga relationer"
  - "Din partner för ekonomisk framgång"

### Contact Information
- **Email**: kontakt@delita.se (general), NOT karriar@delita.se
- **Opening Hours**: Måndag - Fredag: 08:30 - 17:00
- **Location**: Malmö, Sweden

### Partner Integrations
- **Fortnox**: Accounting/business system login
- **Accountec**: Accounting system (https://delita.byraonline.se/)
- **SRF**: Professional membership (Sveriges Redovisningskonsulters Förbund)

---

## Animation Patterns

### Framer Motion:
Used throughout for smooth page transitions and scroll-triggered animations.

**Common Animation Pattern**:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* content */}
</motion.div>
```

**Hover Effects**:
- Cards: `hover:shadow-xl hover:-translate-y-2 transition-all`
- Images: `group-hover:scale-105 transition-transform duration-700`
- Buttons: `hover:bg-[#D6CFC3] transition-colors`

---

## Important Notes

### Hidden Sections
- **Team Portraits**: Currently hidden with `className="hidden"` in About.tsx (line 226)
  - Can be easily restored by removing the `hidden` class
  - Contains 3 placeholder team members

### Icon Library (Lucide React)
**Common Icons Used**:
- `Monitor` - Digital presence
- `HeartHandshake` - Personal service
- `Award` - Expertise/quality
- `BadgeCheck` - Quality assurance
- `Mail`, `Phone`, `Clock` - Contact info
- `Shield` - Trust/security

### Service Cards
Three main services with fixed heights:
- **Löner & Medarbetare** (Payroll)
- **Redovisning & Beskattning** (Accounting & Taxation)
- **Rådgivning** (Advisory)

Each card: `h-[450px]` with 50/50 image/content split

---

## Common Tasks

### Add a New Page:
1. Create component in `/components/NewPage.tsx`
2. Add route in `App.tsx`:
   ```typescript
   if (currentRoute === '/new-page') return <NewPage onNavigate={navigateTo} />;
   ```
3. Add navigation link in `Navbar.tsx`

### Update Content:
1. Find component in `/components/`
2. Edit JSX text directly
3. Save and test with `npm run dev`

### Change Images:
1. For Unsplash images: Replace URL in component
2. For local images: Add to `/Delita bilder/`, import in component

### Modify Styling:
1. Update Tailwind classes in component
2. For theme changes: Edit `tailwind.config` in `index.html`
3. For custom styles: Edit `/index.css`

---

## Troubleshooting

### Build Errors:
- Check TypeScript errors: `npx tsc --noEmit`
- Clear cache: `rm -rf node_modules dist && npm install`
- Verify imports: All components use `.tsx` extension

### Routing Issues:
- Netlify redirects: Check `netlify.toml`
- Navigation: Verify `onNavigate` prop passed correctly
- Client-side routing: All routes handled in `App.tsx`

### Styling Issues:
- Tailwind not loading: Check CDN script in `index.html`
- Classes not applying: Clear browser cache
- Responsive issues: Test at breakpoints (375px, 768px, 1024px)

---

## Future Considerations

### Potential Improvements:
- Add React Router for better routing
- Implement a CMS for content management
- Add form validation library (e.g., React Hook Form)
- Create image optimization pipeline
- Add SEO meta tags per page
- Implement Google Analytics
- Add multilingual support (Swedish/English)

### Maintenance:
- Regularly update dependencies
- Monitor Netlify build logs
- Test on multiple devices/browsers
- Optimize images for faster loading
- Review and update content quarterly

---

## Contact & Support

**Developer**: Oscar Johansson (https://oscarjohansson.eu/)
**Deployment**: Netlify
**Version Control**: Git

For questions or issues, refer to the README.md or contact the developer.
