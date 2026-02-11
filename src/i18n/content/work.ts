import type { Lang } from '../ui';

export interface WorkExperience {
  id: string;
  role: string;
  organization: string;
  url?: string;
  type: string;
  period: string;
  description: string;
  responsibilities: string[];
  results: string[];
  techStack: string[];
}

const work: Record<Lang, WorkExperience[]> = {
  en: [
    {
      id: 'ibtikar',
      role: 'Full-Stack Developer',
      organization: 'Ibtikar Technologies',
      url: 'https://www.ibtikartech.com/en',
      type: 'Professional',
      period: '2023 -- 2024',
      description: 'Full-stack developer at Ibtikar Technologies, building and maintaining web applications across the entire development lifecycle for a leading tech company.',
      responsibilities: [
        'Developed and maintained full-stack web applications using modern frameworks and technologies',
        'Collaborated with cross-functional teams to deliver features aligned with business requirements',
        'Designed and implemented RESTful APIs and database architectures',
        'Participated in code reviews, testing, and continuous integration workflows',
      ],
      results: [
        '1 year of full-time development',
        'Production applications delivered',
        'Full development lifecycle experience',
      ],
      techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Git', 'REST APIs'],
    },
    {
      id: 'kinross',
      role: 'IT Specialist',
      organization: 'Kinross Gold Corporation',
      url: 'https://www.kinross.com/home/',
      type: 'Professional',
      period: '2023',
      description: 'IT specialist at Kinross Gold, a major international gold mining company, providing technical support and managing IT infrastructure.',
      responsibilities: [
        'Managed and maintained IT infrastructure, networks, and systems across the organization',
        'Provided technical support and troubleshooting for hardware and software issues',
        'Ensured system availability, security, and performance in an industrial environment',
        'Collaborated with teams to implement and optimize IT solutions',
      ],
      results: [
        'Maintained high system uptime',
        'IT infrastructure support at scale',
        'Industrial environment experience',
      ],
      techStack: ['Network Administration', 'IT Infrastructure', 'System Administration', 'Troubleshooting'],
    },
    {
      id: 'hospital-bagnols',
      role: 'Full-Stack Developer',
      organization: 'Hospital Bagnols-sur-Ceze',
      url: 'https://www.bagnolssurceze.fr/',
      type: 'Professional',
      period: '2025',
      description: 'Short-term full-stack development engagement at Hospital Bagnols-sur-Ceze, contributing to digital health solutions.',
      responsibilities: [
        'Developed web-based solutions for hospital internal systems',
        'Worked with medical teams to understand requirements and translate them into technical specifications',
        'Implemented features for patient data management and hospital workflows',
      ],
      results: [
        'Delivered within 1-month timeline',
        'Healthcare sector experience',
      ],
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Git'],
    },
    {
      id: 'rag-chatbot',
      role: 'AI Developer -- RAG Chatbot',
      organization: 'ESP Nouakchott',
      type: 'Institutional Project',
      period: '2024',
      description: 'Designed and deployed a complete RAG pipeline to automate institutional information retrieval across FAQs, administrative documents, and academic programs.',
      responsibilities: [
        'Requirements gathering and analysis: identified use cases to automate institutional information search',
        'RAG architecture design: built a full pipeline including PDF/Word document ingestion, intelligent chunking, vectorization (embeddings), and contextual retrieval',
        'Iterative development POC to MVP to Production: validated feasibility with LangChain + ChromaDB, built conversational Streamlit interface, deployed with performance optimization',
        'Testing and validation: qualitative evaluation of responses, relevance scoring (accuracy, relevance score), hallucination correction',
      ],
      results: [
        '70% reduction in information search time',
        'Response time under 2 seconds',
        'High user satisfaction',
      ],
      techStack: ['LangChain', 'ChromaDB', 'OpenAI API', 'Python', 'FAISS', 'Pandas', 'Streamlit', 'Git'],
    },
    {
      id: 'liveness-detection',
      role: 'ML Engineer -- Computer Vision',
      organization: 'Applied Research Project',
      type: 'Research',
      period: '2024',
      description: 'Built a facial liveness detection system for biometric security, preventing spoofing attacks through CNN-based real-time analysis.',
      responsibilities: [
        'Dataset construction: collection, cleaning, and annotation of image/video data for CNN model training',
        'ML model development: trained convolutional neural networks with PyTorch/TensorFlow, hyperparameter optimization',
        'Evaluation and testing: cross-validation, metrics analysis (accuracy, precision, recall), testing on real-world data',
        'Production deployment: REST API via Flask for integration into biometric security systems, Docker containerization',
      ],
      results: [
        'Over 95% accuracy',
        'Cross-validated on real-world data',
        'Deployed as production REST API',
      ],
      techStack: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Flask', 'Docker', 'Git'],
    },
    {
      id: 'hospital-saas',
      role: 'Full-Stack Developer',
      organization: 'Client Project in Production',
      type: 'Professional',
      period: '2023 -- 2024',
      description: 'Designed and developed a scalable SaaS platform for hospital traceability with authentication, role-based access control, and audit logging.',
      responsibilities: [
        'Requirements analysis: collaborated with stakeholders to define technical and functional specifications',
        'Full-stack architecture: designed and built a scalable solution with authentication, RBAC, and audit logging',
        'OCR/AI integration: automated medical data extraction via optical character recognition',
        'Testing and acceptance: unit tests, integration tests, user validation, bug fixing',
        'Documentation and training: wrote technical and user documentation, trained medical teams',
      ],
      results: [
        'Successfully deployed to production',
        'Full RBAC and audit system',
        'Medical teams trained and onboarded',
      ],
      techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Python', 'Docker', 'Git'],
    },
  ],
  fr: [
    {
      id: 'ibtikar',
      role: 'Developpeur Full-Stack',
      organization: 'Ibtikar Technologies',
      url: 'https://www.ibtikartech.com/en',
      type: 'Professionnel',
      period: '2023 -- 2024',
      description: 'Developpeur full-stack chez Ibtikar Technologies, conception et maintenance d\'applications web sur l\'ensemble du cycle de developpement pour une entreprise technologique de premier plan.',
      responsibilities: [
        'Developpement et maintenance d\'applications web full-stack avec des frameworks modernes',
        'Collaboration avec des equipes pluridisciplinaires pour livrer des fonctionnalites alignees sur les besoins metier',
        'Conception et implementation d\'APIs RESTful et d\'architectures de bases de donnees',
        'Participation aux revues de code, tests et workflows d\'integration continue',
      ],
      results: [
        '1 an de developpement a temps plein',
        'Applications en production livrees',
        'Experience cycle de developpement complet',
      ],
      techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Git', 'REST APIs'],
    },
    {
      id: 'kinross',
      role: 'Specialiste IT',
      organization: 'Kinross Gold Corporation',
      url: 'https://www.kinross.com/home/',
      type: 'Professionnel',
      period: '2023',
      description: 'Specialiste IT chez Kinross Gold, une grande entreprise internationale d\'exploitation miniere aurifere, assurant le support technique et la gestion de l\'infrastructure IT.',
      responsibilities: [
        'Gestion et maintenance de l\'infrastructure IT, des reseaux et systemes de l\'organisation',
        'Support technique et resolution de problemes materiels et logiciels',
        'Garantie de la disponibilite, securite et performance des systemes en environnement industriel',
        'Collaboration avec les equipes pour implementer et optimiser les solutions IT',
      ],
      results: [
        'Maintien d\'une haute disponibilite systeme',
        'Support infrastructure IT a grande echelle',
        'Experience en environnement industriel',
      ],
      techStack: ['Administration Reseau', 'Infrastructure IT', 'Administration Systeme', 'Depannage'],
    },
    {
      id: 'hospital-bagnols',
      role: 'Developpeur Full-Stack',
      organization: 'Hopital Bagnols-sur-Ceze',
      url: 'https://www.bagnolssurceze.fr/',
      type: 'Professionnel',
      period: '2025',
      description: 'Mission de developpement full-stack a l\'Hopital Bagnols-sur-Ceze, contribution aux solutions de sante numerique.',
      responsibilities: [
        'Developpement de solutions web pour les systemes internes de l\'hopital',
        'Travail avec les equipes medicales pour comprendre les besoins et les traduire en specifications techniques',
        'Implementation de fonctionnalites de gestion des donnees patients et workflows hospitaliers',
      ],
      results: [
        'Livre dans un delai d\'1 mois',
        'Experience secteur sante',
      ],
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Git'],
    },
    {
      id: 'rag-chatbot',
      role: 'Developpeur IA -- Chatbot RAG',
      organization: 'ESP Nouakchott',
      type: 'Projet institutionnel',
      period: '2024',
      description: 'Conception et deploiement d\'une pipeline RAG complete pour automatiser la recherche d\'informations institutionnelles (FAQ, documents administratifs, programmes).',
      responsibilities: [
        'Recueil et analyse des besoins : identification des cas d\'usage pour automatiser la recherche d\'informations institutionnelles',
        'Conception d\'architecture RAG : mise en place d\'une pipeline complete incluant ingestion de documents PDF/Word, chunking intelligent, vectorisation (embeddings), et retrieval contextuel',
        'Developpement POC vers MVP vers Production : validation de faisabilite avec LangChain + ChromaDB, interface conversationnelle Streamlit, deploiement avec optimisation des performances',
        'Tests et validation : evaluation qualitative des reponses, mesure de pertinence (accuracy, relevance score), correction des hallucinations',
      ],
      results: [
        'Reduction de 70% du temps de recherche',
        'Temps de reponse inferieur a 2 secondes',
        'Satisfaction utilisateur elevee',
      ],
      techStack: ['LangChain', 'ChromaDB', 'OpenAI API', 'Python', 'FAISS', 'Pandas', 'Streamlit', 'Git'],
    },
    {
      id: 'liveness-detection',
      role: 'Ingenieur ML -- Vision par Ordinateur',
      organization: 'Projet de recherche appliquee',
      type: 'Recherche',
      period: '2024',
      description: 'Developpement d\'un systeme de detection de vivacite faciale pour la securite biometrique, prevention des attaques par usurpation via analyse CNN en temps reel.',
      responsibilities: [
        'Constitution de datasets : collecte, nettoyage et annotation de donnees (images/videos) pour entrainement de modeles CNN',
        'Developpement de modeles ML : entrainement de reseaux de neurones convolutifs avec PyTorch/TensorFlow, optimisation des hyperparametres',
        'Evaluation et tests : validation croisee, analyse des metriques (accuracy, precision, recall), tests sur donnees reelles',
        'Deploiement en production : API REST Flask pour integration dans systemes de securite biometrique, conteneurisation Docker',
      ],
      results: [
        'Precision superieure a 95%',
        'Validation croisee sur donnees reelles',
        'Deploye en API REST de production',
      ],
      techStack: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Flask', 'Docker', 'Git'],
    },
    {
      id: 'hospital-saas',
      role: 'Developpeur Full-Stack',
      organization: 'Projet client en production',
      type: 'Professionnel',
      period: '2023 -- 2024',
      description: 'Conception et developpement d\'une plateforme SaaS scalable pour la tracabilite hospitaliere avec authentification, controle d\'acces base sur les roles et journalisation.',
      responsibilities: [
        'Analyse des besoins : collaboration avec les parties prenantes pour definir les specifications techniques et fonctionnelles',
        'Architecture full-stack : conception et developpement d\'une solution scalable avec authentification, RBAC et journalisation',
        'Integration OCR/IA : automatisation de l\'extraction de donnees medicales via reconnaissance optique de caracteres',
        'Tests et recette : tests unitaires, tests d\'integration, validation utilisateur, correction d\'anomalies',
        'Documentation et formation : redaction de documentation technique et utilisateur, formation des equipes medicales',
      ],
      results: [
        'Deploye en production avec succes',
        'Systeme RBAC et audit complet',
        'Equipes medicales formees et operationnelles',
      ],
      techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Python', 'Docker', 'Git'],
    },
  ],
};

export function getWork(lang: Lang): WorkExperience[] {
  return work[lang];
}
