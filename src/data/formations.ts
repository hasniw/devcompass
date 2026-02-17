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
  affiliateUrl: string;
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
    features: ["Ruby on Rails", "JavaScript", "HTML/CSS", "PostgreSQL", "Heroku", "GitHub", "Figma"],
    affiliateUrl: "https://www.lewagon.com/?utm_source=devcompass&utm_medium=referral"
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
    features: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "HTML/CSS", "Git"],
    affiliateUrl: "https://www.ironhack.com/?utm_source=devcompass&utm_medium=referral"
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
    features: ["Python", "SQL", "Machine Learning", "Deep Learning", "Spark", "Cloud AWS", "Tableau"],
    affiliateUrl: "https://www.jedha.co/?utm_source=devcompass&utm_medium=referral"
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
    features: ["HTML/CSS", "JavaScript", "React", "Python", "PHP", "Node.js", "SQL"],
    affiliateUrl: "https://openclassrooms.com/?utm_source=devcompass&utm_medium=referral"
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
    features: ["JavaScript", "React", "Node.js", "PHP", "Symfony", "HTML/CSS", "Git", "Agile"],
    affiliateUrl: "https://www.wildcodeschool.com/?utm_source=devcompass&utm_medium=referral"
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
    features: ["JavaScript", "React", "React Native", "Node.js", "Express", "MongoDB", "HTML/CSS", "Git"],
    affiliateUrl: "https://www.lacapsule.academy/?utm_source=devcompass&utm_medium=referral"
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
    features: ["C", "Python", "Linux", "DevOps", "Docker", "SQL", "Algorithms", "System Engineering"],
    affiliateUrl: "https://www.holbertonschool.com/?utm_source=devcompass&utm_medium=referral"
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
    features: ["HTML/CSS", "JavaScript", "Python", "UX Design", "Data Analytics", "Marketing Digital", "Agile"],
    affiliateUrl: "https://www.epitech.digital/?utm_source=devcompass&utm_medium=referral"
  },
  {
    slug: "maestria",
    name: "Maestria",
    shortDescription: "École spécialisée en Intelligence Artificielle et Data Science. Formations certifiantes de 3 à 12 mois.",
    description: `Maestria est une école française fondée en 2021, spécialisée dans les métiers de l'Intelligence Artificielle et de la Data. Basée à Paris avec des formations disponibles en remote, elle propose des parcours intensifs de 3 à 12 mois pour devenir Data Analyst, Data Scientist ou Machine Learning Engineer.

Le programme est conçu par des professionnels en activité chez des grands groupes (LVMH, Société Générale, Capgemini). L'approche est résolument pratique : chaque module se termine par un projet sur données réelles fournies par des entreprises partenaires.

Maestria se distingue par un accompagnement personnalisé avec un ratio formateur/élève très favorable (1 pour 12 maximum). La certification RNCP est en cours d'obtention, mais les formations sont déjà éligibles au CPF via un partenariat avec un organisme certificateur.`,
    price: 7500,
    priceLabel: "7 500 €",
    duration: "3 à 12 mois selon le parcours",
    durationWeeks: 24,
    format: ["Présentiel", "Remote", "Temps plein", "Temps partiel"],
    cities: ["Paris", "Remote"],
    categories: ["data"],
    cpf: true,
    rating: 4.3,
    reviewCount: 342,
    insertionRate: 87,
    website: "https://www.maestria.co",
    logo: "/logos/maestria.svg",
    pros: [
      "Spécialisation IA/Data poussée",
      "Formateurs issus de grands groupes",
      "Petites promotions, suivi personnalisé",
      "Projets sur données réelles d'entreprises",
      "Éligible CPF"
    ],
    cons: [
      "École encore jeune, moins de recul",
      "Un seul campus physique (Paris)",
      "Réseau alumni en construction",
      "Certification RNCP pas encore obtenue en propre"
    ],
    reviews: [
      {
        author: "Julien M.",
        rating: 5,
        date: "2025-11-10",
        text: "Excellente formation Data Science. Les projets avec des vraies entreprises font la différence en entretien. Formateurs très compétents.",
        context: "Reconversion depuis la finance"
      },
      {
        author: "Amina K.",
        rating: 4,
        date: "2025-09-05",
        text: "Bon contenu, bien structuré. L'école est encore jeune mais la qualité est au rendez-vous. Le réseau se construit peu à peu.",
        context: "Analyste en reconversion"
      }
    ],
    features: ["Python", "SQL", "Machine Learning", "Deep Learning", "TensorFlow", "Power BI", "Cloud GCP"],
    affiliateUrl: "https://www.maestria.co/?utm_source=devcompass&utm_medium=referral&utm_campaign=fiche"
  },
  {
    slug: "doranco",
    name: "Doranco",
    shortDescription: "École du digital proposant des formations en développement web, design et marketing digital, accessibles en alternance.",
    description: `Doranco est un centre de formation professionnelle fondé en 2010, spécialisé dans les métiers du digital. Basé à Paris (Bagnolet) avec un second campus à Massy, Doranco propose des formations de niveau Bac à Bac+5 en développement web, webdesign, marketing digital et gestion de projet IT.

Le gros atout de Doranco est l'alternance : la majorité des formations sont accessibles en contrat de professionnalisation ou d'apprentissage, ce qui les rend gratuites pour l'étudiant. Les parcours durent de 6 mois à 2 ans selon le niveau visé.

L'école travaille avec un réseau d'entreprises partenaires pour placer ses alternants. L'encadrement est de type scolaire avec des classes de 15 à 20 personnes, ce qui permet un suivi individualisé.`,
    price: 0,
    priceLabel: "Gratuit en alternance (ou 5 500 € en formation continue)",
    duration: "6 mois à 2 ans selon le parcours",
    durationWeeks: 40,
    format: ["Présentiel", "Alternance", "Temps plein"],
    cities: ["Paris (Bagnolet)", "Massy"],
    categories: ["dev-web", "design"],
    cpf: true,
    rating: 3.8,
    reviewCount: 567,
    insertionRate: 76,
    website: "https://www.doranco.fr",
    logo: "/logos/doranco.svg",
    pros: [
      "Gratuit en alternance",
      "Diplômes reconnus par l'État (RNCP)",
      "Accompagnement dans la recherche d'alternance",
      "Petites classes, suivi personnalisé",
      "Éligible CPF"
    ],
    cons: [
      "Notoriété limitée dans le milieu tech",
      "Qualité variable selon les formateurs",
      "Locaux un peu vieillissants",
      "Peu de campus (Île-de-France uniquement)",
      "Taux d'insertion moyen comparé aux bootcamps"
    ],
    reviews: [
      {
        author: "Mehdi S.",
        rating: 4,
        date: "2025-10-18",
        text: "Bonne formation dev web en alternance. L'avantage c'est que c'est gratuit et on a de l'expérience pro. Les cours sont bien structurés.",
        context: "Alternant développeur web"
      },
      {
        author: "Clara N.",
        rating: 3,
        date: "2025-07-22",
        text: "Correct pour le prix (gratuit en alternance) mais certains formateurs ne sont pas au niveau. L'accompagnement entreprise est le vrai plus.",
        context: "Formation webdesign"
      }
    ],
    features: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "React", "MySQL", "Figma"],
    affiliateUrl: "https://www.doranco.fr/?utm_source=devcompass&utm_medium=referral&utm_campaign=fiche"
  },
  {
    slug: "studi",
    name: "Studi",
    shortDescription: "Leader français de la formation en ligne avec plus de 200 parcours diplômants accessibles 100% à distance.",
    description: `Studi est le leader français de la formation en ligne, fondé en 2019 après la fusion de plusieurs organismes de formation à distance. Avec plus de 70 000 apprenants et 200 parcours, Studi couvre un large spectre de métiers : développement web, data, cybersécurité, marketing digital, design, et bien d'autres.

Le modèle Studi repose sur une plateforme e-learning accessible 24h/24 avec des cours en vidéo, des exercices interactifs et des projets. Chaque apprenant bénéficie d'un coach dédié et peut passer sa certification à distance.

Le principal avantage de Studi est son prix compétitif et sa flexibilité totale : vous apprenez à votre rythme, depuis chez vous, avec des rentrées tout au long de l'année. Les formations sont éligibles au CPF et débouchent sur des diplômes reconnus (RNCP).`,
    price: 3490,
    priceLabel: "3 490 € (ou prise en charge CPF/alternance)",
    duration: "6 à 24 mois selon le parcours",
    durationWeeks: 48,
    format: ["Remote", "Temps plein", "Temps partiel", "Alternance"],
    cities: ["Remote (100% en ligne)"],
    categories: ["dev-web", "data", "cybersec", "design"],
    cpf: true,
    rating: 3.9,
    reviewCount: 4230,
    insertionRate: 72,
    website: "https://www.studi.com",
    logo: "/logos/studi.svg",
    pros: [
      "Prix très compétitif",
      "100% en ligne, flexibilité maximale",
      "Large catalogue de formations (200+)",
      "Diplômes reconnus RNCP",
      "Éligible CPF et alternance",
      "Rentrées tout au long de l'année"
    ],
    cons: [
      "Taux d'insertion plus faible que les bootcamps",
      "Nécessite beaucoup d'autonomie et de discipline",
      "Qualité inégale selon les parcours",
      "Pas de dynamique de groupe ni de réseau alumni structuré",
      "Support parfois lent"
    ],
    reviews: [
      {
        author: "Sandra L.",
        rating: 4,
        date: "2025-11-28",
        text: "Très bon rapport qualité-prix. J'ai fait le parcours dev web en 10 mois en parallèle de mon travail. Le coach est disponible et utile.",
        context: "Reconversion en parallèle d'un emploi"
      },
      {
        author: "Fabien R.",
        rating: 3,
        date: "2025-08-14",
        text: "Le contenu est correct mais il faut être très motivé. Pas de camarades de promo, c'est parfois solitaire. Le diplôme RNCP est un vrai plus.",
        context: "Formation data analyst"
      },
      {
        author: "Isabelle M.",
        rating: 4,
        date: "2025-10-02",
        text: "En alternance, c'est un deal imbattable. Formation gratuite, salaire, et diplôme. Le contenu pourrait être plus à jour sur certains modules.",
        context: "Alternante cybersécurité"
      }
    ],
    features: ["HTML/CSS", "JavaScript", "React", "Python", "SQL", "PHP", "WordPress", "Figma"],
    affiliateUrl: "https://www.studi.com/?utm_source=devcompass&utm_medium=referral&utm_campaign=fiche"
  },
  {
    slug: "datascientest",
    name: "DataScientest",
    shortDescription: "Organisme de formation spécialisé en Data Science, Data Engineering, IA et Machine Learning.",
    description: `DataScientest est un organisme de formation français fondé en 2017, spécialisé dans les métiers de la data. Il propose des formations en Data Analyst, Data Scientist, Data Engineer, Machine Learning Engineer et IA Generative.

Le modèle pédagogique est hybride : 85% de contenu en ligne sur une plateforme dédiée et 15% de masterclasses en visio avec des experts. Les formations durent de 3 à 5 mois et sont disponibles en format bootcamp (temps plein) ou continu (temps partiel, compatible avec un emploi).

DataScientest est reconnu pour la qualité de ses contenus techniques et ses partenariats avec des grandes écoles (Mines ParisTech, Sorbonne). Les certifications délivrées sont reconnues par l'État (RNCP) et les formations sont éligibles au CPF.`,
    price: 5995,
    priceLabel: "5 995 €",
    duration: "3 à 5 mois",
    durationWeeks: 16,
    format: ["Remote", "Temps plein", "Temps partiel"],
    cities: ["Remote (100% en ligne)", "Paris (masterclasses)"],
    categories: ["data"],
    cpf: true,
    rating: 4.4,
    reviewCount: 1456,
    insertionRate: 90,
    website: "https://datascientest.com",
    logo: "/logos/datascientest.svg",
    pros: [
      "Spécialiste reconnu en Data/IA",
      "Partenariats grandes écoles (Mines, Sorbonne)",
      "Format hybride flexible (85% en ligne)",
      "Certification RNCP reconnue",
      "Éligible CPF",
      "Bon taux d'insertion (90%)"
    ],
    cons: [
      "Pas de formation en développement web",
      "Prix élevé pour du 85% en ligne",
      "Peu d'interactions en direct",
      "Plateforme e-learning parfois rigide",
      "Réseau alumni moins développé que Jedha"
    ],
    reviews: [
      {
        author: "Nicolas D.",
        rating: 5,
        date: "2025-12-05",
        text: "Formation Data Scientist excellente. Le partenariat Mines donne de la crédibilité. Les projets sont bien pensés et le contenu technique est solide.",
        context: "Ingénieur en reconversion"
      },
      {
        author: "Marina T.",
        rating: 4,
        date: "2025-09-20",
        text: "Bon contenu, format flexible qui permet de continuer à travailler. Les masterclasses sont un vrai plus. J'aurais aimé plus d'interactions.",
        context: "Data Analyst en montée en compétences"
      },
      {
        author: "Olivier P.",
        rating: 4,
        date: "2025-07-15",
        text: "Très bonne formation technique. Le prix est justifié par la qualité. Attention, il faut déjà avoir des bases en maths/stats pour suivre sereinement.",
        context: "Reconversion depuis le conseil"
      }
    ],
    features: ["Python", "SQL", "Machine Learning", "Deep Learning", "NLP", "Spark", "Cloud AWS/GCP", "Power BI"],
    affiliateUrl: "https://datascientest.com/?utm_source=devcompass&utm_medium=referral&utm_campaign=fiche"
  },
];

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find(f => f.slug === slug);
}

export function getFormationsByCategory(category: string): Formation[] {
  return formations.filter(f => f.categories.includes(category));
}
