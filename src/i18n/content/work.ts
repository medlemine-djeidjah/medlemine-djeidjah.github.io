import type { Lang } from '../ui';

export interface WorkExperience {
  id: string;
  role: string;
  organization: string;
  url?: string;
  type: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  results: string[];
  techStack: string[];
}

const work: Record<Lang, WorkExperience[]> = {
  en: [
    {
      id: 'ciril',
      role: 'AI Engineer',
      organization: 'Ciril Groupe',
      url: 'https://www.cirilgroupe.com/',
      type: 'Internship',
      location: 'France',
      period: 'May -- Aug. 2026',
      description: 'Built a Natural-Language-to-Query (NL-to-Query) chatbot for a financial reporting tool serving 3,000+ clients across financial institutions.',
      responsibilities: [
        'Designed the LLM architecture for the NL-to-Query assistant alongside the Product Owner and dev team in an agile workflow',
        'Translated business requirements into a structured query-generation pipeline',
        'Integrated the full NLP pipeline (parsing, structured query generation, validation) into the existing production environment',
      ],
      results: [
        '3,000+ clients across financial institutions',
        'NL-to-Query pipeline shipped to production',
        'Agile delivery with Product Owner',
      ],
      techStack: ['Python', 'LLMs', 'NLP', 'FastAPI', 'SQL', 'RAG'],
    },
    {
      id: 'hospital-bagnols',
      role: 'Data & Software Engineer',
      organization: 'Centre Hospitalier de Bagnols-sur-Ceze',
      type: 'Contract',
      location: 'France',
      period: 'Nov. -- Dec. 2025',
      description: 'Built an HAS-compliant medical traceability platform for endoscope tracking, with an automated OCR pipeline for document digitisation.',
      responsibilities: [
        'Developed an HAS-compliant traceability platform (React / Next.js, TypeScript) for endoscope tracking',
        'Automated an OCR pipeline (Python, OpenCV) for medical document digitisation, exposed via Node.js REST APIs',
        'Designed a PostgreSQL database (Supabase) with full audit history',
        'Containerised and deployed the platform with Docker in production',
      ],
      results: [
        'HAS-compliant platform deployed in production',
        'Automated medical document digitisation',
        'Full audit history with PostgreSQL',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Python', 'OpenCV', 'Node.js', 'PostgreSQL', 'Supabase', 'Docker'],
    },
    {
      id: 'ibtikar',
      role: 'Data & AI Engineer',
      organization: 'Ibtikar Technologies',
      url: 'https://www.ibtikartech.com/en',
      type: 'Work-Study',
      location: 'Nouakchott, Mauritania',
      period: 'Oct. 2024 -- Jul. 2025',
      description: 'Delivered the national Taazour platform and an anti-spoofing liveness detection system, with full CI/CD and containerised deployments.',
      responsibilities: [
        'Built the national Taazour platform: REST APIs (Next.js / Express.js), React / TypeScript interfaces, containerised microservices architecture',
        'Developed an anti-spoofing liveness detection system: CNN (PyTorch) + OpenCV classifying real faces vs. attacks, evaluated with F1, precision and recall',
        'Set up CI/CD pipelines (GitHub Actions) and Docker deployments',
        'Led a strict TypeScript refactoring across the codebase',
      ],
      results: [
        'National platform shipped to production',
        'Liveness model evaluated on F1 / precision / recall',
        'CI/CD and Docker deployment pipelines',
      ],
      techStack: ['Next.js', 'Express.js', 'React', 'TypeScript', 'PyTorch', 'OpenCV', 'Docker', 'GitHub Actions'],
    },
    {
      id: 'kinross',
      role: 'IT Support Intern',
      organization: 'Kinross Tasiast',
      url: 'https://www.kinross.com/',
      type: 'Internship',
      location: 'Mauritania',
      period: 'Aug. -- Sept. 2024',
      description: 'Network maintenance and technical support in a large-scale industrial gold-mining environment.',
      responsibilities: [
        'Provided network maintenance and technical support for 50+ users',
        'Troubleshot hardware and software issues in an industrial environment',
        'Ensured system availability across the site',
      ],
      results: [
        '50+ users supported',
        'Industrial-scale IT environment',
      ],
      techStack: ['Networking', 'IT Support', 'Troubleshooting', 'Linux'],
    },
  ],
  fr: [
    {
      id: 'ciril',
      role: 'Ingenieur IA',
      organization: 'Ciril Groupe',
      url: 'https://www.cirilgroupe.com/',
      type: 'Stage',
      location: 'France',
      period: 'Mai -- Aout 2026',
      description: 'Developpement d\'un chatbot Langage-Naturel-vers-Requete (NL-to-Query) pour un outil de reporting financier servant plus de 3 000 clients d\'institutions financieres.',
      responsibilities: [
        'Conception de l\'architecture LLM de l\'assistant NL-to-Query avec le Product Owner et l\'equipe de developpement en mode agile',
        'Traduction des besoins metier en une pipeline de generation de requetes structurees',
        'Integration de la pipeline NLP complete (parsing, generation de requetes structurees, validation) dans l\'environnement de production existant',
      ],
      results: [
        'Plus de 3 000 clients d\'institutions financieres',
        'Pipeline NL-to-Query livree en production',
        'Livraison agile avec le Product Owner',
      ],
      techStack: ['Python', 'LLMs', 'NLP', 'FastAPI', 'SQL', 'RAG'],
    },
    {
      id: 'hospital-bagnols',
      role: 'Ingenieur Data & Logiciel',
      organization: 'Centre Hospitalier de Bagnols-sur-Ceze',
      type: 'Contrat',
      location: 'France',
      period: 'Nov. -- Dec. 2025',
      description: 'Developpement d\'une plateforme de tracabilite medicale conforme HAS pour le suivi des endoscopes, avec une pipeline OCR automatisee de numerisation documentaire.',
      responsibilities: [
        'Developpement d\'une plateforme de tracabilite conforme HAS (React / Next.js, TypeScript) pour le suivi des endoscopes',
        'Automatisation d\'une pipeline OCR (Python, OpenCV) pour la numerisation de documents medicaux, exposee via des APIs REST Node.js',
        'Conception d\'une base de donnees PostgreSQL (Supabase) avec historique d\'audit complet',
        'Conteneurisation et deploiement de la plateforme avec Docker en production',
      ],
      results: [
        'Plateforme conforme HAS deployee en production',
        'Numerisation automatisee de documents medicaux',
        'Historique d\'audit complet avec PostgreSQL',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Python', 'OpenCV', 'Node.js', 'PostgreSQL', 'Supabase', 'Docker'],
    },
    {
      id: 'ibtikar',
      role: 'Ingenieur Data & IA',
      organization: 'Ibtikar Technologies',
      url: 'https://www.ibtikartech.com/en',
      type: 'Alternance',
      location: 'Nouakchott, Mauritanie',
      period: 'Oct. 2024 -- Juil. 2025',
      description: 'Livraison de la plateforme nationale Taazour et d\'un systeme de detection de vivacite anti-usurpation, avec CI/CD complet et deploiements conteneurises.',
      responsibilities: [
        'Developpement de la plateforme nationale Taazour : APIs REST (Next.js / Express.js), interfaces React / TypeScript, architecture microservices conteneurisee',
        'Developpement d\'un systeme de detection de vivacite anti-usurpation : CNN (PyTorch) + OpenCV classifiant vrais visages vs. attaques, evalue par F1, precision et recall',
        'Mise en place de pipelines CI/CD (GitHub Actions) et de deploiements Docker',
        'Refactoring TypeScript strict sur l\'ensemble du codebase',
      ],
      results: [
        'Plateforme nationale livree en production',
        'Modele de vivacite evalue sur F1 / precision / recall',
        'Pipelines CI/CD et deploiement Docker',
      ],
      techStack: ['Next.js', 'Express.js', 'React', 'TypeScript', 'PyTorch', 'OpenCV', 'Docker', 'GitHub Actions'],
    },
    {
      id: 'kinross',
      role: 'Stagiaire Support IT',
      organization: 'Kinross Tasiast',
      url: 'https://www.kinross.com/',
      type: 'Stage',
      location: 'Mauritanie',
      period: 'Aout -- Sept. 2024',
      description: 'Maintenance reseau et support technique dans un environnement industriel minier aurifere a grande echelle.',
      responsibilities: [
        'Maintenance reseau et support technique pour plus de 50 utilisateurs',
        'Resolution de problemes materiels et logiciels en environnement industriel',
        'Garantie de la disponibilite des systemes sur le site',
      ],
      results: [
        'Plus de 50 utilisateurs supportes',
        'Environnement IT industriel a grande echelle',
      ],
      techStack: ['Reseaux', 'Support IT', 'Depannage', 'Linux'],
    },
  ],
};

export function getWork(lang: Lang): WorkExperience[] {
  return work[lang];
}
