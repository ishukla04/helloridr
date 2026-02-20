# Deployment Guide for helloridr.ca

This guide will help you deploy your Hello Ridr website to your domain **https://helloridr.ca/**

## Quick Overview

Since your website is a static site (HTML, CSS, JavaScript), you have several excellent hosting options. Here are the **easiest and most popular** methods:

---

## Option 1: Netlify (Recommended - Easiest & Free)

**Best for:** Quick deployment, free SSL, automatic HTTPS, easy custom domain setup

### Steps:

1. **Create a Netlify Account**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up for free (can use GitHub, email, etc.)

2. **Deploy Your Site**
   - **Method A: Drag & Drop**
     - Log into Netlify
     - Drag your entire project folder (with index.html, styles.css, script.js) onto the Netlify dashboard
     - Your site will be live in seconds!
   
   - **Method B: Git Integration** (Recommended for updates)
     - Create a GitHub repository
     - Upload your files to GitHub
     - Connect GitHub to Netlify
     - Netlify will auto-deploy on every push

3. **Connect Your Domain**
   - In Netlify dashboard, go to **Site settings** → **Domain management**
   - Click **Add custom domain**
   - Enter: `helloridr.ca`
   - Follow the DNS configuration instructions
   - Netlify will provide DNS records to add to your domain registrar

4. **Configure DNS at Your Domain Registrar**
   - Log into where you bought the domain (GoDaddy, Namecheap, etc.)
   - Add these DNS records (Netlify will provide exact values):
     - **A Record**: `@` → Netlify's IP address
     - **CNAME Record**: `www` → your-site-name.netlify.app
   - Wait 24-48 hours for DNS propagation

**Cost:** Free (with Netlify branding) or $19/month (Pro plan removes branding)

---

## Option 2: Vercel (Also Great & Free)

**Best for:** Fast deployment, excellent performance, free SSL

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended) or email

2. **Deploy Your Site**
   - Install Vercel CLI: `npm i -g vercel`
   - In your project folder, run: `vercel`
   - Or drag & drop on vercel.com dashboard
   - Or connect GitHub repository

3. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `helloridr.ca` and `www.helloridr.ca`
   - Follow DNS configuration instructions

**Cost:** Free for personal projects

---

## Option 3: GitHub Pages (Free)

**Best for:** If you're already using GitHub

### Steps:

1. **Create GitHub Repository**
   - Create a new repository on GitHub
   - Upload all your files (index.html, styles.css, script.js)

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select source branch (usually `main`)
   - Your site will be at: `username.github.io/repository-name`

3. **Custom Domain Setup**
   - In Pages settings, add custom domain: `helloridr.ca`
   - Create a file named `CNAME` in your repository root with content: `helloridr.ca`
   - Configure DNS at your registrar:
     - **A Records**: 
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - **CNAME Record**: `www` → `username.github.io`

**Cost:** Free

---

## Option 4: Traditional Web Hosting (cPanel/FTP)

**Best for:** If you already have web hosting

### Steps:

1. **Get FTP Credentials**
   - From your hosting provider (cPanel, etc.)
   - You'll need: FTP host, username, password

2. **Upload Files**
   - Use FTP client (FileZilla, WinSCP) or cPanel File Manager
   - Upload all files to `public_html` or `www` folder:
     - `index.html`
     - `styles.css`
     - `script.js`

3. **Configure Domain**
   - Point domain DNS to your hosting provider's nameservers
   - Usually done at your domain registrar

**Cost:** Varies ($3-10/month typically)

---

## Option 5: Cloudflare Pages (Free)

**Best for:** Fast CDN, excellent performance

### Steps:

1. **Create Cloudflare Account**
   - Go to [cloudflare.com](https://www.cloudflare.com)
   - Sign up for free

2. **Add Your Site**
   - Add site → Enter `helloridr.ca`
   - Cloudflare will scan your DNS

3. **Deploy via Pages**
   - Go to Workers & Pages → Create application → Pages
   - Upload your files or connect Git repository

**Cost:** Free

---

## DNS Configuration Guide

Regardless of which hosting you choose, you'll need to configure DNS at your domain registrar:

### Common DNS Records:

1. **A Record** (for root domain):
   - Name: `@` or leave blank
   - Value: Your hosting provider's IP address
   - TTL: 3600 (or auto)

2. **CNAME Record** (for www subdomain):
   - Name: `www`
   - Value: Your hosting provider's domain (e.g., `your-site.netlify.app`)
   - TTL: 3600

3. **Nameservers** (Alternative):
   - Some providers give you nameservers to use instead
   - Replace your registrar's nameservers with hosting provider's

### Where to Configure:
- Log into your domain registrar (where you bought helloridr.ca)
- Look for "DNS Management" or "Domain Settings"
- Add/modify the records above

---

## Recommended: Netlify (Easiest Path)

**Why Netlify?**
- ✅ Easiest setup (drag & drop)
- ✅ Free SSL certificate (HTTPS)
- ✅ Automatic deployments
- ✅ Great performance
- ✅ Easy custom domain setup
- ✅ Free tier is generous

### Quick Start with Netlify:

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up/login
3. Drag your project folder onto the dashboard
4. Your site is live! (You'll get a URL like `random-name-123.netlify.app`)
5. Go to Site settings → Domain management
6. Add custom domain: `helloridr.ca`
7. Follow DNS instructions
8. Done! 🎉

---

## Important Notes

1. **SSL/HTTPS**: All modern hosting providers (Netlify, Vercel, etc.) provide free SSL certificates automatically
2. **DNS Propagation**: After configuring DNS, it can take 24-48 hours to fully propagate worldwide
3. **Backup**: Keep a local copy of your files
4. **Updates**: After deployment, any changes you make locally need to be re-uploaded

---

## Need Help?

- **Netlify Support**: [docs.netlify.com](https://docs.netlify.com)
- **Domain DNS Help**: Contact your domain registrar's support
- **General Questions**: Check hosting provider's documentation

---

## Next Steps After Deployment

1. ✅ Test your site at https://helloridr.ca
2. ✅ Test on mobile devices
3. ✅ Submit to Google Search Console
4. ✅ Set up Google Analytics (optional)
5. ✅ Test contact form and newsletter (may need backend integration)

Good luck with your deployment! 🚀

