# Muhammad Zeeshan — Portfolio (Complete)

## Kaise chalayen (VS Code mein)

1. Is `MZeeshan` folder ko VS Code mein open karo (File → Open Folder).
2. VS Code ka terminal kholo (Terminal → New Terminal) aur ye command chalao:
   ```
   npm install
   ```
   (Ye sab required packages download karega — Tailwind, Framer Motion, Lucide icons, etc.)
3. Uske baad ye command chalao:
   ```
   npm run dev
   ```
4. Terminal mein ek link milega, jaise `http://localhost:5173/`. Usay ctrl+click karo ya browser mein open karo.

Bas — website live dikhni chahiye.

### Production build (deploy karne ke liye)

```
npm run build
```

Ye ek `dist/` folder banayega jo Vercel, Netlify, ya kisi bhi static host pe upload ho sakta hai.

## Vercel pe deploy kaise karein

Project pehle se Vercel ke liye ready hai — `vercel.json` already configured hai.

### Option 1 — GitHub se (recommended)

1. GitHub par ek naya repository banao (jaise `mzeeshan-portfolio`) aur ye code push karo.
2. [vercel.com](https://vercel.com) par login karo → **Add New → Project**.
3. Apni GitHub repo **import** karo.
4. Vercel khud **Framework = Vite**, **Build Command = `npm run build`**, aur **Output Directory = `dist`** detect kar lega.
   - Agar Root Directory manually set karni ho to **`MZeeshan`** select karo (root `vercel.json` already ye set karta hai).
5. **Deploy** dabao — bas, website live!

### Option 2 — Vercel CLI se (without GitHub)

```
cd MZeeshan
npm i -g vercel
vercel
```

CLI khud project detect karke deploy kar dega.

### Deploy ke baad

- Har baar GitHub pe push karte hi Vercel auto-deploy kar dega.
- Custom domain lagane ke liye: Project → Settings → Domains.

## Poora website structure

| Section | File | Kya hai |
|---|---|---|
| Navbar | `src/components/Navbar.jsx` | Sticky glass navbar, mobile menu, resume button |
| Hero | `src/components/Hero.jsx` | Naam, title, intro, CTAs, API-style status card |
| About | `src/components/About.jsx` | Profile photo, bio, quick facts |
| Skills | `src/components/Skills.jsx` | Backend (highlighted) + Databases, Frontend, DevOps |
| Experience | `src/components/Experience.jsx` | CodeAlpha + NeuroFive internships, timeline, certificate link |
| Projects | `src/components/Projects.jsx` | 4 featured projects with screenshots + live links |
| Contact | `src/components/Contact.jsx` | Email, Phone, LinkedIn, GitHub + footer |

## Folder structure

```
MZeeshan/
├── public/
│   └── assets/
│       ├── profile/profile.jpg
│       ├── projects/            (screenshots used in Projects section)
│       └── certificates/        (NeuroFive internship certificate — PDF + PNG)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customize karna ho to

- **Resume link**: `Navbar.jsx` aur `Hero.jsx` mein `CV_LINK` variable edit karo.
- **Colors**: `tailwind.config.js` mein `colors` object edit karo (emerald, indigo, base, etc.).
- **Monitoring Dashboard project ka screenshot**: `Projects.jsx` mein us project ke object mein `image: null` ko screenshot ke path se replace karo, aur image file `public/assets/projects/` mein daal do.

