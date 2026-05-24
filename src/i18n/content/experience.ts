import type { Lang } from '../ui';

export interface TimelineEntry {
  id: string;
  title: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  isActive: boolean;
}

const timeline: Record<Lang, TimelineEntry[]> = {
  en: [
    {
      id: 'imt',
      title: 'Data Science & AI',
      degree: 'Engineering Degree',
      institution: 'IMT Mines Ales',
      location: 'Ales, France',
      period: '2025 -- Present',
      description: 'Dual-degree engineering program specialized in AI systems, data engineering, and software with a strong DevOps/MLOps focus.',
      isActive: true,
    },
    {
      id: 'esp',
      title: 'CS, Networks & Telecom',
      degree: 'Engineering Degree',
      institution: 'Ecole Superieure Polytechnique (ESP)',
      location: 'Nouakchott, Mauritania',
      period: '2023 -- 2025',
      description: 'Core engineering curriculum across computer science, networks, telecommunications, and applied computing.',
      isActive: false,
    },
    {
      id: 'iscae',
      title: 'Computer Science, Networks & Telecom',
      degree: 'BSc',
      institution: 'ISCAE',
      location: 'Nouakchott, Mauritania',
      period: '2020 -- 2023',
      description: 'Foundation in computer science, algorithms, data structures, and software development.',
      isActive: false,
    },
  ],
  fr: [
    {
      id: 'imt',
      title: 'Data Science & IA',
      degree: 'Diplome d\'Ingenieur',
      institution: 'IMT Mines Ales',
      location: 'Ales, France',
      period: '2025 -- Present',
      description: 'Cursus ingenieur double-diplome specialise en systemes d\'IA, data engineering et logiciel avec un fort accent DevOps/MLOps.',
      isActive: true,
    },
    {
      id: 'esp',
      title: 'Informatique, Reseaux & Telecom',
      degree: 'Diplome d\'Ingenieur',
      institution: 'Ecole Superieure Polytechnique (ESP)',
      location: 'Nouakchott, Mauritanie',
      period: '2023 -- 2025',
      description: 'Cursus ingenieur couvrant informatique, reseaux, telecommunications et informatique appliquee.',
      isActive: false,
    },
    {
      id: 'iscae',
      title: 'Informatique, Reseaux & Telecom',
      degree: 'Licence',
      institution: 'ISCAE',
      location: 'Nouakchott, Mauritanie',
      period: '2020 -- 2023',
      description: 'Fondamentaux en informatique, algorithmique, structures de donnees et developpement logiciel.',
      isActive: false,
    },
  ],
};

export function getTimeline(lang: Lang): TimelineEntry[] {
  return timeline[lang];
}
