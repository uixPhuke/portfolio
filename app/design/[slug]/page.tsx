import { notFound } from "next/navigation"

import { designs } from "@/app/data/designs"

import DesignDetailsClient from "./DesignDetailsClient"

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {

  const { slug } = await params

  const design = designs.find(
    (item) => item.slug === slug
  )

  if (!design) {
    notFound()
  }

  return (
    <DesignDetailsClient design={design} />
  )
}