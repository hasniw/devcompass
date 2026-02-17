export interface Category {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  icon: string;
}

export const categories: Category[] = [
  {
    slug: "dev-web",
    name: "Développement Web",
    title: "Meilleures formations développeur web 2026",
    description: "Découvrez notre sélection des meilleures formations pour devenir développeur web en 2026. Bootcamps, écoles et formations en ligne comparés objectivement.",
    metaDescription: "Comparatif des meilleures formations développeur web en France en 2026. Le Wagon, Ironhack, Wild Code School... Prix, durée, avis et taux d'insertion.",
    icon: "💻"
  },
  {
    slug: "data",
    name: "Data Science & IA",
    title: "Meilleures formations Data Science & IA 2026",
    description: "Les meilleures formations pour devenir data scientist, data analyst ou data engineer en 2026. Comparatif complet des bootcamps et formations en France.",
    metaDescription: "Top formations Data Science et IA en France 2026. Jedha, Le Wagon, OpenClassrooms... Comparatif prix, programmes, avis et débouchés.",
    icon: "📊"
  },
  {
    slug: "cybersec",
    name: "Cybersécurité",
    title: "Meilleures formations Cybersécurité 2026",
    description: "Les meilleures formations en cybersécurité en France en 2026. Devenez analyste SOC, pentester ou RSSI avec les meilleurs bootcamps et formations.",
    metaDescription: "Comparatif formations cybersécurité 2026 en France. Jedha, OpenClassrooms, Wild Code School... Prix, durée, certifications et débouchés.",
    icon: "🔒"
  },
  {
    slug: "design",
    name: "UX/UI Design",
    title: "Meilleures formations UX/UI Design 2026",
    description: "Devenez UX/UI Designer avec les meilleures formations en France en 2026. Bootcamps et formations en ligne comparés : prix, durée, qualité.",
    metaDescription: "Top formations UX/UI Design en France 2026. Ironhack, OpenClassrooms, Epitech Digital... Comparatif complet avec avis et tarifs.",
    icon: "🎨"
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}
