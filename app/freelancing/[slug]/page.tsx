import { notFound } from "next/navigation"

import { freelancingServices } from "@/app/data/freelancing"

import FreelancingDetailsClient from "./FreelancingDetailsClient"

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {

  const { slug } = await params

  const service = freelancingServices.find(
    (item) => item.slug === slug
  )

  if (!service) {
    notFound()
  }

  return (
    <FreelancingDetailsClient
      service={service}
    />
  )
}