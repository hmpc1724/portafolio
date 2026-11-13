export type ProjectCategory =
  | 'all'
  | 'ecommerce'
  | 'saas'
  | 'crud'
  | 'servicio'
  | 'portafolio'
  | 'saas-ia'
  | 'gastronomia'
  | 'salud'
  | 'turismo'
  | 'construccion'
  | 'servicios'
  | 'sustentabilidad'
  | 'media';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  nicheLabel?: string;
  suggestedPackage?: string;
  packagePrice?: string;
  description: string;
  longDescription: string;
  image: string;
  stack: string[];
  features: string[];
  demoUrl: string;
  githubUrl?: string;
  clientGoal?: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  accentColor: string; // Hex or gradient accent for individual liquid glow
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  instructors: string;
  date: string;
  duration: string;
  category: 'frontend' | 'ai' | 'security' | 'web';
  categoryLabel: string;
  image: string;
  pdfUrl: string;
  verificationUrl?: string;
  credentialId?: string;
  description: string;
  badgeColor: string;
  topics: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  date?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}

