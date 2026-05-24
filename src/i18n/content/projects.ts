import type { Lang } from '../ui';

export interface Project {
  id: string;
  title: string;
  role: string;
  organization: string;
  year: string;
  description: string;
  highlights: string[];
  metrics: string[];
  techStack: string[];
}

const projects: Record<Lang, Project[]> = {
  en: [
    {
      id: 'fire-smoke',
      title: 'Fire & Smoke Detection',
      role: 'Vision DL Engineer',
      organization: 'Caplogy R&D',
      year: '2025 -- 2026',
      description: 'High-performance computer-vision model for fisheye security cameras in hospital settings, running real-time fire & smoke detection at the edge.',
      highlights: [
        'Trained and optimised deep-learning models on specialised fire/smoke datasets',
        'Handled fisheye optical distortion correction for wide-angle security cameras',
        'Built an embedded inference pipeline for edge deployment in resource-constrained environments',
      ],
      metrics: ['Real-time inference', 'Edge deployment'],
      techStack: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'Edge AI'],
    },
    {
      id: 'rag-chatbot',
      title: 'ESP AI Chatbot',
      role: 'RAG Assistant',
      organization: 'Personal project',
      year: '2024',
      description: 'A full RAG pipeline that automates institutional information retrieval, deployed to production on the school\'s WordPress site.',
      highlights: [
        'Built the full RAG pipeline: LangChain + ChromaDB with Hugging Face embeddings',
        'Served inference through a FastAPI backend',
        'Deployed to production on WordPress for real student usage',
      ],
      metrics: ['70% fewer manual queries', 'Live in production'],
      techStack: ['LangChain', 'ChromaDB', 'Hugging Face', 'FastAPI', 'Python'],
    },
    {
      id: 'allocapp',
      title: 'AlloCapp',
      role: 'Smart Transportation',
      organization: 'Entrepreneurial project',
      year: '2025',
      description: 'A smart transportation platform: a production Flutter app with real-time geolocation plus a live fleet-tracking dashboard.',
      highlights: [
        'Shipped a Flutter app to production with 1,000+ users',
        'Implemented real-time geolocation and JWT authentication',
        'Built a React / TypeScript dashboard for live fleet tracking and operational KPI analytics',
      ],
      metrics: ['1,000+ users', 'Real-time tracking'],
      techStack: ['Flutter', 'React', 'TypeScript', 'JWT', 'Geolocation'],
    },
    {
      id: 'chronoesp',
      title: 'ChronoESP',
      role: 'Academic Scheduling',
      organization: 'Academic project',
      year: '2024',
      description: 'An academic scheduling tool that automates timetable management through Google Calendar integration.',
      highlights: [
        'Built a React interface integrated with the Google Calendar API',
        'Automated scheduling workflows to remove manual coordination',
      ],
      metrics: ['60% less scheduling overhead'],
      techStack: ['React', 'Google Calendar API', 'JavaScript'],
    },
  ],
  fr: [
    {
      id: 'fire-smoke',
      title: 'Detection Feu & Fumee',
      role: 'Ingenieur Vision DL',
      organization: 'Caplogy R&D',
      year: '2025 -- 2026',
      description: 'Modele de vision par ordinateur haute performance pour cameras de securite fisheye en milieu hospitalier, executant la detection feu & fumee en temps reel a l\'edge.',
      highlights: [
        'Entrainement et optimisation de modeles de deep learning sur des datasets specialises feu/fumee',
        'Correction de la distorsion optique fisheye des cameras de securite grand-angle',
        'Construction d\'une pipeline d\'inference embarquee pour deploiement edge en environnement contraint',
      ],
      metrics: ['Inference temps reel', 'Deploiement edge'],
      techStack: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'Edge AI'],
    },
    {
      id: 'rag-chatbot',
      title: 'Chatbot IA ESP',
      role: 'Assistant RAG',
      organization: 'Projet personnel',
      year: '2024',
      description: 'Une pipeline RAG complete automatisant la recherche d\'informations institutionnelles, deployee en production sur le site WordPress de l\'ecole.',
      highlights: [
        'Construction de la pipeline RAG complete : LangChain + ChromaDB avec embeddings Hugging Face',
        'Inference servie via un backend FastAPI',
        'Deploiement en production sur WordPress pour un usage etudiant reel',
      ],
      metrics: ['70% de requetes manuelles en moins', 'En production'],
      techStack: ['LangChain', 'ChromaDB', 'Hugging Face', 'FastAPI', 'Python'],
    },
    {
      id: 'allocapp',
      title: 'AlloCapp',
      role: 'Transport Intelligent',
      organization: 'Projet entrepreneurial',
      year: '2025',
      description: 'Une plateforme de transport intelligent : une app Flutter en production avec geolocalisation temps reel et un tableau de bord de suivi de flotte en direct.',
      highlights: [
        'Application Flutter livree en production avec plus de 1 000 utilisateurs',
        'Implementation de la geolocalisation temps reel et de l\'authentification JWT',
        'Tableau de bord React / TypeScript pour le suivi de flotte en direct et l\'analyse des KPI operationnels',
      ],
      metrics: ['Plus de 1 000 utilisateurs', 'Suivi temps reel'],
      techStack: ['Flutter', 'React', 'TypeScript', 'JWT', 'Geolocalisation'],
    },
    {
      id: 'chronoesp',
      title: 'ChronoESP',
      role: 'Planification Academique',
      organization: 'Projet academique',
      year: '2024',
      description: 'Un outil de planification academique qui automatise la gestion des emplois du temps via l\'integration Google Calendar.',
      highlights: [
        'Interface React integree a l\'API Google Calendar',
        'Automatisation des workflows de planification pour supprimer la coordination manuelle',
      ],
      metrics: ['60% de charge de planification en moins'],
      techStack: ['React', 'Google Calendar API', 'JavaScript'],
    },
  ],
};

export function getProjects(lang: Lang): Project[] {
  return projects[lang];
}
