# 🧭 DevCompass - Comparateur de formations tech en France

Comparateur indépendant de formations tech et bootcamps en France. Built with Next.js 14, Tailwind CSS, déployable sur Vercel.

## 🚀 Déploiement rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start
```

## 📦 Déploiement sur Vercel

1. Push le repo sur GitHub
2. Connecte-le à [vercel.com](https://vercel.com)
3. Vercel détecte automatiquement Next.js
4. Deploy 🚀

Ou via CLI :
```bash
npx vercel --prod
```

## 🏗 Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Layout global + SEO
│   ├── sitemap.ts                  # Sitemap XML auto
│   ├── robots.ts                   # robots.txt
│   ├── formations/[slug]/page.tsx  # Pages formation
│   ├── categories/[slug]/page.tsx  # Pages catégorie
│   ├── blog/[slug]/page.tsx        # Articles blog
│   └── comparateur/page.tsx        # Comparateur interactif
├── components/                     # Composants React
├── data/                          # Données (formations, blog, catégories)
└── lib/                           # Utilitaires
```

## ✨ Features

- 🔍 Comparateur interactif avec filtres (prix, durée, format, CPF)
- 📄 8 fiches formations complètes avec avis
- 📝 4 articles de blog SEO
- 🏷 Schema.org (Course + AggregateRating + Article)
- 🗺 Sitemap XML automatique
- 📱 Responsive mobile-first
- ⚡ Static generation (SSG) pour les perfs
- 🎨 Design moderne avec Tailwind CSS

## 📊 Formations incluses

- Le Wagon, Ironhack, Jedha, OpenClassrooms
- Wild Code School, La Capsule, Holberton School, Epitech Digital

## 🔧 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Données en JSON/TypeScript (pas de CMS)
