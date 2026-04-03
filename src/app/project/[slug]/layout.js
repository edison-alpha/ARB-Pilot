import projectsData from '@/data/projects.json'
import { findProjectBySlug } from '@/utils/slug'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = findProjectBySlug(slug, projectsData.projects)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: project.title,
    description: project.mainContent?.[0]?.slice(0, 160) || `${project.title} — a feature of ArbiPilot.`,
    openGraph: {
      title: `${project.title} | ArbiPilot`,
      description: project.mainContent?.[0]?.slice(0, 160),
      type: "article",
      images: project.imageUrl ? [{ url: project.imageUrl }] : [],
    },
  }
}

export default function ProjectLayout({ children }) {
  return children
}
