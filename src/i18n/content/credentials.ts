import type { Lang } from '../ui';

export interface Certification {
  issuer: string;
  title: string;
  year: string;
  kind: 'tech' | 'language';
}

export interface LeadershipRole {
  role: string;
  organization: string;
  note: string;
}

const certifications: Record<Lang, Certification[]> = {
  en: [
    { issuer: 'NVIDIA', title: 'Fundamentals of Deep Learning', year: '2025', kind: 'tech' },
    { issuer: 'NVIDIA', title: 'LLM Evaluation & Customization', year: '2025', kind: 'tech' },
    { issuer: 'TOEIC', title: 'Score 900 -- English (B2)', year: '2025', kind: 'language' },
    { issuer: 'DALF', title: 'C1 -- French', year: '2024', kind: 'language' },
  ],
  fr: [
    { issuer: 'NVIDIA', title: 'Fundamentals of Deep Learning', year: '2025', kind: 'tech' },
    { issuer: 'NVIDIA', title: 'LLM Evaluation & Customization', year: '2025', kind: 'tech' },
    { issuer: 'TOEIC', title: 'Score 900 -- Anglais (B2)', year: '2025', kind: 'language' },
    { issuer: 'DALF', title: 'C1 -- Francais', year: '2024', kind: 'language' },
  ],
};

const leadership: Record<Lang, LeadershipRole[]> = {
  en: [
    { role: 'Founder', organization: 'EliteTech RIM', note: 'SaaS transport startup (React + Python)' },
    { role: 'Product Architect', organization: 'AlloCapp', note: 'Flutter app, 1,000+ users' },
    { role: 'Lead', organization: 'ESP Data Club', note: 'React redesign + community forum' },
  ],
  fr: [
    { role: 'Fondateur', organization: 'EliteTech RIM', note: 'Startup SaaS de transport (React + Python)' },
    { role: 'Architecte Produit', organization: 'AlloCapp', note: 'App Flutter, plus de 1 000 utilisateurs' },
    { role: 'Responsable', organization: 'ESP Data Club', note: 'Refonte React + forum communautaire' },
  ],
};

export function getCertifications(lang: Lang): Certification[] {
  return certifications[lang];
}

export function getLeadership(lang: Lang): LeadershipRole[] {
  return leadership[lang];
}
