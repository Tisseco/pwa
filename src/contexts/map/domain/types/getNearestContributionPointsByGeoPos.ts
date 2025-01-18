import { contributionPoint } from "@/contexts/map/domain/aggregates/contributionPoint"

export type GetNearestContributionPointsByGeoPosPayload = Readonly<{
  lat: number
  lng: number
}>

export type GetNearestContributionPointsByGeoPosSuccess = contributionPoint[]
