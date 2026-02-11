import type { Lang } from '../ui';

export interface TimelineEntry {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  isActive: boolean;
}

const timeline: Record<Lang, TimelineEntry[]> = {
  en: [
    {
      id: 'imt',
      title: 'Engineering Cycle -- AI & Software Engineering',
      institution: 'IMT Mines Ales',
      period: '2025 -- Present',
      description: 'Specialization in Artificial Intelligence and Software Engineering at one of France\'s leading engineering schools.',
      isActive: true,
    },
    {
      id: 'esp',
      title: 'Engineering Cycle -- Networks & Telecommunications',
      institution: 'Ecole Superieure Polytechnique (ESP) Nouakchott',
      period: '2023 -- 2025',
      description: 'Core engineering curriculum with focus on networks, telecommunications, and applied computing.',
      isActive: false,
    },
    {
      id: 'iscae',
      title: 'Bachelor\'s in Computer Science',
      institution: 'ISCAE -- Institut Superieur de Comptabilite et d\'Administration des Entreprises',
      period: '2020 -- 2023',
      description: 'Foundation in computer science, algorithms, data structures, and software development.',
      isActive: false,
    },
  ],
  fr: [
    {
      id: 'imt',
      title: 'Cycle Ingenieur -- Intelligence Artificielle & Ingenierie Logicielle',
      institution: 'IMT Mines Ales',
      period: '2025 -- Present',
      description: 'Specialisation en Intelligence Artificielle et Ingenierie Logicielle dans l\'une des ecoles d\'ingenieurs de reference en France.',
      isActive: true,
    },
    {
      id: 'esp',
      title: 'Cycle Ingenieur -- Reseaux & Telecommunications',
      institution: 'Ecole Superieure Polytechnique (ESP) Nouakchott',
      period: '2023 -- 2025',
      description: 'Cursus ingenieur avec specialisation en reseaux, telecommunications et informatique appliquee.',
      isActive: false,
    },
    {
      id: 'iscae',
      title: 'Licence en Informatique',
      institution: 'ISCAE -- Institut Superieur de Comptabilite et d\'Administration des Entreprises',
      period: '2020 -- 2023',
      description: 'Fondamentaux en informatique, algorithmique, structures de donnees et developpement logiciel.',
      isActive: false,
    },
  ],
};

export function getTimeline(lang: Lang): TimelineEntry[] {
  return timeline[lang];
}
