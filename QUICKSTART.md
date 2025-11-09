# 🚀 Quick Start Guide — Dignotix Website

## Prerequisites Check

Before you begin, ensure you have:
- ✅ Node.js 18+ installed (`node --version`)
- ✅ npm 9+ installed (`npm --version`)
- ✅ A code editor (VS Code recommended)

## Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install
```

This will install:
- React 18.2 (UI framework)
- Vite 5.0 (build tool)
- TailwindCSS 3.4 (styling)
- Framer Motion 10.16 (animations)
- React Router 6.20 (routing)
- React CountUp, React Helmet Async

### 2. Add Images

Place your product images in `public/images/`. See `public/images/README.md` for the complete list.

**Validate images:**
```bash
npm run export:images
```

### 3. Start Development Server

```bash
npm run dev
```

Visit **http://localhost:5173** in your browser.

### 4. Customize Content

Edit these files to update content:
- `src/data/siteContent.json` — All text content
- `src/data/financials.json` — Financial data

### 5. Run Tests

```bash
npm run test
```

Two unit tests should pass:
- Hero component test
- ContactCard component test

### 6. Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

### 7. Preview Production Build

```bash
npm run preview
```

Visit **http://localhost:4173** to preview the production build.

---

## 📱 Viewing on Mobile

To test on your phone while developing:

1. Find your computer's local IP (e.g., `192.168.1.100`)
2. Start dev server: `npm run dev -- --host`
3. On your phone, visit: `http://192.168.1.100:5173`

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173 (Windows PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process

# Or use a different port
npm run dev -- --port 3000
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Check for linting errors
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

---

## 🎨 Next Steps

1. **Replace placeholder images** with actual product photos
2. **Customize colors** in `tailwind.config.js`
3. **Add analytics** (Google Analytics, Plausible)
4. **Setup contact form backend** (FormSpree, Netlify Forms)
5. **Deploy to production** (Netlify, Vercel)

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)

---

## 💡 Tips

- Press `Ctrl + C` to stop the dev server
- Changes auto-reload in the browser (HMR)
- Check browser console for errors
- Use React DevTools extension for debugging

---

**Need help?** Contact [Mohammed.abdo@rst.edu.eg](mailto:Mohammed.abdo@rst.edu.eg)
