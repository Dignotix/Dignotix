# 🚀 Deployment Guide — Dignotix Website

Complete guide for deploying the Dignotix website to production.

---

## 🎯 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All images are in `public/images/` directory
- [ ] `npm run export:images` passes
- [ ] `npm run test` passes (all tests green)
- [ ] `npm run build` completes without errors
- [ ] `npm run lint` shows no errors
- [ ] Content in `src/data/*.json` is finalized
- [ ] Contact email/phone are correct
- [ ] SEO meta tags are configured
- [ ] Analytics ID is added (if using)

---

## 📦 Build Production Bundle

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder with:
- Minified JavaScript and CSS
- Optimized images
- Source maps (for debugging)
- Compressed assets

**Test the build locally:**
```bash
npm run preview
```

---

## 1️⃣ Deploy to Netlify

### Method A: Netlify CLI (Recommended)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Method B: Netlify Dashboard (Drag & Drop)

1. Run `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder to the upload area
4. Done! Your site is live.

### Method C: Connect Git Repository

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import from Git"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18+
6. Click "Deploy site"

**Custom Domain:**
- Go to Site Settings → Domain management
- Add custom domain (e.g., `dignotix.com`)
- Configure DNS (A/CNAME records)
- Enable HTTPS (automatic with Netlify)

**Environment Variables:**
- Site Settings → Build & deploy → Environment
- Add any `VITE_*` variables

---

## 2️⃣ Deploy to Vercel

### Method A: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Method B: Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Custom Domain:**
- Project Settings → Domains
- Add custom domain
- Follow DNS configuration steps

---

## 3️⃣ Deploy to GitHub Pages

**Note**: GitHub Pages uses a subdirectory, so you need to configure the base URL.

### Step 1: Update `vite.config.js`

```js
export default defineConfig({
  base: '/Dignotix/', // Replace with your repo name
  plugins: [react()],
  // ... rest of config
})
```

### Step 2: Build and Deploy

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### Step 3: Enable GitHub Pages

1. Go to your repo → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Save

Your site will be live at: `https://yourusername.github.io/Dignotix/`

---

## 4️⃣ Deploy to Custom Server (VPS/Cloud)

### Requirements

- Node.js 18+ installed on server
- Web server (Nginx, Apache, Caddy)
- SSH access

### Step 1: Build Locally

```bash
npm run build
```

### Step 2: Upload `dist/` to Server

```bash
# Using SCP
scp -r dist/* user@your-server.com:/var/www/dignotix/

# Or using SFTP/FTP client (FileZilla, WinSCP)
```

### Step 3: Configure Web Server

**Nginx Example** (`/etc/nginx/sites-available/dignotix`):

```nginx
server {
    listen 80;
    server_name dignotix.com www.dignotix.com;
    
    root /var/www/dignotix;
    index index.html;
    
    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
    
    # SPA routing - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Enable site:**
```bash
sudo ln -s /etc/nginx/sites-available/dignotix /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**SSL Certificate (Let's Encrypt):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d dignotix.com -d www.dignotix.com
```

---

## 5️⃣ Deploy to AWS S3 + CloudFront

### Step 1: Create S3 Bucket

```bash
aws s3 mb s3://dignotix-website
```

### Step 2: Upload Build

```bash
npm run build
aws s3 sync dist/ s3://dignotix-website --delete
```

### Step 3: Enable Static Website Hosting

1. S3 Console → Bucket → Properties
2. Static website hosting → Enable
3. Index document: `index.html`
4. Error document: `index.html` (for SPA routing)

### Step 4: Setup CloudFront

1. Create CloudFront distribution
2. Origin: Your S3 bucket
3. Default root object: `index.html`
4. Custom error response: 404 → `/index.html` (200)
5. Enable HTTPS (use ACM certificate)

---

## 📊 Post-Deployment

### 1. Verify Deployment

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Forms submit (if backend connected)
- [ ] Analytics tracking works
- [ ] Mobile responsive
- [ ] HTTPS enabled

### 2. Test Performance

Run Lighthouse audit (Chrome DevTools):
```
Right-click → Inspect → Lighthouse tab → Generate report
```

Aim for:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### 3. Setup Monitoring

**Free Options:**
- [UptimeRobot](https://uptimerobot.com/) — Uptime monitoring
- [Google Analytics](https://analytics.google.com/) — Traffic analytics
- [Sentry](https://sentry.io/) — Error tracking

### 4. Configure DNS

If using custom domain:

**A Record:**
```
Type: A
Name: @
Value: [Your server IP or CDN IP]
TTL: 3600
```

**CNAME Record (www):**
```
Type: CNAME
Name: www
Value: dignotix.com
TTL: 3600
```

**Check propagation:**
```bash
nslookup dignotix.com
dig dignotix.com
```

---

## 🔄 Continuous Deployment (CI/CD)

### Netlify/Vercel (Auto-Deploy)

Automatically deploys when you push to GitHub:

1. Connect repository (done during initial setup)
2. Push to `main` branch → auto-deploys
3. Pull requests get preview URLs

### GitHub Actions (Custom)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 🆘 Troubleshooting

### 404 Errors on Refresh (SPA Routing)

**Netlify**: Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Images Not Loading

- Check `public/images/` directory structure
- Verify image paths start with `/images/` not `./images/`
- Ensure images are committed to Git

### Build Fails

```bash
# Check Node version
node --version  # Should be 18+

# Clear cache
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

---

## 📝 Deployment Checklist Summary

- [ ] Run `npm run build` locally (no errors)
- [ ] Run `npm run test` (all pass)
- [ ] All images present
- [ ] Update contact info
- [ ] Configure custom domain DNS
- [ ] Enable HTTPS/SSL
- [ ] Setup analytics
- [ ] Test all pages on mobile
- [ ] Run Lighthouse audit
- [ ] Setup uptime monitoring
- [ ] Configure error tracking
- [ ] Document deployment process

---

**🎉 Congratulations! Your Dignotix website is live!**

For support: [Mohammed.abdo@rst.edu.eg](mailto:Mohammed.abdo@rst.edu.eg)
