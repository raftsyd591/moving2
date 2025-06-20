# Elite Movers - Professional Moving Services

> Official website for Elite Movers (النخبة للنقل) - Professional Furniture Moving Services in Saudi Arabia.

## 🚀 Quick Start

### Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/elite-movers.git
   cd elite-movers
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   # Edit the .env file with your actual values
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

```bash
npm run build
```

This will:
1. Build the Vite app with optimizations
2. Generate a sitemap.xml file automatically
3. Optimize and compress assets

### Deployment

The project is configured to deploy automatically to Netlify:

- Push to `main` branch: Triggers a production deployment
- Create a pull request: Triggers a preview deployment

## 🧰 Tech Stack

- **Frontend**: React, Vite
- **Styling**: TailwindCSS
- **SEO**: React Helmet for meta tags, JSON-LD structured data
- **Performance**: 
  - Image optimization (WebP, compression)
  - Code splitting
  - Tree shaking
  - CSS purging
  - Compression (gzip, brotli)

## 📦 Project Structure

```
/
├── public/            # Static files
├── scripts/           # Build scripts
├── src/
│   ├── components/    # Reusable components
│   ├── pages/         # Page components
│   ├── assets/        # Images, fonts, etc.
│   ├── styles/        # Global styles
│   └── App.jsx        # Main app component
├── .env.example       # Example environment variables
└── vite.config.js     # Vite configuration
```

## 🔧 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SITE_URL` | Base URL for the website |
| `VITE_API_BASE` | API endpoint base URL |
| `VITE_GA_TRACKING_ID` | Google Analytics tracking ID |

## 🌐 Connecting a Custom Domain

After deployment:

1. Go to Netlify Dashboard
2. Select your site
3. Go to "Domain settings"
4. Click "Add custom domain"
5. Follow the instructions to configure DNS settings

## 📝 License

Copyright © 2023-present Elite Movers. All rights reserved. 