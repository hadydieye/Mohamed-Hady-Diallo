const settings = {
  isSplash: false,
};

const seo = {
  title: "Mohamed Hady Diallo - Portfolio",
  description:
    "Développeur Fullstack | Je construis des solutions numériques pour l'Afrique.",
  og: {
    title: "Mohamed Hady Diallo Portfolio",
    type: "website",
    url: "https://github.com/hadydieye",
  },
};

const greeting = {
  title: "Mohamed Hady Diallo",
  logo_name: "HadyDiallo",
  nickname: "scriptseinsei",
  subTitle:
    "Développeur Fullstack · Je construis des solutions numériques pour l'Afrique.",
  resumeLink:
    "",
  portfolio_repository: "https://github.com/hadydieye/masterPortfolio",
  githubProfile: "https://github.com/hadydieye",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/hadydieye",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohamed-hady-diallo/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/224611353456",
    fontAwesomeIcon: "fa-whatsapp",
    backgroundColor: "#25D366",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100076425429658",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Gmail",
    link: "mailto:scriptseinseidieye@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Développement Frontend",
      fileName: "FullStackImg",
      skills: [
        "⚡ Création d'applications web responsives avec Next.js, React.js et TypeScript",
        "⚡ Conception d'interfaces modernes avec Tailwind CSS, Shadcn/ui et animations Framer Motion",
        "⚡ Maîtrise de JavaScript (ES6+), HTML5 et CSS3 pour des interfaces pixel-perfect",
      ],
      softwareSkills: [
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#000000" },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#06B6D4" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Framer Motion",
          fontAwesomeClassname: "simple-icons:framer",
          style: { color: "#0055FF" },
        },
      ],
    },
    {
      title: "Développement Mobile",
      fileName: "DesignImg",
      skills: [
        "⚡ Création d'applications mobiles multiplateformes avec React Native et Expo SDK",
        "⚡ Expérience avec Expo Router pour la navigation et le développement PWA",
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Expo",
          fontAwesomeClassname: "simple-icons:expo",
          style: { color: "#000020" },
        },
        {
          skillName: "PWA",
          fontAwesomeClassname: "simple-icons:pwa",
          style: { color: "#5A0FC8" },
        },
      ],
    },
    {
      title: "Backend & Base de Données",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Construction de backends évolutifs avec Supabase et PostgreSQL",
        "⚡ Implémentation de la sécurité au niveau des lignes (RLS) et d'API RESTful",
        "⚡ Expérience avec MySQL et PHP pour des applications web traditionnelles",
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: { color: "#3ECF8E" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#4169E1" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: { color: "#777BB4" },
        },
      ],
    },
    {
      title: "Outils & Gestion d'État",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Gestion d'état avec Zustand, TanStack Query et React Context",
        "⚡ Contrôle de version avec Git/GitHub et déploiement sur Vercel",
        "⚡ Conception UI/UX avec Figma et développement dans VS Code",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: { color: "#000000" },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: { color: "#F24E1E" },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: { color: "#007ACC" },
        },
        {
          skillName: "Vite",
          fontAwesomeClassname: "simple-icons:vite",
          style: { color: "#646CFF" },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/hadydieye",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Université Nongo Conakry",
      subtitle: "BT en Génie Informatique",
      logo_path: "",
      alt_name: "Université Nongo Conakry",
      duration: "Oct 2025",
      descriptions: [
        "⚡ Formation en Génie Informatique couvrant les fondamentaux du développement logiciel, des bases de données et des réseaux.",
        "⚡ Projets pratiques en développement web et mobile.",
      ],
      website_link: "",
    },
    {
      title: "Lycée GLC de Sangarédi",
      subtitle: "Sciences Expérimentales",
      logo_path: "",
      alt_name: "Lycée GLC de Sangarédi",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Baccalauréat en Sciences Expérimentales.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      id: "js-fundamentals",
      title: "JavaScript : des Fondamentaux à la Maîtrise",
      subtitle: "- Développement Full Stack",
      logo_path: "Javascript_fundamentals_to_advanced.jpg",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#8C151599",
      details: {
        instructor: "Sayman Creative Institute",
        rating: "4.4/5 (694 avis)",
        students: "35 820 étudiants",
        duration: "5h39 · 18 leçons",
        date: "26 novembre 2025",
        topics: [
          "Console API JS (console.log, assert, warn, error, clear)",
          "Variables, commentaires, types de données",
          "Opérateurs (arithmétiques, comparaison, logiques, affectation)",
          "Fonctions, conditions (if/else/else-if)",
          "Boucles, Array Methods, String Methods",
          "DOM Manipulation (ciblage par id/class, CSS dynamique)",
          "HTML, CSS & JS intégration",
          "Description HTML/CSS/JS → backend Node.js/Express → APIs → déploiement cloud",
          "Projet de classe final",
        ],
      },
    },
    {
      id: "react-expert",
      title: "React JS : Du Débutant à l'Expert",
      subtitle: "- Développement Full Stack",
      logo_path: "Hands_on_reactjs.jpg",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#61DAFB99",
      details: {
        instructor: "Learnify IT",
        rating: "4.3/5 (551 avis)",
        students: "",
        duration: "4.5h",
        date: "31 mai 2026",
        topics: [
          "Composants fonctionnels, JSX, props, state",
          "React Hooks (useState, useEffect, gestion des side effects)",
          "Gestion d'état avancée",
          "Formulaires dynamiques et interactifs",
          "Intégration d'APIs externes (fetch/axios)",
          "Bonnes pratiques de code maintenable",
          "Déploiement d'applications React",
        ],
      },
    },
    {
      id: "fullstack-games",
      title: "Maîtrise du Développement Web Full Stack",
      subtitle: "- Avec Jeux et Applications",
      logo_path: "Master_fullstack_dev_with_games_and_applications.jpg",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#00000099",
      details: {
        instructor: "Learnify IT",
        rating: "4.2/5 (258 avis)",
        students: "22 252 étudiants",
        duration: "11h57 · 26 leçons",
        date: "1 juin 2026",
        topics: [
          "HTML & CSS Basics → Portfolio webpage",
          "JS Fundamentals Part 1 & 2",
          "DOM Manipulation & Responsive Design",
          "Query Selectors & Event Listeners",
          "CSS Media Queries, Navbar mobile-friendly",
          "Backend avec Node.js & Express → ToDo List App",
          "Task Manager API (REST API)",
          "MongoDB (stockage, CRUD)",
          "Fetch API & Axios pour requêtes HTTP",
          "Connexion Frontend ↔ Backend API",
          "Contact Form avec stockage BDD",
          "Python pour le web dev",
          "Web Games : jeu JS, Rock Paper Scissors (web)",
          "2 projets de classe complets",
        ],
      },
    },
    {
      id: "git-fundamentals",
      title: "Fondamentaux de GIT, GitLab, GitHub",
      subtitle: "- Pour les Développeurs Logiciels",
      logo_path: "Git.jpg",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#F0503299",
      details: {
        instructor: "MTF Institute (Lisbonne, partenaire IBM/Intel/Microsoft, 520k+ étudiants)",
        rating: "4.1/5 (1 051 avis)",
        students: "45 906 étudiants",
        duration: "1h · 28 leçons",
        date: "6 juin 2026",
        topics: [
          "Setup environnement de travail",
          "Git en terminal (command line)",
          "Git en interface graphique (GUI)",
          "Historique des changements (git log, git show, git diff, git checkout)",
          "Branches (création, navigation)",
          "Résolution de conflits",
          "Développement collaboratif",
          "Annulation de changements (undo)",
          "Fonctionnalités utiles Git (stash, tags, etc.)",
          "Bonnes pratiques Git",
          "Pull requests & code review",
          "Introduction CI/CD",
          "Git Workflows",
        ],
      },
    },
    {
      id: "nextjs",
      title: "Next.js : Du Débutant à l'Avancé",
      subtitle: "- Développement Full Stack",
      logo_path: "Nexjs.jpg",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#00000099",
      details: {
        instructor: "Anton Voroniuk & Denys Kohut (Engineering Manager 10+ ans)",
        rating: "4.1/5 (67 avis)",
        students: "11 616 étudiants",
        duration: "5h02 · 54 leçons · 9 sections",
        date: "31 mai 2026",
        topics: [
          "CSR, SSR, SSG, ISR — différences et cas d'usage",
          "Page Router : routing basique, nested, dynamique (Part 1 & 2), catch-all paths",
          "Custom 404, Link component, prefetching, scroll behavior",
          "_app file, Layouts, _document & <Head>",
          "App Router : structure initiale, layouts, metadata (statique & dynamique), icons",
          "Nested layouts, Group Routes",
          "Rendering dans App Router : SSG, ISR, SSR, CSR",
          "Optimisation images (next/image), fonts (next/font)",
          "API Routes dans Page Router (Part 1 & 2)",
          "API Routes dans App Router (Part 1 & 2)",
          "Déploiement Vercel complet",
        ],
      },
    },
    {
      id: "cpp",
      title: "C++ Essentials",
      subtitle: "- Programmation",
      logo_path: "C++_Essentials.jpg",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#00599C99",
      details: {
        instructor: "Sayman Creative Institute",
        rating: "4.3/5 (319 avis)",
        students: "24 897 étudiants",
        duration: "5h44 · 22 leçons",
        date: "6 juin 2026",
        topics: [
          "Syntaxe C++, setup & installation",
          "Variables, types de données (int, double, char, string)",
          "Strings & Numbers approfondis",
          "Input utilisateur",
          "Arrays, fonctions, return statement",
          "IF/else, comparaisons, Switch statements",
          "While loop, For loop",
          "OOP : classes, objets, héritage, polymorphisme, encapsulation, abstraction",
          "Projets pratiques : calculatrice basique, calculatrice 4 fonctions, Madlibs game, dessin de formes",
          "2 projets de classe finaux",
        ],
      },
    },
  ],
};

