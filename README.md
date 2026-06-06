# Mohamed Hady Diallo — Portfolio

Portfolio personnel développé avec React.js, présentant mon parcours, compétences, projets et certifications en tant que développeur fullstack basé à Conakry, Guinée.

## Sections

- Accueil avec présentation et CV
- Compétences (Frontend, Mobile, Backend, Outils)
- Projets réalisés (Edusphère, IdentiGuinée, Louma, Santeya, MasterIT, NoteEA)
- Parcours et expériences
- Formations et diplômes
- Certifications (JavaScript, React, Fullstack, Git, Next.js, C++)
- Contact (GitHub, LinkedIn, WhatsApp, Facebook, Gmail)
- Thème clair/sombre

## Technologies

- React 16 + react-router-dom
- styled-components
- react-reveal (animations)
- react-helmet (SEO)
- react-pdf (visualisation CV)
- baseui / styletron

## Démarrer

```bash
git clone https://github.com/hadydieye/masterPortfolio.git
cd masterPortfolio
npm install
npm start
```

## Personnaliser

Éditez `src/portfolio.js` pour modifier les informations personnelles, projets, expériences, certifications et coordonnées.

### Ajouter un projet

Ajoutez un objet dans le tableau `projects.data` avec les champs : `id`, `title`, `description`, `techStack`, `imagePath`, `githubLink`, `liveLink`.

### Ajouter une certification

Ajoutez un objet dans le tableau `certifications.certifications` avec les champs : `id`, `title`, `subtitle`, `logo_path`, `certificate_link`, `alt_name`, `color_code`, `details` (objet contenant `instructor`, `rating`, `students`, `duration`, `date`, `topics`).

Placez l'image correspondante dans le dossier `public/certifications/`.

### Changer le thème

Le thème par défaut est défini dans `src/theme.js`. Les variables `lightTheme` (bleu) et `darkTheme` (material dark) sont interchangeables. Le toggle en bas de page permet de basculer entre les deux.

## Déploiement

```bash
npm run build
```

Le dossier `build/` contient les fichiers statiques prêts à être déployés (Vercel, Netlify, GitHub Pages, etc.).

## Licence

MIT
