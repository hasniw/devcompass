import { MetadataRoute } from 'next';
import { formations } from '@/data/formations';
import { categories } from '@/data/categories';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devcompass.fr';

  const formationUrls = formations.map(f => ({
    url: `${baseUrl}/formations/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map(c => ({
    url: `${baseUrl}/categories/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogUrls = blogPosts.map(p => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/comparateur`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...formationUrls,
    ...categoryUrls,
    ...blogUrls,
  ];
}