const experience = {
  title: "Parcours",
  subtitle: "Formation, Leadership et Projets",
  description:
    "Un parcours autodidacte en programmation, jalonné de projets concrets et d'engagements dans la tech africaine.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Leadership & Projets",
      work: true,
      experiences: [
        {
          title: "Chef de Projet",
          company: "Hackathon MIABE 2026 - VortexDevs",
          company_url: "",
          logo_path: "",
          duration: "Avr 2026",
          location: "Conakry, Guinée",
          description:
            "Lead de l'équipe VortexDevs au Hackathon MIABE 2026. Développement d'IdentiGuinée, une plateforme d'identité numérique souveraine via blockchain simulée. Gestion d'équipe, coordination technique et présentation finale.",
          color: "#4285F4",
        },
        {
          title: "Ambassadeur FATA",
          company: "Afrinov Tech Expo",
          company_url: "",
          logo_path: "",
          duration: "Fév 2026",
          location: "Conakry, Guinée",
          description:
            "Représentant et ambassadeur au salon Afrinov Tech Expo. Promotion de l'innovation technologique et mise en relation des acteurs de la tech en Guinée.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Formation",
      experiences: [
        {
          title: "BT Génie Informatique",
          company: "Université Nongo Conakry",
          company_url: "",
          logo_path: "",
          duration: "Oct 2025",
          location: "Conakry, Guinée",
          description:
            "Formation en Génie Informatique couvrant les fondamentaux du développement logiciel, bases de données et réseaux.",
          color: "#0879bf",
        },
        {
          title: "Auto-formation",
          company: "Programmation",
          company_url: "",
          logo_path: "",
          duration: "2025",
          location: "Conakry, Guinée",
          description:
            "Début de la programmation en autodidacte. Formation en fullstack, IA et Python.",
          color: "#9b1578",
        },
        {
          title: "Baccalauréat Sciences Expérimentales",
          company: "Lycée GLC de Sangarédi",
          company_url: "",
          logo_path: "",
          duration: "2021 - 2024",
          location: "Boké, Guinée",
          description:
            "Obtention du Baccalauréat en Sciences Expérimentales.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projets",
  description:
    "Des solutions numériques conçues pour l'Afrique : de l'identité souveraine à l'éducation, en passant par la finance et l'immobilier.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "edusphere",
      title: "Edusphère",
      description:
        "Une application web qui permet aux écoles guinéennes de gérer élèves, enseignants et parents depuis un seul endroit. Fonctionne même sans connexion internet stable.",
      techStack: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS", "Shadcn/ui", "PWA"],
      imagePath: "Edusphere.png",
      githubLink: "https://github.com/hadydieye/Edusphere-saas",
      liveLink: "https://edusphere-saas.vercel.app",
    },
    {
      id: "identiguinee",
      title: "IdentiGuinée",
      description:
        "Une plateforme qui permet aux citoyens guinéens d'obtenir leurs documents d'identité officiels en ligne en 2 minutes, sans intermédiaire et sans corruption possible. A remporté le 1er prix du Hackathon MIABE 2026.",
      techStack: ["Next.js 16", "TypeScript", "Supabase", "Framer Motion", "Shadcn/ui", "pdf-lib"],
      imagePath: "Identiguinée.png",
      githubLink: "https://github.com/hadydieye/identiguinee",
      liveLink: "https://identiguinee-one.vercel.app",
    },
    {
      id: "louma",
      title: "Louma",
      description:
        "Une application mobile pour trouver ou louer un logement en Guinée. Les locataires peuvent parcourir les annonces sans créer de compte, contacter directement propriétaires et agences.",
      techStack: ["Expo SDK 55", "React Native", "TypeScript", "Supabase", "NativeWind", "Expo Router"],
      imagePath: "Louma.png",
      githubLink: "https://github.com/hadydieye/louma-app",
      liveLink: "",
    },
    {
      id: "santeya",
      title: "Santeya",
      description:
        "Une plateforme qui connecte patients, médecins, agents de santé communautaire et sages-femmes en Guinée sur un seul outil accessible depuis le téléphone.",
      techStack: ["Next.js 16", "TypeScript", "Supabase", "Tailwind v4", "Shadcn/ui", "PWA"],
      imagePath: "Santeya.png",
      githubLink: "https://github.com/hadydieye/Santeya",
      liveLink: "https://santeya.vercel.app",
    },
    {
      id: "masterit",
      title: "MasterIT",
      description:
        "Un site de formations tech pour les guinéens et africains francophones voulant apprendre le développement web, l'IA ou la cybersécurité et lancer une carrière freelance.",
      techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind v4", "Framer Motion", "Shadcn/ui"],
      imagePath: "master-IT.png",
      githubLink: "https://github.com/hadydieye/MasterIT",
      liveLink: "https://master-it-drab.vercel.app",
    },
    {
      id: "noteea",
      title: "NoteEA",
      description:
        "Une application mobile pour étudiants guinéens permettant de gérer ses notes de cours, suivre ses moyennes par matière et exporter ses fiches en PDF. Fonctionne sans internet.",
      techStack: ["React 18", "TypeScript", "Vite", "Zustand", "Tailwind CSS", "Shadcn/ui", "Recharts"],
      imagePath: "NoteEA.png",
      githubLink: "https://github.com/hadydieye/noteea",
      liveLink: "",
    },
  ],
};

const publicationsHeader = {
  title: "Publications",
  description: "Articles et contenus techniques à venir.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

const contactPageData = {
  contactSection: {
    title: "Me Contacter",
    profile_image_path: "",
    description:
      "Disponible sur GitHub, LinkedIn, WhatsApp et par email. N'hésitez pas à me contacter pour des collaborations, projets ou opportunités.",
  },
  blogSection: {
    title: "Blog",
    subtitle:
      "J'aime partager mes expériences et connaissances techniques. Articles à venir.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Adresse",
    subtitle: "Conakry, Guinée",
    locality: "Conakry",
    country: "Guinée",
    region: "Conakry",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Téléphone",
    subtitle: "+224 611 35 34 56",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projects,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
