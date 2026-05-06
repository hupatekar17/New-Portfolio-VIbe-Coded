import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Projects — Harshavardhan Patekar',
}
 
interface Project {
  title: string
  description: string
  tags: string[]
  highlights: string[]
  status: string
  type: string
  link?: string
  linkLabel?: string
}
 
const projects: Project[] = [
  {
    title: 'Fraud Detection with Machine & Deep Learning',
    description:
      'Masters project — end-to-end fraud detection pipeline on the IEEE-CIS dataset (590K+ financial transactions) addressing severe class imbalance (3% fraud cases).',
    tags: ['Python', 'XGBoost', 'LightGBM', 'MLP', 'SMOTE', 'scikit-learn'],
    highlights: [
      'Applied advanced preprocessing — feature engineering, normalisation, categorical encoding, and SMOTE resampling to improve minority class learning stability',
      'Compared Logistic Regression, Random Forest, LightGBM, XGBoost, and MLP models, achieving up to 0.92 AUC-ROC with high fraud recall and minimised false negatives',
      'Conducted precision-recall trade-off analysis to optimise detection sensitivity for high-risk transactions in real-world financial scenarios',
      'Implemented reproducible experimentation workflows and performance benchmarking using cross-validation techniques',
    ],
    status: 'completed',
    type: 'ML / AI',
    link: 'https://colab.research.google.com/drive',
    linkLabel: 'View on Colab ↗',
  },
  {
    title: 'Coronary Artery & Chronic Kidney Disease Detection',
    description:
      'Bachelors final year project — supervised ML classification pipeline on a structured medical dataset of 40K patient records with 24 clinical attributes including blood pressure, serum creatinine, haemoglobin levels, and comorbidity indicators.',
    tags: ['Python', 'Random Forest', 'Streamlit', 'scikit-learn', 'Healthcare ML'],
    highlights: [
      'Implemented Random Forest Classifier (130 estimators, entropy criterion, max depth 11) with a 70/30 train-test split for robust evaluation',
      'Achieved 96–98% classification accuracy with balanced precision and recall across CKD-positive patients',
      'Validated using confusion matrix, F1-score, and classification reports',
      'Built an interactive Streamlit web interface for real-time disease risk prediction based on 24 dynamic health inputs',
    ],
    status: 'completed',
    type: 'ML / AI',
    link: 'https://github.com/hupatekar17/CADandCKD',
    linkLabel: 'View on GitHub ↗',
  },
  {
    title: 'Brainwave — Modern AI SaaS Landing Page',
    description:
      'Fully responsive landing page for an AI chatbot app built with React (Vite), Tailwind CSS, and custom SVG animations.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'SVG Animations', 'React Router'],
    highlights: [
      'Hero section with parallax effects, bento-grid services, pricing cards, and roadmap timeline',
      'Mobile-first navigation with hamburger menu and smooth Tailwind-driven interactions',
      'Reusable components — Header, Hero, Section wrappers — for scalable UI/UX patterns',
      'Single-page navigation via React Router with absolute positioning for layered design elements',
    ],
    status: 'live',
    type: 'Frontend',
    link: 'https://brainwave-harsh.netlify.app/',
    linkLabel: 'View Live ↗',
  },
  {
    title: 'Logistics API Platform',
    description:
      'Scalable RESTful API system powering logistics workflows for 5+ enterprise clients at Cloudhandz. Optimised MongoDB schemas reduced API latency by 40%.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    highlights: [
      'Reduced API response time from 480ms to 290ms (~40%) via indexing and schema optimisation',
      'Designed multi-tenant schema supporting 5+ enterprise clients',
      'Automated document validation pipelines, cutting manual processing by over 50%',
    ],
    status: 'production',
    type: 'Backend',
  },
  {
    title: 'Personal Portfolio + Blog',
    description:
      'This very site — a full-stack portfolio with a MongoDB-backed blog engine. Built with Next.js 14, TypeScript, and Tailwind CSS.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Full-Stack'],
    highlights: [
      'App Router with server and client components',
      'MongoDB blog with slug-based routing and markdown rendering',
      'Admin panel for writing and publishing posts',
    ],
    status: 'live',
    type: 'Full-Stack',
    link: '/',
    linkLabel: "View Site ↗",
  },
]
 
const statusColors: Record<string, string> = {
  completed: 'text-yellow-500 border-yellow-500/30 bg-yellow-500/5',
  production: 'text-accent border-accent/30 bg-accent/5',
  live: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
}
 
export default function ProjectsPage() {
  return (
    <div className="w-full px-8 lg:px-16 py-20">
      <div className="mb-12">
        <p className="font-mono text-accent text-sm mb-4">$ ls -la ./projects</p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight">
          Projects
        </h1>
        <p className="text-muted font-mono text-base mt-3">
          Things I&apos;ve shipped, built, and learned from.
        </p>
      </div>
 
      <div className="grid gap-5">
        {projects.map((p: Project, i: number) => (
          <article
            key={i}
            className="border border-border rounded-xl p-6 bg-surface hover:border-accent/40 transition-all group"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted border border-border rounded px-2 py-0.5">
                  {p.type}
                </span>
                <span className={`font-mono text-xs border rounded px-2 py-0.5 ${statusColors[p.status]}`}>
                  {p.status}
                </span>
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-accent hover:underline"
                >
                  {p.linkLabel || 'view →'}
                </a>
              )}
            </div>
 
            <h2 className="font-display font-bold text-2xl mb-2 group-hover:text-accent transition-colors">
              {p.title}
            </h2>
            <p className="text-base text-[#999] mb-4 leading-relaxed">{p.description}</p>
 
            <ul className="space-y-1 mb-5">
              {p.highlights.map((h, j) => (
                <li key={j} className="text-sm text-muted flex gap-2">
                  <span className="text-accent shrink-0">›</span>
                  {h}
                </li>
              ))}
            </ul>
 
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-xs text-muted border border-border rounded px-2 py-0.5 bg-bg">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}