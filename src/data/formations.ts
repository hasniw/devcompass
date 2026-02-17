export interface Formation {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  priceLabel: string;
  duration: string;
  durationWeeks: number;
  format: string[];
  cities: string[];
  categories: string[];
  cpf: boolean;
  rating: number;
  reviewCount: number;
  insertionRate?: number;
  website: string;
  logo: string;
  pros: string[];
  cons: string[];
  reviews: Review[];
  features: string[];
}

export interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
  context: string;
}

export const formations: Formation[] = [
  {
    slug: "le-wagon",
    name: "Le Wagon",
    shortDescription: "Le bootcamp coding #1 mondial. Formation intensive de 9 ou 24 semaines en développement web et data science.",
    description: `Le Wagon est l'un des bootcamps les plus reconnus au monde, fondé à Paris en 2013. Classé #1 sur Switchup et Coursereport pendant plusieurs années consécutives, il propose des formations intensives en développement web (Ruby on Rails, JavaScript) et en data science (Python, Machine Learning).

Le programme est structuré autour de projets pratiques, avec un projet final de 2 semaines en équipe. L'ambiance est collaborative et le réseau d'alumni (plus de 20 000 diplômés) est un vrai atout pour l'insertion professionnelle.

Le Wagon propose aussi un format à temps partiel sur 24 semaines pour ceux qui ne peuvent pas se libérer à temps plein. Les cours se déroulent en présentiel dans plus de 40 campus à travers le monde, dont Paris, Lyon, Marseille, Bordeaux et Nantes en France.`,
    price: 6900,
    priceLabel: "6 900 €",
    duration: "9 semaines (temps plein) ou 24 semaines (temps partiel)",
    durationWeeks: 9,
    format: ["Présentiel", "Temps plein", "Temps partiel"],
    cities: ["Paris", "Lyon", "Marseille", "Bordeaux", "Nantes", "Lille"],
    categories: ["dev-web", "data"],
    cpf: true,
    rating: 4.6,
    reviewCount: 2847,
    insertionRate: 93,
    website: "https://www.lewagon.com",
    logo: "/logos/le-wagon.svg",
    pros: [
      "Réseau d'alumni massif et actif",
      "Reconnaissance internationale",
      "Pédagogie par projets très efficace",
      "Nombreux campus en France",
      "Éligible CPF"
    ],
    cons: [
      "Prix élevé par rapport à la durée",
      "Rythme très intense, pas pour tout le monde",
      "Stack Ruby on Rails moins demandée que React/Node",
      "Peu de temps pour approfondir certains sujets"
    ],
    reviews: [
      {
        author: "Marie L.",
        rating: 5,
        date: "2025-11-15",
        text: "Expérience transformatrice. En 9 semaines, je suis passée de zéro à un niveau suffisant pour décrocher un stage. Le réseau alumni est incroyable.",
        context: "Reconversion depuis le marketing"
      },
      {
        author: "Thomas B.",
        rating: 4,
        date: "2025-09-20",
        text: "Très bonne formation mais le rythme est épuisant. Il faut vraiment se dédier à 100%. Le projet final est le meilleur moment.",
        context: "Ancien consultant"
      },
      {
        author: "Sophie K.",
        rating: 4,
        date: "2025-07-10",
        text: "Bonne introduction au dev web, mais 9 semaines c'est court. J'ai dû continuer à apprendre seule après. Le réseau vaut le coup.",
        context: "Étudiante en reconversion"
      }
    ],
    features: ["Ruby on Rails", "JavaScript", "HTML/CSS", "PostgreSQL", "Heroku", "GitHub", "Figma"]
  },
  {
    slug: "ironhack",
    name: "Ironhack",
    shortDescription: "Bootcamp international avec des formations en Web Dev, UX/UI Design et Data Analytics.",
    description: `Ironhack est un bootcamp tech international fondé en 2013, présent dans 10 pays. À Paris, il propose trois cursus principaux : Web Development, UX/UI Design et Data Analytics.

Le programme Web Development se concentre sur une stack moderne avec JavaScript, React, Node.js et MongoDB. Le cursus est disponible en format temps plein (9 semaines) ou temps partiel (24 semaines).

Ironhack se distingue par son approche orientée employabilité avec un Career Services dédié : préparation aux entretiens, coaching CV, et événements de networking. Le taux de satisfaction des étudiants est élevé, bien que le prix reste conséquent.`,
    price: 7500,
    priceLabel: "7 500 €",
    duration: "9 semaines (temps plein) ou 24 semaines (temps partiel)",
    durationWeeks: 9,
    format: ["Présentiel", "Remote", "Temps plein", "Temps partiel"],
    cities: ["Paris"],
    categories: ["dev-web", "data", "design"],
    cpf: true,
    rating: 4.4,
    reviewCount: 1523,
    insertionRate: 89,
    website: "https://www.ironhack.com",
    logo: "/logos/ironhack.svg",
    pros: [
      "Stack JavaScript moderne (React, Node.js)",
      "Career Services performant",
      "Ambiance internationale",
      "Format flexible (temps plein ou partiel)",
      "Éligible CPF"
    ],
    cons: [
      "Un seul campus en France (Paris)",
      "Prix parmi les plus élevés du marché",
      "Communauté alumni plus petite que Le Wagon en France",
      "Support post-formation limité"
    ],
    reviews: [
      {
        author: "Alex M.",
        rating: 5,
        date: "2025-10-05",
        text: "Super bootcamp ! La stack React/Node est exactement ce que les entreprises demandent. J'ai trouvé un CDI en 2 mois.",
        context: "Reconversion depuis la finance"
      },
      {
        author: "Julie R.",
        rating: 4,
        date: "2025-08-12",
        text: "Bonne formation mais le prix est vraiment élevé. Le Career Services m'a bien aidée pour les entretiens.",
        context: "Jeune diplômée"
      },
      {
        author: "Kevin D.",
        rating: 3,
        date: "2025-06-20",
        text: "Le contenu est bien mais les profs changent souvent. Certains modules manquent de profondeur. Le réseau aide cependant.",
        context: "Auto-entrepreneur"
      }
    ],
    features: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "HTML/CSS", "Git"]
  },
  {
    slug: "jedha",
    name: "Jedha Bootcamp",
    shortDescription: "Le spécialiste français de la formation en Data Science, Data Engineering et Cybersécurité.",
    description: `Jedha est un bootcamp français fondé en 2017, spécialisé dans les métiers de la data et de la cybersécurité. Basé à Paris avec des formations disponibles en remote, Jedha propose trois parcours principaux : Data Science, Data Engineering et Cybersécurité.

Le programme est structuré en 3 niveaux progressifs : Essentials (2 semaines), Fullstack (10 semaines) et Lead (2 semaines). Cette approche modulaire permet de choisir le niveau d'approfondissement souhaité.

Jedha se distingue par la qualité de ses contenus en data science et son approche pratique avec des projets sur des données réelles. La certification RNCP délivrée est un plus pour le CV.`,
    price: 6995,
    priceLabel: "6 995 €",
    duration: "10 semaines (Fullstack) ou 14 semaines (parcours complet)",
    durationWeeks: 10,
    format: ["Présentiel", "Remote", "Temps plein", "Temps partiel"],
    cities: ["Paris", "Lyon", "Remote"],
    categories: ["data", "cybersec"],
    cpf: true,
    rating: 4.5,
    reviewCount: 987,
    insertionRate: 91,
    website: "https://www.jedha.co",
    logo: "/logos/jedha.svg",
    pros: [
      "Spécialiste reconnu en Data & Cybersécurité",
      "Parcours modulaire et progressif",
      "Certification RNCP reconnue",
      "Disponible en remote",
      "Bon rapport qualité-prix"
    ],
    cons: [
      "Moins de notoriété internationale",
      "Peu de campus physiques",
      "Réseau alumni plus petit",
      "Pas de formation en développement web"
    ],
    reviews: [
      {
        author: "Pierre G.",
        rating: 5,
        date: "2025-12-01",
        text: "Excellente formation data science. Les projets sont concrets et les profs vraiment compétents. La certification RNCP est un vrai plus.",
        context: "Ingénieur en reconversion"
      },
      {
        author: "Camille F.",
        rating: 4,
        date: "2025-09-15",
        text: "Très bon contenu mais le rythme est soutenu. Le format remote fonctionne bien. J'aurais aimé plus de projets en groupe.",
        context: "Analyste business"
      }
    ],
    features: ["Python", "SQL", "Machine Learning", "Deep Learning", "Spark", "Cloud AWS", "Tableau"]
  },
  {
    slug: "openclassrooms",
    name: "OpenClassrooms",
    shortDescription: "Plateforme de formation en ligne avec des parcours diplômants en alternance ou à temps plein.",
    description: `OpenClassrooms est la plateforme française de formation en ligne de référence, fondée en 1999 (anciennement Site du Zéro). Elle propose des parcours diplômants reconnus par l'État (RNCP) dans de nombreux domaines tech : développement web, data, cybersécurité, design, etc.

Le modèle est unique : formation 100% en ligne, à son rythme, avec un mentor dédié qui suit l'étudiant chaque semaine en visio. Les parcours sont accessibles en formation continue, en alternance, ou financés via le CPF.

Le gros avantage d'OpenClassrooms est sa flexibilité et son prix attractif. L'inconvénient est qu'il faut être très autonome et motivé pour aller au bout, car il n'y a pas la dynamique de groupe d'un bootcamp présentiel.`,
    price: 4000,
    priceLabel: "4 000 € (ou gratuit en alternance)",
    duration: "6 à 12 mois selon le parcours",
    durationWeeks: 36,
    format: ["Remote", "Temps plein", "Temps partiel", "Alternance"],
    cities: ["Remote (100% en ligne)"],
    categories: ["dev-web", "data", "cybersec", "design"],
    cpf: true,
    rating: 4.1,
    reviewCount: 5420,
    insertionRate: 78,
    website: "https://openclassrooms.com",
    logo: "/logos/openclassrooms.svg",
    pros: [
      "Prix très compétitif (gratuit en alternance)",
      "100% en ligne, très flexible",
      "Diplômes reconnus par l'État (RNCP)",
      "Mentorat individuel hebdomadaire",
      "Large choix de parcours"
    ],
    cons: [
      "Nécessite beaucoup d'autonomie",
      "Pas de dynamique de groupe",
      "Taux d'abandon élevé",
      "Contenu parfois insuffisamment mis à jour",
      "Taux d'insertion plus faible que les bootcamps intensifs"
    ],
    reviews: [
      {
        author: "Lucas T.",
        rating: 4,
        date: "2025-10-20",
        text: "Bon parcours développeur web. Le mentor est top et le rythme flexible. Par contre, il faut vraiment être discipliné.",
        context: "Formation en parallèle d'un emploi"
      },
      {
        author: "Nadia H.",
        rating: 3,
        date: "2025-08-05",
        text: "Contenu correct mais certains cours datent un peu. L'alternance est un super deal financièrement.",
        context: "Étudiante en alternance"
      },
      {
        author: "Marc V.",
        rating: 5,
        date: "2025-11-30",
        text: "En alternance, c'est imbattable. J'ai mon diplôme, de l'expérience pro, et je n'ai rien payé. Top !",
        context: "Alternant développeur"
      }
    ],
    features: ["HTML/CSS", "JavaScript", "React", "Python", "PHP", "Node.js", "SQL"]
  },
  {
    slug: "wild-code-school",
    name: "Wild Code School",
    shortDescription: "École tech européenne avec une pédagogie par projets et de nombreux campus en France.",
    description: `La Wild Code School est une école tech européenne fondée en 2014, avec plus de 20 campus en Europe dont une dizaine en France. Elle propose des formations en développement web (5 mois), data/IA et cybersécurité.

La pédagogie est basée sur des projets concrets réalisés pour de vrais clients (entreprises, associations). Cette approche "learning by doing" est très appréciée et permet d'acquérir une expérience quasi-professionnelle pendant la formation.

Le prix est compétitif par rapport aux autres bootcamps, et la présence de nombreux campus permet d'accéder à la formation depuis de nombreuses villes françaises.`,
    price: 7000,
    priceLabel: "7 000 €",
    duration: "5 mois (temps plein)",
    durationWeeks: 20,
    format: ["Présentiel", "Remote", "Temps plein"],
    cities: ["Paris", "Lyon", "Bordeaux", "Toulouse", "Nantes", "Strasbourg", "Reims", "Orléans"],
    categories: ["dev-web", "data", "cybersec"],
    cpf: true,
    rating: 4.3,
    reviewCount: 1876,
    insertionRate: 85,
    website: "https://www.wildcodeschool.com",
    logo: "/logos/wild-code-school.svg",
    pros: [
      "Nombreux campus en France",
      "Pédagogie par projets avec vrais clients",
      "Durée de 5 mois plus approfondie",
      "Bonne communauté Wilders",
      "Éligible CPF"
    ],
    cons: [
      "Qualité variable selon les campus",
      "Moins de notoriété que Le Wagon",
      "Encadrement parfois insuffisant",
      "Stack parfois limitée (PHP/Symfony sur certains campus)"
    ],
    reviews: [
      {
        author: "Emma D.",
        rating: 5,
        date: "2025-10-10",
        text: "Les projets clients sont un vrai plus. J'ai pu constituer un portfolio solide pendant la formation. Campus de Lyon top !",
        context: "Reconversion depuis l'enseignement"
      },
      {
        author: "Yann P.",
        rating: 3,
        date: "2025-07-25",
        text: "Formation correcte mais très inégale selon les formateurs. Certaines semaines étaient excellentes, d'autres moins.",
        context: "Campus de Toulouse"
      }
    ],
    features: ["JavaScript", "React", "Node.js", "PHP", "Symfony", "HTML/CSS", "Git", "Agile"]
  },
  {
    slug: "la-capsule",
    name: "La Capsule",
    shortDescription: "Bootcamp coding intensif de 10 semaines, spécialisé JavaScript fullstack (React/Node).",
    description: `La Capsule est un bootcamp coding français fondé en 2017, avec des campus à Paris, Lyon, Marseille, Bordeaux, Lille, Nice et Monaco. La formation dure 10 semaines et se concentre sur le JavaScript fullstack avec React et Node.js.

Le programme est très orienté pratique avec la création de 10 projets dont une application mobile avec React Native. C'est l'un des rares bootcamps à inclure le développement mobile dans son cursus de base.

La Capsule mise sur une pédagogie intensive avec des journées de 9h à 18h30 et des challenges quotidiens. L'ambiance est réputée conviviale et les promos sont volontairement limitées en taille (environ 30 personnes).`,
    price: 8000,
    priceLabel: "8 000 €",
    duration: "10 semaines (temps plein)",
    durationWeeks: 10,
    format: ["Présentiel", "Temps plein"],
    cities: ["Paris", "Lyon", "Marseille", "Bordeaux", "Lille", "Nice", "Monaco"],
    categories: ["dev-web"],
    cpf: true,
    rating: 4.7,
    reviewCount: 834,
    insertionRate: 95,
    website: "https://www.lacapsule.academy",
    logo: "/logos/la-capsule.svg",
    pros: [
      "Stack JavaScript moderne et complète",
      "Inclut le développement mobile (React Native)",
      "Taux d'insertion excellent (95%)",
      "Petites promos, bon encadrement",
      "Nombreux campus en France"
    ],
    cons: [
      "Prix élevé (8 000 €)",
      "Uniquement en temps plein",
      "Rythme très intense",
      "Pas de parcours data ou cybersécurité"
    ],
    reviews: [
      {
        author: "Sarah M.",
        rating: 5,
        date: "2025-11-20",
        text: "Meilleure décision de ma vie. En 10 semaines j'ai appris React, Node et même React Native. J'ai décroché un CDI en 3 semaines après.",
        context: "Reconversion depuis les RH"
      },
      {
        author: "Romain C.",
        rating: 4,
        date: "2025-09-08",
        text: "Très bonne formation mais épuisante. Le prix est justifié par la qualité. Le réseau alumni commence à bien se développer.",
        context: "Ancien commercial"
      }
    ],
    features: ["JavaScript", "React", "React Native", "Node.js", "Express", "MongoDB", "HTML/CSS", "Git"]
  },
  {
    slug: "holberton-school",
    name: "Holberton School",
    shortDescription: "Formation longue (1-2 ans) en informatique avec une pédagogie peer-to-peer unique et gratuite à l'entrée.",
    description: `Holberton School est une école d'informatique fondée en 2015 à San Francisco, avec un campus à Paris (Thales). Son modèle est unique : la formation est gratuite à l'entrée, et les étudiants remboursent un pourcentage de leur salaire une fois en poste (ISA - Income Share Agreement).

Le programme dure 1 à 2 ans et couvre les fondamentaux de l'informatique en profondeur : C, Python, DevOps, systèmes, réseaux, algorithmes. La pédagogie est 100% peer-to-peer, sans professeurs traditionnels.

Holberton se distingue par la profondeur technique de sa formation. Contrairement aux bootcamps de 9-10 semaines, les étudiants acquièrent des bases solides en computer science, ce qui les rend polyvalents et adaptables.`,
    price: 0,
    priceLabel: "Gratuit à l'entrée (ISA : 17% du salaire pendant 3 ans)",
    duration: "12 à 24 mois",
    durationWeeks: 52,
    format: ["Présentiel", "Temps plein"],
    cities: ["Paris (Thales)"],
    categories: ["dev-web"],
    cpf: false,
    rating: 4.2,
    reviewCount: 412,
    insertionRate: 88,
    website: "https://www.holbertonschool.com",
    logo: "/logos/holberton.svg",
    pros: [
      "Gratuit à l'entrée, modèle ISA",
      "Formation longue et approfondie",
      "Bases solides en computer science",
      "Pédagogie peer-to-peer innovante",
      "Reconnaissance dans la Silicon Valley"
    ],
    cons: [
      "ISA coûteux sur le long terme (17% du salaire pendant 3 ans)",
      "Un seul campus en France",
      "Pédagogie peer-to-peer pas adaptée à tous",
      "Engagement long (1-2 ans)",
      "Moins orienté employabilité immédiate"
    ],
    reviews: [
      {
        author: "Antoine R.",
        rating: 4,
        date: "2025-08-30",
        text: "Formation très complète, on touche à tout. Le peer-to-peer c'est déroutant au début mais on apprend énormément. Attention au coût réel de l'ISA.",
        context: "Étudiant en 2ème année"
      },
      {
        author: "Léa B.",
        rating: 4,
        date: "2025-06-15",
        text: "Excellente base technique. Après Holberton, j'ai pu apprendre n'importe quel framework en quelques jours. Par contre c'est long.",
        context: "Diplômée, dev chez une startup"
      }
    ],
    features: ["C", "Python", "Linux", "DevOps", "Docker", "SQL", "Algorithms", "System Engineering"]
  },
  {
    slug: "epitech-digital",
    name: "Epitech Digital",
    shortDescription: "Formation en 3 ou 5 ans aux métiers du numérique, avec une pédagogie par projets inspirée d'Epitech.",
    description: `Epitech Digital est la branche digitale du groupe Epitech, créée en 2020. Elle propose des formations en 3 ans (Bachelor) et 5 ans (MSc) orientées vers les métiers du numérique : développement web, data, UX design, marketing digital, cybersécurité.

La pédagogie reprend les codes d'Epitech avec un apprentissage par projets, sans cours magistraux traditionnels. Les étudiants travaillent en équipe sur des projets concrets dès la première année.

Epitech Digital se positionne comme une alternative plus accessible qu'Epitech (pas besoin de background en maths/sciences) tout en conservant la rigueur pédagogique du groupe. La formation est éligible à l'alternance à partir de la 3ème année.`,
    price: 8500,
    priceLabel: "8 500 €/an (ou alternance dès la 3ème année)",
    duration: "3 ans (Bachelor) ou 5 ans (MSc)",
    durationWeeks: 156,
    format: ["Présentiel", "Temps plein", "Alternance"],
    cities: ["Paris", "Lyon", "Bordeaux", "Toulouse", "Lille", "Rennes", "Strasbourg", "Montpellier", "Nice", "Nantes"],
    categories: ["dev-web", "data", "design", "cybersec"],
    cpf: false,
    rating: 4.0,
    reviewCount: 623,
    insertionRate: 82,
    website: "https://www.epitech.digital",
    logo: "/logos/epitech-digital.svg",
    pros: [
      "Formation longue et complète",
      "Marque Epitech reconnue",
      "Nombreux campus en France",
      "Alternance possible",
      "Pédagogie par projets éprouvée"
    ],
    cons: [
      "Coût total élevé sur 3-5 ans",
      "Formation longue, pas adapté à la reconversion rapide",
      "Encore jeune, moins de recul",
      "Pas éligible CPF",
      "Niveau d'entrée parfois faible"
    ],
    reviews: [
      {
        author: "Hugo M.",
        rating: 4,
        date: "2025-09-25",
        text: "Bonne formation, les projets sont stimulants. L'alternance en 3ème année est un vrai plus financièrement.",
        context: "Étudiant en 2ème année"
      },
      {
        author: "Inès A.",
        rating: 3,
        date: "2025-07-10",
        text: "Le nom Epitech ouvre des portes mais le programme Digital est encore en rodage. Certains modules manquent de profondeur.",
        context: "Diplômée du Bachelor"
      }
    ],
    features: ["HTML/CSS", "JavaScript", "Python", "UX Design", "Data Analytics", "Marketing Digital", "Agile"]
  }
];

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find(f => f.slug === slug);
}

export function getFormationsByCategory(category: string): Formation[] {
  return formations.filter(f => f.categories.includes(category));
}
