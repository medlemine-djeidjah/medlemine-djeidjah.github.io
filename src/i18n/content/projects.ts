import type { Lang } from '../ui';

export interface Project {
  id: string;
  title: string;
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
      id: 'rag-chatbot',
      title: 'RAG Institutional Chatbot',
      organization: 'ESP Nouakchott',
      year: '2024',
      description: 'Designed and deployed a complete RAG pipeline to automate institutional information retrieval across FAQs, administrative documents, and academic programs.',
      highlights: [
        'Built full pipeline: document ingestion, intelligent chunking, vectorization, and contextual retrieval',
        'Iterated from POC (LangChain + ChromaDB) to MVP (Streamlit interface) to production deployment',
        'Evaluated response quality with accuracy and relevance scoring, corrected hallucinations',
      ],
      metrics: ['70% reduction in search time', 'Response time under 2s'],
      techStack: ['LangChain', 'ChromaDB', 'OpenAI API', 'Python', 'FAISS', 'Streamlit'],
    },
    {
      id: 'liveness-detection',
      title: 'Facial Liveness Detection System',
      organization: 'Applied Research Project',
      year: '2024',
      description: 'Built a computer vision system for biometric security, detecting facial liveness to prevent spoofing attacks using CNN architectures.',
      highlights: [
        'Collected, cleaned, and annotated image/video datasets for CNN training',
        'Trained convolutional neural networks with PyTorch and TensorFlow, optimized hyperparameters',
        'Deployed as a REST API via Flask with Docker containerization for integration into security systems',
      ],
      metrics: ['Over 95% accuracy', 'Cross-validated on real-world data'],
      techStack: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Flask', 'Docker'],
    },
    {
      id: 'hospital-saas',
      title: 'Hospital Traceability SaaS Platform',
      organization: 'Client Project in Production',
      year: '2023-2024',
      description: 'Conceived and developed a scalable SaaS platform for hospital traceability, including authentication, role-based access control, and audit logging.',
      highlights: [
        'Collaborated with stakeholders to define technical and functional specifications',
        'Integrated OCR/AI for automated extraction of medical data',
        'Wrote technical documentation and trained medical teams on the platform',
      ],
      metrics: ['Production deployment', 'Full RBAC system'],
      techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Python', 'Docker'],
    },
    {
      id: 'allocapp',
      title: 'AlloCapp -- VTC Mobile App',
      organization: 'Personal Project',
      year: '2024',
      description: 'Developed a full-featured ride-hailing mobile application with real-time geolocation, ride management, payments, and push notifications.',
      highlights: [
        'Built complete mobile application from scratch with Flutter',
        'Implemented real-time geolocation tracking with Google Maps API',
        'Integrated payment processing and push notification systems',
      ],
      metrics: ['1,000+ active users', 'Real-time tracking'],
      techStack: ['Flutter', 'Firebase', 'Google Maps API'],
    },
  ],
  fr: [
    {
      id: 'rag-chatbot',
      title: 'Chatbot IA Institutionnel avec Architecture RAG',
      organization: 'ESP Nouakchott',
      year: '2024',
      description: 'Conception et deploiement d\'une pipeline RAG complete pour automatiser la recherche d\'informations institutionnelles (FAQ, documents administratifs, programmes).',
      highlights: [
        'Pipeline complete : ingestion de documents, chunking intelligent, vectorisation et retrieval contextuel',
        'Developpement iteratif du POC (LangChain + ChromaDB) au MVP (interface Streamlit) a la production',
        'Evaluation qualitative des reponses avec scoring de pertinence, correction des hallucinations',
      ],
      metrics: ['Reduction de 70% du temps de recherche', 'Temps de reponse inferieur a 2s'],
      techStack: ['LangChain', 'ChromaDB', 'OpenAI API', 'Python', 'FAISS', 'Streamlit'],
    },
    {
      id: 'liveness-detection',
      title: 'Systeme de Detection de Vivacite Faciale',
      organization: 'Projet de recherche appliquee',
      year: '2024',
      description: 'Developpement d\'un systeme de vision par ordinateur pour la securite biometrique, detectant la vivacite faciale pour prevenir les attaques par usurpation via des architectures CNN.',
      highlights: [
        'Collecte, nettoyage et annotation de datasets images/videos pour l\'entrainement CNN',
        'Entrainement de reseaux de neurones convolutifs avec PyTorch/TensorFlow, optimisation des hyperparametres',
        'Deploiement en API REST via Flask avec conteneurisation Docker pour integration dans les systemes de securite',
      ],
      metrics: ['Precision superieure a 95%', 'Validation croisee sur donnees reelles'],
      techStack: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Flask', 'Docker'],
    },
    {
      id: 'hospital-saas',
      title: 'Plateforme SaaS de Tracabilite Hospitaliere',
      organization: 'Projet client en production',
      year: '2023-2024',
      description: 'Conception et developpement d\'une plateforme SaaS scalable pour la tracabilite hospitaliere, incluant authentification, controle d\'acces base sur les roles et journalisation.',
      highlights: [
        'Collaboration avec les parties prenantes pour definir les specifications techniques et fonctionnelles',
        'Integration OCR/IA pour l\'extraction automatisee de donnees medicales',
        'Redaction de documentation technique et formation des equipes medicales',
      ],
      metrics: ['Deploiement en production', 'Systeme RBAC complet'],
      techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Python', 'Docker'],
    },
    {
      id: 'allocapp',
      title: 'AlloCapp -- Application Mobile VTC',
      organization: 'Projet personnel',
      year: '2024',
      description: 'Developpement complet d\'une application mobile de VTC avec geolocalisation temps reel, gestion de courses, paiements et notifications push.',
      highlights: [
        'Application mobile complete developpee de zero avec Flutter',
        'Implementation du suivi de geolocalisation en temps reel avec Google Maps API',
        'Integration du traitement des paiements et systeme de notifications push',
      ],
      metrics: ['Plus de 1 000 utilisateurs actifs', 'Suivi en temps reel'],
      techStack: ['Flutter', 'Firebase', 'Google Maps API'],
    },
  ],
};

export function getProjects(lang: Lang): Project[] {
  return projects[lang];
}
