# 🚀 Deployment Guide

## Deploy to GitHub Pages

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically trigger on the next push

### Step 3: Access Your Site
- Your site will be available at: `https://shaheer2492.github.io/sk-portfolio/`
- If you want a custom domain like `shaheer2492.github.io`, rename your repository to `shaheer2492.github.io` and remove the basePath from next.config.mjs

### For Custom Domain (Optional)
If you have a custom domain:
1. Create a `CNAME` file in the `public` folder with your domain name
2. In GitHub Settings > Pages, add your custom domain
3. Update `next.config.mjs` to remove the `basePath` and `assetPrefix` comments

### Troubleshooting
- If you get 404 errors, make sure the repository is public
- Check the Actions tab for any build failures
- Ensure GitHub Pages is enabled in repository settings

### Local Testing
```bash
npm run build  # Test the production build
npm run dev    # Development server
```
