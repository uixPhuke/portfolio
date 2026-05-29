import { notFound } from "next/navigation"

import { projects } from "@/app/data/projects"

import ProjectDetailsClient from "./ProjectDetailsClient"

export default async function Page({
    
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {

  const { slug } = await params

  const project = projects.find(
    (item) => item.slug === slug
  )

  if (!project) {
    notFound()
  }

  return (
    <ProjectDetailsClient
      project={project}
    />
  )
}